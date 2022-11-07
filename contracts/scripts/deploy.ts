import { ethers } from "hardhat";

async function main() {
  const StudentSocialDAO = await ethers.getContractFactory("StudentSocialDAO");
  const studentSocialDAO = await StudentSocialDAO.deploy();
  await studentSocialDAO.deployed();
  console.log(`StudentSocialDAO deployed to ${studentSocialDAO.address}`);

  const erc20 = await studentSocialDAO.studentERC20();
  console.log(`ERC20 contract has been deployed successfully in ${erc20}`);

  const erc721 = await studentSocialDAO.studentERC721();
  console.log(`ERC721 contract has been deployed successfully in ${erc721}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
