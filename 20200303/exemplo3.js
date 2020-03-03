function escreve_mensagem(valor){
				mensagem= "você escreveu '"+valor+"' ";
				alert(mensagem);
				if(isNaN(valor))
				{
					alert(valor + " nao é um numero");
				}
				else
				{
					alert(valor + " é um numero");
				}
			}