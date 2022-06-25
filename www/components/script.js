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
    document.querySelector('#contentBox').innerHTML = `
    		<div class="row">
                <h2>Nome ${info.name}</h2>
    		</div>
            <br>
            <div class="row">
                <h3>Dados da cotação:</h3>
            </div>
            <br>
            <hr>
            <div class="row">
                <h4>Alta: <span style='color: var(--maingreen);'>${info.high}</span></h4>
            </div>
            <hr>
            <div class="row">
                <h4>Baixa: ${info.low}</h4>
            </div>
            <hr>
            <div class="row">
                <h4>Variação: ${info.varBid}</h4>
            </div>
            <hr>
            <div class="row">
                <h4>Venda: <span style='color: var(--maingreen);'>${info.bid}</span></h4>
            </div>
            <hr>
            <div class="row" style="border-bottom:none;">
                <h4>Compra: ${info.ask}</h4>
        	</div>
    `
}

