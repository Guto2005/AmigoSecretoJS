let amigos = [];

const btnAdicionar = document.querySelector('#btn-adicionar');
const participantes = document.querySelector('#friends-selection')
const txtAmigo = document.querySelector('.friend-name')
const mensagemErro = document.querySelector(".error");

btnAdicionar.addEventListener('click',()=>{
    if (txtAmigo.value!=='') {
        mensagemErro.innerHTML = ""
        if (participantes.textContent.length===0) {
        participantes.innerHTML=txtAmigo.value;
        } else {
        participantes.textContent=participantes.textContent + "," +txtAmigo.value;
    }
    amigos.push(txtAmigo.value);
    console.log(amigos);
    txtAmigo.value="";
    mensagemErro.innerHTML = "";
    } else {
        mensagemErro.innerHTML ='ERRO! Insira um valor válido!';
    }

})

/* proximo objetivo: não pode deixar com que possa ser colocado um nome repetido na lista. */
/* e fazer a lista do sorteio funcionar usando arrays pra pegar os nomes*/