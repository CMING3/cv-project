import React, { Component } from 'react'
import DisplayForm from './components/display-form'
import "./styles/App.css"

class App extends Component {
  constructor(){
    super();

    this.state={
      name:'',
      email:'',
      phone:'',
      schoolName:'',
      schoolTitle:'',
      schoolDate:'',
      companyName:'',
      companyPosition:'',
      companyDate:''
    }
  }

  render(){
    return(
      <div className='CV-App'> 
        <div className="left-block"> 

          <form className="data-form">

            <section>
              <h3>General Information</h3>
              <div className="input">
                <label htmlFor='name'>Name: </label>
                <input type="text" id="name"></input>
              </div>
              <div className="input">
                <label htmlFor='email'>Email: </label>
                <input type="text" id="email"></input>
              </div>
              <div className="input">
                <label htmlFor='phone'>Phone: </label>
                <input type="text" id="phone"></input>
              </div>
            </section>

            <section>
              <h3>Education</h3>
              <div className="input">
                <label htmlFor='school-name'>School name: </label>
                <input type="text" id="school-name"></input>
              </div>
              <div className="input">
                <label htmlFor='school-title'>Title: </label>
                <input type="text" id="school-title"></input>
              </div>
              <div className="input">
                <label htmlFor='school-date'>Date: </label>
                <input type="text" id="school-date"></input>
              </div>
            </section>

            <section>
              <h3>Working Experience</h3>
              <div className="input">
                <label htmlFor='company-name'>Company name: </label>
                <input type="text" id="company-name"></input>
              </div>
              <div className="input">
                <label htmlFor='company-position'>Position: </label>
                <input type="text" id="company-position"></input>
              </div>
              <div className="input">
                <label htmlFor='company-date'>Date: </label>
                <input type="text" id="company-date"></input>
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
