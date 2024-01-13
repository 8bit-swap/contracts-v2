require('dotenv').config()
import { task, types } from 'hardhat/config'
import { UniswapV2Factory } from '../typechain-types';

task('set-fee-to-setter', 'Set the address authorize to update the feeTo param')
.addParam('feetosetter', 'Address authorize to update the feeTo param', undefined, types.string)

  .setAction(
    async (
      { feetosetter },
      { ethers, network, deployments, getNamedAccounts }
    ) => {
      const factoryName = "UniswapV2Factory";
      const factoryAddress = (await deployments.get(factoryName)).address
      const factoryContract = (await ethers.getContractAt(
        factoryName,
        factoryAddress 
    )) as UniswapV2Factory
    await factoryContract.setFeeToSetter(feetosetter).then(
        (tx:any) => {
          tx.wait();
          console.log('FeeToSetter set', 'Proof :',tx.hash,'✅');
        }
      )
    }
  )