import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, withStyles, Switch } from "@material-ui/core";

import Header from "./components/Header";
import "./App.css";
import Definitions from "./components/Definitions";
import { grey } from "@material-ui/core/colors";

function App() {
  const [word, setword] = useState("");
  const [category, setCategory] = useState("en");
  const [meanings, setMeanings] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const dictornaryApi = async () => {
    const data = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
    );
    setMeanings(data.data);

    try {
    } catch (err) {
      console.log("errr", err);
    }
  };

  const ThemeSwitch = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    dictornaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "white" : "#282c34",
        color: lightMode ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container maxWidth="md" className="mainContainer">
        <div className="themeSwitchContainer">
          <span>{lightMode ? "Light" : "Dark"} Mode</span>
          <ThemeSwitch
            checked={lightMode}
            onChange={() => {
              setLightMode(!lightMode);
            }}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setword={setword}
          lightMode={lightMode}
        />
        {meanings && (
          <Definitions
            word={word}
            lightMode={lightMode}
            category={category}
            meanings={meanings}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
