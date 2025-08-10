entrada = document.getElementById('entrar');
user = document.getElementById('user');
pass = document.getElementById('pass');
erro = document.getElementById('erro');
atc = document.getElementById('atc');

function pausaerro(){
    erro.style.display = 'none';
}

function pausaatc(){
    atc.style.display = 'none';
}

function passar (e){
    e.preventDefault();
    if (user.value == "" & pass.value == ""){
        atc.style.display = 'block';
        setTimeout(pausaatc, 3000);
    }

    else if (user.value == "" | pass.value == ""){
        atc.style.display = 'block';
        setTimeout(pausaatc, 3000);
    }

    else if (user.value == "nome" & pass.value == "1234"){
        window.location.href = 'inicial.html';
    }

    else {
        erro.style.display = 'block';
        setTimeout(pausaerro, 3000);
    }

}

entrada.addEventListener('click', passar);