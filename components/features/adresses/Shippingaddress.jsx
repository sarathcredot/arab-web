import React from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import withApollo from "../../../server/apollo"
import { gql, useMutation, useLazyQuery } from "@apollo/client";
export const SHIPPING_ADDRESS=gql`mutation CreateUserShippingAddress($input: UserCreateShippingAddressInput!) {
    createUserShippingAddress(input: $input) {
      _id
    }
  }`
 
function Addresses() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
        control,
      } = useForm({
        defaultValues: {
            firstname: "",
            country: "",
            streetName:"",
            houseNumber:"",
            city:"",
            postCode:"",
            apartment:"",
          email:"",
          mobile:"",
          
          
        },
      });
      const  [CreateUserShippingAddress] =
      useMutation(SHIPPING_ADDRESS);

      const onSubmit = async (values) => {
        console.log(values);
        event.preventDefault();
        try {
        
    
        const response= await CreateUserShippingAddress({ variables: { input: {...values } } });
          console.log(response);
          if(response){
            localStorage?.setItem("shippingId",response?.data?.createUserShippingAddress?._id)
            window.alert("shipping address added")
            reset()
          }
          SetIsOtp(true);
        } catch (error) {
          console.log("error", error);
        }
    
      }
    return (
        <div>
            <div className="container checkout-container">


                <div className="row">
                    <div className="col-lg-12">
                        <ul className="checkout-steps">
                            <li>
                                <div
                                    className="container"
                                    style={{
                                        marginTop: "6rem",
                                        // borderBottom:"1px solid",
                                        // borderColor:""

                                        padding: "2px"
                                    }}
                                >
                                    <h4 className="step-title" >Shipping address</h4>
                                </div>


                                <form onSubmit={handleSubmit(onSubmit)} id="checkout-form" style={{ marginTop: "40px" }}>
                                    {/* <div className="row"> */}
                                        {/* <div className="col-md-6"> */}
                                            <div className="form-group">
                                                <label
                                                    style={{
                                                        fontFamily: "Poppins",
                                                        fontWeight: "400px",
                                                        lineHeight: "20px",
                                                    }}
                                                >
                                                    First name{" "}
                                                    <ab className="required" title="required">
                                                        *
                                                    </ab>
                                                </label>
                                                <Controller
                          control={control}
                          name="firstname"
                          render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={value}
                                                    onChange={onChange}
                                                    style={{ marginTop: "10px" }}
                                                />)}
                                                />
                                            {/* </div> */}
                                        </div>

                                        {/* <div className="col-md-6"> */}
                                            {/* <div className="form-group">
                                                <label
                                                    style={{
                                                        fontFamily: "Poppins",
                                                        fontWeight: "400px",
                                                        lineHeight: "20px",
                                                    }}
                                                >
                                                    Last name{" "}
                                                    <ab className="required" title="required">
                                                        *
                                                    </ab>
                                                </label>
                                                <Controller
                          control={control}
                          name="lastName"
                          render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                  
                                                    style={{ marginTop: "10px" }}
                                                    value={value}
                                                    onChange={onChange}
                                                />)}
                                                />
                                            </div> */}
                                        {/* </div> */}


                                    {/* </div> */}



                                    <div className="form-group">
                                        <label
                                            style={{
                                                fontFamily: "Poppins",
                                                fontWeight: "400px",
                                                lineHeight: "20px",
                                            }}
                                        >
                                            Country / Region {" "}
                                            {/* <ab className="required" title="required">
                                                *
                                            </ab> */}
                                        </label>
                                        <Controller
                          control={control}
                          name="country"
                          render={({ field: { onChange, value } }) => (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={value}
                                            onChange={onChange}
                                            style={{ marginTop: "10px" }}

                                        />)}
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label>
                                            Street address <span className="required">*</span>
                                        </label>
                                        <Controller
                          control={control}
                          name="houseNumber"
                          render={({ field: { onChange, value } }) => (
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="House number and street name"
                                            value={value}
                                            onChange={onChange}
                                            style={{ marginTop: "10px" }}
                                        />)}
                                        />
                                         <Controller
                          control={control}
                          name="streetName"
                          render={({ field: { onChange, value } }) => (
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apartment, suite, unit, etc. (optional)"
                                            value={value}
                                            onChange={onChange}
                                        />)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>
                                            Twon/City <span className="required">*</span>
                                        </label>
                                        <Controller
                          control={control}
                          name="city"
                          render={({ field: { onChange, value } }) => (
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Abu Dhabi"
                                            value={value}
                                            onChange={onChange}
                                            style={{ marginTop: "10px" }}
                                        />)}
                                        />

                                    </div>

                                    <div className="form-group">
                                        <label>
                                            Pincode/Zip <span className="required">*</span>
                                        </label>
                                        <Controller
                          control={control}
                          name="postCode"
                          render={({ field: { onChange, value } }) => (
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="6730016"
                                            value={value}
                                            onChange={onChange}
                                            style={{ marginTop: "10px" }}
                                        />)}
                                        />

                                    </div>

                                    <div className="form-group">
                                        <label>
                                            Phone<span className="required">*</span>
                                        </label>
                                        <div className="input-group" style={{ marginTop: "10px" }}>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" style={{ padding: "10px" }}>
                                                    <img src="images\brands\flag1.svg" alt="Flag" width="24" height="16" />
                                                    +971
                                                </span>
                                            </div>
                                            <Controller
                          control={control}
                          name="mobile"
                          render={({ field: { onChange, value } }) => (
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter your phone number"
                                                value={value}
                                                onChange={onChange}
                                            />)}
                                            />
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label>
                                            Email
                                            {/* <span className="required">*</span> */}
                                        </label>
                                        <Controller
                          control={control}
                          name="email"
                          render={({ field: { onChange, value } }) => (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={value}
                                            onChange={onChange}
                                            
                                            style={{ marginTop: "10px" }}
                                        />)}
                                        />

                                    </div>



                                    <div
                                        className="container"
                                        style={{ display: "flex", justifyContent: "flex-end" }}
                                    >
                                        <div className="mt-3"> 
                                         <button type="submit" className="btn btn-dark mr-0">
                                            Save changes
                                        </button></div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Addresses )