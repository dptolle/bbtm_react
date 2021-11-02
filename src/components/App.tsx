import React from "react";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PageLayout from './Page-Layout';

function App() {
  return (
    <PageLayout>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </PageLayout>
  );
}

export default App;
