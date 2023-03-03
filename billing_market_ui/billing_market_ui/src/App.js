import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserRegistration from './Components/auth_components/UserRegistration';
import Login from './Components/auth_components/Login';
import CEODashboard from './Components/dashboards/CEODashboard';
import ManagerDashboard from './Components/dashboards/ManagerDashboard';
import SalesManDashboard from './Components/dashboards/SalesManDashboard';
import AccountantDashBoard from './Components/dashboards/AccountantDashBoard';
import StaffDashboard from './Components/dashboards/StaffDashboard';
import Report from './Components/reports_components/Report';
import EmployeeList from './Components/auth_components/EmployeeList';
import RemoveEmployee from './Components/auth_components/RemoveEmployee';
import UpdateEmployee from './Components/auth_components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Login />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/ceo' element={<CEODashboard />} />
        <Route  path='/register' element={<UserRegistration />} />
        <Route  path='/list' element={<EmployeeList />} />
        <Route  path='/remove' element={<RemoveEmployee />} />
        <Route  path='/update' element={<UpdateEmployee />} />
        <Route  path='/manager' element={<ManagerDashboard />} />

        <Route  path='/salesman' element={<SalesManDashboard />} /> 
        <Route  path='/staff' element={<StaffDashboard />} /> 
        
        <Route  path='/accountant' element={<AccountantDashBoard/>} >
        <Route  path='report' element={<Report/>} />
        </Route> 

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
