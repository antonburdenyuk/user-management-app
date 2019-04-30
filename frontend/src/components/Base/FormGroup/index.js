import React, { useState } from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  invelidFeedback: PropTypes.string,
  handleChange: PropTypes.func
};

const FormGroup = props => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    const value = e.target.value;

    setValue(value);
  };

  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        id={props.name}
        name={props.name}
        value={value}
        onChange={handleChange}
      />
      <div className="invalid-feedaback">{props.invelidFeedback}</div>
    </div>
  );
};

FormGroup.propTypes = propTypes;

export default FormGroup;
