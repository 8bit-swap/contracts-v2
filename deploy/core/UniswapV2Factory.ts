require('dotenv').config()
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async ({
  getNamedAccounts, // Data from hardhat.config
  deployments, // Previous deployments and deploy function
  network, // --network arg
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments
  const { deployer, feeToSetter } = await getNamedAccounts()

  const UniswapV2Factory_deployment = await deploy(
    'UniswapV2Factory',
    {
      from: deployer,
      args: [
        feeToSetter
      ],
    }
  )
  console.log(
    `Deployed UniswapV2Factory - ${UniswapV2Factory_deployment.address} - ${network.name}`
  )
}
func.tags = ['UniswapV2Factory']
export default func
