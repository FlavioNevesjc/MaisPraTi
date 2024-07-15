import { Component } from 'react';

class TimerComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
           contagem: 0 
        }
    }

    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState(prevState => ({
                contagem: prevState.count+1
            }))
        },1000)
    }

    componentDidUpdate(){
        
    }
}