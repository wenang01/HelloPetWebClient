import React from "react";

const Disease = (props) => {
  const mostMatched = props.data[0];
  // const results = props.data
  // const resultSet = props.data.map((elem) => elem.confidence);
  // const sortedResults = resultSet.sort((a, b) => a.localeCompare(b));
  const allLabels = props.data.map((elem) => elem.label);
  const sortedLabels = allLabels.sort((a, b) => a.localeCompare(b));
  // const confidence = props.data.map((elem) => parseFloat(elem.confidence.toFixed(2)));
  console.log(props.data);
  return (
    <>
      {/* <ul>
        {props.data.map((elem) => {
          // label
          // confidence
          <li key={elem.label}>
            <p>{elem.label} : {elem.confidence}</p>
          </li>
          console.log(elem.label + " : " + parseFloat(elem.confidence.toFixed(2)))
        })}
      </ul> */}
      {/* <ul className="princes"> */}
      <ul className="princes">
        {sortedLabels.map((label) => (
          <li key={label}>
            <span>
              <img
                className={`img ${label === mostMatched.label ? "selected" : null
                  }`}
                src={
                  label === "No Dolls"
                    ? "./images/No.png"
                    : `./images/${label}.png`
                }
                alt={label}
              />
              {/* <p className="name">{label} : {confidence}</p> */}
              <p className="name">{label}</p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Disease;
