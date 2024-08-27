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

function CrossoverRankingTable() {
  return(
    <div>
      <h2>Season Rankings - Crossover</h2>
    </div>
  );
}

function RegularRankingTable() {
  return(
    <div>
      <h2>Season Rankings - Regular</h2>
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
  if(props.displayPage === 'pageA') return(<RegularRankingTable />);
  else if (props.displayPage === 'pageB') return(<CrossoverRankingTable />);
}

export {
  ContentSeasonStandings
};