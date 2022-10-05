import React from "react";
import {useNavigate } from "react-router-dom";

const Player = ({ player, handleDelete }) => {
  const { name, description, img , _id } = player;

  const navigate = useNavigate()
  const navigateToPlayerInfoPage = (id) =>{
    navigate(`player/${id}`)
  }


  return (
    <div className="card max-w-sm md:max-w-md bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">
    <img className="h-60 w-full rounded-lg" src={img} alt="Shoes" />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="">
    <button onClick={() =>navigateToPlayerInfoPage(_id)} className="btn btn-primary">More Info</button>
    <button  onClick={() =>handleDelete(_id)} className="btn btn-primary ml-5">Delete</button>
    </div>
  </div>
</div>
  );
};

export default Player;
