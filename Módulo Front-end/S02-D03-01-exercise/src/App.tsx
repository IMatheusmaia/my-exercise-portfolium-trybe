import Greeting from './components/Greeting';
import LottoNumbers from './components/LottoNumbers';
import LuckyNumbers from './components/LuckyNumbers';

import './App.css';

function App() {
  const numbers = [7, 21, 59, 12, 42, 30];

  return (
    <>
      <Greeting person={{ firstName: 'Chapolin', lastName: 'Colorado' }} />
      <LottoNumbers numbers={ numbers } />
      {/* <LuckyNumbers /> */}
    </>
  );
}

export default App;
