import React from "react";
import  ReactDOM from "react-dom";
import {Game} from "./game";
import {BrowserRouter, HashRouter} from "react-router-dom";

const notFound =() => {
    return (
    <div>
        <h2>SAYFA BULUNAMADI: 404</h2>
        <p>
            hata aradığınız sayfaya şuanda ulaşılamıyor.Daha sonra tekrar deneyin.

        </p>
    </div>

    )

}

class App extends React.Component{

    render() {
        return(

            <HashRoute>
                <switch>
                    <Route exact path='/match'component={match} />
                    <Route exact path='/'component={Home} />
                    <Route component={notFound}/>
                </switch>
            </HashRoute>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

