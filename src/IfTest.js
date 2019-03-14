import React, { Component } from 'react';

class Child extends Component{
    constructor(){
        super();
        console.log("Child component constructed")
    }
    componentDidMount(){
        console.log("Child Component mounted")
    }
    componentWillUnmount(){
        console.log("Child component unmounted")
    }
    render(){
        return (
            <div>Tom</div>
        )
    }
}

class IfTest extends Component{
    constructor(){
        super();
        this.state = {
            show: true
        }
    }
    componentDidMount(){
        console.log("IfTest Component mounted");
    }
    toggle(){
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return (
            <React.Fragment>
                <button onClick={this.toggle.bind(this)}>{this.state.show?"Hide":"Show"}</button>
                <div>hello</div>
                {
                    this.state.show?<Child></Child>:null
                }
            </React.Fragment>
        )
    }
}


export default IfTest;