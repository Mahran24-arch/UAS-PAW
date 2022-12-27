function Succes() {
    return(
      <div class="lesson-wrapper">
      <div class="container">
        <div class="heading">
          <h1>CheckIN Hotels</h1>
        </div></div>
        
    <div class="mainscreen">
      <div class="card">
        <div class="leftside">
          <a> <img class="product" src="images/gal-2.jpg" alt=""/></a>
        </div>
        
        <div class="rightside" id="payment">
          <form action="">
            <h1>Payment Successfull</h1>
            <p>Nama</p>
            <input type="text" class="inputbox"  id="card_number" placeholder=" "/>
            <p>Email</p>
            <input type="text" class="inputbox"  id="card_number" placeholder=" " />
            <p>Phone</p>
            <input type="text" class="inputbox"  id="card_number" placeholder=" "/>
            <p>Tipe Room</p>
            <input type="text" class="inputbox"  id="card_number" placeholder=" "/>
            <p></p>
          </form>
        </div>
      </div>
      <button class="button" onclick="succes()">Selesai</button>
          <script> 
          
          </script>
      </div>
      </div>
    )

   
}

export default Succes