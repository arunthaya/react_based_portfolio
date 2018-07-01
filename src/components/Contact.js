import React from 'react';
import { Form, Container, Message } from 'semantic-ui-react';
import Modal from 'react-responsive-modal';
import Recaptcha from "react-google-recaptcha";

//possibly remove
const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

//Chunk of code taken from Netlify to allow processing of forms
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

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

    //possibly remove
    handleRecaptcha = value => {
        this.setState({ "g-recaptcha-response": value });
    };
    //

    handleChange = (e, {name, value}) => {
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
    };

    handleSubmit = (e) => {
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
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...this.state })
            }).then(() => this.onOpenModal())
                .catch(error => alert(error));
            e.preventDefault();
            this.setState({
                name: '',
                email: '',
                message: '',
                nameError: false,
                emailError: false,
                messageError: false,
                formError: false,
            });
            //this.onOpenModal();
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
                        {/*Possibly remove chunk*/}
                        <Recaptcha
                            ref="recaptcha"
                            sitekey={RECAPTCHA_KEY}
                            onChange={this.handleRecaptcha} />
                        {/*END OF REMOVAL*/}
                    </Form>
                </Container>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h1>Form Successfully Submitted! </h1>
                    <p>Expect a response in 48 hours. This form was coded by hand :)</p>
                </Modal>
            </div>
        );
    }
}

export default Contact;