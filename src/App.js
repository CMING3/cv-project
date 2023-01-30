import React, { Component } from 'react'
import DisplayForm from './components/display-form'
import "./styles/App.css"

class App extends Component {
  constructor(){
    super();

    this.state={
      info:{
        name:'',
        email:'',
        phone:'',
        schoolName:'',
        schoolTitle:'',
        schoolDate:'',
        companyName:'',
        companyPosition:'',
        companyDate:'',
      }
    }
  }

  handleChange = (e) => {
    const value = e.target.value
    const id = e.target.id
    this.setState({
      info:{
        [id]: value,
      }
    })
  }

  render(){
    const {name, email, phone, schoolName, schoolTitle,
      schoolDate, companyName, companyPosition, companyDate} = this.state.info;

    return(
      <div className='CV-App'> 
        <div className="left-block"> 

          <form className="data-form">

            <section>
              <h3>General Information</h3>
              <div className="input">
                <label htmlFor='name'>Name: </label>
                <input onChange={this.handleChange} value={name} type="text" id="name"></input>
              </div>
              <div className="input">
                <label htmlFor='email'>Email: </label>
                <input onChange={this.handleChange} value={email} type="text" id="email"></input>
              </div>
              <div className="input">
                <label htmlFor='phone'>Phone: </label>
                <input onChange={this.handleChange} value={phone} type="text" id="phone"></input>
              </div>
            </section>

            <section>
              <h3>Education</h3>
              <div className="input">
                <label htmlFor='school-name'>School name: </label>
                <input onChange={this.handleChange} value={schoolName} type="text" id="schoolName"></input>
              </div>
              <div className="input">
                <label htmlFor='school-title'>Title: </label>
                <input onChange={this.handleChange} value={schoolTitle} type="text" id="schoolTitle"></input>
              </div>
              <div className="input">
                <label htmlFor='school-date'>Date: </label>
                <input onChange={this.handleChange} value={schoolDate} type="text" id="schoolDate"></input>
              </div>
            </section>

            <section>
              <h3>Working Experience</h3>
              <div className="input">
                <label htmlFor='company-name'>Company name: </label>
                <input onChange={this.handleChange} value={companyName} type="text" id="companyName"></input>
              </div>
              <div className="input">
                <label htmlFor='company-position'>Position: </label>
                <input onChange={this.handleChange} value={companyPosition} type="text" id="companyPosition"></input>
              </div>
              <div className="input">
                <label htmlFor='company-date'>Date: </label>
                <input onChange={this.handleChange} value={companyDate} type="text" id="companyDate"></input>
              </div>
            </section>
            <input type="submit" value="submit"/>
          </form>

        </div>
        <div className="right-block">
          
          <DisplayForm data={this.state}/>
        </div>
      </div>
    )
  }
}

export default App;
