import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';
import Diagnose from './Diagnose'

let classifier;
// let imageModelURL = 'https://teachablemachine.withgoogle.com/models/3JipF7UGm/';

const Analyse = () => {

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
            });
        }
    }, 500);

    const toggle = () => {
        setStart(!start);
        setResult([]);
    }

    return (
        <div className='page-content'>
            <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'center', marginTop: '5px' }}>

                <div className="text-center" style={{ margin: 10 }}>
                    <div className="card" style={{ borderRadius: 10 }}>
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <Loader
                            type="Watch"
                            color="#00BFFF"
                            height={200}
                            width={200}
                            visible={!loaded}
                            style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
                        />
                        <video className="card-img rounded"
                            ref={videoRef}
                            style={{ transform: "scale(-1, 1)", borderRadius: 10 }}
                            width="600"
                            height="300"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Rekam Hewan Peliharaan di tempat yang cukup pencahayaan.
                                Rekam Hewan Peliharaan ada secara menyeluruh.
                            </p>
                        </div>
                        <div className="text-center" style={{ textDecorationColor: "black" }}>
                            {result.length > 0 && (
                                <Diagnose data={result[0]} />
                            )}
                        </div>
                        <div className="card-body">
                            {loaded && (
                                <button type="button" className="btn btn-primary" onClick={() => toggle()}>
                                    {start ? "Stop" : "Start"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>










            {/* {result.pop}
            <div className="row justify-content-md-center" style={{ margin: 10 }}>
                <div className="col"></div>
                <div className="col col-md-6" style={{ borderRadius: 10 }}>
                    <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'center' }}>
                        <img src="images/HelloPetsLogo.png" alt="" style={{ width: 200, height: 200 }} />
                    </div>
                    <div className="text-center" style={{ margin: 10 }}>
                        <div className="card border border-dark" style={{ borderRadius: 10 }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <Loader
                                type="Watch"
                                color="#00BFFF"
                                height={200}
                                width={200}
                                visible={!loaded}
                                style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
                            />
                            <video className="card-img"
                                ref={videoRef}
                                style={{ transform: "scale(-1, 1)", borderRadius: 10, marginTop: 10 }}
                                width="600"
                                height="300"
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Rekam Hewan Peliharaan di tempat yang cukup pencahayaan.
                                    Rekam Hewan Peliharaan ada secara menyeluruh.
                                </p>
                            </div>
                            <div className="text-center" style={{ textDecorationColor: "black" }}>
                                {result.length > 0 && (
                                    <Diagnose data={result[0]} />
                                )}
                            </div>
                            <div className="card-body">
                                {loaded && (
                                    <button type="button" className="btn btn-primary" onClick={() => toggle()}>
                                        {start ? "Stop" : "Start"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div> */}
        </div >
    );
}

export default Analyse
