import React, { useEffect, useState } from 'react'; // JSX
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Components/App';
// import MyComponent from './Components/MyComponent';
import reportWebVitals from './reportWebVitals';

function MyComponent2(props) {
  const [date, setDate] = useState(new Date()) // Date.now()
  useEffect(() => {
    console.log('Setting interval for date:' + date)
    const tid = setInterval(() => { setDate(new Date()) }, 1000)
    return () => { // On unmount
      return clearInterval(tid)
    }
  }, [])
  

  const [usersName, setUsersName] = useState('') // ['', (newUsersName) => {/*...*/}]
  useEffect(() => {
    console.log('User\'s name changed: ' + usersName)
  }, [usersName])

  const [count, setCount] = useState(0) // [0, (newCount) => {/*...*/}]
  useEffect(() => {
    console.log('Count changed: ' + count)
  }, [count])

    
  // Clock
  const hours = `${date.getHours()}`.padStart(2, '0')
  const minutes = `${date.getMinutes()}`.padStart(2, '0')
  const seconds = `${date.getSeconds()}`.padStart(2, '0')
  const clock = `${hours}:${minutes}:${seconds}`

  return (<div>
      <h1>Clock: {clock}</h1>
      <h2>Hello { props.name || 'World'}</h2>
      <p>You've clicked { count } times!</p>
      <button onClick={() => { setCount(count + 1) }}>Click me!</button>
      <p>Nice to meet you. My name's { usersName }</p>
      <input type="text" value={usersName} onChange={(e) => setUsersName(e.target.value) } />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  { /* <App /> */ }
  { /* <MyComponent name="Gawee" /> */ }
    <MyComponent2 name="Gawee" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();