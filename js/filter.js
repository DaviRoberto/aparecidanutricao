// Pegando o input em que é digitado para filtrar
var campoFilter = document.querySelector("#filtro-tabela");

// Quando for digitado alfo no campo de pesquisa, execulta uma função anônima
campoFilter.addEventListener("input", function(){
	var pacientes = document.querySelectorAll(".paciente"); // Seleciona todos os pacientes
	// Se tem caractere no input,  entra no laço
	if (this.value.length > 0) {
		for (var i = 0; i < pacientes.length; i++){ // Faz um laço pegando todos os pacientes e atribui a variável 'paciente'
			var paciente = pacientes[i]; 
			var tdNome = paciente.querySelector(".info-nome"); // Buscando o nome do paciente e adicionando a variável 'tdNome'
			var nome = tdNome.textContent; // Pegando apenas o conteudo de texto do nome
			// Criando uma expressão regular
			var expressao = new RegExp(this.value, "i");

			if (!expressao.test(nome)) { // Se pelo menos um pedaço do nome digitado é diferente dos nomes que já tem, esconde os nomes diferentes
				paciente.classList.add("esconder");
			}else{ 
				paciente.classList.remove("esconder"); // Senão mostra osd iguais
			}
		}	
	} else {
		// Se não tem caractere no input, é  removido a classe que esconde para ficar visível os nomes
		for (var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			paciente.classList.remove("esconder");
		}		
	}

});