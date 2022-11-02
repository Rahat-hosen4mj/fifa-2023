import React from 'react';
import { useParams } from 'react-router-dom';
import usePlayerInfo from '../../hook/usePlayerInfo';

const PlayerInfo = () => {
    const {playerId} =  useParams();
    // console.log('player id from player info', playerId)
    const [playerInfo] = usePlayerInfo(playerId);
    const { name,img,description } = playerInfo;
    return (
      
        <div className="hero max-h-screen max-w-3xl box-border sm:p-6 md:p-0 mx-auto mt-9  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <button className="btn btn-primary">Hire</button>
          </div>
        </div>
      </div>
     
    );
};

export default PlayerInfo;