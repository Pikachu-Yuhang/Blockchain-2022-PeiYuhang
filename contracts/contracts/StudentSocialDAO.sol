pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";
import "./MyERC.sol";

contract StudentSocialDAO {
    uint32 constant public INITIAL_POINTS = 100;
    uint32 constant public PROPOSAL_COST = 10;
    uint32 constant public VOTE_COST = 2;
    uint32 constant public PROPOSAL_REWARD = 25;
    enum State {abort, pending, pass}
    uint32 public totalProposals = 0;

    MyERC20 public studentERC20;
    MyERC721 public studentERC721;

    constructor() {
        studentERC20 = new MyERC20("SS-Token", "SS-Token-Symbol");
        studentERC721 = new MyERC721("SS-Souviner", "SS-Souviner-Symbol");
    }

    struct Proposal {
        uint32  index;     // index of this proposal
        address proposer;  // who make this proposal
        string  name;      // proposer name
        string  title;     // proposal name
        uint256 startTime; // proposal start time
        uint256 duration;  // proposal duration
        string  content;
        uint32  support;
        uint32  oppose;
        State   state;
    }

    mapping(uint32 => Proposal) public proposals; // A map from proposal index to proposal
    mapping(address => uint32) public userProposals;
    mapping(address => uint32) public userPass;

    event ProposalInitiated(uint32 proposalIndex);
    event ProposalSupported(uint32 proposalIndex, uint32 amount);
    event ProposalOpposed(uint32 proposalIndex, uint32 amount);

    function initiateProposal(string memory _name, string memory _title, uint256 _duration, string memory _content) public payable {
        // Transfer points
        studentERC20.transferFrom(msg.sender, address(this), PROPOSAL_COST);
        // Create a new proposal
        Proposal memory newProposal = Proposal(totalProposals, msg.sender, _name, _title, block.timestamp, _duration, _content, 0, 0, State.pending);
        proposals[totalProposals] = newProposal;
        userProposals[msg.sender] += 1;
        // Emit an event
        emit ProposalInitiated(totalProposals++);
    }

    function supportProposal(uint32 index, uint32 amount) public payable {
        // Transfer points
        studentERC20.transferFrom(msg.sender, address(this), amount * VOTE_COST);
        // Increment proposal.support
        proposals[index].support += amount;
        // Emit an event
        emit ProposalSupported(index, amount);
    }

    function opposeProposal(uint32 index, uint32 amount) public payable {
        // Transfer points
        studentERC20.transferFrom(msg.sender, address(this), amount * VOTE_COST);
        // Increment proposal.oppose
        proposals[index].oppose += amount;
        // Emit an event
        emit ProposalOpposed(index, amount);
    }

    function passProposal(uint32 index) public {
        proposals[index].state = State.pass;
        userPass[msg.sender] += 1;
        studentERC20.transfer(msg.sender, PROPOSAL_REWARD);
    }

    function abortProposal(uint32 index) public {
        proposals[index].state = State.abort;
    }

    function getProposalName(uint32 _index) public view returns (string memory) {
        return proposals[_index].name;
    }

    function getProposalTitle(uint32 _index) public view returns (string memory) {
        return proposals[_index].title;
    }

    function getProposalStartTime(uint32 _index) public view returns (uint256) {
        return proposals[_index].startTime;
    }

    function getProposalDuration(uint32 _index) public view returns (uint256) {
        return proposals[_index].duration;
    }

    function getProposalEndTime(uint32 _index) public view returns (uint256) {
        return (proposals[_index].startTime + proposals[_index].duration);
    }

    function getProposalContent(uint32 _index) public view returns (string memory) {
        return proposals[_index].content;
    }

    function getProposalSupport(uint32 _index) public view returns (uint32) {
        return proposals[_index].support;
    }

    function getProposalOppose(uint32 _index) public view returns (uint32) {
        return proposals[_index].oppose;
    }

    function getProposalState(uint32 _index) public view returns (State) {
        return proposals[_index].state;
    }

    function getUserProposals(address addr) public view returns (uint32) {
        return userProposals[addr];
    }

    function getUserPass(address addr) public view returns (uint32) {
        return userPass[addr];
    }

    function getNow() public view returns (uint256) {
        return block.timestamp;
    }

    function isProposalOverdue(uint32 _index) public view returns (bool) {
        return (proposals[_index].startTime + proposals[_index].duration <= block.timestamp);
    }

    function isSupportGreaterOpposse(uint32 _index) public view returns (bool) {
        return (proposals[_index].support > proposals[_index].oppose);
    }
}