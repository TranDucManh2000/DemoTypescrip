import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const Bigchart = () => {
    const data = [
        {
            "name": "London",
            "月份": "Feb.",
            "月均降雨量": 28.8
        },
        {
            "name": "London",
            "月份": "Mar.",
            "月均降雨量": 39.3
        },
        {
            "name": "London",
            "月份": "Apr.",
            "月均降雨量": 81.4
        },
        {
            "name": "London",
            "月份": "May",
            "月均降雨量": 47
        },
        {
            "name": "London",
            "月份": "Jun.",
            "月均降雨量": 20.3
        },
        {
            "name": "London",
            "月份": "Jul.",
            "月均降雨量": 24
        },
        {
            "name": "London",
            "月份": "Aug.",
            "月均降雨量": 35.6
        },
        {
            "name": "Berlin",
            "月份": "Feb.",
            "月均降雨量": 23.2
        },
        {
            "name": "Berlin",
            "月份": "Mar.",
            "月均降雨量": 34.5
        },
        {
            "name": "Berlin",
            "月份": "Apr.",
            "月均降雨量": 99.7
        },
        {
            "name": "Berlin",
            "月份": "May",
            "月均降雨量": 52.6
        },
        {
            "name": "Berlin",
            "月份": "Jun.",
            "月均降雨量": 35.5
        },
        {
            "name": "Berlin",
            "月份": "Jul.",
            "月均降雨量": 37.4
        },
        {
            "name": "Berlin",
            "月份": "Aug.",
            "月均降雨量": 42.4
        }
    ]
    const config = {
        data,
        isGroup: true,
        xField: '月份',
        yField: '月均降雨量',
        seriesField: 'name',
        dodgePadding: 2,
        intervalPadding: 20,
        columnStyle: {
            radius: [20, 20, 20, 20],
        },
        label: {
            // position: 'middle',
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };

    return <Column {...config} />;
}

export default Bigchart