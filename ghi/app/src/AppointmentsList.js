import React, {useEffect, useState} from 'react';

function AppointmentsList(props) {
    const [appointment, setList] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);
    const [status, setStatus] = useState("CREATED");


    // get appointment data
    const fetchAppointment = async() => {
        const url = 'http://localhost:8080/api/appointments/';

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.appointment);
            setList(data.appointment);
        }
    }



    // get automobile data
    const fetchAutomobileData = async () => {
      const url = "http://localhost:8100/api/automobiles/";
      
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.autos);
      }
    }




    // get appointment data
    useEffect(() => {
      fetchAppointment();
  }, []);
  
  
    // get automobiles data
    useEffect(() => {
      fetchAutomobileData();
    })

    


    // Set status to Cancel
    const handleCancel = async (id) => {

      const data = {};
      data.status = "CANCEL";

      const cancelURL = `http://localhost:8080/api/appintments/${id}/cancel`;
      const fetchConfig = {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(cancelURL, fetchConfig);
      if (response.ok) {
        const cancelAppointment = await response.json();
        setStatus(cancelAppointment.status);
        setList(appointment.filter((appointment) => appointment.status === "PENDING"));
        fetchAppointment();
      }
    }




    // Set status to Finished
    const handleFinish = async (id) => {
       
      const data = {}
      data.status = "FINISHED";

      const finishURL = `http://localhost:8080/api/appointments/${id}/finish`;
      const fetchConfig = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const response = await fetch(finishURL, fetchConfig);
      if (response.ok) {
        const finishAppointment = await response.json();
        setStatus(finishAppointment.status);
        setList(appointment.filter((appointment) => appointment.status === "PENDING"));
        fetchAppointment();
      }
    }




    // Checks to see if customer is a vip
    function isVip(vin) {
      // iterate over list of cars in inventory
      let isVip ="No";
      for (let auto of automobiles) {
        // check if vin is in inventory list
        if (vin == auto.vin) {
          isVip = "Yes";
        }
      }
      return <td>{isVip}</td>
    }


  return (

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
          </tr>
        </thead>
        <tbody>
          {appointment.map(appoint => {
            return (
              <tr key={appoint.id}>
                <td>{ appoint.vin }</td>
                {isVip(appointment.customer)}                                              
                <td>{ appoint.customer }</td>  
                <td>{ new Date(appoint.date_time).toLocaleDateString }</td>
                <td>{ new Date(appoint.date_time).toLocaleTimeString }</td>
                <td>{ appoint.technician.first_name} { appoint.technician.last_name}</td>
                <td>{ appoint.reason }</td>
                <td><button onClick={() => handleCancel(appointment.id)} type="button" className="btn btn-danger">Cancel</button></td>
                <td><button onClick={() => handleFinish(appointment.id)} type="button" className="btn btn-success">Finish</button></td>
              </tr>
                  );
})}
        </tbody>
      </table>
  );
}

export default AppointmentsList;
