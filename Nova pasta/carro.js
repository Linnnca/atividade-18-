const Veiculo = require('./Script'); 

class Batmovel extends Veiculo {
    constructor(turbinas, velocidade, modelo, cor = "preto", asas) {
      super(velocidade, modelo, cor, asas);
      this.turbinas = turbinas;
    }
  
    acelerar() {
      
      console.log("Batmóvel acelerando com suas turbinas!");
      
    }
  }


const batmovel = new Batmovel(370, 470, "Batmóvel","ativadas");



console.log(batmovel);

