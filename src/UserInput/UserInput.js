import React, { Component } from 'react';

class UserInput extends Component{

    render(){
        const style = {
            border: 'solid 1px #EB5E55',
            padding: '8px 10px',
            borderRadius: '4px'
        };
        return(
            <div>
                <h2>Edit my Username:</h2>
               <input type='text' onChange={this.props.change} value={this.props.name} style={style}/>
            </div>
        );
    }
    
}
export default UserInput;