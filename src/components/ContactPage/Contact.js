import React from 'react';
import Title from "../Title";

export default function Contact(props) {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us "/>
                    <form action="https://formspree.io/f/xzbkjgra"
                          method="POST" className="mt-5">
                        {/*    fitst*/}
                        <div className="form-group">
                            <input type="text"
                                   name="firstName"
                                   className="form-control"
                                   placeholder="your name"
                            />
                        </div>
                        {/*    email*/}
                        <div className="form-group">
                            <input type="email"
                                   name="email"
                                   className="form-control"
                                   placeholder="your email"
                            />
                        </div>
                        {/*subject*/}
                        <div className="form-group">
                            <input type="text"
                                   name="subject"
                                   className="form-control"
                                   placeholder="your subject!"
                            />
                        </div>
                        {/*textarea*/}
                        <div className="form">
                            <textarea name="message" rows="10"
                            className="form-control" placeholder="your text">
                            </textarea>
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit" value="Send"
                                   className="form-control bg-primary text-white"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
