require('dotenv').config()
import { task, types } from 'hardhat/config'
import { UniswapV2Factory } from '../typechain-types';

task('set-fee-to-setter', 'Set the address authorize to update the feeTo param')
.addParam('feeToSetter', 'Address authorize to update the feeTo param', undefined, types.string)

  .setAction(
    async (
      { feeToSetter },
      { ethers, deployments }
    ) => {
      const factoryName = "UniswapV2Factory";
      const factoryAddress = (await deployments.get(factoryName)).address
      const factoryContract = (await ethers.getContractAt(
        factoryName,
        factoryAddress 
      )) as UniswapV2Factory
    await factoryContract.setFeeToSetter(feeToSetter).then(
        (tx:any) => {
          tx.wait();
          console.log('FeeToSetter set', 'Proof :',tx.hash,'✅');
        }
      )
    }
  )