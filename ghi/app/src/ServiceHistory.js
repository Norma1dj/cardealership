import React, { useEffect, useState } from 'react';

function ServiceHistory() {
  const [services, setServices] = useState([]);
  const [carVins, setCarVins] = useState([]);
  const [selectedVin, setSelectedVin] = useState('');

  useEffect(() => {
    fetchService();
    fetchCarVins();
  }, []);

  const fetchService = async () => {
    const url = 'http://localhost:8080/api/appointments/';

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setServices(data.services);
    }
  };

  const fetchCarVins = async () => {
    const url = 'http://localhost:8080/api/appoinments/';

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCarVins(data.carVins);
    }
  };

  const handleVinChange = (event) => {
    const value = event.target.value;
    const selectedVin = carVins.find(
      (carVins) =>
        carVins === value 
    );

    setSelectedVin(selectedVin);
  };

  const filteredServices = services.filter(
    (serviced) =>
      selectedVin === serviced.vin
  );

  return (
    <div>
      <h1>Service History</h1>
      <div className="form-floating mb-3">
                            <input onChange={handleVinChange} placeholder="VIN..." required type="text" name="selectedVin" id="selectedVin" className="form-control" value={selectedVin} />
                            <label htmlFor="selectedVin">VIN</label>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th>VIN</th>
            <th>Is Vip?</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          {filteredServices.map((serviced) => (
            <tr key={serviced.id}>
              
              <td>{serviced.vin}</td>
              <td>{serviced.vip}</td>
              <td>{serviced.customer}</td>
              <td>{serviced.date}</td>
              <td>{serviced.time}</td>
              <td>{serviced.technician}</td>
              <td>{serviced.reason}</td>
              <td>{serviced.status}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceHistory;
