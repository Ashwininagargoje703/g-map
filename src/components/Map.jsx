import React, { useState } from "react";
import "./map.css";
import axios from "axios"

export const Map = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
 
  return (
    <>
      <div className="navbar">
        <input type="text" placeholder="search..." onChange={handleChange} />
       
      </div>

      <section>
      <iframe
            width="900"
            height="450"
            id="gmap_canvas"
            src ={`https://maps.google.com/maps?q=${search}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameborder="0"
            
          ></iframe>`;
      </section>
    </>
  );
};
