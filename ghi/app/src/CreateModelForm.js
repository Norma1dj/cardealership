import React,{ useEffect, useState } from 'react';

function CreateModelForm() {

    const [name, setName] = useState('')
    const [picture_url, setPicture] = useState('')
    const [manufacturers, setManufacturers] = useState([])
    const [manufacturer_id, setManufacturer] = useState('')
  
    const handleNameChange = (event) => {
      const value = event.target.value;
      setName(value);
    };
  
    const handleLastNameChange = (event) => {
      const value = event.target.value;
      setPicture(value);
    };
    
    const handleManufacturerChange = (event) => {
      const value = event.target.value;
      setManufacturer(value);
    };
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = {};
  
      data.name = name;
      data.picture_url = picture_url;
      data.manufacturer_id = manufacturer_id;
  
      
      console.log(data);
  
      const modelsUrl = `http://localhost:8100/api/models/`;
      const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
      const response = await fetch(modelsUrl, fetchConfig);
      if (response.ok) {
        const newModel = await response.json();
        console.log(newModel);
  
    
      setName('');
      setPicture('');
      setManufacturer('');
      setManufacturers([]);
          
      }
    }

    const fetchData = async () => {
      const url = 'http://localhost:8100/api/manufacturers/';
  
      const response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
        console.log(data.manufacturers)
        
        
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
                                  <input onChange={handleLastNameChange} value={picture_url} placeholder="picture_url" required type="text" id="picture_url"
                                      name="picture_url" className="form-control"/>
                                  <label htmlFor="picture_url">Picture url</label>
                              </div>
                          
                              <div className="mb-3">
                                <select onChange={handleManufacturerChange} required value={manufacturer_id} id="manufacturer_id" name="manufacturer_id" className="form-select">
                                    <option value="">Choose a manufacturer</option>
                                    {manufacturers.map((manufacturer) => {
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

export default CreateModelForm;
