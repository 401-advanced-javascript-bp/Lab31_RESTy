import React from 'react';
import superagent from 'superagent';


class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        //this.state.value represents whatever text the user enters
        let data = await superagent.get(this.state.value);
        //this.props.share is the property share on form in app.js
        //this.state.value is the value provided by the user in the form
        //is invoked when user clicks Go! button
        //this was the shareData function passed from the parent App to be used/invoked by child Form
        this.props.share(this.state.value); 
        console.log('the go button works!', data.body.results);
    }

    handleChange = (event) => {
        //the event is an object
        //the target is the input (literally the input tag)
        //the value is whatever text is sitting in the input tag
        //cannot manipulate state directly in React
        this.setState({value: event.target.value});
        console.log('this is user input', event.target.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} name="url" placeholder="URL" value={this.state.value} />
                <button type="submit">Go!</button>
            </form>
        )
    }
}
export default Form;




