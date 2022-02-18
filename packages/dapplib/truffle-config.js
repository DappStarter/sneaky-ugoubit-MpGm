require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rival oval upgrade give entry army genius'; 
let testAccounts = [
"0xc83361c4c7098b16457357e6a96bb2e6088fd1b90ddf09892316ec92bdbe7789",
"0x25d37717456f36de487ca58cc9c6ef90db5c93caf542eec193cd3e0ca990074d",
"0x52742c6a7373794cc4da47635c525184d54d415c16387f7582005f972433c2ee",
"0xae3e1b7ee9a0625e8dd71a6a4ae4d60850837fd66b7b0c5bf7e918afba091ba0",
"0x7353d263216c4c5c27723142445e8fe005f12ef0fc94feb6367f02651ae8b890",
"0x42e525845990e7a5a0ffca21ca8cb88519e67c03f2eac8928587ca269628b2f3",
"0xb1e888b1b72fd65d441599751f759b0a3cbb35ea368506788756df9734ce1aeb",
"0x3459971971d98b02c70e6a2cdbe49cba5c2e31635b212fa020b9623ab394ddb5",
"0x8d3edbaf2a0527e4b7f59f2f0eb7c0cc98032cdb5fe442e8cb69c76f04ce4323",
"0x324f557b66eecbb00d170e4d860d0219b8ef9cdcf00248a2e158f26f0d3820d7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


