import React,{ useEffect, useState } from 'react';

function CreateAutomobileForm() {
  
  const [color, setColor] = useState('')
  const [year, setYear] = useState('')
  const [vin, setVin] = useState('')
  const [models, setModels] = useState([])
  const [model_id, setModel] = useState('')


  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    setYear(value);
  };
  
  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const handleModelChange = (event) => {
    const value = event.target.value;
    setModel(value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.color = color;
    data.year = year;
    data.vin = vin;
    data.model_id = model_id;

    
    

    const modelsUrl = `http://localhost:8100/api/automobiles/`;
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
      

  
    setColor('');
    setYear('');
    setVin('');
    setModel('');
    setModels([]);
        
    }
  }

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/models/';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
      
      
      
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
                        <h1>Add Automobile</h1>
                        <form onSubmit={handleSubmit} id="create-presentation-form">
                            <div className="form-floating mb-3">
                                <input  onChange={handleColorChange} value={color}  placeholder="color" required type="text" id="color"
                                    name="color" className="form-control"/>
                                <label htmlFor="name">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleYearChange} value={year} placeholder="year" required type="text" id="year"
                                    name="year" className="form-control"/>
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleVinChange} value={vin} placeholder="vin" required type="text" id="vin"
                                    name="vin" className="form-control"/>
                                <label htmlFor="vin">Vin</label>
                            </div>
                        
                            <div className="mb-3">
                              <select onChange={handleModelChange} required value={model_id} id="model_id" name="model_id" className="form-select">
                                  <option value="">Choose Model</option>
                                  {models.map((model_id) => {
                                  return (
                                      <option key={model_id.id} value={model_id.id}>
                                          {model_id.name}
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

export default CreateAutomobileForm;
