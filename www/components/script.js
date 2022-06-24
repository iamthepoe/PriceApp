const options = {
    method: 'GET',
    mode: 'cors',
    catch: 'default'
}
function getPrice(coinA, coinB){
    fetch(`https://economia.awesomeapi.com.br/json/last/${coinA}-${coinB}`, options)
        .then((res)=>{
            res.json()
        .then((res)=>{
            return res`.${coinA}${coinB}`;
        });
    }).catch(error=>console.log(error));
}

alert(getPrice('USD', 'BRL'));
        