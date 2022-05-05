import './Ostav.css';
import React from "react";
import Ostavki from "./Ostavki";

class Ostav extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <p className="text">Ваше имя:</p>
                <input className="input"/>
                <p className="text1">Ваш возраст:</p>
                <input className="input1"/>
                <p className="text2">Ваш электронный адрес:</p>
                <input className="input2"/>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}

                <Ostavki name="Адема" message="Репетитор по химии"/>
                <Ostavki name="Аслан" message="История, обществознание, турецкий"/>
                <Ostavki name="Батыр" message="Репетитор по английскому языку"/>
                <Ostavki name="Ирина" message="Музыка, логопед, вокал"/>
                
                
            </div>
        );
    }
}
function UserGreeting(props) {
    return <h1 className="success_ostav"></h1>;
}

function GuestGreeting(props) {
    return <h1 className="tag_ostav"></h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Оставить заявку
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Вы оставили заявку
        </button>
    );
}

export default Ostav;