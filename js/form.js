// Botão que adiciona pacientes a tabela
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");
	
	var paciente = obtemPacienteDoFormulario(form);	

	// Cria a TR e a TD do paciente, ou seja, as linhas e colunas da tabela através da função 'montaTr'
	var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);
	
	if (erros.length > 0) {
		exibeMensagensErro(erros);
		return;
	}

	// Adicionando o Paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	// Limpando os campos após add o paciente
	form.reset();
	var menssagensErro = document.querySelector("#menssagens-error");
	menssagensErro.innerHTML = "";

});
// Obtendo valores dos campos (dados do paciente) via JS através da função "obtemPacienteDoFormulario"
function  obtemPacienteDoFormulario(form){
	// Criando objeto paciente
	var paciente = {
		// Definindo suas propriedades
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	};

	return paciente;
}

// Validando os campos que são preenchidos para saber se é um paciente válido
function validaPaciente(paciente){
	var erros = [];

	if (paciente.nome.length == 0) erros.push("Preencha o campo 'Nome' ");

	if (paciente.gordura.length == 0) erros.push("Preencha o campo '% de Gordura' ");

	if (paciente.peso.length == 0) erros.push("Preencha o campo 'Peso' ");
	
	if (paciente.altura.length == 0) erros.push("Preencha o campo 'Altura' ");

	if (!validaPeso(paciente.peso)) erros.push("Peso inválido");

	if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

	return erros;
}

function exibeMensagensErro(erros){
	var ul = document.querySelector("#menssagens-error");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

//  
function montaTr(paciente) {
	// Criando o elemento HTML <tr></tr> e adicionando a classe 'paciente'
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	// Adicionando como filho da TR montada a função 'montaTd' com os parâmetros 'paciente.nome, "info-nome"'
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}

// Função que monta a TD passando os parâmetros 'dado, classe'
function montaTd(dado, classe){
	// criando a tag <td></td> e adicionando 'dado' como valor da tag, e adicionando uma 'classe', ambos valores passados por parâmetro que veio da função montaTr
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}