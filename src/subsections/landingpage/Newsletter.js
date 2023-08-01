import React, { Component } from "react";

class NewsletterSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", submitted: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { submitted } = this.state;

    return (
      <div
        id={"newsletter"}
        className={`largecallout w-screen flex flex-col justify-center items-center text-white md:p-20 pt-16 md:pt-24 pb-28 ${
          submitted ? "form-submitted" : ""
        }`}
      >
        {submitted ? (
          <div className="font-semibold tracking-tight text-4xl md:text-6xl flex flex-col items-center">
            <div>Signed up!</div>
          </div>
        ) : (
          <>
            <div className="font-semibold tracking-tight text-4xl md:text-6xl">
              Join the Newsletter
            </div>
            <div className="text-center text-white opacity-60 text-sm font-vietnam font-light tracking-tight px-16 md:px-28 pt-4">
              Stay up to date with the latest content delivered to your inbox.
            </div>
            <div className="pt-10 flex flex-row">
            <iframe 
  src="https://embeds.beehiiv.com/ae49cad6-1b3a-4ec2-91fa-73b7f3e0188a?slim=true" 
  data-test-id="beehiiv-embed" 
  height="52" 
  width="100%"
  frameBorder="0" 
  scrolling="no" 
  style={{margin: 0, borderRadius: 0, backgroundColor: 'transparent'}}
  className="rounded-l-md bg-white text-dark/500 text-sm font-medium tracking-tight ring-0 focus:outline-none w-[250px] md:w-[450px] focus:ring-0"
/>
            </div>
          </>
        )}
      </div>
    );
  }
}

function Newsletter() {
  return <NewsletterSignupForm />;
}

export default Newsletter;
