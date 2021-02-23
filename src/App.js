import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const Heroes = ['Jhankar Mahbub', 'Rezaul Karim', 'Shoharab', 'Shuvo Saha', 'faysal'];
  const products=[
    {name: 'Photoshopn', price:'$90.96'},
    {name: 'Illustration', price:'$80.96'},
    {name: 'PRemium', price:'$120.96'},
    {name: 'React', price:'$50.96'},
    {name: 'Adobe', price:'$30.96'}
]

const heroNames = Heroes.map(hero => hero);
console.log(heroNames);
const productNames = products.map(product => product.name);
console.log(productNames);

  var person= {
    name: "shoharab",
    job: 'student'
        };
 
  var style = {
    color: 'red',
    backgroundColor: 'white'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter></Counter>
        <Users></Users>
        <h3>Heroes Name</h3>
        <ul>
          {
            Heroes.map(hero => <li>{hero}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(prod => <Product product={prod}></Product>)
        }
        <h1 className="name" style={style}>my heading {person.name}</h1>
        <h1>my heading {person.job}</h1>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <p>I am a react person</p>
        <p>my first react paragraph</p>
        <Person name="Shoharab Pk" pro="web developer"></Person>
        <Person name="Suraiya Nauom" pro="Student"></Person>
        <Person name={Heroes[0]} pro="web developer"></Person>
      </header>
    
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <h2>User Name</h2>
     <ul>
       {
         users.map(user => <li>{user.name}</li>)
       
       }
       </ul>
       <h2>User Email</h2>
       <ul> 
       {
           users.map(user => <li>{user.email}</li>)
       }
     </ul>
     <h2>User Phone No</h2>
       <ul> 
       {
           users.map(user => <li>{user.phone}</li>)
       }
     </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () =>  {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>

    </div>
  )
}

function Product(props) {
  const productStyle ={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left',
    margin: '10px'
  }
const {name, price} = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>BUY NOW</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{border: '5px solid gold', margin:'10px', padding:'10px', width: '500px'}}>
      <h2>My Name: {props.name}</h2>
      <h4>My Profession: {props.pro}</h4>
    </div>
  )
}


export default App;
