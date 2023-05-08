function LoginAdm() {
    var done=0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario=usuario.toLowerCase();
    
    var senha= document.getElementsByName('senha')[0].value;
    senha=senha.toLowerCase();
    
    if (usuario=="admin" && senha=="adm") {
        alert("Senhor administrador cadastre o USUÁRIO e SENHA !");
      window.location="/cadastro.html";
      done=1;
    }        
    if (done==0) { alert("Dados incorretos, tente novamente"); }
    limparCampos();
}

function limparCampos(){
    with (document) {    
    getElementById("usuario").value = "";       
    getElementById("senha").value = "";    
        usuario.focus();
    }
}