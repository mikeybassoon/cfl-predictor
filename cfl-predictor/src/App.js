import './App.css';

import {useState} from 'react';

import {ContentSeasonStandings} from './PageSeasonStandings';


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
        <NavigationBar 
          setDisplayPage = {setDisplayPage}
        />
      </header>
      <section className="ContentPane">
        <ContentPage 
          pageName={displayPage}
        />
      </section>  
    </div>
  );
}

function NavigationBar(props) {
  return(
    <div className="ButtonStrip">
      <NavButton 
        text='Season Standings'
        setDisplayPage = {props.setDisplayPage}
        pageName='season-standings'
      />
      <NavButton
        text='Testing'
        setDisplayPage = {props.setDisplayPage}
        pageName='test'
      />
    </div> 
  );  
}

function NavButton(props) {
  function handleClick(){
    props.setDisplayPage(props.pageName);
  }
  return(
    <button
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}

function ContentPage(props) {
  if(props.pageName === "season-standings") {
    return <ContentSeasonStandings />
  }
  else if(props.pageName === "test") return <ContentTestPage />
  else return <p>Error - invalid page name</p>
}

function ContentTestPage() {
  return(
    <div>
      <p>
        This is the test page!
      </p>
    </div>   
  );
}

export default App;
