import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../Helper/Contexts";


function MainMenu() {
  const { setGameState,  setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="menu">
      <label className="name">Enter Your Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;