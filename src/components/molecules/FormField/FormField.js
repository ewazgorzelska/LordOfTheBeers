import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2em;
`;

const FormField = ({ label, name, type, value, onChange }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input name={name} type={type} value={value} onChange={onChange} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
