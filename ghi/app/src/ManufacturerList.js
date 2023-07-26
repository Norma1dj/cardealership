

import React, {useEffect, useState} from 'react';

function ManufacturerList() {
  const [manufacturers, setManufacturer] = useState([]);
    
  
  
  useEffect(() => {
      fetchManufacturer();
  }, []);

  const fetchManufacturer = async() => {
      const url = 'http://localhost:8100/api/manufacturers/';

      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          setManufacturer(data.manufacturers);
      }
  }
  
  

return (
  <div>
  <h1>List of Manufacturers</h1>
  <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          
        </tr>
      </thead>
      <tbody>
      
       
        {manufacturers.map(manufacturer => {
          return (
            <tr key={manufacturer.id}>
              <td>{ manufacturer.name} </td>
          
              
            </tr>
                );
})}

      </tbody>
    </table>
    </div>
);
}
export default ManufacturerList;
