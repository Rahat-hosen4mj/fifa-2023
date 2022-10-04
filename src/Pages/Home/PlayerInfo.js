import React from 'react';
import { useParams } from 'react-router-dom';
import usePlayerInfo from '../../hook/usePlayerInfo';

const PlayerInfo = () => {
    const {playerId} =  useParams();
    const [playerInfo] = usePlayerInfo(playerId);
    const { name } = playerInfo;
    return (
        <div>
            <h2>This is Info for = {name} </h2>
        </div>
    );
};

export default PlayerInfo;