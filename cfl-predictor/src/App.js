import './App.css';

function App() {
  let contentType = "season-standings";
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
          type={contentType}
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
  if(props.type == "season-standings") return <ContentSeasonStandings />
  else if(props.type == "test") return <ContentTestPage />
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
