// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SavingsGroup {
    address public owner;
    uint256 public contributionAmount;
    uint256 public contributionDuration; 
    uint256 public lastPayoutTime;
    uint256 public totalContributions; 

    struct Member {
        address memberAddress;
        uint256 totalContributions;
    }

    Member[] public members;

    constructor(uint256 _contributionAmount, uint256 _contributionDuration) {
        owner = msg.sender;
        contributionAmount = _contributionAmount;
        contributionDuration = _contributionDuration;
        lastPayoutTime = block.timestamp;
    }

    function joinGroup() external {
        require(msg.sender != owner, "Owner cannot join the group");
        members.push(Member(msg.sender, 0));
    }

    function contribute() external payable {
        for (uint256 i = 0; i < members.length; i++) {
            if (members[i].memberAddress == msg.sender) {
                members[i].totalContributions += msg.value;
                totalContributions += msg.value; 
                return;
            }
        }
        revert("You are not a member of this group");
    }

    function getTotalContributions() external view returns (uint256) {
        return totalContributions;
    }

    function distributePayout() external {
        require(msg.sender == owner, "Only the owner can initiate the payout");
        require(block.timestamp - lastPayoutTime >= contributionDuration, "Payout is not yet due");

        uint256 targetContributions = (members.length * contributionAmount * 30); // Assuming a 30-day month
        address payoutRecipient = address(0);

        for (uint256 i = 0; i < members.length; i++) {
            if (members[i].totalContributions >= (targetContributions * 9) / 10) {
                payoutRecipient = members[i].memberAddress;
                break;
            }
        }

        require(payoutRecipient != address(0), "No eligible recipient found");

        payable(payoutRecipient).transfer(address(this).balance);
        lastPayoutTime = block.timestamp;
    }
}