import React from 'react';
import usePlayerInfo from '../../hook/usePlayerInfo';

const About = () => {
    const [products] = usePlayerInfo(2)
    return (
        <div>
            <h2>This is about page: {products.length} </h2>
        </div>
    );
};

export default About;