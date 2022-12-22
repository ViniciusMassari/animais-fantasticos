/* eslint-disable no-console */
export default function initFetchBitcoin() {
  console.log('teste');
  const bitcoinPreco = fetch("https://blockchain.info/ticker");

bitcoinPreco
  .then((r) => r.json())
  .then((bitCoin) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / bitCoin.BRL.sell).toFixed(4);
  }).catch(error => console.log(Error(error)));
}


