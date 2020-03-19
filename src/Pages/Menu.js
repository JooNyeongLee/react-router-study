import React, { Component } from 'react';
import pages from '../Pages';
import { NavLink } from 'react-router-dom';

const style ={
    color:'red'
  }
class Menu extends Component {
    render() {
        return (
            <ul>
                {
                    pages.map((page)=>{
                        if(!page.role)
                        return <li><NavLink exact to ={page.path} activeStyle ={style}>{page.menuName}</NavLink></li>
                    })
                }
            </ul>
        );
    }
}

export default Menu;