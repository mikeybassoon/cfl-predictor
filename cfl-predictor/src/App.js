import './App.css';
import {useState} from 'react';


function App() {
  return (
    <div className="App">
      <header className="Title">
        <h1>CFL Season Predictor</h1>
      </header>
      <section>
        <ContentWindow />
      </section>
    </div>
  );
}

function ContentWindow() {
  const [displayPage, setDisplayPage] = useState("season-standings"); // State to control which page of app is displayed
  return (
    <div>
      <header className="NavBar">
        <NavigationBar />
      </header>
      <section className="ContentPane">
        <ContentPage 
          pageName={displayPage}
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
  if(props.pageName === "season-standings") {
    return <ContentSeasonStandings />
  }
  else if(props.pageName === "test") return <ContentTestPage />
  else return <p>Error - invalid page name</p>
}

function ContentSeasonStandings() {
  return(
    <div>
      <p>
      This is the content pane for Season Standings.
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
