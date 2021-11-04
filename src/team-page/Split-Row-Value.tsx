import React, { Fragment } from 'react';

export interface SplitRowValueProps {
    label: string;
    value: number;
    constant: number;
}

function SplitRowValue(props: SplitRowValueProps) {
    const { label, value, constant } = props;
  return (
    <Fragment>
      <tr>
        <td className="breakable fancy-font">{label}</td>
        <td>{value}</td>
      </tr>
      <tr>
        <td></td>
        <td className="fancy-font">x</td>
        <td className="fancy-font">{constant}</td>
        <td>{value * constant}</td>
      </tr>
    </Fragment>
  );
}

export default SplitRowValue;
