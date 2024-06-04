require('dotenv').config()
import { task, types } from 'hardhat/config'
import { UniswapV2Factory } from '../typechain-types';

task('set-fee-to', 'Set the address that will receive 0.05% of volume')
.addParam('feeTo', 'Receiver address', undefined, types.string)

  .setAction(
    async (
      { feeTo },
      { ethers, network, deployments, getNamedAccounts }
    ) => {
      const {deployer} = await getNamedAccounts()
      const factoryName = "UniswapV2Factory";
      const factoryAddress = (await deployments.get(factoryName)).address
      const factoryContract = (await ethers.getContractAt(
        factoryName,
        factoryAddress 
      )) as UniswapV2Factory
     await factoryContract.setFeeTo(feeTo).then(
        (tx:any) => {
          tx.wait();
          console.log('FeeTo set', 'Proof :',tx.hash,'✅');
        }
      )
    }
  )