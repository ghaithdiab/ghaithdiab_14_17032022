import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import Select from 'react-select'
import { departments, states } from '../../data/data'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const HomePage = ({addEmployee}) => {
  const[Id,SetId]=useState(1)
  const [startDate, setStartDate] = useState(new Date())
  const [birthday, setBirthDay] = useState(String)
  const [state, setState] = useState(states[0].value)
  const [department, setDepartment] = useState(departments[0].value)
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    zipCode: '',
  })
  const handelInputChange = (e) => {
    const value = e.target.value
    setInfo({
      ...info,
      [e.target.name]: value,
    })
  }
  const saveEmployee = (e) => {
    e.preventDefault()
    SetId(Id+1);
    const EmployeeData={
      id:Id,
      firstName:info.firstName,
      lastName:info.lastName,
      DateOfBrith:birthday.toLocaleDateString('en-US'),
      StartDate:startDate.toLocaleDateString('en-Us'),
      street:info.street,
      city:info.city,
      State:state,
      zipCode:info.zipCode,
      Department:department
    }
    addEmployee(EmployeeData)
  }
  return (
    <div className="background">
      <Header />
      <div className="container">
        <form onSubmit={(e) => saveEmployee(e)}>
          <div className="form-container">
            <div className="left-side">
              <div className="input-container">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handelInputChange}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handelInputChange}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="birthday">Date of Birth:</label>
                <DatePicker
                  id="birthday"
                  selected={birthday}
                  onChange={(date) => setBirthDay(date)}
                  dateFormat="dd/mm/yyyy"
                  isClearable
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="startDay">Start Day:</label>
                <DatePicker
                  id="startDay"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/mm/yyyy"
                  isClearable
                  required
                />
              </div>
            </div>
            <div className="right-side">
              <fieldset className="address">
                <legend>Address</legend>
                <div className="input-container-right">
                  <label htmlFor="street">Street:</label>
                  <input
                    id="street"
                    type="text"
                    placeholder="Street"
                    name="street"
                    onChange={handelInputChange}
                    required
                  />
                </div>
                <div className="input-container-right">
                  <label htmlFor="city">City:</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={handelInputChange}
                    required
                  />
                </div>
                <div className="input-container-right">
                  <label htmlFor="state">State:</label>
                  <Select
                    options={states}
                    aria-label="state"
                    placeholder={states[0].label}
                    onChange={(e) => setState(e.value)}
                    className="select-state"
                  ></Select>
                </div>
                <div className="input-container-right">
                  <label htmlFor="zip-code">Zip Code:</label>
                  <input
                    id="zip-code"
                    type="number"
                    placeholder="Zip Code"
                    name="zipCode"
                    onChange={handelInputChange}
                  />
                </div>
              </fieldset>
              <div className="input-container">
                <label htmlFor="department">Department:</label>
                <Select
                  options={departments}
                  aira-label="departments"
                  placeholder={departments[0].value}
                  onChange={(e) => setDepartment(e.value)}
                ></Select>
              </div>
            </div>
          </div>
          <div className="button">
            <button className="submit" type='submit'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HomePage
