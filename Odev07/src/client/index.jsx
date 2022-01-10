import React, {Component} from "react";
import  ReactDOM from "react-dom";
import {Game} from "./game";
import {BrowserRouter, HashRouter} from "react-router-dom";


class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            user:null;
            errorMsg: null

        }
    }
}
fetchAndUpdateInfo = async () =>{
    const url ="/api/users";
    let response;
    try {
        response = await fetch(url);
    }catch (e){
        this.state({errorMsg: "sunucuya bağlanma hatası"+e});
        return;
    }
   if (response.status===401){
       this.updateLoggedInUser(null);
       return;

   }else {
       const payload = await response.json();
       this.updateLoggedInUser(payload);
   }

}
  updateLoggedInUser = (user) =>{
    this.setState({user:user});

}
  notFound() =>
{
    return (
        <div>
            <h2> SAYFA BULUNAMADI: 404</h2>
            <p>
                ARADIĞINIZ SAYFAYA ULAŞILAMIYOR
            </p>
        </div>
    )
}


companentDidMount(){
    this.updateLoggedInUser();
}


    render() {

    const id = this.state.user ? this.state.user.id: null


        return(

            <HashRoute>
                <div>
                    <headerBar userId={id}
                    updateLoggedInUser={this.updateLoggedInUser}/>
                <switch>
                    <Route exact path='/game'render={props=>} />
                    <Route exact path='/'component={Home} />
                    <Route component={notFound}/>
                </switch>
                    </div>
            </HashRoute>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

