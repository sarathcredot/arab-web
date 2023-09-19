import React, { useState } from "react";
import ALink from "../../components/common/ALink";
import StartAffliation from "../../components/features/affliation/StartAffliation";
import Loading from "../../components/features/affliation/Loading";
import Form from "../../components/features/affliation/form";
import Dashbord from "../../components/features/affliation/dashbord";

function affliation() {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState("startAffliation");
  const toggleForm = () => {
    setShowForm(!showForm);
    setCurrentStep("form")
  }


  const handleSaveBankDetails = () => {
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
    setCurrentStep("dashboard");
  };
  return (
    <div>
      <main className="main main-test">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
            <li className="breadcrumb-item" >
              <ALink href="/">
                <i className="icon-home"></i>
              </ALink>
            </li>
              <li className="breadcrumb-item">
                <ALink href="/pages/account">Account</ALink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                affliation
              </li>
            </ol>
          </div>
        </nav>
        <div
          className=" d-flex flex-column align-items-center"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          {/* <h1>orders</h1>*/}

          <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
            <li className="">
              <ALink href="/pages/account">My Account</ALink>
            </li>
            <li className="active">
              <ALink href="/pages/affliation">Affliation</ALink>
            </li>
          </ul>
        </div>

        <div
          className="container"
          style={{
            marginTop: "3rem",
            borderBottom: "1px solid",
            borderColor: "#E2E2E2",
            padding: "2px",
            
          }}
        >
          <h2 className="step-title">Affliation</h2>
        
        </div>
        
        <div className="container" style={{paddingBottom:"70px",marginTop:"50px"}} >
        {currentStep === "startAffliation" && (
            <StartAffliation toggleForm={toggleForm} />
          )}
          {currentStep === "form" && (
            <Form onSaveBankDetails={handleSaveBankDetails} />
          )}
          {isLoading?<Loading />:currentStep === "dashboard" && (
            <Dashbord />
          )}

        </div>
        
      </main>
      

     

      
<div className="container" style={{marginTop:"8rem"}}>
 
{/* <Dashbord /> */}
 
 
</div>
    
    </div>
  );
}

export default affliation;
