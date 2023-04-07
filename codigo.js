function verificarLogin(){

        let campoLogin=document.querySelector("#login").value;
        let campoSenha=document.querySelector("#senha").value;

        const loginCadastrado="admin"
        const senhaCadastrado="1234"

        if(campoLogin==loginCadastrado){

            if(campoSenha==senhaCadastrado)
            {
                alert("Seja bem vindo");
            } else {
                
                alert("senha incorreta");
        
            }

            } else{
              alert("Usuario não encontrado");
            }

    }
