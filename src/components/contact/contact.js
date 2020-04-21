import React from "react"
import { useForm } from 'react-hook-form'
import "./contact.scss"

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    return (
        <section id="contact-me" className="scrollto">
            <div className="contact">
                <h1 className="contact-me_title">Want to work together?</h1>

                <p className="contact-me__text">I’m currently accepting new projects and would love to hear about yours.
                    Please
                    take a few minutes to tell me about it.</p>

                <form onSubmit={handleSubmit(onSubmit)} name="contact-me" method="post" action="/success" data-netlify="true"
                      data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field"/>

                    <div className="name-field-container">
                        <input ref={register({ required: true, maxLength: 20, pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i })} type="text" name="name" size="40" className="wpcf7-form-control-wrap__input"
                               id="your-name" placeholder="Name"/>
                        { errors.name && errors.name.type === "required" && (
                            <p style={{color: "#ff0000", marginTop: "5px"}}>Your name is required</p>
                        )}
                        { errors.name && errors.name.type === "pattern" && (
                            <p style={{color: "#ff0000", marginTop: "5px"}}>Character must be more than two</p>
                        )}
                    </div>

                    <div className="email-field-container">
                        <input ref={register({ required: true })} type="email" name="email" size="40" className="wpcf7-form-control-wrap__input" id="email"
                               placeholder="Email"/>
                        { errors.email && errors.email.type === "required" && (
                            <p style={{color: "#ff0000", marginTop: "5px"}}>Email is required</p>
                        )}
                    </div>

                    <div className="subject-field-container">
                        <input ref={register({ required: true, maxLength: 20, pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i })} type="text" name="subject" size="40" className="wpcf7-form-control-wrap__input"
                               id="subject" placeholder="Subject"/>
                        { errors.subject && errors.subject.type === "required" && (
                            <p style={{color: "#ff0000", marginTop: "5px"}}>The subject is required</p>
                        )}
                        { errors.subject && errors.subject.type === "pattern" && (
                            <p style={{color: "#ff0000", marginTop: "5px"}}>Character must be more than two</p>
                        )}
                    </div>

                    <div className="textarea-field-container">
                    <textarea ref={register({ required: true, minLength: 10 })} id="area" name="area" cols="40" rows="10" className="wpcf7-form-control-wrap__text-area"
                              placeholder="Let's Talk! Tell me about your project...">
                    </textarea>
                        { errors.area && errors.area.type === "required" && (
                            <p style={{color: "#ff0000", marginTop: "5px"}}>A message is required</p>
                        )}
                        { errors.area && errors.area.type === "minLength" && (
                            <p style={{color: "#ff0000", marginTop: "0", marginBottom: "16px"}}>Character must be more than 20</p>
                        )}
                    </div>

                    <div className="submit-field-container">
                        <input role="button" id="submit" type="submit" value="Send It!"
                               className="wpcf7-form-control-wrap__submit"/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
