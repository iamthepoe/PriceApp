const selectOne = document.querySelector('#selectOne');
const selectTwo = document.querySelector('#selectTwo');

const options = {
    method: 'GET',
    mode: 'cors',
    catch: 'default'
}

async function getInfo(coinA, coinB){
	const res = await fetch(`https://economia.awesomeapi.com.br/json/last/${coinA}-${coinB}`, options);
	const json = await res.json();
	const info = await json[`${coinA}${coinB}`];
	return info;
}

function writeInfo(info){
	document.write(`
		<h1>${info.name}</h1>
		<h2>Dados da cotação</h2>
		<p>Alta: ${info.high}</p>
		<p>Baixa: ${info.low}</p>
		<p>Variação: ${info.varBid}</p>
		<p>Venda: ${info.bid}</p>
		<p>Compra: ${info.ask}</p>
	`)
}
