import React from 'react'

function StartAffliation({toggleForm }) {
  return (
    <div>

      <div
        className=" container d-flex justify-content-center align-items-center"
        style={{ height: "200px", marginTop: "30px" }}
      >
        <div className="d-flex align-items-center justify-content-center"
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            backgroundColor: "white",

          }}
        >

          <img
            src="images\icon\Group 741.svg"
            style={{ backgroundSize: "cover", padding: "10px", }}


          />


        </div>
      </div>
      <div className=" container  d-flex justify-content-around" >
        <h1 className="justify-content-around" style={{ fontFamily: "Poppins", fontWeight: "500px", fontSize: "32px", lineHeight: "52.33px", }}>Affiliate Program</h1>
      </div>

      <div className='container d-flex align-items-center justify-content-center'>
        <div style={{ width: "805px", height: "58px" }}>

          <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Libero ac et at arcu natoque tellus consequat id. Quis mauris dignissim congue elit id mattis commodo tincidunt. Nunc dignissim lectus volutpat consectetur donec</p>
        </div>

      </div>

      <div className='container d-flex justify-content-center align-content-center' >


        <button
          type="submit"
          className="btn  "
          style={{ border: "1px solid", width: "223px", height: "50px", color: "black", backgroundColor: "white" }}
          onClick={toggleForm}
        >
          START AFFILIATION
        </button>
      </div>




    </div>
  )
}

export default StartAffliation