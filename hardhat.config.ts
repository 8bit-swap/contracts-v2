require('dotenv').config()
import { HardhatUserConfig } from 'hardhat/config'
import '@typechain/hardhat'
import '@nomicfoundation/hardhat-viem'
import 'hardhat-gas-reporter'
import 'hardhat-deploy'
import '@nomicfoundation/hardhat-chai-matchers'
import './tasks'


const deployerAddress =
  process.env.DEPLOYER_ADDRESS || '0x0000000000000000000000000000000000000000'
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ||
  '0000000000000000000000000000000000000000000000000000000000000000'
const feeToAddress = process.env.FEE_TO_ADDRESS ||
'0000000000000000000000000000000000000000000000000000000000000000'

  const config: HardhatUserConfig = {
    networks: {
      june: {
        url: process.env.JUNE_RPC,
        chainId: 0, // TODO
        gasPrice: 0, // TODO
        accounts: [deployerPrivateKey],
        verify: {
          etherscan: {
            apiKey: process.env.JUNE_APIKEY,
          },
        },
      },
      june_socotra: {
        url: process.env.JUNE_SOCOTRA_RPC,
        chainId: 101003,
        gasPrice: 48000000000,
        accounts: [deployerPrivateKey],
        verify: {
          etherscan: {
            apiKey: process.env.JUNE_SOCOTRA_APIKEY,
          },
        },
      },
    },
    namedAccounts: {
      deployer: {
        june: deployerAddress,
        june_socotra: deployerAddress,
      },
      feeToSetter: {
        june: "TODO",
        june_socotra: feeToAddress
      },
      WETH: {
        june: "TODO",
        june_socotra: "0xc984ae20d0fed3b974959bcbd1721167214cded9"
      }
    },
    solidity: {
      compilers: [
        {
          version: '0.6.12',
          settings: {
            optimizer: {
              enabled: true,
              runs: 200,
            },
            //viaIR: true
          },
        },
      ],
    },
  }


export default config