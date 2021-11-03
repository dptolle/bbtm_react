import React from 'react';

export interface DisplayFieldProps {
    label: string;
    value: string;
}

function DisplayField(props: DisplayFieldProps) {
    const {label, value} = props;
  return (
    <div className="display-field container-flex">
      <div className="display-field__label fancy-font">{label}:</div>
      <div>{value}</div>
    </div>
  );
}

export default DisplayField;
