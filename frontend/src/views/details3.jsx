import { Link } from "react-router-dom"


function Details3 () {
    return(
         
    <div>
    <div class="container">
        <div class="content-slide" />
        <div class="imgslide fade" />
        <div class="numberslide"></div>
        <img src="images/honey1.jpg" alt=""/>
    </div>

    <div class="imgslide fade">
        <div class="numberslide"></div>
        <img src="images/honey2.jpg" alt=""/>
    </div>

    <div class="imgslide fade">
        <div class="numberslide"></div>
        <img src="images/honey3.jpg" alt=""/>
    </div>

    <div class="imgslide fade">
        <div class="numberslide"></div>
        <img src="images/honey4.jpg" alt=""/>
    </div>

    <div class="imgslide fade">
        <div class="numberslide"></div>
        <img src="images/honey5.jpg" alt=""/>
    </div>

    <div class="imgslide fade">
        <div class="numberslide"></div>
        <img src="images/honey6.jpg" alt=""/>
    </div>

    <a class="prev" onClick="nextslide(-1)">&#10094;</a>
    <a class="next" onClick="nextslide(1)">&#10095;</a>
<div class="page">
        <span class="dot" onClick="dotslide(1)"></span>
        <span class="dot" onClick="dotslide(2)"></span>
        <span class="dot" onClick="dotslide(3)"></span>
        <span class="dot" onClick="dotslide(4)"></span>
        <span class="dot" onClick="dotslide(5)"></span>
        <span class="dot" onClick="dotslide(6)"></span>
    </div>
<div class="titfac" id="details1">
    <h3 class="section-tittle2">HoneyMoon Suite</h3>
    <div class="price"> Rp 2.590.000 </div>
</div>
<div class="room1">
    <ul>
      <li><i class='fas fa-snowflake'></i> AC</li>
      <li><i class='fas fa-check-circle'></i> Separate Air Conditioner</li>
      <li><i class='fas fa-prescription-bottle'></i> Bottled Mineral Water</li>
      <li><i class='fas fa-wifi'></i> Free Wifi Acces</li>
      <li><i class='fas fa-smoking'></i> Smoking Area</li>
    </ul>
  </div>
  <Link className="btn" to={'/book'}> Book</Link>
</div>
    )
   
}

export default Details3