import React, {useEffect, useState} from 'react';

function AllSalesList() {
  const [sales, setSales] = useState([]);
    
  
  
  useEffect(() => {
      fetchSales();
  }, []);

  const fetchSales = async() => {
      const url = 'http://localhost:8090/api/sales/';

      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          setSales(data.sales);
      }
  }
  
  

return (
  <div>
  <h1>List of Automobile Sales</h1>
  <table className="table table-striped">
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Salesperson</th>
          <th>Customer</th>
          <th>Vin</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      
       
        {sales.map(sale => {
          return (
            <tr key={sale.id}>
              <td>{ sale.salesperson.employee_id} </td>
              <td>{ sale.salesperson.first_name} { sale.salesperson.last_name}</td>
              <td>{ sale.customer.first_name}</td>
              <td>{ sale.automobile.vin}</td>
              <td>{ sale.price}</td>
              
            </tr>
                );
})}

      </tbody>
    </table>
    </div>
);
}
export default AllSalesList;
