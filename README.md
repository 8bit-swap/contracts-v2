# Solidity 8-Bit Swap

SushiSwap V2 core and periphery contracts fork.
SushiSwap migrator related lines have been deleted
## Deployment steps

### 0. Check .env & harhat.config.ts 
=> It's important to check all variables are set correctly

### 1. Deploy the factory

`npx hardhat deploy --network june_socotra --tags UniswapV2Factory`

### 2. Deploy the router

`npx hardhat deploy --network june_socotra --tags UniswapV2Router02`


### 3. Verifiy contracts
It is possible to verify all contracts deployed on the same network at once. If a contract is already checked, it will simply ignore it.

`npx hardhat --network june_socotra etherscan-verify`

## Tasks

- **Set feeTo**
  ```shell
  npx hardhat set-fee-to --network [network] --feeto [address]
  ```
- **Set feeToSetter**
  ```shell
  npx hardhat set-fee-to-setter --network [network] --feetosetter [address]
  ```
- **Skim**
  ```shell
  npx hardhat skim --network [network] --pair [address] -to [address]
  ```
- **Synchronize**
  ```shell
  npx hardhat sync --network [network] --pair [address]
  ```

## Commands

```shell
npx hardhat compile # Compile all smart contracts
npx hardhat test ./test/[file.ts] # Run tests
npx hardhat deploy --network [network] --tags [tag] # Deploy a smart contract
npx hardhat --network [network] etherscan-verify # Verify deployed smart contracts of a network
```

## Deployments
### June

### June Socotra
- **UniswapV2Factory** : 0xd34CD59398755B41339f0003f876629b73010841
- **UniswapV2Router02** : 0x843482D2d022E0e7310114b9FB41365981c76D4B


## Faucets
- **june_socotra** : TODO

