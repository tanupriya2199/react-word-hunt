import React from "react";
import "../App.css";

const Definitions = ({ word, category, meanings, lightMode }) => {
  console.log("meanings===", meanings);

  return (
    <div className="meaningsContainer">
      {meanings[0] && word && category === "en" && (
        <div>
          <audio
            style={{ padding: 0 }}
            className="audio"
            controls
            src={meanings[0]?.phonetics[0]?.audio}
          >
            Your broswer doesn't support audio element
          </audio>
        </div>
      )}
      {word === "" ? (
        <span className="subtitle">Start by typing a word in search...</span>
      ) : (
        meanings.map((data) =>
          data.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr />
                <div>
                  {def.example && (
                    <span>
                      <b>Example : </b>
                      {def.example}
                    </span>
                  )}
                </div>
                <div>
                  {def.synonyms && (
                    <span>
                      <b>Synonyms : </b>
                      {def.synonyms.map((s) => (
                        <span>{s} ,</span>
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
