
//listadecadastro
$(function(){

	//FILTRO
	$(function(){
		$("#tblListar input").keyup(function(){       
			var index = $(this).parent().index();
			var nth = "#tblListar td:nth-child("+(index+1).toString()+")";
			var valor = $(this).val().toUpperCase();
			$("#tblListar tbody tr").show();
			$(nth).each(function(){
				if($(this).text().toUpperCase().indexOf(valor) < 0){
					$(this).parent().hide();
				}
			});
		});
	 
		$("#tblListar input").blur(function(){
			$(this).val("");
		});
	});
	
	//Mascaras
	$("#txtCpf").mask("999.999.999-99", {reverse: false});
	$("#txtTelefone, #txtCelular").mask("(99)99999-9999", {reverse: false});

	var operacao = "A"; //"A"=Adição; "E"=Edição

	var indice_selecionado = -1;

	var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados

	tbClientes = JSON.parse(tbClientes); // Converte string para objeto

	if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		tbClientes = [];

	function Adicionar(){
		var cli = GetCliente("Cpf", $("#txtCpf").val());

		if(cli != null){
			alert("Código já cadastrado.");
			return;
		}

		var cliente = JSON.stringify({
			Cpf   : $("#txtCpf").val(),
			Nome     : $("#txtNome").val(),
			Telefone : $("#txtTelefone").val(),
			Celular : $("#txtCelular").val(),
			Email    : $("#txtEmail").val(),
			Sexo    : $("#txtSexo").val(),
			Nascimento    : $("#txtNasc").val(),
			Habilidade    : $("#txtHab").val()
		});

		tbClientes.push(cliente);

		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));

		alert("Registro adicionado.");
		return true;
	}

	function Editar(){
		tbClientes[indice_selecionado] = JSON.stringify({
				Cpf   : $("#txtCpf").val(),
				Nome     : $("#txtNome").val(),
				Telefone : $("#txtTelefone").val(),
				Celular : $("#txtCelular").val(),
				Email    : $("#txtEmail").val(),
				Sexo    : $("#txtEmail").val(),
				Nascimento    : $("#txtNasc").val(),
				Habilidade    : $("#txtHab").val()
			});
		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		alert("Informações editadas.")
		operacao = "A";
		return true;
	}

	function Listar(){
		
		$("#tblListar").html(
			"<thead>"+
			"	<tr>"+
			"	<th scope='col'>Cpf<input placeholder='Filtre pelo CPF' type='text' aria-label='10px' id='txtColuna1 inputGroup-sizing-sm'/></th>"+
			"	<th scope='col'>Nome</th>"+
			"	<th scope='col'>Telefone</th>"+
			"	<th scope='col'>Celular</th>"+
			"	<th>Email</th>"+
			"	<th>Sexo</th>"+
			"	<th>Nascimento</th>"+
			"	<th>Habilidade</th>"+
			"   <th></th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		 for(var i in tbClientes){
			var cli = JSON.parse(tbClientes[i]);
		  	$("#tblListar tbody").append("<tr>"+
              "	<td>"+cli.Cpf+"</td>" + 
              "	<td>"+cli.Nome+"</td>" + 
			  "	<td>"+cli.Telefone+"</td>" + 
			  "	<td>"+cli.Celular+"</td>" + 
              "	<td>"+cli.Email+"</td>" + 
			  "	<td>"+cli.Sexo+"</td>" + 
			  "	<td>"+cli.Nascimento+"</td>" + 
			  "	<td>"+cli.Habilidade+"</td>" + 
              "	<td><img src='img/edit.png' title='Editar' alt='"+i+"' class='btnEditar'/><img src='img/delete.png' title='Apagar' alt='"+i+"' class='btnExcluir'/></td>" + 
		  								 "</tr>");
		 }
	}

	function Excluir(){
		tbClientes.splice(indice_selecionado, 1);
		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		alert("Registro excluído.");
	}

	function GetCliente(propriedade, valor){
		var cli = null;
        for (var item in tbClientes) {
            var i = JSON.parse(tbClientes[item]);
            if (i[propriedade] == valor)
                cli = i;
        }
        return cli;
	}

	Listar();

	$("#frmCadastro").on("submit",function(){
		if(operacao == "A")
			return Adicionar();
		else
			return Editar();		
	});

	$("#tblListar").on("click", ".btnEditar", function(){
		operacao = "E";
		indice_selecionado = parseInt($(this).attr("alt"));
		var cli = JSON.parse(tbClientes[indice_selecionado]);
		$("#txtCpf").val(cli.Cpf);
		$("#txtNome").val(cli.Nome);
		$("#txtTelefone").val(cli.Telefone);
		$("#txtCelular").val(cli.Celular);
		$("#txtEmail").val(cli.Email);
		$("#txtSexo").val(cli.Sexo);
		$("#txtNasc").val(cli.Nascimento);
		$("#txtHab").val(cli.Habilidade);
		$("#txtCpf").attr("readonly","readonly");
		$("#txtNome").focus();
	});

	$("#tblListar").on("click", ".btnExcluir", function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
    });
    
    
});