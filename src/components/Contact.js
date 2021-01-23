import React from 'react'
import bgImage from './hire.png'
const Contact = () =>(
    <div><section style = {{
        width: "100%",
        height: "400px",
        backgroundImage :  "URL("+ bgImage +")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize: "cover"
        }}>
        <div className="container-custom">
            <div className="hiretext"> 
                <h2 className="h1">Get in Touch</h2>
                <p>Want to discuss your project<br/> or partnership? I'm always ready to help.</p>
            </div>
        </div>
    </section>
    <section>
        <div className="container-custom">
            <div className="row">
                <div className="col-md-12"><h2>Hello this is contact form upcoming</h2></div>
            </div>
        </div>
    </section>
    </div>
)
   
export default Contact