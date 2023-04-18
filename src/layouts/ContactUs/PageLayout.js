import React from 'react';

function PageLayout(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

export default PageLayout;
