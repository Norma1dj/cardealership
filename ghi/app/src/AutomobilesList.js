import React, {useEffect, useState} from 'react';


function sold(sold) {
  if (sold == false) {
    return ("No")
  } else {return ("Yes")}
}

function AutomobilesList() {

  
      const [automobiles, setAutos] = useState([]);
    
  
  
      useEffect(() => {
          fetchAutos();
      }, []);
  
      const fetchAutos = async() => {
          const url = 'http://localhost:8100/api/automobiles/';
  
          const response = await fetch(url);
          if (response.ok) {
              const data = await response.json();
              setAutos(data.autos);
          }
      }
      
      
  
    return (
      <div>
      <h1>Automobile List</h1>
      <table className="table table-striped">
          <thead>
            <tr>
              <th>Vin</th>
              <th>Color</th>
              <th>Year</th>
              <th>model</th>
              <th>Manufacturer</th>
              <th>Sold</th>
              
            </tr>
          </thead>
          <tbody>
          
           
            {automobiles.map(automobiles => {
              return (
                <tr key={automobiles.id}>
                  <td>{ automobiles.vin } </td>
                  <td>{ automobiles.color }</td>
                  <td>{ automobiles.year}</td>
                  <td>{ automobiles.model.name}</td>
                  <td>{ automobiles.model.manufacturer.name}</td>
                  <td>{ sold(automobiles.sold)}</td>
                </tr>
                    );
  })}
  
          </tbody>
        </table>
        </div>
    );
  }
  


export default AutomobilesList;
