import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateModelForm from './CreateModelForm';
import AutomobilesList from './AutomobilesList';
import CreateAutomobileForm from './CreateAutomobileForm';
import AddSalesPersonForm from './AddSalesPersonForm';
import AddCustomerForm from './AddCustomerForm';
import RecordSaleForm from './RecordSaleForm';
import AllSalesList from './AllSalesList';
import SalesPeopleList from './SalesPeopleList';
import CustomerList from './CustomerList';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/models/create" element={<CreateModelForm />} />
          <Route path="/automobiles" element={<AutomobilesList />} />
          <Route path="/automobiles/create" element={<CreateAutomobileForm />} />
          <Route path="/salespeople/create" element={<AddSalesPersonForm />} />
          <Route path="/customers/" element={<CustomerList />} />
          <Route path="/customers/create" element={<AddCustomerForm />} />
          <Route path="/sales/create" element={<RecordSaleForm />} />
          <Route path="/sales" element={<AllSalesList />} />
          <Route path="/salespeople" element={<SalesPeopleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
