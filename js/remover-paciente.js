// Pego a table
var tabela = document.querySelector("table");

// Adiciono o evento 'dblclick' pra quando a variável tabela ouvir o evento 'dblclick' execulta a função anônima
tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function() {
		event.target.parentNode.remove();
	//	evento.foco.selecionaOPaiDoEventoE.Remove(); 
	}, 700);

});
