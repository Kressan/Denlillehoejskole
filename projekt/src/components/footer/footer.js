import React, { Component } from 'react';
import FB from './fb.png'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="information">
                    <ul>
                        <li className="bold">Den lille højskole</li>
                        <li>Mindevej 19</li>
                        <li>8543 Hornslet</li>
                        <li>Danmark</li>
                        <br/>
                        <li>+45 77 43 34 77 12</li>
                        <li>info@dlhoejskole.dk</li>
                        <li>www.dlhoejskole.dk</li>
                        <img src={FB} alt="" srcset=""/>
                    </ul>
                </div>
                <div id="kontakt">
                    <ul>
                        <li className="bold">Spørg os</li>
                    </ul>
                    <form action="post">
                        <div id="flex">
                        <input type="text" name="navn" id="navn" placeholder="Navn..."/>
                        <input type="text" name="email" id="email" placeholder="Email..."/>
                        </div>
                        <input type="text" name="besked" id="besked" placeholder="Besked..."/>
                        <br/>
                    <input type="button" id="send" value="Send"/>

                    </form>
                </div>
            </footer>
        );
    }
}

export default Footer;