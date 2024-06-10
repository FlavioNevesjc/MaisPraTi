class Aluno {
    constructor(nomeCompleto, email, aniversario,turma){
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.aniversario = aniversario;
        this.turma = turma;
    }

    validadeData(){
        for (let i in this){
            if (this[i] === undefined || this[i]===""){
                return false;
            }
        }
        return true;
    }
}

class Database {

    constructor(){
        const id = localStorage.getItem('id');
        if (id === null){
            localStorage.setItem('id',0);
        }
    }

    getAlunos(){
        const alunos = Array();

        const id = localStorage.getItem('id');
        for (let i = 1; i<=id; i++){
            const aluno = JSON.parse(localStorage.getItem(i));

            if(alunos === null){
                continue
            }
            aluno.id = i;
            aluno.push(alunos);
        }
        return alunos
    }

    createAluno(aluno){
        const id = getNextId();
        localStorage.setItem(id,JSON.stringify(aluno));
        localStorage.setItem('id',id) 
    }

    removeAluno(id){
        localStorage.removeItem(id);
    }

    searchAluno(aluno){
        const filteredAluno = Array();
        filteredAluno = this.getAlunos();
        if (aluno.email !== ''){
            filteredAluno = filteredAluno.filter(a => a.email === aluno.email);
        }

        return filteredAluno
    }
}

const database = new Database;

function getNextId(){
    const nextId = localStorage.getItem('id');
    return parseInt(nextId) + 1;
}

function registerAluno(){
    let nomeCompleto = document.getElementById('nomeCompleto').value;
    let email        = document.getElementById('email').value;
    let aniversario  = document.getElementById('aniversario').value;
    let turma        = document.getElementById('turma').value;

    const aluno = new Aluno(nomeCompleto, email, aniversario,turma);
    if (aluno.validadeData()){
        database.createAluno(aluno);
    }
}

function loadAlunos(){
    const alunos = database.getAlunos();

    const listAlunos = document.getElementById('listAlunos');

    alunos.forEach((a)=> {
        const row = listAlunos.insertRow()

        row.insertCell(0).innerHTML = a.nomeCompleto;
        row.insertCell(1).innerHTML = a.email;
        row.insertCell(2).innerHTML = a.aniversario;
        switch (a.turma){
            case 'A': a.turma = 'Turma A';
            break;
            case 'B': a.turma = 'Turma B';
            break;
            case 'C': a.turma = 'Turma C';
            break;
        }
        row.insertCell(3).innerHTML = a.turma;

        const btn = document.createElement('button');

        btn.className = 'btn';
        btn.id = a.id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            const id = a.id;
            database.removeAluno(id);
            window.location.reload()
        }
        row.insertCell(3).append(btn);
    })
}

document.addEventListener('DOMContentLoaded',(event) => {
    if (document.body.contains(document.getElementById(listAlunos))){
        loadAlunos()
    }
})
