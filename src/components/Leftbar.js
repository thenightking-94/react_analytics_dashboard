import React from 'react';
import '../CSS/leftbar.css';
import { Avatar, Button, Divider, Typography } from "@material-ui/core";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TelegramIcon from '@material-ui/icons/Telegram';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PieChartIcon from '@material-ui/icons/PieChart';
import SettingsIcon from '@material-ui/icons/Settings';

export default function LeftBar() {
    return (
        <div className="leftback">
            <div className="flexaddercol">
                <Avatar src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" style={{ height: '82px', width: '82px' }} />
                <Typography id='title_typo'>
                    Michael Atkinsons
                </Typography>
                <Typography id="title_typo">
                    My Profile
                </Typography>
                <br />
            </div>
            <div className='divider_line' />



            <div className="Menu">
                <Typography id="typo_menu_head">
                    Menu
                    </Typography>

                <span id='menu_items'>
                    <AlternateEmailIcon id='icon_1' />
                   &nbsp;
                    <Typography className='menu_typo'>Inbox</Typography>
                </span>
                <span id='menu_items'>
                    <TelegramIcon id='icon_1' />
                    &nbsp;
                    <Typography className='menu_typo'>Sent</Typography>
                </span>
                <span id='menu_items'>
                    <EditIcon id='icon_1' />
                    &nbsp;
                    <Typography className='menu_typo'>Drafts</Typography>
                </span>
                <span id='menu_items'>
                    <DeleteIcon id='icon_1' />
                    &nbsp;
                    <Typography className='menu_typo'>Deleted</Typography>
                </span>
                <span id='menu_items'>
                    <StarBorderIcon id="icon_1" />
                    &nbsp;
                    <Typography className='menu_typo'>Favourite</Typography>
                </span>
                <span id='menu_items'>
                    <PieChartIcon id='icon_1' />
                    &nbsp;
                    <Typography className='menu_typo'>Analytics</Typography>
                </span>
                <span id='menu_items'>
                    <SettingsIcon id="icon_1" />
                    &nbsp;
                    <Typography className='menu_typo'>Settings</Typography>
                </span>
            </div>


            <div className='botpart'>
                <Divider style={{ height: '15vh', background: 'transparent' }} />
                <div id='btnsection'>
                    <Button className='btnbot'>
                        Upgrade Plan
                </Button>
                &nbsp;&nbsp;
                    <Button className='btnbot'>
                        Contact Support
                </Button>
                </div>
            </div>

        </div>
    )
}