/// <reference types="vite/client" />

// https://github.com/WalletConnect/walletconnect-monorepo/issues/341
declare module '@walletconnect/web3-provider/dist/umd/index.min.js' {
    import WalletConnectProvider from '@walletconnect/web3-provider/dist/esm/index';
    export default WalletConnectProvider 
}
