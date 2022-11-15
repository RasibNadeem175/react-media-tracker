import Header from "./components/Header";

function App() {
  const name = 'Brad'
  const  x = true
  return (
    <div className="container">
     <Header />
     <h1>Hello From React</h1>
     <h1>Hello {x ? 'yes': 'no'}</h1>
    </div>
  );
}

export default App;
