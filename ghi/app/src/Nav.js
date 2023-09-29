// import { NavLink } from 'react-router-dom';

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">AutoHub</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/manufacturers">List Manufacturers</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/manufacturers/create">Create Manufacturer</NavLink>
//             </li>


//            <li className="nav-item">
//               <NavLink className="nav-link" to="/models/">List Model</NavLink>
//             </li> 
//            <li className="nav-item">
//               <NavLink className="nav-link" to="/models/create">Create Model </NavLink>
//             </li> 


//             <li className="nav-item">
//              <NavLink className="nav-link" to="/automobiles">List Automobile</NavLink>
//             </li>      
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/automobiles/create">Create Automobile </NavLink>
//             </li>


//             <li className="nav-item">
//               <NavLink className="nav-link" to="/salespeople">List Salespeople </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/salespeople/create">Add Salesperson</NavLink>
//             </li>


//             <li className="nav-item">
//               <NavLink className="nav-link" to="/customers/">List Customer</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/customers/create">Add Customer</NavLink>
//             </li>


//             <li className="nav-item">
//               <NavLink className="nav-link" to="/sales">List Sales </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/sales/create">Record Sale</NavLink>
//               </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/sales/history">Sales by Salesperson </NavLink>
//             </li>
            
            
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/technicians/create">Add Technician</NavLink>
//             </li>
//             <li className="nav_item">
//               <NavLink className="nav-link" to="/technicians/">List Technicians</NavLink>
//             </li>
//             <li className="nav_item">
//               <NavLink className="nav-link" to="/appointments/create">Create Appointment</NavLink>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Nav;
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">AutoHub</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            {/* Manufacturers Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="manufacturerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manufacturers
              </a>
              <ul className="dropdown-menu" aria-labelledby="manufacturerDropdown">
                <li><NavLink className="dropdown-item" to="/manufacturers">List Manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturers/create">Create Manufacturer</NavLink></li>
              </ul>
            </li>

            {/* Models Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="modelDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Models
              </a>
              <ul className="dropdown-menu" aria-labelledby="modelDropdown">
                <li><NavLink className="dropdown-item" to="/models/">List Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models/create">Create Model</NavLink></li>
              </ul>
            </li>

            {/* Automobiles Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="automobileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Automobiles
              </a>
              <ul className="dropdown-menu" aria-labelledby="automobileDropdown">
                <li><NavLink className="dropdown-item" to="/automobiles">List Automobile</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/create">Create Automobile</NavLink></li>
              </ul>
            </li>

            {/* Sales Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="salesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </a>
              <ul className="dropdown-menu" aria-labelledby="salesDropdown">
                <li><NavLink className="dropdown-item" to="/sales">List Sales</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/create">Record Sale</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/history">Sales by Salesperson</NavLink></li>
              </ul>
            </li>

            {/* Customers Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="customerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Customers
              </a>
              <ul className="dropdown-menu" aria-labelledby="customerDropdown">
                <li><NavLink className="dropdown-item" to="/customers/">List Customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customers/create">Add Customer</NavLink></li>
              </ul>
            </li>

            {/* Technicians Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="technicianDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technicians
              </a>
              <ul className="dropdown-menu" aria-labelledby="technicianDropdown">
                <li><NavLink className="dropdown-item" to="/technicians/">List Technicians</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicians/create">Add Technician</NavLink></li>
              </ul>
            </li>

            {/* Appointments Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/create">Create Appointment</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
