import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

export const InputUtility = () => {
  return (
    <React.Fragment>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </React.Fragment>
  );
};

export default InputUtility;
