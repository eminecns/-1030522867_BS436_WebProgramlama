import React, {Component} from 'react';
import {link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
              <h2>Kart Oyunu</h2>
                <p className="welcome-test">
                    Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir.İlk tercihte Kedi Kartını bulamaz isen 2.secim hakkı tanınmayacaktır.

                </p>
                <div className="action">
                    <link className="play"to={"/match"}>oyna</link>

                </div>

            </div>
        );
    }


}