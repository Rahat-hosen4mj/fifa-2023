import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
// import product from '../../src/product.json'

const Filter = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])

//   useEffect(() => {
//     fetch(`http://localhost:5000/product`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data)
//         setCategories(data)});
//   }, []);

const loadProducts = () => {
    const allProduct = categories;
    setProducts(allProduct)
  }
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res => res.json())
    .then(data => {
    setCategories(data)
      setProducts(data)
    })
  },[]);

  const handleFilter = (e) =>{
    if(e.target.value){
        const match = categories.filter(c => c.category.includes(e.target.value))
        setProducts(match)
    }
    else{
        loadProducts()
    }
  }

  const handleClr = () =>{
    loadProducts()
  }
  return (
    <>
      <div className="overflow-x-auto w-4/5 mt-12 mx-auto mb-22">
        <div className="flex place-content-between">
          <div className="flex">
            <select onChange={(e) => handleFilter(e)} className=" bg-white border border-black rounded w-32 ml-12 mb-4 mt-2">
              <option disabled selected>
                category
              </option>
               {
                categories?.map(p => <option key={p._id}>{p.category}</option>)
               }
            </select>
           
          </div>
          <div onClick={handleClr}>
                <button className="btn btn-primary">Reset</button>
          </div>

          <div className="flex">
            <div className="form-control mr-12">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <a href="#checkout" className="btn btn-info mr-12">
              ADD To Cart
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <table className="table w-full">
          <thead className="h-">
            <tr className="">
              <th className="flex">
                <p className="mx-4">Image</p>
                <p className="ml-12">Name</p>
              </th>

              <th>color</th>
              <th>Stock</th>
              <th>price</th>
             
            </tr>
          </thead>

          <tbody>
            {products?.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Filter;
