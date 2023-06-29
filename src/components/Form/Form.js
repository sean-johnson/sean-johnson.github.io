import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import MyButton from '../MyButton';
import { env } from '../../config';

export default class Form extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',
            message: ''
        },
        submitted: false,
        formEmailSent: false
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = (event) => {
      event.preventDefault();

      // let {
      //   REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      //   REACT_APP_EMAILJS_TEMPLATEID: template,
      //   REACT_APP_EMAILJS_USERID: user,
      // } = env;

      // Move to .env and import
      // const receiverEmail = "receiver@example.com"
      const userId = "user_BEkLEnTF6bQFSTShemciw"
      const templateId = "template_KhFkHgO5"
      const { formData } = this.state

      let templateParams = {
        "reply_to": `${formData.email}`,
        "from_name": `${formData.name}`,
        "to_name": "Sean Johnson",
        "message_html": `${formData.message}`
      }
      this.sendFeedback(
        templateId,
        templateParams,
        userId
      );
      this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
      });
    }

    // Note: this is using default_service, which will map to whatever
    // default email provider you've set in your EmailJS account.
    sendFeedback = (templateId, templateParams, userId) => {
      window.emailjs
      .send('default_service', templateId, templateParams, userId)
      .then(response => {
        console.log('res', response)
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
    }


    handleCancel() {
      this.setState({
        formData: {
          name: '',
          email: '',
          message: ''
        }
      });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
            >
              <Grid container item xs={12} sm={8} direction="row">
              <Grid item xs={12} sm={5} style={{ marginBottom: 15, marginRight: 15 }}>
                <TextValidator
                  className={{ borderRadius: 0 }}
                  fullWidth
                  label="Name"
                  onChange={this.handleChange}
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  validators={['required']}
                  errorMessages={['Required']}
                />
              </Grid>
              <Grid item xs={12} sm={5} style={{ marginBottom: 15 }}>
                <TextValidator
                  fullWidth
                  label="Email"
                  onChange={this.handleChange}
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  validators={['required', 'isEmail']}
                  errorMessages={['Required', 'Email is not valid']}
                />
              </Grid>
              <TextValidator
                fullWidth
                label="Message"
                onChange={this.handleChange}
                multiline
                rows={5}
                variant="outlined"
                name="message"
                value={formData.message}
                validators={['required']}
                errorMessages={['Required']}
                style={{ marginBottom: 15 }}
              />
              <MyButton
                type={"submit"}
                disabled={submitted}
                buttonText={(submitted && 'Sent!') || (!submitted && 'Send')}
              />
              </Grid>
            </ValidatorForm>
        );
    }
}