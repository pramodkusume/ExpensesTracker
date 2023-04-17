import React from 'react';
import './ChartBar.css';
const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                {/* To use inline styles in React, use the style attribute, which accepts a Javascript object with camelCased properties.  */}
                <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
};
export default ChartBar;