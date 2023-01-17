class heroisdamarvel{
    teletransporte:boolean
    regenerar:boolean
    força:boolean
    imortalidade:boolean

    constructor(t:boolean, r:boolean, f: boolean, i:boolean){
        this.teletransporte = t;
        this.regenerar = r;
        this.força = f;
        this.imortalidade = i;   
    }
    exibirHeróis(): void{
        console.log(`noturno tem o poder de se ${this.teletransporte}`)
        console.log(`Wolverine tem o poder de se ${this.regenerar}`)
        console.log(`Hulk tem o poder de ${this.força} e da ${this.imortalidade}`)
    }
}

let heróisdamarvel = new heroisdamarvel( true, false, true, true)
heróisdamarvel.exibirHeróis()

class Vingadores {

}  


class Vingadoresquemorreramnocinema{}