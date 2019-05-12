import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

export const InputUtility = () => {
  return (
    <React.Fragment>
      <InputGroup className='border border-dark rounded'>
        <InputGroupAddon addonType="prepend">
          <InputGroupText className='bg-white'>Search</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </React.Fragment>
  );
};

export default InputUtility;
