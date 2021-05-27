import React from "react";
import Form from "./form";
import ListComponent from "./ListComponent";

export const Component1 = () => {
   return <div>Hello from component 1</div>;
};

export const Component2 = () => {
   return <div>Hello from component 2</div>;
};

const Component = () => {
   return (
      <div>
         <ListComponent />
         <Form />
      </div>
   );
};
export default Component;
