// Base a ser utilizada
const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação

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