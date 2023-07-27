import React,{ useEffect, useState } from 'react';

function CreateManufacturerForm() {
  const [name, setName] = useState('')


  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.name = name;
    console.log(data);

    const manufacturerUrl = `http://localhost:8100/api/manufacturers/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch(manufacturerUrl, fetchConfig);
    if (response.ok) {
      const newManufacturer = await response.json();
      console.log(newManufacturer);

  
    setName('');

        
    }
  }

//   const fetchData = async () => {
//     const url = 'http://localhost:8100/api/manufacturers/';

//     const response = await fetch(url);

//     if (response.ok) {
//       const data = await response.json();
//       setManufacturers(data.manufacturers);
//       console.log(data.manufacturers)
      
      
//     }
// }


  // useEffect(()  => { 
  //   fetchData();
  // }, []);


  return (
    <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create Manufacturer</h1>
                        <form onSubmit={handleSubmit} id="create-presentation-form">
                            <div className="form-floating mb-3">
                                <input  onChange={handleNameChange} value={name}  placeholder="name" required type="text" id="name"
                                    name="name" className="form-control"/>
                                <label htmlFor="name">Manufacturer Name</label>
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

export default CreateManufacturerForm;
