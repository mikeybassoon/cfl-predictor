import './App.css';
import {useState} from 'react';


function App() {
  return (
    <div className="App">
      <header className="Title">
        <h1>CFL Season Predictor</h1>
      </header>
      <header className="NavBar">
        <NavigationBar />
      </header>
      <section className="Content">
        <ContentPage />
      </section>
    </div>
  );
}

function NavigationBar() {
  return(
    <div className="ButtonStrip">
      <button>Season Standings</button>
      <button>Test</button>
    </div> 
  );  
}

function ContentPage() {
  const [displayPage, setDisplayPage] = useState("season-standings"); // State to control which page of app is displayed
  if(displayPage == "season-standings") return <ContentSeasonStandings />
  else if(displayPage == "test") return <ContentTestPage />
  else return <p>Error - invalid page name</p>
}

function ContentSeasonStandings() {
  return(
    <p>
      This is the content pane for Season Standings.
    </p>
  );
}

function ContentTestPage() {
  return(
    <p>
      This is the test page!
    </p>
  );
}

export default App;
