import React, { useEffect, useState } from 'react';

function SalespersonHistory() {
  const [sales, setSales] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState(null);

  useEffect(() => {
    fetchSales();
    fetchSalespeople();
  }, []);

  const fetchSales = async () => {
    const url = 'http://localhost:8090/api/sales/';

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  };

  const fetchSalespeople = async () => {
    const url = 'http://localhost:8090/api/salespeople/';

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    const selectedSalesperson = salespeople.find(
      (salesperson) =>
        salesperson.first_name === value || salesperson.employee_id === value
    );

    setSelectedSalesperson(selectedSalesperson);
  };

  const filteredSales = sales.filter(
    (sale) =>
      selectedSalesperson &&
      (sale.salesperson.id === selectedSalesperson.id ||
        sale.salesperson.first_name === selectedSalesperson.first_name ||
        sale.salesperson.employee_id === selectedSalesperson.employee_id)
  );

  return (
    <div>
      <h1>List of Sales by Salesperson</h1>
      <div className="mb-3">
        <select
          onChange={handleSalespersonChange}
          required
          value={selectedSalesperson ? selectedSalesperson.first_name : ''}
          id="salesperson"
          name="salesperson"
          className="form-select"
        >
          <option value="">Choose a Salesperson</option>
          {salespeople.map((salesperson) => (
            <option key={salesperson.id} value={salesperson.first_name}>
              {salesperson.first_name} {salesperson.last_name} 
            </option>
          ))}
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th>Salesperson</th>
            <th>Customer</th>
            <th>Vin</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((sale) => (
            <tr key={sale.id}>
              
              <td>
                {sale.salesperson.first_name} {sale.salesperson.last_name}
              </td>
              <td>{sale.customer.first_name}</td>
              <td>{sale.automobile.vin}</td>
              <td>{sale.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalespersonHistory;
