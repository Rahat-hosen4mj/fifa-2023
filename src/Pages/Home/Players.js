import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Player from "./Player";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/player")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  
  const handleDelete = (id) =>{
    const proceed = window.confirm('are you sure to delete');
    if(proceed){
      fetch(`http://localhost:5000/player/${id}`,{
          method: 'DELETE'
      })
      .then(res =>res.json())
      .then(data => {
        console.log(data);
        const remain = players.filter(player => player._id !== id);
        setPlayers(remain);
        toast.success('Player Delete successfully')
      })
    }
  }
  return (
    <>
      <div className=" bg-white px-6 md:px-10 py-10 md:py-12">
        <div className="grid md:grid-cols-3 gap-5">
          {players?.map((player) => (
            <Player player={player} key={player._id} handleDelete={handleDelete}></Player>
          ))}
        </div>
        <div className="btn-group mt-5">
          <button className="btn btn-sm btn-active">1</button>
          <button className="btn btn-sm ">2</button>
          <button className="btn btn-sm">3</button>
          <button className="btn btn-sm">4</button>
        </div>
      </div>
    </>
  );
};

export default Players;
