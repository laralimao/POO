class Conta {
    nome = "";
    saldo = 0;

    constructor(nome:string, saldo:number){
        this.nome = nome
        this.saldo = saldo 
    }

    depositar(valor:number){
        this.saldo += valor
    }

    sacar(valor:number):boolean{
        if(valor <= this.saldo){
            this.saldo -= valor;
            return true
        } 
        else{
            console.log("Saldo Insuficiente.")
            return false
        }
    }
}

let conta:Conta = new Conta("Lara",500) 
conta.depositar(15)
conta.sacar(10)
console.log(conta)

let lista:Conta[] = []
lista.push(new Conta("Lara",200))
console.log(lista)