import React, { useState, useEffect }  from 'react';

function AddTechnicianForm() {

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [employee_id, setEmployeeId] = useState('')

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };
  
  const handleEmployeeIdChange = (event) => {
    const value = event.target.value;
    setEmployeeId(value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    console.log(data)
    data.first_name = first_name;
    data.last_name = last_name;
    data.employee_id = employee_id;

    

    const customerUrl = `http://localhost:8080/api/technicians/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch(customerUrl, fetchConfig);
    if (response.ok) {
      const newCustomer = await response.json();

  
    setFirstName('');
    setLastName('');
    setEmployeeId('');
        
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
                        <h1>Add Technician</h1>
                        <form onSubmit={handleSubmit} id="create-presentation-form">
                            <div className="form-floating mb-3">
                                <input  onChange={handleFirstNameChange} value={first_name}  placeholder="firstName" required type="text" id="firstName"
                                    name="firstName" className="form-control"/>
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleLastNameChange} value={last_name} placeholder="lastname" required type="text" id="lastName"
                                    name="lastName" className="form-control"/>
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleEmployeeIdChange} value={employee_id} placeholder="employeeId" required type="text" id="employeeId"
                                    name="employeeId" className="form-control"/>
                                <label htmlFor="employeeId">Employee Id</label>
                            </div>
                          
                            <button className="btn bg-success btn-primary">Create</button>
                        </form>
                        <div className="alert alert-success d-none mb-0" id="success-message">
                            Tech successfully created!
                          </div>
                    </div>
                </div>
            </div>
        </div>
         );
}

export default AddTechnicianForm;
