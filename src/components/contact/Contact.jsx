import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            formData: {
                firstName: '',
                lastName: ''
            }
        };


        
    }
    handleChange = (event) => {

        const newformData = {...this.state.formDate};
        newformData[event.target.name] = event.target.value;

        this.setState({ formData: newformData });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        this.setState({
            submitted: true
        });
    }
    resetForm = (event) => {
        this.setState({
          submitted: false,
          formData: {
            firstName: '',
            lastName: ''
          }
        });
      }
    render() {

        if (this.state.submitted) {
            return (
                <div className="contact">
                    <p> Thanks, {this.state.formData.firstName}, for submitting form</p>
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div className="Contact">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.formData.lastName}
                            onChange={this.handleChange}
                        />

                    </div>
                    <button>Submit Form</button>
                </form>

                {this.state.formData.firstName}
                <br />
                {this.state.formData.lastName}

            </div>

        )
    }
}


export default Contact;