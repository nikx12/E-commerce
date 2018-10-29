import React, { Component } from 'react';

class Profile extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
       console.log(this.props.location)
        return(
            <div>
                <h1>Hi User</h1>
                {/* <p>Name: {this.props.location.state.name}</p> */}
                {/* <p>Email ID: {this.props.user}</p>
                <p>Address: {this.props.address}</p>
                <p>Contact: {this.props.contact}</p>
                <p>Gender: {this.props.gender}</p> */}

            </div>

        )
    }
}

export default Profile;