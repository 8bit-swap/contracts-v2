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


### 3. Verify contracts
You can verify one contract using this command (it does not currently work)
`npx hardhat verify --network <network> <contract_address_deployed> "<constructor_parameter>"`

## Tasks

- **Set feeTo**
  ```shell
  npx hardhat set-fee-to --network [network] --fee-to [address]
  ```
- **Set feeToSetter**
  ```shell
  npx hardhat set-fee-to-setter --network [network] --fee-to-setter [address]
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
npx hardhat verify --network [network] [contract_address_deployed] "[constructor_parameter]" # Verify a contract
```

## Deployments
### June
- **UniswapV2Factory** : 0xD1E879Df1B58c02fc39c76a2A5bF5196b3122189
- **UniswapV2Router02** : 0x0D5eCAacDfD2BA156d2a70e31A3A9586fF6868c9

### June Socotra
- **UniswapV2Factory** : 0xd34CD59398755B41339f0003f876629b73010841
- **UniswapV2Router02** : 0x843482D2d022E0e7310114b9FB41365981c76D4B


## Faucets
- **june_socotra** : TODO

