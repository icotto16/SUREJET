pragma solidity ^0.8.19;

interface IL2Gateway {
    event DepositFinalized(address indexed sender, uint256 amount);
    event WithdrawalInitiated(address indexed sender, uint256 amount);

    function deposit(address _to, uint256 _amount) external;
    function initiateWithdrawal(uint256 _amount) external;
    function updateL1Gateway(address _newL1Gateway) external;
    function updateL2WireTransferToken(address _newL2WireTransferToken) external;
    function updateL2JetCharter(address _newL2JetCharter) external;
}
