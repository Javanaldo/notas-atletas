let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
for (let i = 0; i < atletas.length; i++) {
  //usando o for para percorrer todos os atletas do objeto
   console.log("Atleta: "+atletas[i].nome);//Mostra o nome do atleta precedido da string "Atleta: "
   obterNotas(atletas[i].notas); // mostra as notas dos atletas em uma string, para ficar no formato do enunciado
   calcularMedia(atletas[i].notas);
console.log("----------");//Linha para separar os atletas em bloco
   };


function obterNotas(notas_i){  //obtem as notas de cada atleta
  let saida="";
  notas_i.forEach(function(nota){
   saida = saida+nota+","// coloca uma virgula após cada nota
  })
  saida =saida.substring(0,saida.length-1);// esta linha foi acrescida para retirar a últim vírgula, que ficava sobreando na string
  return console.log("Notas Obtidas: "+saida);
};
function calcularMedia(numeros){
  numeros = numeros.sort(comparar);// só o método sort não ordenava corretamente, então pesquisei um algoritmo de comparação
  numeros = numeros.slice(1,4);// Elimina a nota mais alta e a mais baixa
  let total=0;
  numeros.forEach(function(somar){// soma as notas válidas
    total=total+somar
  });
  let media = total/(numeros.length)// calcula a média
  return console.log("Média: "+media)// apresenta a média
}
function comparar(a,b){// compara os numeros para ter certeza que sort funcione adequadamente;
  return a-b
}