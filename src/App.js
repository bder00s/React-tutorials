import "./styles.css";

function App() {
  // const firstName = "Bonne";
  // const lastName = "de Roos"
  // const currentDate = new Date();
  // const year = currentDate.getFullYear();

  const pancakes =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsweetpeaskitchen.com%2Fwp-content%2Fuploads%2F2019%2F09%2FOrange-Ricotta-Pancakes1.jpg&f=1&nofb=1";
  const pizza =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F05%2FGarden-Fresh-Grilled-Veggie-Pizza_EXPS_SDJJ18_215090_B02_13_3b-2.jpg&f=1&nofb=1";
  const oatmeal =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestfolkmedicine.com%2Fwp-content%2Fuploads%2F2019%2F12%2Foats.jpg&f=1&nofb=1";

  return (
    <div className="App">
      <h1 className="header">My Favorite food</h1>
      <div className="food-images">
        <img src={pancakes} alt="pancakes" />
        <img src={pizza} alt="pizza" />
        <img src={oatmeal} alt="oatmeal" />
      </div>
    </div>
  );
}

export default App;
