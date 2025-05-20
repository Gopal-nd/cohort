import { Component } from "react";


export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
            message:''
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError: true,
            message: error.message
        }
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo)
    }
    render(){
        if(this.state.hasError){
            return <h1>{this.state.message}</h1>
        }
        return this.props.children
    }
}