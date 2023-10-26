const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");

describe("SavingsGroup contract", function () {
  let SavingsGroup;
  let savingsGroup;
  let owner;
  let member1;
  let member2;
  let nonMember;

  const contributionAmount = 5; 
  const contributionDuration = 2592000; // 30 days in seconds

  beforeEach(async function () {
    [owner, member1, member2, nonMember] = await ethers.getSigners();

    // Deploy the SavingsGroup contract
    SavingsGroup = await ethers.getContractFactory("SavingsGroup");
    savingsGroup = await SavingsGroup.deploy(contributionAmount, contributionDuration);
    await savingsGroup.deployed();
  });

  it("Should allow members to join the group", async function () {
    await savingsGroup.connect(member1).joinGroup();
    await savingsGroup.connect(member2).joinGroup();

    expect(await savingsGroup.members(1)).to.equal(member1.address);
    expect(await savingsGroup.members(2)).to.equal(member2.address);
  });

  it("Should not allow the owner to join the group", async function () {
    await expect(savingsGroup.connect(owner).joinGroup()).to.be.revertedWith("Owner cannot join the group");
  });

  it("Should not allow non-members to contribute", async function () {
    await expect(savingsGroup.connect(nonMember).contribute({ value: contributionAmount })).to.be.revertedWith("You are not a member of this group");
  });

  it("Should allow members to contribute", async function () {
    await savingsGroup.connect(member1).joinGroup();
    await savingsGroup.connect(member2).joinGroup();

    await savingsGroup.connect(member1).contribute({ value: contributionAmount });
    await savingsGroup.connect(member2).contribute({ value: contributionAmount });

    const totalContributions = await savingsGroup.getTotalContributions();
    expect(totalContributions).to.equal(contributionAmount * 2);
  });

  it("Should allow the owner to initiate a payout", async function () {
    await savingsGroup.connect(member1).joinGroup();
    await savingsGroup.connect(member2).joinGroup();

    await savingsGroup.connect(member1).contribute({ value: contributionAmount });
    await savingsGroup.connect(member2).contribute({ value: contributionAmount });

    await savingsGroup.connect(owner).distributePayout();

  });

  it("Should not allow non-owner to initiate a payout", async function () {
    await expect(savingsGroup.connect(member1).distributePayout()).to.be.revertedWith("Only the owner can initiate the payout");
  });

  it("Should not allow early payouts", async function () {
    await savingsGroup.connect(member1).joinGroup();
    await savingsGroup.connect(member2).joinGroup();

    await savingsGroup.connect(member1).contribute({ value: contributionAmount });
    await savingsGroup.connect(member2).contribute({ value: contributionAmount });

    await expect(savingsGroup.connect(owner).distributePayout()).to.be.revertedWith("Payout is not yet due");
  });

  it("Should select an eligible member for payout", async function () {
    await savingsGroup.connect(member1).joinGroup();
    await savingsGroup.connect(member2).joinGroup();

    await savingsGroup.connect(member1).contribute({ value: contributionAmount * 20 });
    await savingsGroup.connect(member2).contribute({ value: contributionAmount * 18 });

    await savingsGroup.connect(owner).distributePayout();
    const recipient = await savingsGroup.members(1);

    expect(await member1.getBalance()).to.equal(contributionAmount * 20);
    expect(await member2.getBalance()).to.equal(contributionAmount * 18);
    expect(await recipient.getBalance()).to.equal(contributionAmount * 38);
  });
});
