import React from 'react';

function Display (props){
    let element = "Loading"
        if (props.state.data.category !== undefined) {
            element = (
                <div><div>
                    Question: {props.state.data.question}
                    <br />
            Point Value: {props.state.data.value}
                    <br />
            Title: {props.state.data.category.title}
                    <br/>
           User Score: {props.state.score}
           
                </div>
                    <form onSubmit={props.handleSubmit}>

                        <div>
                            <label htmlFor="userAnswer">Answer</label>
                            <input
                                type="text"
                                name="userAnswer"
                                value={props.state.formData.userAnswer}
                                onChange={props.handleChange}
                                />

                        </div>
                        <button>Submit Answer</button>
                                Answer: {props.state.data.answer}        
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

export default Display;