import React from 'react';
import SignUpcss from './css/SignUpcss.css'

class App extends React.Component {
constructor(props) {
    super(props);
    this.state=  {
        Fname:"",
        Lname:"",
        Email:"",
        Epass:"",
        Cpass:""
    }
}

onFormSubmit = (event) => {
    event.preventDefault();
}

onWrongpass=()=>{
    if (this.state.Epass!==this.state.Cpass){
        alert("Passwords didn't match");
    }
}

    render () {
        return (
            <div className="">

            <div>
              <h1 className="welcome ui content header"> <img alt=""/> Welcome to Dhwani</h1>
            </div>
             
             <h2 className="siup ui page header">
              Sign Up
             </h2>
            <div className="ui segment">
            <form className="ui form">
            <div className="field">
               <label>First Name</label>
               <br/>
               <input 
               type="text"
               placeholder="First Name"
               value={this.state.Fname} 
                 onChange={event=>this.setState({ Fname: event.target.value})}
                required />
               
            </div>
    
            <div className="field">
               <label>Last Name</label>
               <br/>
               <input 
               type="text"
               placeholder="Last Name"
               value={this.state.Lname} 
                 onChange={event=>this.setState({ Lname: event.target.value})}
                required />
            </div>
    
            <div className="field">
               <label>Email Address</label>
               <br/>
               <input
                type="text"
                placeholder="Email Address"
                value={this.state.Email} 
                 onChange={event=>this.setState({ Email: event.target.value})}
                required/>
            </div>
    
            <div className="field">
               <label>Enter Password</label>
               <br/>
               <input 
               type="password"
               placeholder="Enter Password"
               value={this.state.Epass} 
                 onChange={event=>this.setState({ Epass: event.target.value})}
               required/>
            </div>
    
            <div className="field">
               <label>Confirm Password</label>
               <br/>
               <input 
               type="password"
               placeholder="Confirm Password"
               value={this.state.Cpass} 
                 onChange={event=>this.setState({ Cpass: event.target.value})}
               required/>
            </div>
    
            <div>
               <button className="ui button" type="submit" onClick={this.onWrongpass}>Sign up</button>
            </div>
            </form>
            </div>
    
           </div>
        );
    }
}
 


export default App;