import React, { useState } from "react";
import FormAuth from './FormAuth';
import FormReg from './FormReg';

export default function Auth() {

    const [isRegistration, setIsRegistration] = useState(false);



    return (
        <div className='modal'>
            <div className={isRegistration ? 'shadow shadow--dooble shadow-dooble-registration' : 'shadow shadow--dooble'}></div>
            <div className={isRegistration ? 'shadow shadow-registration' : 'shadow '}></div>
            <div className='modal__header'>
                <button
                    className={isRegistration ? 'button-h2' : 'button-h2--active'}
                    onClick={() => setIsRegistration(false)}>Авторизация</button>
                <button
                    className={isRegistration ? 'button-h2--active' : 'button-h2'}
                    onClick={() => setIsRegistration(true)}>Регистрация</button>
            </div>
            <div className='form-wrapper '>
                {isRegistration ?
                    <FormReg />
                    :
                    <FormAuth />
                }
            </div>
        </div >
    );
}
