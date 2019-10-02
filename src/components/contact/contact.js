import React from "react"
import "./contact.scss"

const Contact = () => (
    <section id="contact-me" className="scrollto">
          <div className="contact">

            <h1 className="contact-me_title">Want to work together?</h1>

            <p className="contact-me__text">I’m currently accepting new projects and would love to hear about yours. Please
              take a few minutes to tell me about it.</p>

            <div role="form" className="wpcf7" id="wpcf7-f14-p187-o1">
              <form action="/#wpcf7-f14-p187-o1" method="post" className="wpcf7-form">
                <div>
                  <input type="hidden" name="_wpcf7" value="14" />
                  <input type="hidden" name="_wpcf7_version" value="5.1.4" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f14-p187-o1" />
                  <input type="hidden" name="_wpcf7_container_post" value="187" />
                  <input type="hidden" name="g-recaptcha-response" value="" />
                </div>

                <p><span className="wpcf7-form-control-wrap your-name">
                    <input type="text" name="your-name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-form-control-wrap__input"
                      id="your-name" aria-required="true" aria-invalid="false" placeholder="Name" /></span></p>
                <p><span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value=""
                      size="40"
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email wpcf7-form-control-wrap__input"
                      id="email" aria-required="true" aria-invalid="false" placeholder="Email" /></span></p>
                <p><span className="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" value=""
                      size="40"
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-form-control-wrap__input"
                      aria-required="true" aria-invalid="false" placeholder="Subject" /></span></p>
                <p><span className="wpcf7-form-control-wrap text-area"><textarea name="text-area" cols="40" rows="10"
                      className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required wpcf7-form-control-wrap__text-area"
                      aria-required="true" aria-invalid="false"
                      placeholder="Let's Talk! Tell me about your project..."></textarea></span></p>

                <p><input type="submit" value="Send It!"
                    className="wpcf7-form-control wpcf7-submit wpcf7-form-control-wrap__submit" /><span
                    className="ajax-loader"></span></p>
                <div className="wpcf7-response-output wpcf7-display-none"></div>
              </form>
            </div>

          </div>
        </section>
)

export default Contact
