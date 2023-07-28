import React, { useEffect, useState }  from 'react';

function CreateAppointmentForm() {

  const [vip, setVip] = useState('')
  const [date_time, setDateTime] = useState('')
  const [reason, setReason] = useState('')
  const [status, setStatus] = useState('')
  const [vin, setVin] = useState('')
  const [customer, setCustomer] = useState('')
  const [techs, setTechnicians] = useState([])
  const [technician, setTechnician] = useState('')


  const handleVipChange = (event) => {
    const value = event.target.value;
    setVip(value);
  };

  const handleDateTimeChange = (event) => {
    const value = event.target.value;
    setDateTime(value);
  };
  
  const handleReasonChange = (event) => {
    const value = event.target.value;
    setReason(value);
  };

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };

  const handleTechnicianChange = (event) => {
    const value = event.target.value;
    setTechnician(value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.vip = vip;
    data.date_time = date_time;
    data.reason = reason;
    data.status = status;
    data.vin = vin;
    data.customer = customer;
    data.technician = technician;

    
   

    const customerUrl = `http://localhost:8080/api/appointments/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(data)
    const response = await fetch(customerUrl, fetchConfig);
    if (response.ok) {
      const newTechnician = await response.json();
      

  
    setVip('');
    setDateTime('');
    setReason('');
    setStatus('');
    setVin('');
    setCustomer('');
    setTechnician('');
        
    }
  }

  const fetchData = async () => {
    const techniciansUrl = 'http://localhost:8080/api/technicians/';
    const techniciansresponse = await fetch(techniciansUrl);

    if (techniciansresponse.ok) {
      const data = await techniciansresponse.json();
      setTechnicians(data.techs);
      
    }}
   useEffect(()  => { 
     fetchData();
   }, []);


  return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create Appointment</h1>
                        <form onSubmit={handleSubmit} id="create-presentation-form">
                            <div className="form-floating mb-3">
                                <input  onChange={handleVinChange} value={vin}  placeholder="VIN" required type="text" id="vin"
                                    name="vin" className="form-control"/>
                                <label htmlFor="vin">Automobile VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleCustomerChange} value={customer} placeholder="customer" required type="text" id="customer"
                                    name="customer" className="form-control"/>
                                <label htmlFor="customer">Customer</label>
                      
                            </div>
                           
                            <div className="form-floating mb-3">
                               <input onChange={handleDateTimeChange} placeholder="dateTime..." required type="datetime-local" name="date_time" id="date_time" className="form-control" value={date_time} />
                               <label htmlFor="dateTime">DateTime</label>
                            </div>
                           
                           
                           
                           
                           
                            {/* <div className="form-floating mb-3">
                                <input onChange={handleDateTimeChange} value={date_time} placeholder="date_Time" required type="text" id="date_Time"
                                    name="date_time" className="form-control"/>
                                <label htmlFor="dateTime">DateTime</label>
                            </div> */}



                            <div className="mb-3">
                              <select onChange={handleTechnicianChange} required value={technician} id="technician" className="form-select">
                                <option value="">Choose a Technician</option>
                                {techs.map((technician) => {
                                  return(
                                    <option key={technician.id} value={technician.id}>
                                      {technician.first_name} {technician.last_name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleReasonChange} value={reason} placeholder="reason" required type="text" id="reason"
                                    name="reason" className="form-control"/>
                                <label htmlFor="reason">Reason</label>
                            </div>
                            <button className="btn bg-success btn-primary">Create</button>
                        </form>
                        <div className="alert alert-success d-none mb-0" id="success-message">
                            Your customer successfully created!
                          </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default CreateAppointmentForm;
