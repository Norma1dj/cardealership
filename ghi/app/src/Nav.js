import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            

            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">List Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/create">Create Manufacturer</NavLink>
            </li>


           <li className="nav-item">
              <NavLink className="nav-link" to="/models/">List Model</NavLink>
            </li> 
           <li className="nav-item">
              <NavLink className="nav-link" to="/models/create">Create Model </NavLink>
            </li> 


            <li className="nav-item">
             <NavLink className="nav-link" to="/automobiles">List Automobile</NavLink>
            </li>      
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/create">Create Automobile </NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople">List Salespeople </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/create">Add Salesperson</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/">List Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/create">Add Customer</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">List Sales </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/create">Record Sale</NavLink>
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/history">Sales by Salesperson </NavLink>
            </li>
            
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/create">Add Technician</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" to="/technicians/">List Technicians</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" to="/appointments/create">Create Appointment</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" to="/appointments/">List Appointments</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" to="/appointments/list">List Services</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
