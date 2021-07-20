programa
{ // Programa que calcula  a media arirmetica de um aluno, usando se e senao (if/ else)
	
	funcao inicio()
	{
		real nota1, nota2, nota3,  nota4
		cadeia aluno
		real media

		escreva("Digite o nome do Aluno \n")
		leia(aluno)

		escreva("Digite sua primeira nota: ")
		leia(nota1)
		escreva("Digite sua segunda nota: ")
		leia(nota2)
		escreva("Digite sua terceira nota: ")
		leia(nota3)
		escreva("Digite sua quarta nota: ")
		leia(nota4)

		media = (nota1 + nota2 + nota3 + nota4)// caluclo de media

		escreva("Sua nota ", aluno, " é: ", media, "\n")

		se(media >= 7){
			escreva("Você ", aluno, " foi aprovado! \n")
		}
		senao{
			escreva("Estude um pouco mais! \n")
		}
		escreva("Fim do programa")

		
	} 
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 568; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */