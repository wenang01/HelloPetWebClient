import React from "react";
import { ProgressBar } from 'react-bootstrap';
// import GaugeChart from "react-gauge-chart";

const Diagnose = (props) => {
    const data = props.data;
    const label = data.label;
    const confidence = parseFloat(data.confidence.toFixed(2) * 100);
    // console.log(label, confidence);
    return (
        <div className="text-center">
            <h5 className="text-center text-dark" style={{ textDecorationColor: "black" }}>Result: {label} </h5>
            <ProgressBar className="border border-dark" now={confidence} label={`${confidence}%`} style={{ borderRadius: 4, margin: 10 }} />
        </div >
    );
};
export default Diagnose;
