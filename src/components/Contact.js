import React from 'react';
import { Form, Container, Message } from 'semantic-ui-react';
import Modal from 'react-responsive-modal';

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        nameError: false,
        emailError: false,
        messageError: false,
        formError: false,
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true});
    };

    onCloseModal = () => {
        this.setState({ open: false});
    };

    handleChange = (e, {name, value}) => {
        console.log(`name coming in is ${name} and the value is: ${value}`);
        this.setState({ [name]: value});
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
            });
            this.onOpenModal();
        } else {
            this.setState({ formError: true });
        }
    };

    render(){
        const {name, email, message, nameError, emailError, messageError, formError, formSuccess, open} = this.state;
        return(
            <div>
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
                                <Message error header='Form errors' content={`Double check all input(s) in red`}/>
                            </Form>
                        )}
                    </Form>
                </Container>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h1>Form Successfully Submitted!</h1>
                    <p>Expect a response in 48 hours. This form was coded by hand :)</p>
                </Modal>
            </div>
        );
    }
}

export default Contact;