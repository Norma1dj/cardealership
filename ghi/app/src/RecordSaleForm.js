import React,{ useEffect, useState } from 'react';

function RecordSaleForm() {
  const [automobile, setVin] = useState('')
  const [customer, setCustomer] = useState('')
  const [salesperson, setSalesperson] = useState('')
  const [price, setPrice] = useState('')
  const [salespeople, setSalespeople] = useState([])
  const [customers, setCustomers] = useState([])
  const [autos, setVins] = useState([])
  





  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };
  
  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.automobile = automobile;
    data.customer = customer;
    data.salesperson = salesperson;
    data.price = price;

    
   

    const salesUrl = `http://localhost:8090/api/sales/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const updateUrl = `http://localhost:8100/api/automobiles/${automobile}/`;
    const updateConfig = {
      method: "put",
      body: JSON.stringify({ sold: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

   
  
    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {
      const newSale = await response.json();
      
      const updateResponse = await fetch(updateUrl, updateConfig);
      if (updateResponse.ok) {
        const updatedAutomobile = await updateResponse.json();
        console.log("Automobile updated:", updatedAutomobile);
      } else {
        console.error("Failed to updatesold status.");
      }
    

  
    setVin('');
    setCustomer('');
    setSalesperson('');
    setPrice('');
    fetchData();
    

        
    }
  }

  const fetchData = async () => {
    const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
    const salespeopleresponse = await fetch(salespeopleUrl);

    if (salespeopleresponse.ok) {
      const data = await salespeopleresponse.json();
      setSalespeople(data.salespeople);
      
    }

    const customersUrl = 'http://localhost:8090/api/customers/';
    const customersresponse = await fetch(customersUrl);

    if (customersresponse.ok) {
      const data = await customersresponse.json();
      setCustomers(data.customers);
      
    }

    const automobilesUrl = 'http://localhost:8100/api/automobiles/';
    const automobilesresponse = await fetch(automobilesUrl);

    if (automobilesresponse.ok) {
      const data = await automobilesresponse.json();
      setVins(data.autos);
      
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
                        <h1>Record Sale</h1>
                        <form onSubmit={handleSubmit} id="create-presentation-form">
                      
                         <div className="mb-3">
                              <select onChange={handleVinChange} required value={automobile} id="automobile" name="automobile" className="form-select">
                                  <option value="">Choose a Auto automobile</option>
                                  {autos.map((automobile) => {
                                    if(!automobile.sold) {
                                  return (
                                      <option key={automobile.vin} value={automobile.automobile}>
                                          {automobile.vin}
                                      </option>
                                  );
                                    } else {return null;}
                              })}
                              </select>
                          </div>
                          
                         <div className="mb-3">
                              <select onChange={handleCustomerChange} required value={customer} id="customer" name="customer" className="form-select">
                                  <option value="">Choose a Customer</option>
                                  {customers.map((customer) => {
                                  return (
                                      <option key={customer.id} value={customer.id}>
                                          {customer.first_name} {customer.last_name}
                                      </option>
                                  );
                              })}
                              </select>
                          </div>
                            <div className="mb-3">
                              <select onChange={handleSalespersonChange} required value={salesperson} id="salesperson" name="salesperson" className="form-select">
                                  <option value="">Choose a Salesperson</option>
                                  {salespeople.map((salesperson) => {
                                  return (
                                      <option key={salesperson.id} value={salesperson.id}>
                                          {salesperson.first_name} {salesperson.last_name}
                                      </option>
                                  );
                              })}
                              </select>
                          </div>
                            <div className="form-floating mb-3">
                                <input  onChange={handlePriceChange} value={price}  placeholder="price" required type="text" id="price"
                                    name="price" className="form-control"/>
                                <label htmlFor="name">Sold Price</label>
                            </div>
                           
                          
                            <button className="btn bg-success btn-primary">Create</button>
                        </form>
                        <div className="alert alert-success d-none mb-0" id="success-message">
                            The sale has been successfully created!
                          </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default RecordSaleForm;
