require('dotenv').config()
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async ({
  viem,
  getNamedAccounts, // Data from hardhat.config
  deployments, // Previous deployments and deploy function
  network, // --network arg
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments
  const { deployer, WETH } = await getNamedAccounts()
  const factoryName = "UniswapV2Factory"
  const factoryAddress = (await deployments.get(factoryName)).address


  const UniswapV2Router02_deployment = await deploy(
    'UniswapV2Router02',
    {
      from: deployer,
      args: [
        factoryAddress,
        WETH
      ],
    }
  )
  console.log(
    `Deployed UniswapV2Router02 - ${UniswapV2Router02_deployment.address} - ${network.name}`
  )
}
func.tags = ['UniswapV2Router02']
func.dependencies = ['UniswapV2Factory']
export default func
