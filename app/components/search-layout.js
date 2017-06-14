import React, {Component} from 'react'

export default class SearchLayout extends Component{
    render(){
        return(
            <div className="search-block">
                <header>Search title</header>
                <div>
                    {this.props.children}
                </div>
                <footer>Total Result</footer>
            </div>
        )
    }
}
