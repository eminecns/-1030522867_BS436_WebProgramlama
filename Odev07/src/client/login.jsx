import React,{Component} from "react";
class login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId:"",
            password:"",
            errorMsg:null,

        }
    }
    doLogIn = async () =>{
        const {userId,password}= this.state;
        const url = "/api/login";

        const payload = {userId,password};
        let response;
         try {
             response = await fetch(url){
                 method: "post"
                 header: {
                     "Content-Type": "application/json"
                 }
                 body: JSON.stringify(payload)
         };
        }catch (e){
             this.setState({errorMsg: "SUNUCUYA BAĞLANIRKEN HATA:"+err});
             return;
         }
         if (response.status ===401){
             this.setState({errorMsg: "GEÇERSİZ KULLANICI VEYA ŞİFRE:"});
             return;
         }

         if (response.status !==204){
             this.setState({errorMsg: "SUNUCUYA BAĞLANIRKEN HATA:"+response.status});
             return;
         }
           this.setState({errorMsg:null});

         await this.props.fetchAndUpdateUserInfo();
         this.props.history.push("/");

    }
    onTextChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }


    render() {
        let error = <div></div>
        if (this.state.errorMsg){
            error=(
                <div className="errorMsg">
                    <p>this.state.errorMsg</p>

                </div>
            )
        }


        return (
            <div className="center">
                <div>
                    <p>KULLANICI</p>
                    <input
                    type="text"
                    value={this.state.userId}
                    id="userId"
                    onChange={this.onTextChange}

                    />
                </div>

                <p>ŞİFRE</p>
                <input
                    type="password"
                    value={this.state.userId}
                    id="password"
                    onChange={this.onTextChange}

                />

             </div>


                {error}
                <button className="button" onClick={this.doLogIn}>GİRİŞ EKRANI</button>
                <link className="button" tabIndex="0" to={"/signup"}>ÜYE OL<link/>
             </div>
        );
    }
}
        export default withRouter(login)