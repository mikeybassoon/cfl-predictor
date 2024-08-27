import {useState} from 'react';

function ContentSeasonStandings() {
  const [displayPage, setDisplayPage] = useState("regular-season");
  return(
      <div>
          <SeasonStandingsNavBar setDisplayPage = {setDisplayPage} />
          <SeasonTable displayPage={displayPage} />
      </div>
  );
}

function SeasonStandingsNavBar(props) {
  return(
    <div className="ButtonStrip">
      <SeasonStandingsNavButton 
        text='Regular Season Rankings'
        setDisplayPage = {props.setDisplayPage}
        pageName='pageA'
      />
      <SeasonStandingsNavButton
        text='Crossover'
        setDisplayPage = {props.setDisplayPage}
        pageName='pageB'
      />
    </div> 
  );  
}

function SeasonStandingsNavButton(props) {
  function handleClick(){
    props.setDisplayPage(props.pageName);
  }
  return(
    <button onClick={handleClick}>
      {props.text}
    </button>
  );
}

function SeasonTable(props) {
  if(props.displayPage === 'pageA') return(<p>Page A</p>);
  else if (props.displayPage === 'pageB') return(<p>Page B</p>);
  else return(<p>Error</p>);
}

export {
  ContentSeasonStandings
};