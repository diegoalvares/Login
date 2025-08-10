entrada = document.getElementById('entrar');
user = document.getElementById('user');
pass = document.getElementById('pass');

function passar (e){
    e.preventDefault();
    if (user.value == "" & pass.value == ""){
        alert('Preencha todos os campos!');
    }

    else if (user.value == "" | pass.value == ""){
        alert('Preencha todos os campos!');
    }

    else if (user.value == "nome" & pass.value == "1234"){
        window.location.href = 'inicial.html';
    }

    else {
        alert('Usuário ou senha incorreta! Tente Novamente.')
    }

}

entrada.addEventListener('click', passar);