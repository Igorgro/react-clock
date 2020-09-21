import React, { Component } from 'react';

import { Clock } from './clock';

interface AppState {
    time: Date
}


class App extends Component<unknown, AppState> {
    timer: NodeJS.Timeout;
    constructor(props: unknown) {
        super(props);
        this.state = { time: new Date() };
        this.timer = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }


    render(): JSX.Element {
        return (
            <div id="app" style={{ display: 'table' }}>
                <Clock time={this.state.time}></Clock>
            </div>
        );
    }
}

export {
    App
};
