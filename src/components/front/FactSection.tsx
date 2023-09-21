import React from "react";
import CountUpContent from "../common/counter/CountUpContent";


const FactSection = () => {

    const counters = [
        {
            countNum: 4,
            countTitle: 'Ultra HD Quality',
            countSign: 'K'
        },
        {
            countNum: 90,
            countTitle: 'Online TV Channels',
            countSign: '+'
        },
        {
            countNum: 350,
            countTitle: 'Mbps Speed Internet',
            countSign: '+'
        }
    ];

    return (
        <div className="fact-wrap">
            <div className="row">
                {counters && counters.map((item, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                        <div className="fact-item">
                            <h4 className="title"><span className="odometer"><CountUpContent number={item.countNum}></CountUpContent></span>{item.countSign}</h4>
                            <p>{item.countTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FactSection;