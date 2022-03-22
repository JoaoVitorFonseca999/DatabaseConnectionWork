var agenda = document.getElementById("agenda");

agenda.addEventListener('click', function (){
	window.open("/agendamento/agendamento.html", "janela nova", 'width=500, height=150, resizable=yes, top=100, left=100, menubar=yes, toolbar=yes, scrollbars=yes');
})

var cadastrar = document.getElementById("cadastrar");

cadastrar.addEventListener('click', function (){
	window.open("/Cadastro/cadastro.html", "janela nova", 'width=700, height=900, resizable=yes, top=100, left=100, menubar=yes, toolbar=yes, scrollbars=yes');
})


document.getElementById('cadastrar').onclick = function() {
	const cpf = document.getElementById("cpf_paciente").value;
	  const nome = document.getElementById("nome_paciente").value;
	  const rg = document.getElementById("rg_paciente").value;
	const nasc = document.getElementById("data_nascimento").value; //ja vem tratada
	  const sexo = document.getElementById("sexo_paciente").value;
	  const telefone = document.getElementById("telefone_paciente").value;
  
	  let select = document.getElementById('convenio');
	  var convenio = select.options[select.selectedIndex].value;
  
	  console.log(nome);
	  console.log(cpf);
	  console.log(rg);
	  console.log(nasc);
	  console.log(sexo);
	  console.log(telefone);
	  console.log(convenio);
  
	  window.close()
  
	  //ENVIAR DADOS DO CADASTRO PARA O BANCO DE DADOS
	  //REJEITAR CADSATRO SE HOUVER CADASTRO DE MESMO CPF
  }