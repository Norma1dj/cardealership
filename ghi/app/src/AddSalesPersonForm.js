import React, { useState } from 'react';

function AddSalesPersonForm() {
  
  const [first_name, setFirst] = useState('')
  const [last_name, setLast] = useState('')
  const [employee_id, setId] = useState('')

  return (
    <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add Salesperson</h1>
                        <form /* onSubmit={handleSubmit}*/ id="create-presentation-form">
                            <div className="form-floating mb-3">
                                <input  /* onChange={handleManufacturerChange} value={manufacturer} */ placeholder="manufacturer" required type="text" id="manufacturer"
                                    name="manufacturer" className="form-control"/>
                                <label htmlFor="manufacturer">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input /* onChange={handleModelNameChange} value={model_name} */ placeholder="model_name" required type="text" id="model_name"
                                    name="model_name" className="form-control"/>
                                <label htmlFor="model_name">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input /* onChange={handleColorChange} value={color} */ placeholder="color" required type="text" id="color"
                                    name="color" className="form-control"/>
                                <label htmlFor="color">Employee ID</label>
                            </div>
                           
                          
                            <button className="btn bg-success btn-primary">Create</button>
                        </form>
                        <div className="alert alert-success d-none mb-0" id="success-message">
                            Your Shoe has been successfully created!
                          </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default AddSalesPersonForm;
