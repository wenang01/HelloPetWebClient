import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';

import Disease from './Disease';
import Chart from './Chart';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./analyse.css";

let classifier;
// let imageModelURL = 'https://teachablemachine.withgoogle.com/models/3JipF7UGm/';

const Analyse = () => {

    // let analyzeResult = {
    //     diseases: []
    // }

    const videoRef = useRef();
    const [start, setStart] = useState(false);
    const [result, setResult] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        classifier = ml5.imageClassifier("./model/model.json", () => {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: false })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                    setLoaded(true);
                });
        });
    }, []);

    useInterval(() => {
        if (classifier && start) {
            classifier.classify(videoRef.current, (error, results) => {
                if (error) {
                    console.error(error);
                    return;
                }
                setResult(results);
                // this.analyzeResult({ diseases: results })
                // console.log(this.state.diseases)
            });
        }
    }, 500);

    const toggle = () => {
        setStart(!start);
        setResult([]);
    }

    // console.log("penyakit : " + result)
    result.map((elem) => {
        let penyakit = elem.label
        let persentase = elem.confidence
        console.log("Result Map : " + penyakit + " Akurasi Kemungkinan " + persentase)
    })

    return (
        <div className="container">
            <Loader
                type="Watch"
                color="#00BFFF"
                height={200}
                width={200}
                visible={!loaded}
                style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
            />
            <div className="upper">
                <div className="capture">
                    <video
                        ref={videoRef}
                        style={{ transform: "scale(-1, 1)" }}
                        width="300"
                        height="150"
                    />
                    {loaded && (
                        <button onClick={() => toggle()}>
                            {start ? "Stop" : "Start"}
                        </button>
                    )}
                </div>
                {result.length > 0 && (
                    <div>
                        <Chart data={result[0]} />
                    </div>
                )}
            </div>
            {result.length > 0 && (
                <div className="results">
                    <Disease data={result} />
                </div>
            )}
        </div>
    );
}

export default Analyse
