import './App.css';

import {useState} from 'react';

import {ApiEngine} from './ApiEngine.js';


function App() {
  const apiEngine = new ApiEngine();
  return (
    <div className="App">
      <header className="Title">
        <h1>CFL Season Predictor</h1>
      </header>
      <header className="NavBar">
        <NavigationBar />
      </header>
      <section className="Content">
        <ContentPage 
          apiEngine={apiEngine}
        />
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

function ContentPage(props) {
  const [displayPage, setDisplayPage] = useState("season-standings"); // State to control which page of app is displayed
  if(displayPage === "season-standings") {
    return <ContentSeasonStandings 
      apiEngine={props.apiEngine}
    />
  }
  else if(displayPage === "test") return <ContentTestPage />
  else return <p>Error - invalid page name</p>
}

function ContentSeasonStandings(props) {
  const data = props.apiEngine.GetSeasonStandings(new Date().getFullYear);
  return(
    <div>
      <p>
      This is the content pane for Season Standings.
    </p>
    <p>
      {data.toString}
    </p>
    </div>
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
