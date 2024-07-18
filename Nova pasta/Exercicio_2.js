var EA_Sport ={
    Nome:'Donato',
    Titulos:0,
    Ano:1945,
    Jogadores: ["Chupagol","Cichinha","Snoop","lunna","Theo"],
    endereco:{
        rua: "senhor armando"
    },
    AntigoCLUB: null,
    apresentacao: function() {
        const mensagem = `O club ${this.Nome} esta convidando voce para entrar no nosso club, para voce jogar ao lado dos ${this.Jogadores}`
        return mensagem
    },
    aumentaTitulos: function() {
        this.Titulos += 1
        return true
    },
    diminuiTitulos: function(){
        this.Titulos -= 2

    },
    ordena: function(){
        return this.Jogadores.sort()
    }
    

}
console.log('Pessoas do club',EA_Sport.ordena())

