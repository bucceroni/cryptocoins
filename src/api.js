import axios from "axios";

export async function getCryptocoins() {
  const result = await axios.get(
    "https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10"
  );
  return result.data;
}

// function consomeAPI() {
//     let request = new XMLHttpRequest();
//     request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10', false);
//     request.send();

//     let moedas = JSON.parse(request.response);

//     for(let i=0; i<10; i++) {
//       //linha
//       let tr = document.createElement('tr');

//       //  coluna de rank
//       let th = document.createElement('th');
//       th.innerText = moedas[i].rank;
//       tr.appendChild(th);

//       //  coluna de nome
//       let nome = document.createElement('td');
//       nome.innerText = moedas[i].name;
//       tr.appendChild(nome);

//       //  coluna de simbolo
//       let simbolo = document.createElement('td');
//       simbolo.innerText = moedas[i].symbol;
//       tr.appendChild(simbolo);

//       //  coluna de valor em real
//       let real = document.createElement('td');
//       real.innerText = moedas[i].price_brl;
//       tr.appendChild(real);

//       //  coluna de valor em dolar
//       let dolar = document.createElement('td');
//       dolar.innerText = moedas[i].price_usd;
//       tr.appendChild(dolar);

//       let tbody = document.getElementById('adiciona-linha');
//       tbody.appendChild(tr);
//     }
//   }

//   consomeAPI();

//   function converteValor() {
//     let valor = document.getElementById('conversor-input').value;

//     let select = document.getElementById('conversor-select');
//     let moeda = select.options[select.selectedIndex].value;

//     let request = new XMLHttpRequest();
//     request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/' + moeda + '/?convert=BRL', false);
//     request.send();

//     let resposta = JSON.parse(request.response);
//     let total = valor / resposta[0].price_brl;
//     document.getElementById('conversor-resultado').innerText = total;
//   }
