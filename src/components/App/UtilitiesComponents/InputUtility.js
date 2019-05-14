import React from "react";
import { InputGroup, Button, InputGroupAddon, Input } from "reactstrap";

export const InputUtility = () => {
  return (
    <React.Fragment>
      <InputGroup className='border border-dark rounded'>
        <InputGroupAddon addonType="prepend">
          <Button className='bg-primary'>Search</Button>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </React.Fragment>
  );
};

export default InputUtility;
