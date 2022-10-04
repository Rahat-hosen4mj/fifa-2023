import React from 'react';
import { useParams } from 'react-router-dom';

const UpcomingInfo = () => {
    const {upcomeingInfo} =  useParams()
    return (
        <div>
            <h2>This is upcoming info for {upcomeingInfo}</h2>
        </div>
    );
};

export default UpcomingInfo;