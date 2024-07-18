class Sala{
    constructor(parametros ){
        
        this.nome = parametros.nome||1;
        this.mesa = parametros.mesa||1;
        this.porta = parametros.porta ||1;
        this.lampada = parametros.lampada||1;
        this.Luz = parametros.Luz|| false;
        this.extintor = parametros.extintor||1;
        this.Tomada = parametros.Tomada||1;
        this.cadeira = parametros.cadeira||1;
        this.projetor = parametros.projetor|| false;
        this.ar = parametros.ar || false;
        this.alunos = parametros.alunos ||1;
        this.janela = parametros.janela ||1;
        this.computador = parametros.computador||1;
       
        
       
      
    }
tostring = function(){
    return `A sala ${this.nome} tem ${this.alunos} , luzes ${this.Luz === true ? "acessa" : "apagada"} `
}    
acendeApagaLuz = function (){
    this.Luz =!this.Luz
    return 
}
}


var _305 = new Sala(
    mesa = 25, 
    lamapada = 16, 
    tomada = 101, 
    computador = 46, 
    nome = 'TROPA DO PORTUGAS', 
    alunos = 21, 
    Luz
    )
    console.log(_305)

 