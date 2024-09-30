import React from "react";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import LowerBody from "./LowerBody";
import Footer from "./Footer";
  export default function Body(){
    let [picture, setPicture] = useState([]);
    let [search, setSearch] = useState(["search"])
    useEffect(() =>{
      fetch("https://pixabay.com/api/?key=46193706-4e881426d33fe27ebcb24f42a&q=${Search}+flowers&image_type=photo&pretty=true").then(res=>res.json()).then(val=>(setPicture(val.hits)))
    },[search])
    
    function fetchData(e){
      setSearch(e.target.value)
    }
    return (
      <>
          <div id="nav-container">
            <nav>
              <h2>Pixabay</h2>
              <ul id="explore">
                <li>Explore</li>
                <Link to="/login"><li className="nav-item">Login</li></Link>
                <Link to="/join"><li className="nav-item">Join</li></Link>

                <li id="upload">Upload</li>
              </ul>
            </nav>

            <div id="content">
              <h1>Stunning royalty-free images & royalty-free stock</h1>
              <p>Over 5 million+ high-quality stock images, videos, and music shared by our talented community.</p>
              <input className='searchBar' type="text" placeholder="Search for all images on Pixabay" onChange={fetchData}/>
            </div>
            <div id="footer-text">
              <ul>
                <li>Read more about the Content License</li>
                <li>Free image by jplenio</li>
              </ul>
            </div>
          </div>
          <div className="navigation-buttons">
                <button className="btn-style"> <i class="fa-solid fa-house"></i>   Home</button>
                <button className="btn-style"> <i class="fa-solid fa-image"></i>  Photos</button>
                <button className="btn-style"><i class="fa-solid fa-paintbrush"></i>  Illustrations</button>
                <button className="btn-style"> <i class="fa-solid fa-pen-nib"></i>   Vector</button>
                <button className="btn-style"> <i class="fa-solid fa-video"></i> Videos</button>
                <button className="btn-style"> <i class="fa-solid fa-music"></i>  Music</button>
                <button className="btn-style"> <i class="fa-solid fa-podcast"></i> Sound Effects</button>
                <button className="btn-style"><i class="fa-solid fa-fire"></i>  GIFS</button>
            </div> <br /> <br />

            
                <div className="suggestion-buttons">
                    <button className="btn-style1"> Background</button>
                    <button className="btn-style1">Wallpaper</button>
                    <button className="btn-style1">Flowers</button>
                    <button className="btn-style1">Woman</button>
                    <button className="btn-style1">Landscape</button>
                    <button className="btn-style1">People</button>
                    <button className="btn-style1">Money</button>
                    <button className="btn-style1">Sea</button>
                    <button className="btn-style1">Travel</button>
                    <button className="btn-style1">School</button>
                    <button className="btn-style1">House</button>
                    <button className="btn-style1">Iphone Wallpaper</button>
                </div>

                <div id="setting">
                    <i class="fa-solid fa-gear"></i> 
                    <button className="right">Editor's Choice</button>
                </div> <br /> <br /> 

          <div id="img-container">
           {picture.filter((x)=>x.tags.toLowerCase().includes(search)).map((x)=>{
            return(
              <>
                <img src={x.webformatURL} alt="WebSearchResult" id="image"/>
              </>
            )
           })}            
          </div>
          <br />
          <br />
          <hr />
          <LowerBody/>
          <Footer/>
        </>
      );
    }