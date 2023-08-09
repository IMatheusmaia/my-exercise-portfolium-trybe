import HelloWorld from "./HelloWorld";
import calculeAge from "./utils/age";

function App() {
  const name = 'Ícaro Maia';
  const birthday = '02/12/1995';
  return (
    <>
      <HelloWorld/>
      <h2>Calcule sua idade:</h2>
      <ul>
        <li>{ name }</li>
        <li>{ birthday }</li>
        <li>Idade: {calculeAge(birthday)}</li>
      </ul>
      
    </>
  );
}

export default App
