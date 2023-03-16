pragma solidity ^0.8.0;

interface IWireTransferTokenL2 {
    event Deposit(address indexed sender, uint256 amount);
    event WithdrawalInitiated(address indexed sender, uint256 amount);

    function mint(address to, uint256 amount) external;
    function initiateWithdrawal(uint256 amount) external;
}
