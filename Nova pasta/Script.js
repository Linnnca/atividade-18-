class Veiculo {
    constructor(parametros) {
        this.velocidade = parametros.velocidade || 0;
        this.cor = parametros.cor || "preta";
        this.modelo = parametros.modelo || "Mercedes";
        this.passageiros = parametros.passageiros || 0;
    }

    acelera() {
        this.velocidade += 10;
        console.log("Acelerando. Nova velocidade:", this.velocidade);
        return this.velocidade
    }

    freiar() {
        const mensagem = this.velocidade > 0 ?
            `Freiando. Nova velocidade: ${this.velocidade -= 30}` :
            "Não é possível freiar. O veículo já está parado.";
        console.log(mensagem);
    }
}





module.exports=Veiculo;