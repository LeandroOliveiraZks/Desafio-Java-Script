// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const Joao = {
    name: "Joao",
    age: 34,
    height:1.65,
    address:"Samambaia DF ",
    genre: "masculino"

}

const Maria = {
    name: "Maria",
    age: 19,
    height:1.70,
    address:"Riacho Fundo DF ",
    genre: "Feminino"
}


console.log(Maria.name == Joao.name)