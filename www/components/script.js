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

        