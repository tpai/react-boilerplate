/* global location */

import React, { PropTypes } from 'react';

function App({ children }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    {children}
                </div>
            </div>
        </div>
    );
}

App.propTypes = {
    children: PropTypes.shape().isRequired
};

export default App;
