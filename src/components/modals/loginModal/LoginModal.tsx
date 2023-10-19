import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import closeIcon from '../../../resources/icons/loginModal/closeIcon.svg';

import './LoginModal.scss';
import './LoginModal-media.scss';
import { closeLoginModal } from '../../../store/loginSlice';

//ещё политику надо добавить

const LoginModal = () => {

    const isModalActive = useAppSelector(state => state.loginStates.isModalActive)
    const dispatch = useAppDispatch()

    const [loginValue, setLoginValue] = useState('');
    const [loginRequired, setLoginRequired] = useState(true);
    const [passwordValue, setPasswordValue] = useState('');
    const [passwordRequired, setPasswordRequired] = useState(true);
    const [checked, setChecked] = useState(false);
    const [emailValue, setEmailValue] = useState('')
    const [emailRequired, setEmailRequired] = useState(true)
    const [isRegistartionForm, setRegistartionForm] = useState(false)

    const changeCheckBox: React.ChangeEventHandler<HTMLInputElement> = () => {
        setChecked(!checked)
    }
    const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmailValue(e.target.value)
        setEmailRequired(true)
    }
    const onLoginChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginValue(e.target.value);
        setLoginRequired(true)
    }
    const onPasswordChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPasswordValue(e.target.value);
        setPasswordRequired(true)
    }
    const onButtonClick:    React.MouseEventHandler<HTMLButtonElement> = (e) => {
        //this function send data to server
    }
    const onRegistartionForm = () => {
        setRegistartionForm(!isRegistartionForm)
    }


    return(
        <div 
        className="loginModal__wrapper" 
        onClick={() => dispatch(closeLoginModal())}
        style={{
            display: isModalActive? "flex": "none",
        }}
        >
            <div className="loginModal" onClick={(e) => e.stopPropagation()}>
                <img src={closeIcon} alt="closeModal" className="loginModal__close" onClick={(e) => dispatch(closeLoginModal())}/>
                <div className="loginModal__title">{isRegistartionForm ? "Регистрация" : "Войти"}</div>
                <form className='loginModal__form'>
                    {
                        isRegistartionForm ? 
                        <input
                        type="text"
                        value={emailValue}
                        onChange={e => onEmailChange(e)}
                        className='loginModal__form_input loginModal__form_input-login'
                        placeholder="Почта"
                        style={{border: emailRequired ? "1px solid #EDEDF0": "1px solid #E60000"}}
                        />
                        :
                        ''
                    }
                    <input
                    type="text"
                    value={loginValue}
                    onChange={e => onLoginChange(e)}
                    className='loginModal__form_input loginModal__form_input-login'
                    placeholder="Логин"
                    style={{border: loginRequired ? "1px solid #EDEDF0": "1px solid #E60000"}}
                    />
                    <input
                    type="text"
                    value={passwordValue}
                    onChange={e => onPasswordChange(e)}
                    className='loginModal__form_input loginModal__form_input-password'
                    placeholder="Пароль"
                    style={{border: passwordRequired ? "1px solid #EDEDF0": "1px solid #E60000"}}
                    />
                    <div className="loginModal__form_checkDiv">
                        <input 
                        type='checkbox'
                        checked={checked}
                        onChange={changeCheckBox}
                        className='loginModal__form_input loginModal__form_input-check'
                        />
                        <div className='loginModal__form_input-checkTitle'>
                            Я согласен с <Link to='/privacypolicy'>политикой обработки персональных данных</Link>
                        </div>
                    </div>
                </form>
                <button className='loginModal__form_button' onClick={onButtonClick}>{isRegistartionForm ? "Зарегистрироваться" : "Войти"}</button>
                <div className="loginModal__form_registration">
                    <div onClick={onRegistartionForm}>{isRegistartionForm ? "Войти" : "Регистрация"}</div>
                </div>
            </div> 
        </div>
    )
}
export default LoginModal