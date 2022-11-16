import './App.css'
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import TestClock from "./components/TestClock";
import Toggle from "./components/TestToggle"
import BookData from "./data.json"
import RatingBox from "./components/ratingbox/RatingBox"

function App() {
  return (
    <div className="App">
     <Header />
     <SearchBar placeholder="Enter a Book Name..." data={BookData}/>
     <div className="content">
      <Toggle/>
      <TestClock/>
     </div>

  </div>
  );
}

export default App;
