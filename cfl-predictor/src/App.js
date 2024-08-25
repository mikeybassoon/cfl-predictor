import './App.css';

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

function ContentPage() {
  return (
    <p>
      This is a Content Pane. Its form and function will change according to what button is clicked in the Navigation Bar.
    </p>
  );
}

function NavigationBar() {
  return(
    <button>Season Standings</button>
  );  
}

export default App;
