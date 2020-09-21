import React, { Component } from 'react';

const WIDTH = 500;
const HEIGHT = 500;

interface ClockProps {
    time: Date
}

class Clock extends Component<ClockProps> {
    constructor(props: ClockProps){
        super(props);
    }

    render(): JSX.Element {
        const r = WIDTH / 2 - 6;
        const ticks = new Array<JSX.Element> ();
        const labels = new Array<JSX.Element> ();
        for (let i = 0; i < 12; i++) {
            ticks.push(<line key={`tick ${i}`} x1={WIDTH / 2 + r * Math.cos(2 * Math.PI * i / 12)}
                y1={HEIGHT / 2 + r * Math.sin(2 * Math.PI * i / 12)}
                x2={WIDTH / 2 + (r - 14) * Math.cos(2 * Math.PI * i / 12)}
                y2={HEIGHT / 2 + (r - 14) * Math.sin(2 * Math.PI * i / 12)}
                stroke='black'
                strokeWidth='3'/>);
            const j = (i + 2) % 12;
            labels.push(
                <text key={`lb ${i}`} x={WIDTH / 2 + (r - 26) * Math.cos(2 * Math.PI * i / 12)}
                    y={HEIGHT / 2 + (r - 26) * Math.sin(2 * Math.PI * i / 12)}
                    dominantBaseline="middle"
                    textAnchor="middle">{j + 1}</text>
            );
        }
        return (
            <svg width={WIDTH} height={HEIGHT}>
                <circle cx={WIDTH / 2} cy={HEIGHT / 2} r={r} stroke='black' fill='none' strokeWidth='4'></circle>
                {ticks}
                {labels}
                <line key='seconds'
                    x1={WIDTH / 2}
                    y1={HEIGHT / 2}
                    x2={WIDTH / 2 + (r - 36) * Math.cos(2 * Math.PI * ((this.props.time.getSeconds() - 15) % 60) / 60)}
                    y2={HEIGHT / 2 + (r - 36) * Math.sin(2 * Math.PI * ((this.props.time.getSeconds() - 15) % 60) / 60)}
                    stroke='red'
                    strokeWidth='3'/>
                <line key='minutes'
                    x1={WIDTH / 2}
                    y1={HEIGHT / 2}
                    x2={WIDTH / 2 + (r - 64) * Math.cos(2 * Math.PI * ((this.props.time.getMinutes() - 15) % 60) / 60)}
                    y2={HEIGHT / 2 + (r - 64) * Math.sin(2 * Math.PI * ((this.props.time.getMinutes() - 15) % 60) / 60)}
                    stroke='black'
                    strokeWidth='4'/>
                <line key='hours'
                    x1={WIDTH / 2}
                    y1={HEIGHT / 2}
                    x2={WIDTH / 2 + (r - 96) * Math.cos(2 * Math.PI * ((this.props.time.getHours() - 3) % 12) / 12)}
                    y2={HEIGHT / 2 + (r - 96) * Math.sin(2 * Math.PI * ((this.props.time.getHours() - 3) % 12) / 12)}
                    stroke='black'
                    strokeWidth='4'/>
            </svg>
        );
    }
}

export {
    Clock
};
