

import BoasVindas from './BoasVindas';
function App() {
 const estaLogado = true;
 const tecnologias = ['React', 'Vite', 'JavaScript', 'CSS', 'HTML'];
 return (
 <>
 <BoasVindas />
 <h1>Meu Primeiro App React</h1>
 {estaLogado ? (
 <p>Você está logado! Bem-vindo de volta.</p>
 ) : (
 <p>Por favor, faça login para continuar.</p>
 )}
 <h2>Tecnologias que vamos aprender:</h2>
 <ul>
 {tecnologias.map((tecnologia, index) => (
 // Para cada item da lista, retornamos um <li>
 // A prop `key` é MUITO importante para o React identificar cada item da lista de forma única
 <li key={index}>{tecnologia}</li>
 ))}
 </ul>
 {/* ... o resto do seu código App.jsx ... */}
 </>
 );
}
export default App;