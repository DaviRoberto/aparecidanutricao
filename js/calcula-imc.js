var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // Recebe a função 'validaPeso(peso)' e passa para a variável 'pesoEhValido'
    var pesoEhValido = validaPeso(peso);
    
    // Recebe a função 'vvalidaAltura(altura)' e passa para a variável 'alturaEhValida'
    var alturaEhValida = validaAltura(altura);

    // Verifica se o peso é NÃO é válido através da variável 'pesoEhValido' que recebeu a função que faz a validação
    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    // Verifica se a altura é NÃO é válida através da variável 'alturaEhValida' que recebeu a função que faz a validação
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
	}
}

// Função que verifica se o peso é valido ou não
function validaPeso(peso){
	if (peso >= 0 && peso < 1000) {
		return true;
	}else{
		return false;
	}
}

// Função que verifica se a altura é válida ou não
function validaAltura(altura){
	if(altura >= 0 && altura < 3.00){
		return true;
	}else{
		return false;
	}
}

// Função que calcula o IMC
function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	
	return imc.toFixed(2);

}