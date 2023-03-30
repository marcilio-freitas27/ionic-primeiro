

let esconderDados = () => {
    let card = document.getElementById('cartao').style;
    let button = document.getElementsByTagName('ion-toggle')[0];
    button.checked ? card.display = 'none' :  card.display = 'block'
} 