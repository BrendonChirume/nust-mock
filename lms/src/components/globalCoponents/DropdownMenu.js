import React, { Component } from 'react'
import { logOut } from "../../store/actions/actions";
import store from "../../store/store";

export class DropdownMenu extends Component {
    state = {
        array: this.props.array
    }

    logOut = () => {
        window.location.href = "/login"
        store.dispatch(logOut());
      }
    render() {
        if (this.props.array == []) {
            return (
                <div className={` ${this.props.active ? 'd-inline-block' : 'd-none'} "position-ralative "`}>
                    <div className="subNav-arrow position-absolute"></div>
                    <ul className="header-submenu position-absolute border shadow pt-2">
                        {this.state.array.map((list, index) => {
                            return (
                                <li key={index} className="px-3 pt-1">
                                    <a href={list}>{list}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className={` ${this.props.active ? 'd-inline-block' : 'd-none'} "position-ralative "`}>
                    <div className="subNav-arrow position-absolute"></div>
                    <ul className="header-submenu position-absolute border shadow pt-2">
                        {this.state.array.map((item, index) => {
                            return (
                                <li key={index} className="px-3 pt-1">
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            )
                        })}

                        <li onClick={this.logOut} className="border-top pt-2 pb-3 px-3 position-relative">
                            <a href="">
                                <svg role="img" viewBox="0 0 160 24" className="pt-1">
                                    <path className="svg-linkIcon" d="M14 9h-2.001L12 5H4v14h7.997l.001-4H14v4c0 1.103-.897 2-2 2H4c-1.104 0-2-.897-2-2V5c0-1.104.896-2 2-2h8c1.103 0 2 .896 2 2v4zm2.293-.293l1.414-1.414L22.414 12l-4.707 4.707-1.414-1.414L18.586 13H10v-2h8.586l-2.293-2.293z">
                                    </path>
                                </svg>
                                <span className="position-absolute signOut">Sign Out</span ></a>
                        </li>
                    </ul>
                </div>
            )
        }

    }
}

export default DropdownMenu
