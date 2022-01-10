import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class Headerbar extends Component {

    doLogout = async () => {
        const url = "/api/logout";
        let response;
        try {
            response = await fetch(url, {method: "post"});

        } catch (e) {
            alert("sunucuya bağlanma hatası:" + e);
            return;
        }
        if (response.status !== 204) {
            alert("sunucuya bağlanma hata:" + response.status);
            return;
        }
        this.props.updatLoggedInUser(null);
        this.props.history.push("/");
    }

    renderLoggedIn = (userId) =>{
    return(
        <react.Fragment>
            <p className="header-text">
                Hoş geldin {userId}
            </p>
            <button className="header-button"onClick={this.doLogout}>ÇIKIŞ</button>

        </react.Fragment>
    )
    };

}
    renderNotLoggedIn = () =>{
    return(
        <React.Fragment>
            <p className="header-text">GİRİŞ YAPAMADINIZ</p>
            <div>className="action-button"
            <link>className="header-button" to="/login" tabIndex="0">
                giriş yap
            </link>
            <link>className="header-button" to="/signup" tabIndex="0">
                ÜYE OL
            </link>
            </div>
        </React.Fragment>
    )

    }

    Render() {
      const userId= this.props.userId;
      let content;
      if (!userId){
          content= this.renderNotLoggedIn();
      }else {
          content = this.renderLoggedIn(userId);
      }

    }
        return (
            <div> className="header">
                <link> className="header-logo" to={"/"} tabIndex="0" >
                    Quiz
                    </link>
            </div>
            );

}


export default withRouter(headerbar);



