import React, {Component} from 'react';
import { Link } from 'react-router';

export default class MainLayout extends Component {
    render(){
        return(
            <div className="wrapper">
                <aside>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/widgets">Widgets</Link></li>
                    </ul>
                </aside>
                <div className="main-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
