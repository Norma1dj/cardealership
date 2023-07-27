import React, {useEffect, useState} from 'react';

function SalesPersonList(props) {
    const [salespeople, setList] = useState([]);


    useEffect(() => {
        fetchSalespeople();
    }, []);

    const fetchSalespeople = async() => {
        const url = 'http://localhost:8090/api/salespeople/';

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            setList(data.salespeople);
        }
    }

  return (

<table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            
          </tr>
        </thead>
        <tbody>
        
         
          {salespeople.map(salesperson => {
            return (
              <tr key={salesperson.id}>
                <td>{ salesperson.employee_id }</td>
                <td>{ salesperson.first_name }  { salesperson.last_name }</td>
              </tr>
                  );
})}

        </tbody>
      </table>
  );
}

export default SalesPersonList;
