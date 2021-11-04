import React from 'react';

export interface StandardHeaderProps {
  title: string;
}

function StandardHeader(props: StandardHeaderProps) {
  const {title} = props;
  return (
    <div className="page-title">
      <h1>{title}</h1>
    </div>
  );
}

export default StandardHeader;
