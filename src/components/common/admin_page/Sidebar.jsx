//Navigation Bar Design changed



import React from 'react'
import {  BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'
import { BsMastodon } from "react-icons/bs";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsMastodon className='icon_header' /> 99X
        </div>
        <span className='icon close_icon'onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="registration">
                    <BsFillArchiveFill className='icon'/> Registration
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="evaluation">
                    <BsFillGrid3X3GapFill className='icon'/> Evaluation
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="profilecreate">
                    <BsPeopleFill className='icon'/> Profile Create
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="cvmanagement">
                    <BsListCheck className='icon'/> CV Management
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="profile">
                    <BsMenuButtonWideFill className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="security">
                    <BsFillGearFill className='icon'/> Security
                </a>
            </li>
        </ul>

    </aside>
  )
}

export default Sidebar