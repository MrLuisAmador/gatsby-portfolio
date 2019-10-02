import React from "react"
import "./contact.scss"

const Contact = () => (
    <section id="contact-me" className="scrollto">
          <div className="contact">

            <h1 className="contact-me_title">Want to work together?</h1>

            <p className="contact-me__text">I’m currently accepting new projects and would love to hear about yours. Please
              take a few minutes to tell me about it.</p>

            <div role="form" className="wpcf7" id="wpcf7-f14-p187-o1">
              <form className="wpcf7-form" name="contact-me" netlify>
                <p>
                    <span className="wpcf7-form-control-wrap your-name">
                        <input type="text" name="name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-form-control-wrap__input"
                      id="your-name" placeholder="Name" />
                    </span>
                </p>

                <p>
                    <span className="wpcf7-form-control-wrap your-email">
                        <input type="email" name="email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email wpcf7-form-control-wrap__input"
                      id="email" placeholder="Email" />
                    </span>
                </p>

                <p>
                    <span className="wpcf7-form-control-wrap your-subject">
                        <input type="text" name="subject" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-form-control-wrap__input"
                      placeholder="Subject" />
                    </span>
                </p>

                <p>
                    <span className="wpcf7-form-control-wrap text-area">
                        <textarea name="text-area" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required wpcf7-form-control-wrap__text-area"
                      placeholder="Let's Talk! Tell me about your project...">
                        </textarea>
                    </span>
                </p>

                <p>
                    <input type="submit" value="Send It!" className="wpcf7-form-control wpcf7-submit wpcf7-form-control-wrap__submit" />
                </p>
              </form>
            </div>

          </div>
        </section>
)

export default Contact
