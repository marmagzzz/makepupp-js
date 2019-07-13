import  React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Main extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    
    render() { 
        return (
            <div className = "main-div">
                <Header />
                <h1>main</h1>
                <Footer />
            </div>
        )
    }
}
 