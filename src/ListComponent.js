import React, { Component } from "react";

export default class ListComponent extends Component {
   state = { list: ["abc", "def", "ghi"] };
   render() {
      return (
         <div>
            {this.state.list.map((item, index) => (
               <div key={index}>{item}</div>
            ))}
         </div>
      );
   }
}
