import React, { useState } from "react";
import "./dict.css";
import Loader from "../Spinner/Loader";

function Dictionary(props) {
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMeaning = async (cnt) => {
    setLoading(true);
    setWordData([]);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
    let res = await fetch(url);
    let data = await res.json();
    setLoading(false);
    setWordData(data);
    console.log(wordData);
  };

  const capitalFirstWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  return (
    <div className="my-5 p-0 m-0">
      <div className="container d-flex flex-column justify-content-center">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search A Word"
            aria-label="Search"
            value={props.word}
            onChange={(e) => {
              props.setWord(e.target.value);
            }}
          />
          <button
            className="btn btn-dark"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              getMeaning(props.country);
            }}
          >
            Search
          </button>
        </form>
        <div className="container my-4">
          <h2 className="text-center my-3 text-muted">Your Word:</h2>
          <h1 className="text-center my-3">{props.word.toUpperCase()}</h1>
        </div>
      </div>
      {loading && <Loader />}
      {!loading && wordData.length === 0 && (
        <div className="container d-flex justify-content-center">
          <img
            className="images"
            src="https://source.unsplash.com/1600x1600/?dictionary"
            alt="Covid"
          />
        </div>
      )}
      {wordData.length && (
        <div className="container border border-dark rounded">
          <div className="container meaning border border-muted rounded my-2 ">
            <h4 className="text-left ml-2 my-1">
              <strong>Meaning</strong>
            </h4>
            {wordData[0].meanings[0].definitions.map((mean, index) => {
              return (
                <>
                  {mean.definition && (
                    <h5 className="text-left ml-5 my-2">
                      &emsp;&emsp;&emsp;{index + 1}.{" "}
                      {capitalFirstWord(mean.definition)}
                    </h5>
                  )}
                </>
              );
            })}
          </div>
          <div className="container meaning border border-muted rounded my-2 ">
            <h4 className="text-left ml-2 my-1">
              <strong>Origin</strong>
            </h4>
            {wordData[0].origin && (
              <h5 className="text-justify ml-5 my-2 origin">
                &emsp;&emsp;&emsp;{capitalFirstWord(wordData[0].origin)}
              </h5>
            )}
          </div>
          <div className="container meaning border border-muted rounded my-2 ">
            <h4 className="text-left ml-2 my-1">
              <strong>Synonyms</strong>
            </h4>
            <div>
              {wordData[0].meanings[0].definitions.map((mean, index) => {
                return (
                  <>
                    {mean.synonyms && (
                      <div className="d-flex flex-wrap">
                        {mean.synonyms.map((syn, idx) => {
                          return (
                            <div className="d-flex my-1 flex-wrap">
                              {index === 0 && idx === 0 ? (
                                <div>
                                  &emsp;&emsp;&emsp;{" "}
                                  <span className="badge syno mx-1 rounded-pill bg-dark">
                                    {syn}
                                  </span>
                                </div>
                              ) : (
                                <span className="badge syno mx-1 rounded-pill bg-dark">
                                  {syn}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <div className="container meaning border border-muted rounded my-2 ">
              <h4 className="text-left ml-2 my-1">
                <strong>Use in a Sentence</strong>
              </h4>
              {wordData[0].meanings[0].definitions.map((mean, index) => {
                return (
                  <>
                    {mean.example && (
                      <h5 className="text-left ml-5 my-2">
                        &emsp;&emsp;&emsp;{index + 1}.{" "}
                        {capitalFirstWord(mean.example)}
                      </h5>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
