import React, {Component} from 'react'
import {Link} from 'react-router'

export default class UserList extends Component{
    render(){
        return(
            <div>
                <ul className="user-list">
                    <li><Link to="users/1">User name 1</Link></li>
                    <li><Link to="users/2">User name 2</Link></li>
                    <li><Link to="users/3">User name 3</Link></li>
                    <li><Link to="users/4">User name 4</Link></li>
                    <li><Link to="users/5">User name 5</Link></li>
                    <li><Link to="users/6">User name 6</Link></li>
                </ul>
            </div>
        )
    }
}
