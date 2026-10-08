let alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'João', nota: 9 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Pedro', nota: 5 }
];

let aprovados = alunos
    .filter(aluno => aluno.nota > 7)
    .map(({ nome }) => nome);

console.log(aprovados);