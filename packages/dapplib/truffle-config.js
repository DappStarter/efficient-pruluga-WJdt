require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn puppy include problem bubble soup'; 
let testAccounts = [
"0x3360314cc58bee988127ac63d00b1e06b318420c5d0eec56e99d76641e0a2eee",
"0x95ec0543a2833ad1e79c9521b447ea8b87b811e95ed2aee72fb067470e865ae6",
"0x695fa36639bb73a480669ae02fcdf6166479785a1102cb97be8370d810337415",
"0x7be9248a1ee02bd6734e3adc2129539d4b634de46bbfd9af9f86a289dd7e51b4",
"0x28e56f4bfde4dc51473e8cb44cf59eb1ce8087f2e64ebe53652e463b6e62b47e",
"0x7504ac7dab2cdf93c474d6d72e2452769fc6eb3e0c28cfed9bf2c5f48e6c5a4e",
"0x7fee1553776d95a4cc1b4d42f20636cd5457c4a844d629504ae27beea15d28cd",
"0xd00c3edcf43a39273849ee084a2ffe7df0d169a58586b367f7f26e4af9ca4070",
"0x0adecf807515319a7fc577b5c665646a235b3d7c8feb1500493655831ebe1ac3",
"0x528644e6150f8199e9624965117ad527c21bc836786174ceed1c4aad9ef393ee"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

