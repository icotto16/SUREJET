pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract L1WireTransferToken is ERC20 {
    constructor() ERC20("L1 Wire Transfer Token", "L1WTT") {}
}
