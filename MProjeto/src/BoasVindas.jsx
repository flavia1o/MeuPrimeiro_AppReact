function BoasVindas() {
 const nomeAluno = "Fulano"; // Uma variável JavaScript
 const anoAtual = new Date().getFullYear(); // Uma expressão JavaScript
 return (
 <div>
 <h2>Bem-vindo, {nomeAluno}!</h2> {/* Injetando a variável nomeAluno
*/}
 <p>Estamos em {anoAtual} e prontos para codificar!</p> {/*
Injetando a expressão */}
 <p>A soma de 5 + 3 é: {5 + 3}</p> {/* Injetando uma expressão
matemática */}
 </div>
 );
}
export default BoasVindas;