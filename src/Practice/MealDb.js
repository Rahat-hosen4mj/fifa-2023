import { click } from "@testing-library/user-event/dist/click";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const MealDb = () => {
  const [meals, setMeals] = useState([]);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef('')

  const handleSearchText = (event) => {
    if (event.key === "Enter") {
      setSearchText(event.target.value);
    }
  };
  const handleSearch = (event) =>{
    event.preventDefault();
    setSearchText(inputRef.current.value)
    
    // setSearchText(name)
    // console.log(event.target.food.value);
  }
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data?.meals));
  }, [searchText]);

  return (
    <>
      <h2>Serarh your desire food</h2>

      <form onSubmit={handleSearch}>
        <input
          name='food'
          ref={inputRef}
          type="text"
          onKeyDown={handleSearchText}
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs my-3"
        />{" "}
        <input className="btn btn-primary" type="submit" value="Search" />
      </form>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {meals?.map((meal, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={meal.strMealThumb}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {meal.strMeal.length > 15
                          ? meal.strMeal
                          : `${meal.strMeal.slice(0, 15)}`}
                      </div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MealDb;
