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
      <DivisionTable divisionName='West Division' />
      <DivisionTable divisionName='East Division' />
    </div>
  );
}

function DivisionTable(props){
  const rows = []; // placeholder for actual division ranking data

  //TESTING CODE ONLY
  rows.push(
    <DivisionTableRow 
      rank={1}
      teamName='Saskatchewan Roughriders'
      games={5}
      wins={3}
      losses={1}
      ties={1}
    />
  );

  return(
    <div>
      <h3>{props.divisionName}</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Games</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Ties</th>
          </tr>
        </thead>
        <tbody>
          <DivisionTableBody rows={rows} />
        </tbody>    
      </table>
    </div>
  );
}

function DivisionTableBody(props) {
  const rows = props.rows;
  for(let i=0; i<rows.length; i++){
    const row=rows[i].props;
    return(
      <DivisionTableRow 
        rank={row.rank}
        teamName={row.teamName}
        games={row.games}
        wins={row.wins}
        losses={row.losses}
        ties={row.ties}
      />
    )
  }
}

function DivisionTableRow(props) {
  return(
    <tr>
      <td>{props.rank}</td>
      <td>{props.teamName}</td>
      <td>{props.games}</td>
      <td>{props.wins}</td>
      <td>{props.losses}</td>
      <td>{props.ties}</td>
    </tr>
  )
}

function RegularRankingTable() {
  return(
    <div>
      <h2>Season Rankings - Regular</h2>
      <DivisionTable divisionName='West Division' />
      <DivisionTable divisionName='East Division' />
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