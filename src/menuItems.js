import React, { Component } from 'react';

class Link extends Component {
    render() {
        const url = "/" + this.props.label;
        return (
            <div>
                <a href={url}>{this.props.label}</a>
            </div>
         )
    }
};

class Menu extends Component {

    render() {
        const menus = [
            "home",
            "alone",
            "fck"
        ];
        return (
            <div>
                {menus.map((index, value) => {
                    return <h1 key={index}><Link label={value} /></h1>
                })}
            </div>
        )
    }
};

export default Menu;