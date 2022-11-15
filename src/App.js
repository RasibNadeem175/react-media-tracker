import './App.css'
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TestClock from "./components/TestClock";
import Toggle from "./components/TestToggle"
import BookData from "./data.json"

function App() {
  const name = 'Brad'
  const  x = true
  return (
    <div className="container">
     <Header />
     <h1>Hello From App.js</h1>
     <Toggle/>
     <TestClock/>
     <SearchBar placeholder="Enter a Book Name..." data={BookData}/>
  </div>
  );
}

export default App;
