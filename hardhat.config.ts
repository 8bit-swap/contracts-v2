require('dotenv').config()
import { HardhatUserConfig } from 'hardhat/config'
import '@typechain/hardhat'
import '@nomicfoundation/hardhat-viem'
import '@nomicfoundation/hardhat-verify';
import 'hardhat-gas-reporter'
import 'hardhat-deploy'
import '@nomicfoundation/hardhat-chai-matchers'
import './tasks'


const deployerAddress =
  process.env.DEPLOYER_ADDRESS || '0x0000000000000000000000000000000000000000'
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ||
  '0000000000000000000000000000000000000000000000000000000000000000'

  const config: HardhatUserConfig = {
    networks: {
      june: {
        url: process.env.JUNE_RPC,
        chainId: 45003,
        gasPrice: 48000000000,
        accounts: [deployerPrivateKey],
        verify: {
          etherscan: {
            apiUrl: 'https://juneoscan.io/api/verification/2',
            apiKey: process.env.JUNE_APIKEY,
          },
        },
      },
      june_socotra: {
        url: process.env.JUNE_SOCOTRA_RPC,
        chainId: 101003,
        gasPrice: 144000000000,
        accounts: [deployerPrivateKey],
        verify: {
          etherscan: {
            apiUrl: 'https://socotra.juneoscan.io/api/verification/2',
            apiKey: process.env.JUNE_SOCOTRA_APIKEY,
          },
        },
      },
    },
    sourcify: {
      enabled: false
    },
    etherscan: {
      apiKey: {
        june_socotra: 'test',
        june: 'test'
      },
      customChains: [
        {
          network: 'june_socotra',
          chainId: 101003,
          urls: {
            apiURL: 'https://socotra.juneoscan.io/api/verification/2',
            browserURL: 'https://socotra.juneoscan.io/',
          },
        },
        {
          network: 'june',
          chainId: 45003,
          urls: {
            apiURL: 'https://juneoscan.io/api/verification/2',
            browserURL: 'https://juneoscan.io/',
          },
        },
      ],
    },
    namedAccounts: {
      deployer: {
        june: deployerAddress,
        june_socotra: deployerAddress,
      },
      feeToSetter: {
        june: "0x7FfB0f12692c5aE14DaC99725F4f49AEAC93EA83", // then 0x708E2A51Cc42A332CdB1FD36e9D2f1a3C5807080
        june_socotra: "0x7FfB0f12692c5aE14DaC99725F4f49AEAC93EA83"
      },
      WETH: {
        june: "0x466e8b1156e49d29b70447a9af68038cf5562bdd",
        june_socotra: "0xc984ae20d0fed3b974959bcbd1721167214cded9"
      },
    },
    solidity: {
      compilers: [
        {
          version: '0.6.12',
          settings: {
            optimizer: {
              enabled: true,
              runs: 999999,
            },
          },
        },
      ],
    },
  }


export default config