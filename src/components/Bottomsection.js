import React from 'react';
import '../CSS/background.css';
import cross from '../assets/icon_cross.PNG';
import { Typography, Avatar } from '@material-ui/core';

export default function BottomSection() {

    return (
        <div className='bot_section'>

            <div id='insideBot'>

                <div className='flexAdder'>
                    <Typography className='typo_bot_header'>
                        Users
                    </Typography>
                    <Typography className="typo_bot_header">
                        Status
                    </Typography>
                    {
                        window.innerWidth > `${760}` &&
                        <Typography className="typo_bot_header">
                            Users
                    </Typography>
                    }
                    {
                        window.innerWidth > `${760}` &&
                        <Typography className="typo_bot_header">
                            Impression
                    </Typography>
                    }
                    {
                        window.innerWidth > `${760}` &&
                        <Typography className="typo_bot_header">
                            Conversion
                    </Typography>
                    }
                </div>

                <div className='flexAdder'>
                    <span className='row_direc'>
                        <Avatar src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" style={{ width: '55px', height: '55px' }} />
                        &nbsp;&nbsp;
                        <Typography className='typo_bot_name'>
                            Robert JohnStone
                    </Typography>
                    </span>
                    <span className='row_direc' id='btn_bot'>
                        <button className="btnBot">
                            <p id="active">Active</p>
                            <p id="paused">Paused</p>
                        </button>
                    </span>
                    {
                        window.innerWidth > `${760}` &&
                        <span className='col_direc'>
                            <Typography className='typo_bot_name'>189</Typography>
                            <p className='typo_bot_header'>Total Users</p>
                        </span>
                    }
                    {
                        window.innerWidth > `${760}` &&
                        <span className='col_direc'>
                            <Typography className='typo_bot_name'>324234</Typography>
                            <p className='typo_bot_header'>Total Impressions</p>
                        </span>
                    }
                    {
                        window.innerWidth > `${760}` &&
                        <span className='row_direc'>
                            <span className='col_direc'>
                                <Typography className='typo_bot_name'>2342</Typography>
                                <p className='typo_bot_header'>Coverted Users</p>
                            </span>
                            <Avatar src={cross} />
                        </span>
                    }


                </div>



                <div className='flexAdder'>
                    <span className='row_direc'>
                        <Avatar src="https://expertphotography.com/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg" style={{ width: '55px', height: '55px' }} />
                        &nbsp;&nbsp;
                        <Typography className='typo_bot_name'>
                            Robert JohnStone
                    </Typography>
                    </span>
                    <span className='row_direc' id='btn_bot'>
                        <button className="btnBot">
                            <p id="active">Active</p>
                            <p id="paused">Paused</p>
                        </button>
                    </span>
                    {
                        window.innerWidth > `${760}` &&
                        <span className='col_direc'>
                            <Typography className='typo_bot_name'>231</Typography>
                            <p className='typo_bot_header'>Total Users</p>
                        </span>
                    }
                    {
                        window.innerWidth > `${760}` &&
                        <span className='col_direc'>
                            <Typography className='typo_bot_name'>2323</Typography>
                            <p className='typo_bot_header'>Total Impressions</p>
                        </span>
                    }
                    {
                        window.innerWidth > `${760}` &&
                        <span className='row_direc'>
                            <span className='col_direc'>
                                <Typography className='typo_bot_name'>234</Typography>
                                <p className='typo_bot_header'>Coverted Users</p>
                            </span>
                            <Avatar src={cross} />
                        </span>
                    }


                </div>



                <div className='flexAdder'>
                    <span className='row_direc'>
                        <Avatar src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" style={{ width: '55px', height: '55px' }} />
                        &nbsp;&nbsp;
                        <Typography className='typo_bot_name'>
                            Robert JohnStone
                    </Typography>
                    </span>

                    <span className='row_direc' id='btn_bot'>
                        <button className="btnBot">
                            <p id="active">Active</p>
                            <p id="paused">Paused</p>
                        </button>
                    </span>
                    {
                        window.innerWidth > `${760}` &&
                        <span className='col_direc'>
                            <Typography className='typo_bot_name'>234</Typography>
                            <p className='typo_bot_header'>Total Users</p>
                        </span>
                    }
                    {
                        window.innerWidth > `${760}` &&
                        <span className='col_direc'>
                            <Typography className='typo_bot_name'>222413</Typography>
                            <p className='typo_bot_header'>Total Impressions</p>
                        </span>
                    }
                    {
                        window.innerWidth > `${760}` &&
                        <span className='row_direc'>
                            <span className='col_direc'>
                                <Typography className='typo_bot_name'>4535</Typography>
                                <p className='typo_bot_header'>Coverted Users</p>
                            </span>
                            <Avatar src={cross} />
                        </span>
                    }


                </div>
            </div>
        </div>
    )
}