var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
	// criando uma variável 'xhr' que está recebendo uma a API 'XMLHttpRequest'
	var xhr = new XMLHttpRequest();

	// Abrindo conexão e informando que op tipo da requisição é GET
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	// Ouvido o evento load para carregar uma funcção anônima
	xhr.addEventListener("load", function(){
		
		var errorAjax = document.querySelector('#error-ajax');

		if (xhr.status == 200) {
			errorAjax.classList.add('esconder');

			// Obten o texto de resposta que tem no link acima que foi feito requisição
			var resposta = xhr.responseText;
			
			// Salvando conteúdo da resposta na variável 'pacientes', e convertendo um objeto JSON em um objeto JS com 'JSON.parse'
			var pacientes = JSON.parse(resposta);
			
			// Para cada objeto paciente que eu recebo, adiciono na tabela através da função 'adicionaPacienteNaTabela(paciente)'. Sempre passando 'paciente' como parâmetro.
			pacientes.forEach(function(paciente){
				adicionaPacienteNaTabela(paciente);
			});			
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			errorAjax.classList.remove('esconder');
		}

	});

	// Enviando a requisição
	xhr.send();

});