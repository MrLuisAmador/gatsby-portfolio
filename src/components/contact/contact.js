import React from "react"
import "./contact.scss"

const Contact = () => (
    <section id="contact-me" className="scrollto">
          <div className="contact">

            <h1 className="contact-me_title">Want to work together?</h1>

            <p className="contact-me__text">I’m currently accepting new projects and would love to hear about yours. Please
              take a few minutes to tell me about it.</p>

            <div role="form" className="wpcf7" id="wpcf7-f14-p187-o1">
              <form action="/#wpcf7-f14-p187-o1" method="post" className="wpcf7-form" name="contact-me" netlify>
                <p>
                    <span className="wpcf7-form-control-wrap your-name">
                        <input type="text" name="name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-form-control-wrap__input"
                      id="your-name" aria-required="true" aria-invalid="false" placeholder="Name" />
                    </span>
                </p>

                <p>
                    <span className="wpcf7-form-control-wrap your-email">
                        <input type="email" name="email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email wpcf7-form-control-wrap__input"
                      id="email" aria-required="true" aria-invalid="false" placeholder="Email" />
                    </span>
                </p>

                <p>
                    <span className="wpcf7-form-control-wrap your-subject">
                        <input type="text" name="subject" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-form-control-wrap__input"
                      aria-required="true" aria-invalid="false" placeholder="Subject" />
                    </span>
                </p>

                <p>
                    <span className="wpcf7-form-control-wrap text-area">
                        <textarea name="text-area" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required wpcf7-form-control-wrap__text-area"
                      aria-required="true" aria-invalid="false" placeholder="Let's Talk! Tell me about your project...">
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
