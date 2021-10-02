import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        //calling base class ie. React Constructor...
        super(props);

        this.state={lat: null, errorMessage:''};

        //we moved this location method here as we need to call it only once but if we put this under
        //render then it will be called multiple times which will slow down our app.
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    render(){
        if(this.state.errorMessage && !this.state.lat)
            return(
                <div>Error: {this.state.errorMessage}</div>
            )
        
        if(!this.state.errorMessage && this.state.lat)
            return(
                <div>Latitude: {this.state.lat}</div>
            )
        
        return(
            <div>Loading...</div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector("#root"));