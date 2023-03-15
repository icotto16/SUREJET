pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract L1JetCharter is ERC721 {
    constructor() ERC721("L1 Jet Charter", "L1JCT") {}
}
