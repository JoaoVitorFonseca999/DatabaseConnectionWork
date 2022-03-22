//database stuff
var mysql = require('mysql2');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'bdmariane',
	database: 'db_consultorio'
});

connection.connect(function (err){
	if(err){
		throw err;
	}else{
		console.log("Conectado!");
	}
})





//Query de consulta dentro da função
var res;
var medico= "Arthur Klimas";

function acharid(medico) {
	
	var pegaid = "SELECT id_medico from tbl_medico where nome_medico='"+ medico + "'" ; //consulta deve ser armazenada numa variavel
		

	connection.query(pegaid, (erro, resposta)=>{ // Achar id do médico pelo nome
		if(resposta){
			res=JSON.stringify(resposta);
			res=res.replace(/\D/g, '');
			console.log(res);
			//printa(res);
		}
		else{
			console.log("erro na consulta");
		}
	})
}

acharid(medico)


function printa(res){
	console.log("Id do médico achado pelo nome: ", res);
}


//INSERÇÃO
/*
var inserir = "INSERT INTO tbl_consulta (id_medico, cpf paciente, data_consulta) VALUES ?";  
var values = [ 	 [pegaid], [cpf_paciente], [data_consulta] ];  
//console.log(inserir, [values]);

connection.query(inserir, [values], function (err, result) {  //envia para o banco de dados
	if (err) throw err;
	console.log("Numero de inserções: " + result.affectedRows);  
});  
*/



//QUERY DE REMOÇÃO
/* 
var remocao = "DELETE FROM tbl_convenio WHERE nome_convenio = ?;"
var valores = 'Notredame';

connection.query(remocao, valores, function (err, result) {  
	if (err) throw err;  
	console.log("Number of records removed: " + result.affectedRows);  
	}); 
*/




