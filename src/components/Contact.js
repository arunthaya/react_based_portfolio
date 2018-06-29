import React from 'react';
import { Form, Container, Message } from 'semantic-ui-react';

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        nameError: false,
        emailError: false,
        messageError: false,
        formError: false,
        formSuccess: false
    };

    handleChange = (e, {name, value}) => {
        console.log(`name coming in is ${name} and the value is: ${value}`);
        this.setState({ [name]: value, formSuccess: false});
        let variableBeingEntered = name;
        switch(variableBeingEntered){
            case "name":
                this.setState({ nameError: false, formError: false});
                break;
            case "email":
                this.setState({ emailError: false, formError: false});
                break;
            case "message":
                this.setState({ messageError: false, formError: false});
                break;
            default:
                console.log('Critical error, should never reach this point');
        }
        console.log(this.state);
    };

    handleSubmit = () => {
        const {name, email, message} = this.state;
        let errorBool = false;
        if(name == ''){
            this.setState({nameError: true});
            errorBool = true;
        }
        if(email == '' || !email.includes('@')){
            this.setState({ emailError: true});
            errorBool = true;
        }
        if(message == ''){
            this.setState({ messageError: true});
            errorBool = true;
        }
        if(!errorBool){
            this.setState({
                name: '',
                email: '',
                message: '',
                nameError: false,
                emailError: false,
                messageError: false,
                formError: false,
                formSuccess: true
            });
        } else {
            this.setState({ formError: true });
        }
    };

    render(){
        const {name, email, message, nameError, emailError, messageError, formError, formSuccess} = this.state;
        return(
            <Container>
                <h1 style={{color: 'white'}}>Use this form to contact me: </h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} error={nameError}/>
                        <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} error={emailError}/>
                    </Form.Group>
                    <Form.TextArea placeholder='Message' name='message' value={message} onChange={this.handleChange} error={messageError}/>
                    <Form.Button>Submit</Form.Button>
                    {formError && (
                        <Form error>
                            <Message error header='Form errors' content='Double check all input(s) in red' />
                        </Form>
                    )}
                    {formSuccess && (
                        <Form success>
                            <Message success header='Form Submitted!' content='I will get back to you within 48 hours.'/>
                        </Form>
                    )}
                </Form>

            </Container>
        );
    }
}

export default Contact;