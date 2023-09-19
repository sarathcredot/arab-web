import React from 'react';


function Form() {
    return (
        <div>
            <div className='container' >
                <div className='d-flex'>
                    <div className='col-md-6'>
                        <div className='input-container d-flex flex-column align-items-center'>
                            <label htmlFor="file-input" className="file-label">
                                <input type="file" id="file-input" style={{ display: "none" }} />
                                <div className="file-icon d-flex justify-content-center align-items-center " style={{ paddingTop: "70px" }}>
                                    <div className='icon d-flex justify-content-center align-items-center'>
                                        <i className="fas fa-plus fa-2x"></i>
                                    </div>
                                </div>
                            </label>
                            <p className='header-content'>Upload ID Proof</p>
                            <p className='content'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, assumenda dolore?

                            </p>
                        </div>
                        <div className='uploade'>
                            <p>Uploaded File</p>
                            <div className='uplode-content'>
                                <div className="icon-container">
                                    <img
                                        src="images\icon\Vector documnt.svg"
                                        alt="Uploaded Icon"
                                    />
                                </div>
                                <div className="text-container">
                                    <p>Government ID</p>
                                </div>
                                <i className="fas fa-times" ></i>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className='form-container'>
                            <div className='container' style={{ padding: "50px", marginTop: "10px" }}>
                                <p className='form-header'>Submit your Bank Details</p>
                                <div className=''>
                                    <div className="form-group" >
                                        <label>Holder Nme</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label> select banck *</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label> Account Number *</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Reenter  Account Number*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Swift code</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <button className="styled-button">Save Bank Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
