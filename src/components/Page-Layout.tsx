import React, { Children, PropsWithChildren } from 'react';


function PageLayout({ children }: PropsWithChildren<{}>) {
    const [header, main, footer] = Children.toArray(children);

  return (
    <div className="page-container container-flex">
      <header className="page-header">{header}</header>
      <main className="page-main">{main}</main>
      <footer className="page-footer">{footer}</footer>
    </div>
  );
}

export default PageLayout;
