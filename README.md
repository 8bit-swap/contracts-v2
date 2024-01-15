# Solidity 8Bit-Swap

Uniswap V2 core and periphery contracts fork.
Contracts have been adapted for use with Solidity version 0.6.12
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
- **UniswapV2Factory** : 0x0D5eCAacDfD2BA156d2a70e31A3A9586fF6868c9
- **UniswapV2Router02** : 0x41645CE5D1bC1e6997A1e6f4d8A580102C162062


## Faucets
- **june_socotra** : TODO

