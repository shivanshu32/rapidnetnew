import React from 'react';
import CountUpContent from '../common/counter/CountUpContent';

const AboutFactSection = () => {
    const counters = [
        {
            countNum: 50,
            countTitle: 'Network Coverage Areas',
            countSign: '+'
        },
        {
            countNum: 25,
            countTitle: 'Happy Customers',
            countSign: 'K+'
        },
        {
            countNum: 23,
            countTitle: 'Experienced Employees',
            countSign: 'K+'
        },
        {
            countNum: 10,
            countTitle: 'Certificate & Awards Winner',
            countSign: '+'
        }
    ];
    return (
        <section className="counter-area pt-115 pb-65">
            <div className="container">
                <div className="row">
                    {counters && counters.map((item, index) => (
                        <div className="col-lg-3 col-sm-6" key={index}>
                            <div className="counter-item">
                                <h2 className="title"><span className="odometer"><CountUpContent number={item.countNum}></CountUpContent></span>{item.countSign}</h2>
                                <p>{item.countTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutFactSection;