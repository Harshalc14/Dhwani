import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state=  {
            Email:"",
            Epass:""
        }
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
    }
    
    
        render () {
            return (
                <div className="ui container ">
    
                <div>
                  <h1 className="welcome ui content header"> <img alt=""/> Welcome back to Dhwani !!</h1>
                </div>
                 
                 <h2 className="siup ui page header">
                  Log In
                 </h2>
                <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                
                
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
                   <label> Password</label>
                   <br/>
                   <input 
                   type="password"
                   placeholder="Enter Password"
                   value={this.state.Epass} 
                     onChange={event=>this.setState({ Epass: event.target.value})}
                   required/>
                </div>

                <div>
                    <a href="#">Foget password?</a>
                </div>
        
                <div>
                   <button className="ui button" type="submit" >Log In</button>
                </div>
                </form>
                </div>
        
               </div>
            );
        }
}

export default Login;