import React, { useEffect, useState } from 'react';

function ServiceHistory() {
  const [vinNums, setVinNums] = useState([]);
  const [vinNum, setVinNum] = useState([]);
  const [vin, setVin] = useState(null);

  useEffect(() => {
    fetchVinNums();
    fetchNum();
  }, []);

  const fetchNumbers = async () => {
    const url = 'http://localhost:8100/api/automobiles/';

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setVin(data.vin);
    }
  };

//  const fetchSalespeople = async () => {
//    const url = 'http://localhost:8100/api/automobiles/';
//
//    const response = await fetch(url);
//    if (response.ok) {
//      const data = await response.json();
//      setSalespeople(data.salespeople);
//    }
//  };

  const handleVinChange = (event) => {
    const value = event.target.value;
    const selectedVin = vinNum.find(
      (vin) =>
        vin.vin === value );

    setSelectedVin(selectedVin);
  };

  const filteredVin = vinNums.filter(
    (VinNums) =>
      selectedVin && VinNums.vin
  );

  return (
    <div>
      <h1>Service History</h1>
      <div className="mb-3">
        <select
          onChange={handleSelectedVinChange}
          required
          value={selectedSalesperson ? selectedSalesperson.first_name : ''}
          id="salesperson"
          name="salesperson"
          className="form-select"
        >
          <option value="">Search by VIN...</option>
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
          {vinNums.map((vinNums) => (
            <tr key={vin.id}>
              
              <td>
                {vin.salesperson.first_name} {vin.salesperson.last_name}
              </td>
              <td>{vin.customer.first_name}</td>
              <td>{vin.automobile.vin}</td>
              <td>{vin.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceHistory;
