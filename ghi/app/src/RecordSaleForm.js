import React,{ useEffect, useState } from 'react';

function RecordSaleForm() {
  const [name, setVin] = useState('')
  const [customer, setCustomer] = useState('')
  const [salespeople, setSalespeople] = useState([])
  const [salesperson, setManufacturer] = useState('')

  const handleNameChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };
  
  const handleManufacturerChange = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.name = name;
    data.customer = customer;
    data.salesperson = salesperson;

    
    console.log(data);

    const salesUrl = `http://localhost:8100/api/sales/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {
      const newSale = await response.json();
      console.log(newSale);

  
    setVin('');
    setCustomer('');
    setManufacturer('');
    setSalespeople([]);
        
    }
  }

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/salespeople/';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
      console.log(data.salespeople)
      
      
    }
}


  useEffect(()  => { 
    fetchData();
  }, []);


  return (
    <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a Model</h1>
                        <form onSubmit={handleSubmit} id="create-presentation-form">
                            <div className="form-floating mb-3">
                                <input  onChange={handleNameChange} value={name}  placeholder="name" required type="text" id="name"
                                    name="name" className="form-control"/>
                                <label htmlFor="name">Model Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleLastNameChange} value={customer} placeholder="customer" required type="text" id="customer"
                                    name="customer" className="form-control"/>
                                <label htmlFor="customer">Picture url</label>
                            </div>
                        
                            <div className="mb-3">
                              <select onChange={handleManufacturerChange} required value={salesperson} id="salesperson" name="salesperson" className="form-select">
                                  <option value="">Choose a manufacturer</option>
                                  {salespeople.map((manufacturer) => {
                                  return (
                                      <option key={manufacturer.id} value={manufacturer.id}>
                                          {manufacturer.name}
                                      </option>
                                  );
                              })}
                              </select>
                          </div>
                           
                          
                            <button className="btn bg-success btn-primary">Create</button>
                        </form>
                        <div className="alert alert-success d-none mb-0" id="success-message">
                            A Model has been successfully created!
                          </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default RecordSaleForm;
