pragma solidity ^0.8.0;

import "./WireTransferTokenL2.sol";
import "./JetCharterL2.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract L2Gateway is Ownable {
    WireTransferTokenL2 public l2WireTransferToken;
    JetCharterL2 public l2JetCharter;
    address public l1Gateway;

    event DepositFinalized(address indexed sender, uint256 amount);
    event WithdrawalInitiated(address indexed sender, uint256 amount);

    constructor(address _l2WireTransferToken, address _l2JetCharter, address _l1Gateway) {

   Ownable() {
    l2WireTransferToken = WireTransferTokenL2(_l2WireTransferToken);
    l2JetCharter = JetCharterL2(_l2JetCharter);
    l1Gateway = _l1Gateway;
  }

function deposit(address _to, uint256 _amount) external onlyOwner {
    l2WireTransferToken.mint(_to, _amount);
    emit DepositFinalized(_to, _amount);
  }

function initiateWithdrawal(uint256 _amount) external {
    require(l2WireTransferToken.balanceOf(msg.sender) >= _amount, "Insufficient balance");
    l2WireTransferToken.burn(msg.sender, _amount);
    emit WithdrawalInitiated(msg.sender, _amount);
  }

function updateL1Gateway(address _newL1Gateway) external onlyOwner {
    l1Gateway = _newL1Gateway;
  }

function updateL2WireTransferToken(address _newL2WireTransferToken) external onlyOwner {
    l2WireTransferToken = WireTransferTokenL2(_newL2WireTransferToken);
  }

function updateL2JetCharter(address _newL2JetCharter) external onlyOwner {
    l2JetCharter = JetCharterL2(_newL2JetCharter);
  }

}
