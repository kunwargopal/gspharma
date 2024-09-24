import React from 'react'
import logo from '../src/assets/logo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import car1 from './assets/car1.png'
import car2 from './assets/car2.png'


function App() {
  return (
    <div>
      <div className="header">
        <img className='headerImg' style={{height:90}} src={logo} alt="" />
        <div style={{display:"flex", gap:15}}>
        </div>
      </div>
      <div style={{height:100}}></div>

      <div className="consult">
        <div className='consult-sub'>
          <img style={{height:40}} src="https://www.medibuddy.in/assets/services/doctor.svg" alt="" />
          <b>Talk a Doctor</b>
        </div>
        <div className='consult-sub'>
          <img style={{height:40}} src="https://www.medibuddy.in/assets/services/medicine.svg" alt="" />
          <b>Medicine</b>
        </div>
        <div className='consult-sub'>
          <img style={{height:40}} src="https://www.medibuddy.in/assets/services/consulation.svg" alt="" />
          <b>Book Dr. Appoitment</b>
        </div>
        <div className='consult-sub'>
          <img style={{height:40}} src="https://www.medibuddy.in/assets/services/labtest.svg" alt="" />
          <b>Lab test and Packages</b>
        </div>
        <div className='consult-sub'>
          <img style={{height:40}} src="https://www.medibuddy.in/assets/services/surgery.svg" alt="" />
          <b>Surgery</b>
        </div>
        <div className='consult-sub'>
          <img style={{height:40}} src="https://www.medibuddy.in/assets/services/mb-gold.svg" alt="" />
          <b>Talk a Doctor</b>
        </div>
      </div>

      <div className='carousall'>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img className='carouslaImg' style={{height:370, width:"70%"}} src={car1} />
                </div>
                <div>
                    <img className='carouslaImg' style={{height:370, width:"70%"}} src={car2} />
                </div>
                <div>
                    <img className='carouslaImg' style={{height:370, width:"70%"}} src={car1} />
                </div>
            </Carousel>
      </div>

      <div className='main1'>
        <div className='sub-main1'>
          <h1>Give the care your family deserves</h1>
          <b>Unlimited Consultations with top Doctors for 6 family members in 22+ specialities and 16 languages</b>
          <button className='btn btn-success'>Buy GS Pharma</button>
        </div>
        <div className='sub-main2'>
          <div className='sub-main-sub1'>
            <div className='chhotadiv1'>
              <img style={{height:80}} src="https://www.medibuddy.in/assets/services/mb-gold/unlimited-consultations.svg" alt="" />
              <h5 style={{fontSize:18,fontWeight:600,letterSpacing:1}}>Unlimited Free Consultations</h5>
              <span style={{fontSize:13}}>Get unlimited free consultations with all <b>doctors 24x7</b></span>
            </div>
            <div className='chhotadiv1'>
            <img style={{height:80}} src="https://www.medibuddy.in/assets/services/mb-gold/free-health.svg" alt="" />
              <h5 style={{fontSize:18,fontWeight:600,letterSpacing:1}}>Free For All Health Problems
              </h5>
              <span style={{fontSize:13}}>Consult with any doctor from 18 departments at any time</span>
            </div>
          </div>
          <div className='sub-main-sub2'>
          <div className='chhotadiv1'>
          <img style={{height:80}} src="https://www.medibuddy.in/assets/services/mb-gold/family.svg" alt="" />
              <h5 style={{fontSize:18,fontWeight:600,letterSpacing:1}}>Free For Full Family</h5>
              <span style={{fontSize:13}}>Free consultations for upto 6 family members</span>
          </div>
          <div className='chhotadiv1'>
          <img style={{height:80}} src="https://www.medibuddy.in/assets/services/mb-gold/video-consultation.svg" alt="" />
              <h5 style={{fontSize:18,fontWeight:600,letterSpacing:1}}>Video Consultations</h5>
              <span style={{fontSize:13}}>Video Consults with top doctors 24x7</span>
          </div>
          </div>
        </div>
      </div>


      <div className="filding">
        <input placeholder='Search Medicines...' style={{height:50, width:"70%",borderRadius:10,border:"1px solid white",paddingLeft:"3%", marginTop:"50px"}} type="text" />
      </div>

      <div className="items">
        <div className='item-child'>

        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
           <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
     
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"70%",alignSelf:"center"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/body-pain-relief/h/v/e/120-ayurvedic-strong-oil-for-joints-pain-1-bottle-dr-ortho-original-imagntwnb4bcdwyn.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
        <div className="item">
          <img style={{height:150,width:"80%"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/q/n/f/skin-pimple-care-juice-nourishes-skin-helps-control-acne-1-original-imagunpdwjxh8gve.jpeg?q=70" alt="" />
          <span>Krishna's Herbal & Ayurveda Skin & Pimple Care Juice</span>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h6 style={{fontWeight:"bold"}}>₹440</h6>
          <button style={{backgroundColor:"#4284f3",border:"none"}} className='btn btn-success'>
            <a style={{color:"white"}} href="tel://+7049494393"> <i className='fa fa-phone'></i></a>
          </button>
          </div>
        </div>
      

  
      </div>
      </div>

      <div className="Footer">
    <div className="sub-Footer-1">
        <img className='shdw' style={{height:70,borderRadius:10,marginTop:-10}} src={logo} alt="" />
        <span style={{marginTop:-20}}>Your pharmacy provides essential medicines to the community, ensuring access to both prescription and over-the-counter drugs. By offering reliable healthcare solutions, your pharmacy plays a key role in improving health outcomes.</span>
    </div>
    <div className="sub-Footer-1">
        <h3>.</h3>
                <span>Home</span>
                <span>Medicine</span>
                <span>Contact Us</span>
                <span></span>
    </div>
    <div className="sub-Footer-2">
    <h3>.</h3>
                <span>Email -info@gspharma.com</span>
                <span>Contact -7049494393</span>
                {/* <span>Customer Care Number : +91 73890-12129</span> */}
    </div>
   
    </div>
    </div>
  )
}

export default App