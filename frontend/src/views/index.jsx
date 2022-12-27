import { Link } from "react-router-dom";


function Index() {
    return (
    <div>
    <div>
    <header class="head">
    <div id="menu-bar" class="fas fa-bars"></div>
    <Link className="logo" to={'/'}>
        
    <span>Check</span>IN
    
         </Link>

    <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#category">Category</a>
        <a href="#facilities">Facilities</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
    </nav>
</header>

<section class="home" id="home">
    <div class="video-container">
        <video src="images/vid-5.mp4" id="video-slider" loop autoplay muted></video>
    </div>

</section>





<section class="category" id="category">

    <h1 class="heading">
        <span>C</span>
        <span>A</span>
        <span>T</span>
        <span>E</span>
        <span>G</span>
        <span>O</span>
        <span>R</span>
        <span>Y</span>
    </h1>

    <div class="box-container">

        <div class="box">
            <img src="images/img-1_.jpg" alt=""/>
            <div class="content">
                <h3> Deluxe King </h3>
                <p>Check in time: 3:00 PM – Check out time: 12:00 PM.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="price"> Rp 1.300.000 <span>Rp 1.600.000</span> </div>
                <Link className="btn" to={'/details1'}> Book</Link>
            </div>
        </div>

        <div class="box">
            <img src="images/img-2.jpg" alt=""/>
            <div class="content">
                <h3>Deluxe Double Queen </h3>
                <p>Check in time: 3:00 PM – Check out time: 12:00 PM.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="price"> Rp 1.500.000 <span>Rp 1.700.000</span> </div>
                <Link className="btn" to={'/details2'}> Book</Link>
            </div>
        </div>

        <div class="box">
            <img src="images/img-3.jpg" alt=""/>
            <div class="content">
                <h3> Honey Moon Suite </h3>
                <p>Check in time: 3:00 PM – Check out time: 12:00 PM.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="price"> Rp 2.590.000 <span> Rp 2.800.000</span> </div>
                <Link className="btn" to={'/details3'}> Book</Link>
            </div>
        </div>


    </div>

</section>


<section class="facilities" id="facilities">

    <h1 class="heading">
        <span>F</span>
        <span>A</span>
        <span>C</span>
        <span>I</span>
        <span>L</span>
        <span>I</span>
        <span>T</span>
        <span>I</span>
        <span>E</span>
        <span>S</span>
    </h1>

    <div class="box-container">

        <div class="box">
            <img src="images/images-1.jpg" alt=""/>
            <div class="content">
                <h3>Chamber</h3>
                <p>Our meeting room features the latest equipment and facilities, while private outdoor areas are available for gatherings beneath the stars.</p>
            </div>
        </div>
        <div class="box">
            <img src="images/images-2.jpg" alt=""/>
            <div class="content">
                <h3>Rooftop</h3>
                <p>With dazzling views over the roof top of the hotel is the perfect place for rendezvous, which offers a warm, and a breathtaking 360 degrees panoramic view of the city of Bandung.</p>
            </div>
        </div>
        <div class="box">
            <img src="images/images-3.jpg" alt=""/>
            <div class="content">
                <h3>Crystal Dining Chamber</h3>
                <p>Crystal Dining Chamber authentic dining cuisine Our specialty and the main dining room provides exclusivity and convenience for both social and business dining.</p>
            </div>
        </div>
        <div class="box">
            <img src="images/images-4.jpg" alt=""/>
            <div class="content">
                <h3>Spa & Message</h3>
                <p>The Spa and Massage service in CheckIN Hotel is designed to complement your stay experience with us to greater heights.</p>
            </div>
        </div>
        <div class="box">
            <img src="images/images-5.jpg" alt=""/>
            <div class="content">
                <h3>Swimming Pool</h3>
                <p>Enjoy a fun and refreshing swimming time together either alone or with company in the outdoor swimming pool of CheckIN Hotels.</p>
            </div>
        </div>
        <div class="box">
            <img src="images/images-6.jpg" alt=""/>
            <div class="content">
                <h3>BUSINESS ON DEALS</h3>
                <p>CheckIN Hotels takes pride in connecting you to the future of meetings, while assisting in creating events every bit as unique as you and your company.</p>
            </div>
        </div>
    </div>

</section>

<section class="gallery" id="gallery">

    <h1 class="heading">
        <span>g</span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
    </h1>

    <div class="box-container">

        <div class="box">
            <img src="images/gal-1.jpg" alt=""/>
            <div class="content">
            </div>
        </div>
        <div class="box">
            <img src="images/gal-2.jpg" alt=""/>
            <div class="content">
            </div>
        </div>
        <div class="box">
            <img src="images/gal-3.jpg" alt=""/>
            <div class="content">
            </div>
        </div>
        <div class="box">
            <img src="images/gal-4.jpg" alt=""/>
            <div class="content">
            </div>
        </div>
        <div class="box">
            <img src="images/gal-5.jpg" alt=""/>
            <div class="content">
            </div>
        </div>
        <div class="box">
            <img src="images/gal-6.jpg" alt=""/>
            <div class="content">
            </div>
        </div>

    </div>

</section>


<div class="location">
    <h1 id="location">Location Info</h1>
    <br/><i class="fas fa-map-marker-alt"></i>
    <span>Jl. Dr. Setiabudi No.376, Ledeng, Kec. Cidadap, Kota Bandung, Jawa Barat 40143</span>
    <span><br/>Telepon: (022) 2010388<br/></span> 
    <section class="map top">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3333492864467!2d107.59591011402006!3d-6.850585395049195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6b89a3f9e27%3A0x3904746413e22071!2sGH%20Universal%20Hotel%20Bandung!5e0!3m2!1sen!2sid!4v1667410751423!5m2!1sen!2sid" 
        width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </div>



<section class="about" id="about">

    <div class="box-container">

        <div class="box">
            <h3>About Us</h3>
            <p>Jl. Dr. Setiabudi No.376, Ledeng, Kec. Cidadap, Kota Bandung, Jawa Barat 40143</p>
            <p>Telepon: (022) 2010388</p>
        </div>

    </div>

    <h1 class="credit"> Created By <span> Kelompok 1 </span> | All rights reserved! </h1>

</section>
</div>
    </div>
    )
}

export default Index