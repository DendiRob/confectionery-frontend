import './LoginModal.scss';
import './LoginModal-media.scss';
import React, { useState } from 'react';

//ещё политику надо добавить

const LoginModal = () => {

    const [loginValue, setLoginValue] = useState('');
    const [loginRequired, setLoginRequired] = useState(true);
    const [passwordValue, setPasswordValue] = useState('');
    const [passwordRequired, setPasswordRequired] = useState(true)

    const onLoginChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginValue(e.target.value);
        setLoginRequired(true)
    }
    const onPasswordChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPasswordValue(e.target.value);
        setPasswordRequired(true)
    }


    return(
        <div className="loginModal__wrapper">
            <div className="loginModal">
                <div className="loginModal__title">Войти</div>
                <form className='loginModal__form'>
                    <input
                    type="text"
                    value={loginValue}
                    onChange={e => onLoginChange(e)}
                    placeholder="Логин"
                    style={{border: loginRequired ? "1px solid #EDEDF0": "1px solid #E60000"}}
                    />
                    <input
                    type="text"
                    value={passwordValue}
                    onChange={e => onPasswordChange(e)}
                    placeholder="Пароль"
                    style={{border: passwordRequired ? "1px solid #EDEDF0": "1px solid #E60000"}}
                    />
                </form>
            </div>
        </div>
    )
}