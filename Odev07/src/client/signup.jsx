import React,{Component} from "react";
import {render} from "enzyme";
class signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            password: "",
            confirm: "",
            errorMsg: null,

        }
    }
    onTextChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });


    }
    doSignUp =async () => {
    const {userId, password, confirm} = this.state;
    if (confirm !== password){
        this.state({errorMsg:"DOĞRU ŞİFRE DEĞİLDİR" });
       return;

    }
    const url = "/api/signup";
    const payload = {userId,password};
    let response;

    try {
        response = await fetch(url,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(payload)


        }
        );

    }catch (e){
        this.setState({errorMsg:"SUNUCUYA BAĞLANIRKEN HATA ALGILANDI"+e });
        return;

    }
    if (response.status ===400){
        this.setState({errorMsg:"GEÇERSİZ KULLANICI VEYA ŞİFRE" });
        return;
    }
        if (response.status !==201){
            this.setState({errorMsg:"SUNUCUYA BAĞLANIRKEN HATA: durum kodu"+response.status });
            return;
        }
        this.setState({errorMsg:null});
        await this.props.fetchAndUpdateUserInfo();
        this.props.history.push("/");


          render() {
            let error = <div></div>
            if (this.state.errorMsg){
                error=(
                    <div className="errorMsg">
                        <p>this.state.errorMsg</p>

                    </div>
                )
            }
            let confirmMsg = "TAMAM";
            if (this.state.confirm !== this.state.password){
                confirmMsg ="EŞLEŞME OLMAMIŞTIR";

            }
            return (
                <div className="center">
                    <div>
                        <p>ŞİFRE</p>
                        <input
                            type="password"
                            value={this.state.password}
                            id="password"
                            onChange={this.onTextChange}

                        />
                    </div>

                    <p>TEKRAR</p>
                    <input
                        type="password"
                        value={this.state.userId}
                        id="confirm"
                        onChange={this.onTextChange}

                    />
                    <div>{confirmMsg}</div>
                </div>
                      <div>{error}</div>
                      <button className="button" onClick={this.doSignUp}>ÜYE OL</button>


        }
    }

    export default withRouter(Signup);


