import { Typography, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import '../CSS/background.css';
import '../CSS/leftbar.css';
import Cross from '../assets/icon_cross.PNG';
import sampleData from "./sampleData";
import { DesktopWindowsOutlined } from '@material-ui/icons';

const items = sampleData();

const Charts = () => {
    let [array, setarray] = useState([]);
    let [preArray, setpre] = useState([]);
    let [postArray, setpost] = useState([]);
    useEffect(() => {
        let array = [...items];
        let preArray = [];
        let postArray = [];
        for (var i = 0; i < 10; i++)
            preArray = [...preArray, array[i]];
        for (var i = 10; i < 20; i++)
            postArray = [...postArray, array[i]];
        setpre(preArray);
        setpost(postArray);
        setarray(array)
    }, [])



    return (
        <div className="chartSection">

            <div id='header'>
                <Typography id='over_typo'>
                    Overview
                </Typography>
                <img alt="icon" src={Cross} style={{ height: '35px', width: '35px' }} />
            </div>

            <div className='divider_line_chart' />
            {
                window.innerWidth > `${760}` &&
                <div className='chart'>
                    {preArray && preArray.map(item =>
                        <Paper id='barslight' key={item.Letter} style={{ height: (item.Freq / 80) * 300 + "px" }}>
                        </Paper>)}
                    {array && array.map(item =>
                        <Paper id='bars' key={item.Letter} style={{ height: (item.Freq / 80) * 300 + "px" }}>
                        </Paper>)}
                    {postArray && postArray.map(item =>
                        <Paper id='barslight' key={item.Letter} style={{ height: (item.Freq / 80) * 300 + "px" }}>
                        </Paper>)}
                </div>
            }
            {
                window.innerWidth < `${760}` &&
                <div>
                    <div className='chart_mobile'>
                        {preArray && preArray.map(item =>
                            <Paper id='barslight' key={item.Letter} style={{ height: (item.Freq / 80) * 100 + "px" }}>
                            </Paper>)}
                    </div>
                    <div className='chart_mobile'>
                        {array && array.map(item =>
                            <Paper id='bars_mobile' key={item.Letter} style={{ height: (item.Freq / 80) * 100 + "px" }}>
                            </Paper>)}
                    </div>
                    <div className='chart_mobile'>

                        {postArray && postArray.map(item =>
                            <Paper id='barslight' key={item.Letter} style={{ height: (item.Freq / 80) * 100 + "px" }}>
                            </Paper>)}
                    </div>
                </div>
            }


        </div >
    )
}

export default Charts;