# Sample TransparentProxy Project

#install the dependencies: npm install

#compile: npx hardhat compile

#create .env file with:
PRIVATE_KEY={the private key of an account}
API_KEY={the etherscan api key}

#deploy Box: npx hardhat run --network testnet scripts/deploy_box_v1.js
-This will deploy TransparentProxy, ProxyAdmin and Box.
-Using the testnet ftmscan, check the transactions on the account which deploys the SC.
-There should be 3 transactions: the creation of Box, ProxyAdmin and TransparentProxy


#upgrade to BoxV2:
-change the value of PROXY in upgrade_box_v2.js with the address of TransparentProxy
-run: npx hardhat run --network testnet scripts/upgrade_box_v2.js

#verify and publish Box: npx hardhat verify --network testnet {the address of Box}

#verify and publish BoxV2: npx hardhat verify --network testnet {the address of BoxV2}

#verify and publish TransparentProxy: ???

#verify and publish Proxy: ???


