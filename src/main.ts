// https://github.com/WalletConnect/walletconnect-monorepo/issues/341
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
// instead of
// import WalletConnectProvider from '@walletconnect/web3-provider';

document.querySelector<HTMLButtonElement>('#connect')!.addEventListener('click', () => {
  const p = new WalletConnectProvider({
    infuraId: '5bd2398e9fcc41c099cbac59722aef62',
  })
  p.enable()
})
