function Transaction() {
    return(
      <div class="lesson-wrapper">
    <div class="container">
      <div class="heading">
        <h1>CheckIN Hotels</h1>
      </div>
    </div>
      
  <div class="mainscreen">
    <div class="card">
      <div class="leftside">
        <ul class="product">
          <li>Total : Rp </li>
        </ul>
      </div>
      
      <div class="rightside">
        <form action="">
          <h1>Payment</h1>
          <p>Upload Bukti Transfer</p>
          <input type="file" class="inputbox" name="name" required />
          <p>Asal Bank</p>
           <select class="inputbox" name="card_type" id="card_type" required>
            <option value="">--Pilih Bank--</option>
            <option value="">BCA</option>
            <option value="">Mandiri</option>
            <option value="">Dana</option>
          </select>
          <p>Nama Pengirim</p>
          <input type="text" class="inputbox" name="card_number" id="card_number" required />
          <button type="submit" class="button">Submit</button>
          
        </form>
      </div>
    </div>
  </div>
 
</div>
    )
    
  
}

export default Transaction