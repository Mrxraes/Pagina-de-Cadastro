    class Usuario {
        constructor(nome, sobrenome, email, telefone, cidade, profissao) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.email = email;
            this.telefone = telefone;
            this.cidade = cidade;
            this.profissao = profissao;
        }
    }
        
    function cadastro() {
        //Váriaveis idd
        let nome = document.getElementById("nome").value
        let sobrenome = document.getElementById("sobrenome").value
        let email = document.getElementById("email").value
        let tel = document.getElementById("tel").value
        let cidade = document.getElementById("cida").value
        let profissao = document.getElementById("profi").value
        // Criação de objeto com base no molde com as variáveis
        const usuario = new Usuario(nome, sobrenome, email, tel, cidade, profissao)
        banco.push(usuario)
        //
        let check = document.getElementById("check").innerHTML = `${JSON.stringify(banco)}` 
        localStorage.setItem("banco", JSON.stringify(banco))
        banco = JSON.parse(localStorage.getItem("banco")) || [] 
    }

    let banco = []
    



    //usuário preenche formulário --> botão envia --> class entrega molde --> função salva no array