import React from 'react'
import { Link } from "react-router-dom";

function footer() {
    return (
        <footer>
            <div className="container" style={{ border: 'black', borderWidth: '2px' }}>
                <div className="row" style={{ border: '#0664A8' }}>
                    <div className="col-6">
                        <div style={{ marginTop: '5px' }}>
                            <img src={"assets/images/hellopetslogo.png"} alt="" style={{ width: '100px', height: '100px' }} />
                        </div>
                        <p className="pt-4 pb-2">
                            Memberi pelayanan yang memuaskan untuk
                            hewan kesayangan anda.
                        </p>
                    </div>
                    <div className="col-6">
                        <h3>Company</h3>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/">About Us</Link></p>
                        <p><Link to="/">Services</Link></p>
                        <p><Link to="/">Contact Us</Link></p>
                    </div>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col-12 text-center" style={{ border: '#0664A8' }}>
                        <p className="pt-4 pb-2">
                            2019 Copyright Store. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
