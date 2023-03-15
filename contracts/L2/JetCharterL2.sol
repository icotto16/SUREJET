pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract JetCharterL2 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct CharterData {
        uint256 price;
        uint256 departureTime;
        string departureLocation;
        string arrivalLocation;
    }

    mapping(uint256 => CharterData) public charterData;

    constructor() ERC721("JetCharterL2", "JCT") {}

    function createCharter(
        uint256 price,
        uint256 departureTime,
        string memory departureLocation,
        string memory arrivalLocation
    ) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);
        charterData[newTokenId] = CharterData(price, departureTime, departureLocation, arrivalLocation);

        return newTokenId;
    }
}
