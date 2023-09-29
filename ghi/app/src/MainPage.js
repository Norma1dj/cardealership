// function MainPage() {
//   return (
    
//     <div className="px-4 py-5 my-5 text-center" >
//       <h1 className="display-5 fw-bold">AutoHub</h1>
//       <div className="col-lg-6 mx-auto">
//         <p className="lead mb-4">
//           The premiere solution for automobile dealership
//           management!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MainPage;
function MainPage() {
  return (
    <div className="container-fluid">

      {/* Hero Section */}
      <div className="hero-section text-center py-5 my-5">
        <h1 className="display-3 fw-bold">AutoHub</h1>
        <p className="lead mb-4">
          The premiere solution for automobile dealership management!
        </p>
      </div>

      {/* Features or Benefits Section */}
      <div className="features-section py-5">
        <div className="row">
          <div className="col-md-4 text-center">
          <img src="background.jpg" alt="Analytics" width="55%" />
            <h4>Extensive Inventory</h4>
            <p>Manage a vast range of automobiles with ease.</p>
          </div>
          <div className="col-md-4 text-center">
          <img src="customer.jpeg" alt="Analytics" width="60%" />
            <h4>Customer Management</h4>
            <p>Keep track of all your customers and their preferences.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-graph-up fs-1 mb-3"></i>
            <img src="analytics.webp" alt="Analytics" width="60%" />
            <h4>Sales Analytics</h4>
            <p>Get insights into your sales and optimize for growth.</p>
          </div>
        </div>
      </div>

      {/* Footer or Additional Links */}
      <div className="footer-section py-3 mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 AutoHub. All rights reserved.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MainPage;