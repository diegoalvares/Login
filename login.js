entrada = document.getElementById('entrar');
user = document.getElementById('user');
pass = document.getElementById('pass');

function passar (e){
    e.preventDefault();
    if (user.value == 'nome' & pass.value == '1234'){
        window.location.href = 'inicial.html';
    }
}

entrada.addEventListener('click', passar);