/* eslint-disable no-console */
export default function fetchBitcoin(url, target) {
  const bitcoinPreco = fetch(url);
  bitcoinPreco
    .then((r) => r.json())
    .then((bitCoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitCoin.BRL.sell).toFixed(4);
    }).catch(error => console.log(Error(error)));
}

