class Veiculos{
   cor: string; // string: cadeia de carcteres
   ano: number; // number: numeros inteiros
   doc_ok: boolean; // boolean: verdadeiro ou falso

    constructor(c: string, a:number, d: boolean){ // Método Construtor -> cria objetos
        this.cor = c;
        this.ano = a;
        this.doc_ok = d;
    }
    exibirDocs(): void{
        console.log(`O veículo tem a cor ${this.cor}, ano ${this.ano} e o ano documento está ${this.doc_ok}`)
    }
}
let veiculo = new Veiculos("Gol", 2022, true)
veiculo.exibirDocs()


class carros{


}


class motos{


}