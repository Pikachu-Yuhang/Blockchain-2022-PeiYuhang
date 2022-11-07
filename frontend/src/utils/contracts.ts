import Addresses from './contract-addresses.json'
import StudentSocialDAO from './abis/StudentSocialDAO.json'
import MyERC20 from './abis/MyERC20.json'
import MyERC721 from './abis/MyERC721.json'

const Web3 = require('web3');

// @ts-ignore
// 创建web3实例
// 可以阅读获取更多信息https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3
let web3 = new Web3(window.web3.currentProvider)

// 修改地址为部署的合约地址
const StudentSocialAddress = Addresses.StudentSocialDAO
const StudentSocialABI = StudentSocialDAO.abi
const MyERC20Address = Addresses.MyERC20
const MyERC20ABI = MyERC20.abi
const MyERC721Address = Addresses.MyERC721
const MyERC721ABI = MyERC721.abi

// 获取合约实例
const StudentSocialContract = new web3.eth.Contract(StudentSocialABI, StudentSocialAddress);
const MyERC20Contract = new web3.eth.Contract(MyERC20ABI, MyERC20Address);
const MyERC721Contract = new web3.eth.Contract(MyERC721ABI, MyERC721Address);

// 导出web3实例和其它部署的合约
export {web3, StudentSocialContract, MyERC20Contract, MyERC721Contract}