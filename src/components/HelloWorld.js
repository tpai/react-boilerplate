import React, { PropTypes } from 'react';

function Home({ opacity }) {
    return (
        <p
          style={{ opacity }}
          className="text-xs-center display-1"
        >Hello World!</p>
   );
}

Home.propTypes = {
    opacity: PropTypes.number.isRequired,
};

export default Home;
