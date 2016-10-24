import React, { PropTypes } from 'react';

function Home({ opacity }) {
    return (
        <div>
            <p
              style={{ opacity }}
              className="text-xs-center display-1"
            >Hello World!</p>
        </div>
   );
}

Home.propTypes = {
    opacity: PropTypes.number.isRequired
};

export default Home;
