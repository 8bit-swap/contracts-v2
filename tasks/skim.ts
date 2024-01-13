require('dotenv').config()
import { task, types } from 'hardhat/config'
import {UniswapV2Pair } from '../typechain-types';

task('skim', 'Force balances to match reserves')
.addParam('pair', 'Address of the pair', undefined, types.string)
.addParam('to', 'Receiver address', undefined, types.string)


  .setAction(
    async (
      { pair, to },
      { ethers, network, deployments, getNamedAccounts }
    ) => {
      const factoryContract = (await ethers.getContractAt(
        "UniswapV2Pair",
        pair
    )) as UniswapV2Pair
    await factoryContract.skim(to).then(
        (tx:any) => {
          tx.wait();
          console.log('Skimmed', 'Proof :',tx.hash,'✅');
        }
      )
    }
  )