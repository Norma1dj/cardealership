import React, { useEffect, useState } from 'react';

function AddSalesPersonForm() {
  
  const [first_name, setFirst] = useState('')
  const [last_name, setLast] = useState('')
  const [employee_id, setId] = useState('')

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirst(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLast(value);
  };
  
  const handleEmployeeIdChange = (event) => {
    const value = event.target.value;
    setId(value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.first_name = first_name;
    data.last_name = last_name;
    data.employee_id = employee_id;

    
    

    const salepersonUrl = `http://localhost:8090/api/salespeople/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch(salepersonUrl, fetchConfig);
    if (response.ok) {
      const newsalesperson = await response.json();
      

  
    setFirst('');
    setLast('');
    setId('');
        
    }
  }

  // useEffect(()  => { 
  //   fetchData();
  // }, []);


  return (
    <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add Salesperson</h1>
                        <form onSubmit={handleSubmit} id="create-presentation-form">
                            <div className="form-floating mb-3">
                                <input  onChange={handleFirstNameChange} value={first_name}  placeholder="first_name" required type="text" id="first_name"
                                    name="first_name" className="form-control"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleLastNameChange} value={last_name} placeholder="last_name" required type="text" id="last_name"
                                    name="last_name" className="form-control"/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleEmployeeIdChange} value={employee_id} placeholder="employee_id" required type="text" id="employee_id"
                                    name="employee_id" className="form-control"/>
                                <label htmlFor="employee_id">Employee ID</label>
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
