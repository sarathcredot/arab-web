;
import React from 'react'
import { useRouter } from 'next/router';
function success() {
    const router = useRouter();
    const shopHandle=(e)=>{
        e.preventDefault();
        router.push('/shop')
    }
    const shopOrder=(e)=>{
        e.preventDefault();
        router.push('/pages/orders')
    }
  return (
    <div class='container' >
    {/* <div   style={{display:"flex" ,alignItems:"center",textAlign:"center",flexDirection:"column", gap:"15px" , maxWidth:"700px",width:"100%",margin:"auto", marginTop:"110px"}}>
    <img src='/images/thankyouIcon.svg' alt="Thank You Image"  />
        <h4>Your order Was Successfully Placed</h4>
        
        <span style={{fontWeight:"400px",fontSize:"10px"}}>Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date of your item. </span>
        <div class="centered-content" style={{ display:"flex",gap:"20px"}}>
        <button style={{minWidth:"150px", height:"50px", backgroundColor:"#FFFFFF"}}>CONTINUE SHOPPING</button>
        <button style={{minWidth:"150px", height:"50px",backgroundColor:"#000000", color:"#FFFFFF"}}>VIEW ORDER</button>
    </div>
    </div> */}

<div class='centered-content'  style={{textAlign:"center",marginBottom:"134px" }}>
            <img src='/images/thankyouIcon.svg' alt="Thank You Image" />
            <h4>Your order Was Successfully Placed</h4>
            <span style={{fontWeight:"400px",fontSize:"12px", color:"#000000"}}>Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date of your item.</span>
            <div class="buttons">
                <button onClick={(e)=>shopHandle(e)}>CONTINUE SHOPPING</button>
                <button onClick={(e)=>shopOrder(e)}>VIEW ORDER</button>
            </div>
        </div>

    <hr/>
    <div style={{ display: 'flex', justifyContent: 'space-around',  marginLeft:"20px" }}>
        <div className='head-card'>
        <h4>Delivery to</h4>
        </div>
        <div className='head-card'>
        <h4>Payment by</h4>
        </div>
        
      </div>
    <div class="cards-container" style={{marginBottom:"40px "}}>
   
        <div class="card">
       
            <div style={{marginTop:"40px", marginBottom:"40px", marginLeft:"20px"}}>
            <img src="/images/locationIcon.svg" alt="Card Image 1"/>
            </div>
             <div>
            <p style={{fontWeight:"400px",fontSize:"18px", color:"#000000"}}>Elisha David</p>
            <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>Opera Villa-46, Al Barsha-Dubai</p>
            <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>+971 456858987</p>
            </div>
           
           
        </div>
        
        <div class="card">
        
         <div style={{marginTop:"40px", marginBottom:"40px", marginLeft:"20px"}}>
         <img src="/images/card.svg" alt="Card Image 1"/>
         </div>
          <div>
         <p style={{fontWeight:"400px",fontSize:"18px", color:"#000000"}}>Card Payment</p>
         <div style={{display:"flex", flexDirection:"row", gap:"20px",}}>
         <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>Subtotal</p>
         <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>OMR 912.00</p>
         </div>
         <div style={{display:"flex", flexDirection:"row", gap:"20px",}}>
         <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>Expected Delivery</p>
         <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>19th Monday, Feb</p>
         </div>
     
         </div>
        
        
     </div>
    </div>


    <hr/>




    

</div>




  )
}

export default success