/*
npm install -g ts-node
npm -g install typescript
npm install readline-sync @types/readline-sync @types/node
npm install ts-node readline-sync @types/readline-sync @types/node
tsc --downlevelIteration

tsc sketch.ts ou solver.ts
ts-node sketch.ts 
*/

/*
class Aluno{
  private nome: string
  disciplinas: Map<string, Disciplina>

  public constructor (nome:string){
    this.nome = nome
    this.disciplinas = new Map<string,Disciplina>()
  }

  public getNome (){
    return this.nome
  }
  public getDisciplinas(): string[] {
    return [...this.disciplinas.keys()]
  }
  public addDisciplina(disciplina: Disciplina):void {
    let chave = disciplina.getNome()
    if (this.disciplinas.has(chave)){
      return
    }
    this.disciplinas.set(chave,disciplina)
    disciplina.addAluno(this)
  }

  public rmDisciplina(nome: string):void {
    if (!this.disciplinas.has(nome)){
      return
    }
    let disciplina = this.disciplinas.get(nome)
    this.disciplinas.delete(nome)
    disciplina.rmAluno(this.nome)
  }

  public toString(){
    let keys = this.disciplinas.keys();
    return this.nome + " ["+ [...keys].join(", ") + "]";
  }

  public levarPassageiros(): number {
    console.log("Um carro possui um total de 5 lugares")  
    return 4
  }

}

class Disciplina {
  private nome: string
  alunos: Map<string, Aluno>
  public constructor (nome:string){
    this.nome = nome
    this.alunos = new Map<string,Aluno>()
  }
  public getNome (){
    return this.nome
  }
  public getAlunos(): string[] {
    return [...this.alunos.keys()]
  }
  public addAluno(aluno: Aluno):void {
    let chave = aluno.getNome()
    if (this.alunos.has(chave)){
      return
    }
    this.alunos.set(chave,aluno)
    aluno.addDisciplina(this)
  }
  public rmAluno(nome: string):void {
    if (!this.alunos.has(nome)){
      return
    }
    let aluno = this.alunos.get(nome)
    this.alunos.delete(nome)
    aluno.rmDisciplina(this.nome)
  }
  public toString(){
    let keys = this.alunos.keys();
    return this.nome + " ["+ [...keys].join(", ") + "]";
  }
}

class Universidade  {
  private alunos: Map<string,Aluno>;
  private disciplinas: Map <string,Disciplina>;
  constructor (){
    this.alunos = new Map<string,Aluno>()
    this.disciplinas = new Map<string,Disciplina>()
  }
  public addDisciplina(disciplina: Disciplina):void {
    let chave = disciplina.getNome()
    if (this.disciplinas.has(chave)){
      return
    }
    this.disciplinas.set(chave,disciplina)
  }
  public addAluno(aluno: Aluno):void {
    let chave = aluno.getNome()
    if (this.alunos.has(chave)){
      return
    }
    this.alunos.set(chave,aluno)
  }
  public getAluno(nome:string):Aluno{
    let aluno = this.alunos.get(nome)
    if (aluno === undefined){
      throw new Error ("Disciplina não encontrada")
    }
    return aluno;
  }
  public getDisciplina(nome:string) :Disciplina{
    let disciplina = this.disciplinas.get(nome)
    if (disciplina === undefined){
      throw new Error ("Disciplina não encontrada")
    }
    return disciplina;
  }
  public getAlunos(): string[] {
    return [...this.alunos.keys()]
  }
  public getDisciplinas(): string[] {
    return [...this.disciplinas.keys()]
  }

  public vincular(aluno:string, disciplina:string):void{
    let al: Aluno = this.getAluno(aluno)
    let disc: Disciplina = this.getDisciplina(disciplina)
    al.addDisciplina(disc)
    
  }
  public desvincular(aluno:string, disciplina:string):void{
    let al: Aluno = this.getAluno(aluno)
    al.rmDisciplina(disciplina)
  }
  public rmAluno(nome: string):void {
    let aluno = this.getAluno(nome)
    for (let disc of aluno.getDisciplinas()){
      aluno.rmDisciplina(disc)
    }
    this.alunos.delete(nome)
  }
  public rmDisciplina(nome: string):void {
    let disciplina = this.getDisciplina(nome)
    for (let al of disciplina.getAlunos()){
      disciplina.rmAluno(al)
    }
    this.disciplinas.delete(nome)
  }
  public toString(){
    let alunos = [...this.alunos.values()].map(a=>a.toString());
    let disciplinas = [...this.disciplinas.values()].map(a=>a.toString());
    return  "Universidade XYZ\nAlunos: "+ alunos.join(", ") + "\nDisciplinas: " + disciplinas.join(", ");
  }

}


let ufc = new Universidade();
ufc.addAluno(new Aluno("Jao"))
ufc.addAluno(new Aluno("Lara"))
ufc.addAluno(new Aluno("Uber"))

ufc.addDisciplina(new Disciplina("Desenho"))
ufc.addDisciplina(new Disciplina("Calculo"))
ufc.addDisciplina(new Disciplina("FUP"))

ufc.vincular("Jao","Desenho")
ufc.vincular("Jao","Calculo")
ufc.vincular("Lara","Desenho")
ufc.vincular("Lara","FUP")
ufc.vincular("Uber","Calculo")


console.log(""+ufc)

ufc.desvincular("Jao","Desenho")
ufc.desvincular("Lara","Desenho")
ufc.desvincular("Uber","Calculo")

console.log(""+ufc)
*/

class Paciente{
  private nome: string
  private diag: string
  medicos: Map<string, Medico>

  public constructor (nome:string, diag:string){
    this.nome = nome
    this.diag = diag
    this.medicos = new Map<string,Medico>()
  }

  public getNome (){
    return this.nome
  }
  public getmedicos(): string[] {
    return [...this.medicos.keys()]
  }
  public getDiag(): string {
    return this.diag
  }
  public hasMedico(medico:Medico): boolean{
    for(let med of this.medicos.values()){
      if (medico.getEspec() == med.getEspec()){
        return true
      }
    }
    return false
  }
  public addMedico(medico: Medico):void {
    let chave = medico.getNome()
    if (this.medicos.has(chave) || this.hasMedico(medico)){
      return
    }
    this.medicos.set(chave,medico)
    medico.addPaciente(this)
  }

  public rmMedico(nome: string):void {
    if (!this.medicos.has(nome)){
      return
    }
    let medico = this.medicos.get(nome)
    this.medicos.delete(nome)
    medico.rmPaciente(this.nome)
  }

  public toString(){
    let keys = this.medicos.keys();
    return this.nome + ":" +this.diag + " Médicos: ["+ [...keys].join(", ") + "]";
  }

}

class Medico {
  private nome: string
  private espec: string
  pacientes: Map<string, Paciente>
  public constructor (nome:string, espec:string){
    this.nome = nome
    this.espec = espec
    this.pacientes = new Map<string,Paciente>()
  }
  public getNome (){
    return this.nome
  }
  public getPacientes(): string[] {
    return [...this.pacientes.keys()]
  }
  public getEspec(): string {
    return this.espec
  }
  public addPaciente(paciente: Paciente):void {
    let chave = paciente.getNome()
    if (this.pacientes.has(chave)){
      return
    }
    this.pacientes.set(chave,paciente)
    paciente.addMedico(this)
  }
  public rmPaciente(nome: string):void {
    if (!this.pacientes	.has(nome)){
      return
    }
    let paciente = this.pacientes.get(nome)
    this.pacientes.delete(nome)
    paciente.rmMedico(this.nome)
  }
  public toString(){
    let keys = this.pacientes.keys();
    return this.nome + ":" + this.espec+ " Pacientes: ["+ [...keys].join(", ") + "]";
  }
}

class Hospital  {
  private pacientes: Map<string,Paciente>;
  private medicos: Map <string,Medico>;
  constructor (){
    this.pacientes = new Map<string,Paciente>()
    this.medicos = new Map<string,Medico>()
  }
  public addMedico(medico: Medico):void {
    let chave = medico.getNome()
    if (this.medicos.has(chave)){
      return
    }
    this.medicos.set(chave,medico)
  }
  public addPaciente(paciente: Paciente):void {
    let chave = paciente.getNome()
    if (this.pacientes.has(chave)){
      return
    }
    this.pacientes.set(chave,paciente)
  }
  public getPaciente(nome:string):Paciente{
    let paciente = this.pacientes.get(nome)
    if (paciente === undefined){
      throw new Error ("Paciente não encontrado")
    }
    return paciente;
  }
  public getMedico(nome:string) :Medico{
    let med = this.medicos.get(nome)
    if (med === undefined){
      throw new Error ("Médico não encontrado")
    }
    return med;
  }
  public getPacientes(): string[] {
    return [...this.pacientes.keys()]
  }
  public getMedicos(): string[] {
    return [...this.medicos.keys()]
  }

  public vincular(paciente:string, medico:string):void{
    let pac: Paciente = this.getPaciente(paciente)
    let med: Medico = this.getMedico(medico)
    pac.addMedico(med)
    
  }
  public desvincular(paciente:string, medico:string):void{
    let pac: Paciente = this.getPaciente(paciente)
    pac.rmMedico(medico)
  }
  public rmPaciente(nome: string):void {
    let paciente = this.getPaciente(nome)
    for (let med of paciente.getmedicos()){
      paciente.rmMedico(med)
    }
    this.medicos.delete(nome)
  }
  public rmMedico(nome: string):void {
    let medico = this.getMedico(nome)
    for (let pac of medico.getPacientes()){
      medico.rmPaciente(pac)
    }
    this.pacientes.delete(nome)
  }
  public toString(){
    let pacientes = [...this.pacientes.values()].map(p=>p.toString());
    let medicos = [...this.medicos.values()].map(m=>m.toString());
    return  "Hospital XYZ\nPacientes: "+ pacientes.join(", ") + "\nMédicos: " + medicos.join(", ");
  }

}

let ufc = new Hospital();
ufc.addPaciente(new Paciente("Jao","costela"))
ufc.addPaciente(new Paciente("Lara","pulmao"))
ufc.addPaciente(new Paciente("Caio","facada"))

ufc.addMedico(new Medico("Dr A","trauma"))
ufc.addMedico(new Medico("Dr B","trauma"))
ufc.addMedico(new Medico("Dr C","cirugia"))

ufc.vincular("Jao","Dr A")
ufc.vincular("Jao","Dr B")
ufc.vincular("Jao","Dr C")
ufc.vincular("Lara","Dr B")
ufc.vincular("Lara","Dr A")
ufc.vincular("Lara","Dr C")
ufc.vincular("Caio","Dr B")



console.log(""+ufc)

ufc.desvincular("Jao","Dr A")
ufc.desvincular("Lara","Dr C")
ufc.desvincular("Caio","Dr B")

console.log(""+ufc)