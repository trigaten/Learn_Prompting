import React from 'react';
import { FaBusinessTime, FaCertificate, FaList, FaQuestionCircle } from "react-icons/fa";
import classes from './signup.module.css';

export default function SignUp() {
  return (
    <section className={classes.main}>
      <br />
      <div className={classes.cols}>
        <div className={classes.links}>
          <div>
            <FaBusinessTime />
						<span>
						Need Enterprise GenAI Training?
            <a href='https://learn-prompting.webflow.io/contact-sales'> Contact Sales</a>
						</span>

          </div>
          <div>
            <FaList />
            Check our our <a href='https://learn-prompting.webflow.io/courses'> GenAI Course Catalog</a>
						<span></span>
          </div>
          <div>
            <FaCertificate />
           <span>Take the Prompt Engineering
            <a href='https://learn-prompting.webflow.io'> Certification Exam</a></span>
          </div>
          <div>
            <FaQuestionCircle /> Questions?<a href='https://learn-prompting.webflow.io/contact-sales'>Contact Sales</a>
          </div>
        </div>
        <div className={classes.email}>
          <div>
            <strong style={{ marginTop: 12 }}>
              <h3 style={{ marginBottom: 4 }}>Don't get left behind on AI</h3>
            </strong>
            <strong style={{ fontSize: 14 }}>
              <p>Sign up and get the latest AI news, prompts, and tools.</p>
            </strong>
            <iframe
              src="https://embeds.beehiiv.com/078568cc-ab93-4b36-b02f-cc863bca3bed?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              width="100%"
              frameborder="0"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: "0 !important",
                backgroundColor: "transparent",
              }}
            ></iframe>
            <p style={{ fontSize: 14, marginTop: 8 }}>
              Join 30,000+ readers from companies like OpenAI, Microsoft,
              Google, Meta and more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
