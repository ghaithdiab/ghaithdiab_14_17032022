import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import Select from 'react-select'
import { departments, states } from '../../data/data'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const HomePage = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [birthday, setBirthDay] = useState(String)
  const [state, setState] = useState(states[0].value)
  return (
    <div className="background">
      <Header />
      <div className="container">
        <form>
          <div className="form-container">
            <div className="left-side">
              <div className="input-container">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" placeholder="First Name" />
              </div>
              <div className="input-container">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" placeholder="Last Name" />
              </div>
              <div className="input-container">
                <label htmlFor="birthday">Date of Birth:</label>
                <DatePicker
                  id="birthday"
                  selected={birthday}
                  onChange={(date) => setBirthDay(date)}
                  dateFormat="dd/mm/yyyy"
                  isClearable
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
                />
              </div>
            </div>
            <div className="right-side">
              <fieldset className="address">
                <legend>Address</legend>
                <div className="input-container-right">
                  <label htmlFor="street">Street:</label>
                  <input id="street" type="text" placeholder="Street" />
                </div>
                <div className="input-container-right">
                  <label htmlFor="city">City:</label>
                  <input id="city" type="text" placeholder="City" />
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
                  <input id="zip-code" type="number" placeholder="Zip Code" />
                </div>
              </fieldset>
              <div className="input-container">
                <label htmlFor="department">Department:</label>
                <Select options={departments}></Select>
              </div>
            </div>
          </div>
          <div className="button">
            <button className="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HomePage
