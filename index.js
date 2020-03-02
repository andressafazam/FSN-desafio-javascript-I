// Base a ser utilizada
const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação

function adicionarAluno(nome){
    alunosDaEscola.push({
        nome: nome,
        notas:[],
        cursos:[],
        faltas: 0
    });
    console.log(`-----------------------------------------------------------------------------------`);
    console.log(`Aluno(a) ${nome} cadastrado(a) com sucesso!`);
    console.log(`-----------------------------------------------------------------------------------`);
}

function listarAlunos(){
    let numero = 0;
    for(let alunos of alunosDaEscola){
        console.log(`--- Aluno ${++numero} ---`);
        console.log(`Nome: ${alunos.nome}`);
        console.log(`Notas: ${alunos.notas}`);
        if(alunos.cursos.length > 0){
            for(let curso of alunos.cursos){
                console.log(`Curso:` + `${curso.nomeDoCurso}`);
                console.log(`Matricula: ${curso.dataMatricula}`);
            }
        }else{
            console.log(`Curso: \nMatricula:`);
        }
        console.log(`Faltas: ${alunos.faltas} \n`);
    }
}

function buscarAluno(nome){
    let numIndex = -1;
    alunosDaEscola.filter((alunos, index) => {
        if(alunos.nome == nome)
        numIndex = index;
    });
    if (numIndex != -1){
        console.log(`-----------------------------------------------------------------------------------`);
        console.log(`Aluno(a) ${nome} já está cadastrado(a) no sistema da escola!\n`);
        console.log(`Nome: ${alunosDaEscola[numIndex].nome}`);
        console.log(`Notas: ${alunosDaEscola[numIndex].notas}`);
        if(alunosDaEscola[numIndex].cursos.length > 0){
            for(let curso of alunosDaEscola[numIndex].cursos){
                console.log(`Curso: ${curso.nomeDoCurso}`);
                console.log(`Matricula: ${curso.dataMatricula}`);
            }
        }else{
            console.log(`Curso: \nMatricula:`);
        }
        console.log(`Faltas: ${alunosDaEscola[numIndex].faltas}`);
        console.log(`-----------------------------------------------------------------------------------`);
    }else{
        console.log(`-----------------------------------------------------------------------------------`);
        console.log(`Aluno(a) ${nome} ainda não foi cadastrado(a) no sistema da escola!`);
        console.log(`Por favor fazer o cadastro do aluno!`);
        console.log(`-----------------------------------------------------------------------------------`);
    }
    return numIndex;
}

function matricularAluno(aluno, curso){
    let numIndex = buscarAluno(aluno.nome);
    if (numIndex != -1){
        alunosDaEscola[numIndex].cursos.push ({nomeDoCurso: curso, dataMatricula: new Date});
        alunosDaEscola[numIndex].cursos.dataMatricula = new Date;
        console.log(`-----------------------------------------------------------------------------------`);
        console.log(`A matrícula do aluno(a) ${aluno.nome} no curso de ${curso} foi realizada com sucesso!`)
        console.log(`-----------------------------------------------------------------------------------`);       
    }else{
        console.log(`-----------------------------------------------------------------------------------`);
        console.log(`Por favor fazer o cadastro do aluno antes de fazer a matrícula!`)
        console.log(`-----------------------------------------------------------------------------------`);
    }
}