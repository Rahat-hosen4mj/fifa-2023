import { useEffect } from 'react';
import { useState } from 'react';

const usePlayerInfo = (playerId) => {
    const [playerInfo, setPlayerInfo] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:5000/player/${playerId}`)
        .then(res => res.json())
        .then(data => setPlayerInfo(data))
    },[playerId])
    return  [playerInfo];
};

export default usePlayerInfo;