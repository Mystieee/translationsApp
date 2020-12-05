import React, { useState } from "react";
import CountriesList from "./CountriesList.js";

export default function Countries() {
  const [translationValue, setTranslationValue] = useState("");
  const [countryList, setCountryList] = useState(false);
  const [error, seterror] = useState([]);

  const countriesJson = require("./countries.json");

  const onButtonClick = event => {
    event.preventDefault();

    const valueUndefined = Object.values(
      countriesJson.map(x => x.translations[translationValue])
    ).every(e => e === undefined);

    const errors_arr = [];
    seterror(errors_arr);
    if (translationValue.length === 0) {
      errors_arr.push("The parameter is missing from the cli.");
      setCountryList(false);
    } else if (valueUndefined || translationValue.length !== 3) {
      errors_arr.push("The translation key does not exist.");
      setCountryList(false);
    } else {
      setCountryList(true);
    }

    if (errors_arr.length > 0) {
      seterror(errors_arr);
    }
  };

  return (
    <div>
      <div className="container-fluid" style={{ padding: "80px" }}>
        <div
          className="formDiv"
          style={{ position: "fixed", top: 0, width: "300px", padding: "10px" }}
        >
          {error.map(err => (
            <p key={err} className="error-message">
              {err}
            </p>
          ))}
          <form className="form-inline">
            <div className="form-group">
              <input
                type="text"
                name="translationTextValue"
                placeholder="Enter translations"
                className="form-control"
                onChange={e => setTranslationValue(e.target.value)}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onButtonClick}
            >
              Get
            </button>
          </form>
        </div>

        <br />
        {countryList === true ? (
          <CountriesList translationValue={translationValue} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
