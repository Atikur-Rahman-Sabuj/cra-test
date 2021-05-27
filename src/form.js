import React, { Component } from "react";

export default class Form extends Component {
   state = { name: "test", age: "30" };
   formSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
   };
   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };
   render() {
      return (
         <div>
            <form onSubmit={this.formSubmit}>
               <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
               <input type="text" name="age" value={this.state.age} onChange={this.onChange} />
               <button type="submit">Submit</button>
            </form>
         </div>
      );
   }
}
