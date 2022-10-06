import WalletConnectProvider from "@walletconnect/web3-provider";

document.querySelector<HTMLButtonElement>('#connect')!.addEventListener('click', () => {
  new WalletConnectProvider({
    infuraId: '5bd2398e9fcc41c099cbac59722aef62',
  })
})
