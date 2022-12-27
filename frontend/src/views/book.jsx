import { Link } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"

function Book() {
    const [uuid, setUuid] = useState("")
    const [cekin, setCekin] = useState("")
    const [roomtype, setRoomtype] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [nama, setNama] = useState("")
    const [hari, setHari] = useState(0)
    const [roomid, setRoomid] = useState([])
     useEffect(()=>{
        axios.get('http://localhost:5000/rooms').then((response)=>console.log(response))
     },[])
    console.log(roomid)
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log (nama,cekin,hari,email,phone,roomtype)
        axios.post('http://localhost:5000/bookings', {
            uuid : uuid,
            roomid : roomtype,
            email : email,
            phone : phone,
            nama : nama,
            hari : hari,
        })
    }

    return <div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <form onSubmit={handleSubmit}>
                        <div class="row no-margin">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <span class="form-label">Check In</span>
                                    <input value ={cekin} onChange ={(e)=>setCekin(e.target.value)} class ="form-control" type="date" required name="checkin"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Hari</span>
                                        <input value ={hari} onChange ={(e)=>setHari(e.target.value)} class="form-control" type="number" placeholder="Enter Jumlah Hari" name="hari"/>
									</div>
								</div>
                        </div>
                        <div class="form-group">
                            <span class="form-label">Room Type</span>
                            <select value ={roomtype}onChange={(e)=>setRoomtype(e.target.value)} class="form-control" required name="room">
                                <option value="" selected hidden>Select room type</option>
                                <option value="1">Deluxe King</option>
                                <option value="2">Deluxe Double Queen</option>
                                <option value="3">Honey Moon Suite</option>
                            </select>
                            <span class="select-arrow"></span>
                        </div>
                        <div class="form-group">
                            <span class="form-label">Email</span>
                            <input value ={email} onChange ={(e)=>setEmail(e.target.value)} class="form-control" type="email" placeholder="Enter your email" name="email"/>
                        </div>
                        <div class="form-group">
                            <span class="form-label">Phone</span>
                            <input value ={phone} onChange ={(e)=>setPhone(e.target.value)} class="form-control" type="tel" placeholder="Enter your phone number" name="phone"/>
                        </div>
                        <div class="form-group">
                            <span class="form-label">Nama</span>
                            <input value ={nama} onChange ={(e)=>setNama(e.target.value)} class="form-control" type="tel" placeholder="Enter your name" name="nama"/>
                        </div>
                        <div class="form-btn">
                            <button type ="submit" class="submit-btn">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default Book