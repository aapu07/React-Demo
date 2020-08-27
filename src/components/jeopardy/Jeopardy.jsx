import React, { Component } from 'react';
//import our service
import JeopardyService from "../jeopardyService/JeopardyService";
class Jeopardy extends React.Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: { userAnswer: '' },

        }
    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            //console.log(result)
            this.setState({
                data: result.data[0]
            })
        })
    }
    //when the component mounts, get the first question
    componentDidMount() {
        this.getNewQuestion();
    }
    handleChange = (event) => {

        const newformData = { ...this.state.formDate };
        newformData[event.target.name] = event.target.value;

        this.setState({ formData: newformData });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        if (this.state.data.answer === this.state.formData.userAnswer) {

            this.setState((prevState) => {
                return { score: prevState.score + prevState.data.value }
            })
           console.log("correct answer")

        } else {
            this.setState((prevState) => {
                return { score: prevState.score - prevState.data.value }
            })
            console.log("incorrect answer")
        }

        this.getNewQuestion ()
        this.setState({
            submitted: true
        });
    }

    //display the results on the screen
    render() {
        let element = "Loading"
        if (this.state.data.category !== undefined) {
            element = (
                <div><div>
                    Question: {this.state.data.question}
                    <br />
            Point Value: {this.state.data.value}
                    <br />
            Title: {this.state.data.category.title}
                    <br/>
           User Score: {this.state.score}
           
                </div>
                    <form onSubmit={this.handleSubmit}>

                        <div>
                            <label htmlFor="userAnswer">Answer</label>
                            <input
                                type="text"
                                name="userAnswer"
                                value={this.state.formData.userAnswer}
                                onChange={this.handleChange}
                                />

                        </div>
                        <button>Submit Answer</button>
                                Answer: {this.state.data.answer}        
                    </form>
                </div>
            )
        }
        return (
            <div>
                {element}
            </div>
        );
    }
}
export default Jeopardy;