function MyQuote() {
  return (
    <blockquote>
      <p>What is important now is to recover our senses.</p>
      <cite>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
          Susan Sontag
        </a>
      </cite>
    </blockquote>
  );
}

export default MyQuote;

// App.js

import MyQuote from './MyQuote'

function App() {
    return (
      <MyQuote />
    );
};

export default App;