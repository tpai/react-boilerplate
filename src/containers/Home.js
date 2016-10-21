import React, { Component } from 'react';

import HelloWorld from 'components/HelloWorld';
import helloWorldDecorator from 'components/helloWorldDecorator';

@helloWorldDecorator
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <HelloWorld
              {...this.props}
            />
        );
    }
}

export default Home;
