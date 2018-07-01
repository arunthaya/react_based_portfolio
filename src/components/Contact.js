import React from 'react';
import { Form, Container, Message } from 'semantic-ui-react';
import Modal from 'react-responsive-modal';
import Recaptcha from "react-google-recaptcha";

//possibly remove
const RECAPTCHA_KEY = "6LdGg2EUAAAAAPK1NUvJ3UCeR2H-6oMdpFyEBJXu";

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
        open: false,
        errorMessage: '',
        "g-recaptcha-response": '',
    };

    onOpenModal = () => {
        this.setState({ open: true});
    };

    onCloseModal = () => {
        this.setState({ open: false});
    };

    //possibly remove
    handleRecaptcha = value => {
        console.log('before changing state');
        console.log(this.state)
        this.setState({ "g-recaptcha-response": value });
        console.log(this.state);
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
        const recaptchaValue = this.state['g-recaptcha-response'];
        let errorBool = false;
        let errorMessage = '';
        //bottom chunk of if statements check each individual form element before submission
        if(name == ''){
            this.setState({nameError: true});
            errorMessage += 'Please input a name. ';
            errorBool = true;
        }
        if(email == '' || !email.includes('@')){
            this.setState({ emailError: true});
            errorMessage += 'Please input a valid email. ';
            errorBool = true;
        }
        if(message == ''){
            this.setState({ messageError: true});
            errorMessage += 'Please input a message. ';
            errorBool = true;
        }
        if(recaptchaValue == '' || recaptchaValue == null){
            errorMessage += 'Please complete the recaptcha';
            errorBool = true;
        }
        if(!errorBool){
            //no errors in form
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
                errorMessage: ''
            });
        } else {
            //errors in form
            this.setState({
                formError: true,
                errorMessage: errorMessage
            });
        }
    };

    render(){
        const {name, email, message, nameError, emailError, messageError, formError, formSuccess, open, errorMessage} = this.state;
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
                        {/*Possibly remove chunk*/}
                        <Recaptcha
                            ref="recaptcha"
                            sitekey={RECAPTCHA_KEY}
                            theme="dark"
                            onChange={this.handleRecaptcha} />
                        {/*END OF REMOVAL*/}
                        <Form.Button>Submit</Form.Button>
                        {formError && (
                            <Form error>
                                <Message error header='Form errors' content={errorMessage}/>
                            </Form>
                        )}
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