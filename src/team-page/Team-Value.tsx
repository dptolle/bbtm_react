import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import DisplayField from '../components/Display-Field';
import SplitRowValue from './Split-Row-Value';

function TeamValue() {
  return (
    <div className="team-value-container">
      <Table responsive borderless size="sm">
        <tbody>
          {entry.map((e) => {
            return (
              <SplitRowValue
                label={e.label}
                value={e.value}
                constant={e.constant}
              ></SplitRowValue>
            );
          })}
        </tbody>
      </Table>
      <div className="container-flex team-value-container__final">
        <DisplayField label="Teamwert" value=""></DisplayField>
        <DisplayField label="Momentaner Teamwert" value=""></DisplayField>
      </div>
    </div>
  );
}

const entry = [
  {
    label: 'Wiederholumgswürfe',
    value: 2,
    constant: 70000,
  },
  {
    label: 'Assistenten',
    value: 2,
    constant: 10000,
  },
  {
    label: 'Cheerleaders',
    value: 2,
    constant: 10000,
  },
  {
    label: 'Sanitäter',
    value: 2,
    constant: 50000,
  }
];
export default TeamValue;
