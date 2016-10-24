import React, { Component } from 'react';

function helloWorldDecorator(Wrapper) {
    return class WrapperComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                offset: 0.1,
                opacity: 0
            };
        }
        componentDidMount() {
            setInterval(() => {
                let { offset } = this.state;
                const { opacity } = this.state;

                if (opacity > 1) {
                    offset = -0.1;
                } else if (opacity < 0) {
                    offset = 0.1;
                }
                this.setState({
                    offset,
                    opacity: opacity + offset,
                });
            }, 50);
        }
        render() {
            return (
                <Wrapper
                  opacity={this.state.opacity}
                  {...this.props}
                />
            );
        }
    };
}

export default helloWorldDecorator;
