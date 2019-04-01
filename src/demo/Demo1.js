import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Dragula from 'react-dragula';
import './demo1.css';

class Container extends Component{
    render(){
        let structure = this.props.structure;
        return (
            <div className="container">
                <Content structure={structure}></Content>
            </div>
        )
    }
}


class Content extends Component{
    
    render(){
        let structure = this.props.structure;
        return (
            <React.Fragment>
                {
                    structure.rows?(
                        structure.rows.map(item => {
                            if(item.rows || item.cols){
                                return (
                                    <Content structure={item}></Content>
                                )
                            }
                        })
                    ):(
                        <div className="row" style={structure.style} ref={this.dragulaDecorator}>
                            {
                                structure.cols.map(col => {
                                    if(col.rows){
                                        return (
                                            <div className="col" style={col.style} ref={this.dragulaDecorator}>
                                                <Content structure={col}></Content>
                                            </div>
                                        )
                                    }
                                    else if(col.component){
                                        function MyLoadingComponent() {
                                            return <div>Loading...</div>;
                                        }
                                        let path = col.component;
        
                                        const LoadableAnotherComponent = Loadable({
                                            loader: () => import(`${path}`),
                                            loading: MyLoadingComponent
                                        });
                                        return (<div className='col' style={{marginRight:5, marginBottom:5, ...col.style}}><LoadableAnotherComponent /></div>);
                                    }
                                })
                            }
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    }
}


export default Container;