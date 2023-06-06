import React from "react";
import CV from '../../assests/cv.pdf'
const CTA = () =>{
    return(
        <div className="cta">
            <a href={CV} download className="btn">Download CSV</a>
            <a href="#contact" className="btn btn-primary">Vamos conversar</a>
        </div>
    )
}
export default CTA