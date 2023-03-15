pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WireTransferTokenL2 is ERC20 {
    address public l2Gateway;

    event Deposit(address indexed sender, uint256 amount);
    event WithdrawalInitiated(address indexed sender, uint256 amount);

    modifier onlyL2Gateway {
        require(msg.sender == l2Gateway, "Only the L2 Gateway can call this function");
        _;
    }

    constructor(address _l2Gateway) ERC20("WireTransferTokenL2", "WTT") {
        l2Gateway = _l2Gateway;
    }

    function mint(address to, uint256 amount) external onlyL2Gateway {
        _mint(to, amount);
        emit Deposit(to, amount);
    }

    function initiateWithdrawal(uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        _burn(msg.sender, amount);
        emit WithdrawalInitiated(msg.sender, amount);
    }
}
