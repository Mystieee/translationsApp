import React, { Component } from "react";
import "./App.css";

export default class CountriesList extends Component {
  render() {
    const countriesJson = require("./countries.json");
    // console.log(countriesJson);

    //console.log(countriesJson.map(x => x.translations));

    // console.log(
    //   countriesJson
    //     .filter(x => x.translations[this.props.translationValue] !== undefined)
    //     .map(y => y.translations[this.props.translationValue].official)
    // );

    // console.log(
    //   Object.values(
    //     countriesJson.map(x => x.translations[this.props.translationValue])
    //   ).every(e => e === undefined)
    // );

    Object.values(
      countriesJson.map(x => x.translations[this.props.translationValue])
    ).every(e => e === undefined);

    return (
      <div className="tableDiv">
        <table>
          <thead>
            <tr>
              <th
                style={{ fontStyle: "italic", textDecorationLine: "underline" }}
              >
                Official Country name using translation:{" "}
                {this.props.translationValue}
              </th>
            </tr>
          </thead>
          <tbody>
            {countriesJson
              .filter(
                data =>
                  data.translations[this.props.translationValue] !== undefined
              )
              .map((filteredData, i) => (
                <tr key={i}>
                  <td style={{ textAlign: "justify" }}>
                    {
                      filteredData.translations[this.props.translationValue]
                        .official
                    }
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
