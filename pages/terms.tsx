import React from 'react';
import Head from 'next/head';

const Terms = () => {
  return (
    <>  
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <div>
        <h1>Terms & Conditions</h1>
        <p>Your boilerplate content goes here.</p>
        {/* Add more sections as needed */}
      </div>
      <style jsx>{`
        div {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
        }
      `}</style>
    </>
  );
};

export default Terms;
