import React, { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import closeIcon from '../../../resources/icons/loginModal/closeIcon.svg';

import './LoginModal.scss';
import './LoginModal-media.scss';
import { closeLoginModal, login, registration } from '../../../store/loginSlice';

//ещё политику надо добавить

const LoginModal = () => {

    const isModalActive = useAppSelector(state => state.loginStates.isModalActive)
    const dispatch = useAppDispatch()
    

    //email
    const [emailValue, setEmailValue] = useState('');
    const [emailRequired, setEmailRequired] = useState(true);
    //password
    const [passwordValue, setPasswordValue] = useState('');
    const [passwordRequired, setPasswordRequired] = useState(true);
    //repeatpassword    
    const [repeatPasswordValue, setRepeatPasswordValue] = useState('');
    const [repeatPasswordRequired, setRepeatPasswordRequired] = useState(true)
    //checkebox
    const [checked, setChecked] = useState(false);
    const [checkedRequired, setCheckRequired] = useState(true);
    //login or registration
    const [isRegistartionForm, setRegistartionForm] = useState(false);


    //handlers
    const changeCheckBox: React.ChangeEventHandler<HTMLInputElement> = () => {
        setChecked(!checked)
    }
    const onRepeatPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setRepeatPasswordValue(e.target.value)
        setRepeatPasswordRequired(true)
    }
    const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmailValue(e.target.value)
        setEmailRequired(true)
    }
    const onPasswordChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPasswordValue(e.target.value);
        setPasswordRequired(true)
    }
    const onRegistartionForm = () => {
        setRegistartionForm(!isRegistartionForm)
    }
    const onCloseModal = (e: MouseEvent) => {
        dispatch(closeLoginModal())
    }


    const validateLoginInputs = () => {
        if((passwordValue !== '' && emailValue !== '' && checked !== false)){
            return true
        }else{
            (checked === false)? setCheckRequired(false): setCheckRequired(true);
            (passwordValue === '')? setPasswordRequired(false) : setPasswordRequired(true);
            (emailValue === '')? setEmailRequired(false): setEmailRequired(true);
            return false
        }
    }
    const clearInputs = () => {
        setEmailRequired(true)
        setPasswordRequired(true)
        setCheckRequired(true)
        setEmailValue('')
        setPasswordValue('')
        setChecked(false)
        if(isRegistartionForm){
            setRepeatPasswordRequired(true)
            setRepeatPasswordValue('')
        }
    }
    const onButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
            if(validateLoginInputs()){
                const loginDto = {
                    email: emailValue,
                    password: passwordValue
                }
                if(isRegistartionForm){
                    if(passwordValue === repeatPasswordValue){
                        dispatch(registration(loginDto))
                        clearInputs()
                    }else {
                        setPasswordRequired(false)
                        setRepeatPasswordRequired(false)
                    }
                }else{
                    dispatch(login(loginDto))
                    clearInputs()
                }
            }
    }



    return(
        <div 
        className="loginModal__wrapper" 
        onClick={onCloseModal}
        style={{
            display: isModalActive? "flex": "none",
        }}
        >
            <div className="loginModal" onClick={(e) => e.stopPropagation()}>
                <img src={closeIcon} alt="closeModal" className="loginModal__close" onClick={onCloseModal}/>
                <div className="loginModal__title">{isRegistartionForm ? "Регистрация" : "Войти"}</div>
                <form className='loginModal__form'>
                    <input
                    type="text"
                    value={emailValue}
                    onChange={e => onEmailChange(e)}
                    className='loginModal__form_input loginModal__form_input-login'
                    placeholder="Почта"
                    style={{border: emailRequired ? "1px solid #EDEDF0": "1px solid #E60000"}}
                    />
                    <input
                    type="password"
                    autoComplete="on"
                    value={passwordValue}
                    onChange={e => onPasswordChange(e)}
                    className='loginModal__form_input loginModal__form_input-password'
                    placeholder="Пароль"
                    style={{border: passwordRequired ? "1px solid #EDEDF0": "1px solid #E60000"}}
                    />
                    {
                        isRegistartionForm ? 
                        <input
                        type="password"
                        autoComplete='on'
                        value={repeatPasswordValue}
                        onChange={e => onRepeatPasswordChange(e)}
                        className='loginModal__form_input loginModal__form_input-login'
                        placeholder="Повторите пароль"
                        style={{border: repeatPasswordRequired ? "1px solid #EDEDF0": "1px solid #E60000"}}
                        />
                        :
                        ''
                    }
                    <div className={checkedRequired? "loginModal__form_checkDiv" : "loginModal__form_checkDiv loginModal__form_checkDiv-redBorder"}>
                        <input
                        name="checkbox"
                        id='labelCheckbox'
                        type='checkbox'
                        checked={checked}
                        onChange={changeCheckBox}
                        className='loginModal__form_input loginModal__form_input-check'
                        />
                        <label htmlFor="labelCheckbox" className='loginModal__form_input-checkTitle'>
                            Я согласен с <Link to='/privacypolicy' onClick={onCloseModal}>политикой обработки персональных данных</Link>
                        </label>
                    </div>
                </form>
                <button className='loginModal__form_button' onClick={onButtonClick}>
                    {isRegistartionForm ? "Зарегистрироваться" : "Войти"}
                </button>
                <div className="loginModal__form_registration">
                    <div onClick={onRegistartionForm}>{isRegistartionForm ? "Войти" : "Регистрация"}</div>
                </div>
            </div> 
        </div>
    )
}
export default LoginModal