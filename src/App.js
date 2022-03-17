import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import EmployeesPage from "./Pages/EmployeesPage/EmployeeesPage"
import ErrorPage from "./Pages/Error/ErrorPage"
function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Employees" element={<EmployeesPage/>}></Route>
        <Route path="/*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
