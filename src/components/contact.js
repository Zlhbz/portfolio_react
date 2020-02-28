import React from "react";
import Button from "./button"


function Contact() {
    return (
        <section id="contact" class="section section-contact scrollspy">
            <div class="container">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="first_name" type="text" class="validate" />
                                <label for="icon_prefix">First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="last_name" type="text" class="validate" />
                                <label for="icon_prefix">Last Name</label>
                            </div>

                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="email" type="text" class="validate" />
                                <label for="icon_email">Email</label>
                            </div>

                            <div class="input-field col s12">
                                <i class="material-icons prefix">message</i>
                                <textarea id="textarea1" type="text" class="materialize-textarea"></textarea>
                                <label for="icon_telephone">Message</label>
                            </div>
                            <Button />

                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact