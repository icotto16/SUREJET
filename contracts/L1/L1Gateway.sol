pragma solidity ^0.8.0;

import "./L1WireTransferToken.sol";
import "./L1JetCharter.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract L1Gateway is Ownable {
    L1WireTransferToken public l1WireTransferToken;
    L1JetCharter public l1JetCharter;
    address public l2Gateway;

    event DepositInitiated(address indexed sender, uint256 amount);
    event WithdrawalFinalized(address indexed sender, uint256 amount);

    constructor(address _l1WireTransferToken, address _l1JetCharter, address _l2Gateway) {
        l1WireTransferToken = L1WireTransferToken(_l1WireTransferToken);
        l1JetCharter = L1JetCharter(_l1JetCharter);
        l2Gateway = _l2Gateway;
    }

    function depositTokens(address user, uint256 amount) external {
        l1WireTransferToken.transferFrom(user, address(this), amount);
        emit DepositInitiated(user, amount);
    }

    function finalizeWithdrawal(address user, uint256 amount) external onlyOwner {
        l1WireTransferToken.transfer(user, amount);
        emit WithdrawalFinalized(user, amount);
    }
}
