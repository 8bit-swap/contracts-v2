require('dotenv').config()
import { task, types } from 'hardhat/config'
import {UniswapV2Pair } from '../typechain-types';

task('sync', 'Force reserves to match balances')
.addParam('pair', 'Address of the pair', undefined, types.string)


  .setAction(
    async (
      { pair, to },
      { ethers, network, deployments, getNamedAccounts }
    ) => {
      const factoryContract = (await ethers.getContractAt(
        "UniswapV2Pair",
        pair
    )) as UniswapV2Pair
    await factoryContract.sync().then(
        (tx:any) => {
          tx.wait();
          console.log('Synchronized', 'Proof :',tx.hash,'✅');
        }
      )
    }
  )