// import logo from '../../logo.svg';
import './App.css';
import Welcome from './../Welcome';

function App() {
  const shouldWelcome = true
  const onClickHandler = (e) => {
    console.log('Hello World!')
  }
  return (
    <div className="App">
      <header className="App-header">
        { 
          //!true && <Welcome /> 
          shouldWelcome ? <Welcome name="Lucifer" /> : (<div>
            <h1>Hi there...</h1>
            <p>I'm using React. 👨‍💻</p>
            <button style={{ height: 50, border: '1px solid white',padding: '16px 80px', }}
onClick={onClickHandler}>Click me!</button>
            </div>)
        }
      </header>
    </div>
  );
}

export default App;

