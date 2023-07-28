import React, { useEffect, useState }  from 'react';

function AddCustomerForm() {

  const [first_name, setFirst] = useState('')
  const [last_name, setLast] = useState('')
  const [address, setAddress] = useState('')
  const [phone_number, setNumber] = useState('')

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirst(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLast(value);
  };
  
  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setNumber(value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.first_name = first_name;
    data.last_name = last_name;
    data.address = address;
    data.phone_number = phone_number;

    
   

    const customerUrl = `http://localhost:8090/api/customers/`;
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
      

  
    setFirst('');
    setLast('');
    setAddress('');
    setNumber('');
        
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
                        <h1>Add Customer</h1>
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
                                <input onChange={handleAddressChange} value={address} placeholder="address" required type="text" id="address"
                                    name="address" className="form-control"/>
                                <label htmlFor="address">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handlePhoneNumberChange} value={phone_number} placeholder="phone_number" required type="text" id="phone_number"
                                    name="phone_number" className="form-control"/>
                                <label htmlFor="phone_number">Phone Number</label>
                            </div>
                          
                            <button className="btn bg-success btn-primary">Create</button>
                        </form>
                        <div className="alert alert-success d-none mb-0" id="success-message">
                            Customer successfully created!
                          </div>
                    </div>
                </div>
            </div>
        </div>
         );
}

export default AddCustomerForm;
