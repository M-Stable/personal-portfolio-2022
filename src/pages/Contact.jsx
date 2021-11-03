import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const Contact = () => {
  return (
    <section className="asection h-screen bg-tertiary p-20">
      <div className="grid grid-cols-2">
        <div className="w-min">
          <h1 className="font-header text-secondary text-6xl whitespace-nowrap">
            Get in touch
          </h1>
          <p className="text-secondary font-body text-xl my-32">
            Lorem ipsum. I just graudated from the University of auckland. I am
            passionate about front end development. Oh, and I love to make
            music. Im happy to get in touch and answer any questions you may
            have!
          </p>

          <div className="flex mb-40">
            <img src={linkedin} alt="logo" />
            <img src={github} className="ml-7" alt="logo" />
          </div>
        </div>

        <div>
          <form
            id="contact-form"
            // onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="mb-10">
              <label htmlFor="name" className="text-secondary font-body">
                Name
              </label>
              <input type="text" className="w-full text-xl font-body" />
            </div>
            <div className="mb-10">
              <label
                htmlFor="exampleInputEmail1"
                className="text-secondary font-body"
              >
                Email address
              </label>
              <input
                type="email"
                className="w-full text-xl font-body"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-10">
              <label htmlFor="message" className="text-secondary font-body">
                Message
              </label>
              <textarea
                className="w-full text-xl font-body"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <hr className="text-primary border-t-4" />
    </section>
  );
};

export default Contact;
