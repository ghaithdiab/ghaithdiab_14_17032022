import React from 'react'
import PropTypes from "prop-types";
import Header from '../../components/Header/Header'
import './EmployeePage.css'
import DataTabels from 'table-component-react'
const EmployeesPage = ({EmployeesList}) => {
  const labels = [
    {text:"Id",value:"id"},
    { text: "First Name", value: "firstName" },
    { text: "Last Name", value: "lastName" },
    { text: "Date of Birth", value: "dateOfBirth" },
    { text: "Start Date", value: "startDate" },
    { text: "Street", value: "street" },
    { text: "City", value: "city" },
    { text: "State", value: "state" },
    { text: "Zip Code", value: "zipCode" },
    { text: "Department", value: "department" }
  ];
  return (
    <div className='background'>
      <Header/>
      <div className='container'>
        {/* <DataTabel labels={exampleLabels} data={exampleData}/> */}
        <DataTabels labels={labels} data={EmployeesList}/>
      </div>
    </div>
  )
}
EmployeesPage.propTypes={
  EmployeesList:PropTypes.array.isRequired
}
export default EmployeesPage