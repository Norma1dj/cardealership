import React, {useEffect, useState} from 'react';

function TechnicianList(props) {
    const [techs, setList] = useState([]);


    useEffect(() => {
        fetchTechs();
    }, []);

    const fetchTechs = async() => {
        const url = 'http://localhost:8080/api/technicians/';

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.techs);
            setList(data.techs);
        }
    }

  return (

<table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>  
            <th>First name</th>
            <th>Last Name</th>
          
            
          </tr>
        </thead>
        <tbody>
        
         
          {techs.map(tech => {
            return (
              <tr key={tech.id}>
                <td>{ tech.employee_id}</td>  
                <td>{ tech.first_name }</td>
                <td>{ tech.last_name }</td>
              
              </tr>
                  );
})}

        </tbody>
      </table>
  );
}

export default TechnicianList;
