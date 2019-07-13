import  React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../container/Login';
import Signin from '../container/Signin';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Main extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }

    render() { 
        return (
            <Router>
                

                <Route path="/Header" exact component={Header} />
                <Route path="/Login/" component={Login} />
                <Route path="/Footer/" component={Footer} />
                <Route path="/Signin/" component={Signin} />
            </Router>

        )
    }
}
 