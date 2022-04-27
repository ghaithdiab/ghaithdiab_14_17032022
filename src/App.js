import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import EmployeesPage from "./Pages/EmployeesPage/EmployeeesPage"
import ErrorPage from "./Pages/Error/ErrorPage"
import { useState } from "react"
function App() {
  const [dataEmployee,setDataEmployee]=useState([{
    id:'',
    firstName:'',
    lastName:'',
    DateOfBrith:'',
    startDay:'',
    street:'',
    city:'',
    state:'',
    zipCode:'',
    department:''
  }])
  const addEmployee=(newEmployee)=>{
    setDataEmployee([...dataEmployee,{...newEmployee}])
  }
  // console.log(dataEmployee)
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage addEmployee={addEmployee}/>}></Route>
        <Route path="/Employees" element={<EmployeesPage EmployeesList={dataEmployee}/>}></Route>
        <Route path="/*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
