import React, { Component } from "react";

class NewsletterSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", submitted: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://hooks.zapier.com/hooks/catch/15160672/343aepr/", {
      method: "POST",
      body: JSON.stringify([{ email: this.state.email }]),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ submitted: true });
      });
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
              <form onSubmit={this.handleSubmit} className="flex">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                  style={{ color: "black" }}
                  placeholder="email@learnprompting.org"
                  className="rounded-l-md px-6 py-2 bg-white text-dark/500 text-sm font-medium tracking-tight ring-0 focus:outline-none w-[250px] md:w-[450px] focus:ring-0"
                />
                <button
                  type="submit"
                  style={{ width: "100px" }}
                  className="rounded-r-md bg-[#2A5F66] flex items-center font-semibold justify-center px-3 py-2 hover:bg-[#1F4A52] active:bg-[#2D6370]"
                >
                  Sign Up
                </button>
              </form>
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
