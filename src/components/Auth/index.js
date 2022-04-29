import React, { useState } from "react";
import "./style.css";

import { MaskedInput } from 'react-hook-mask';

const rules = new Map([
    ['C', /[A-Za-z]/],
    ['N', /\d/],
]);

const createMaskGenerator = (mask) => ({
    rules: rules,
    generateMask: () => mask,
});

const maskPhone = createMaskGenerator('+7(NNN)NNN-NN-NN');
const maskSnils = createMaskGenerator('NNN-NNN-NN');
const maskDate = createMaskGenerator('NN.NN.NNNN');

export default function Auth() {

    const [isRegistration, setIsRegistration] = useState(false);

    const [valuePhone, setValuePhone] = React.useState('');
    const [valueSnils, setValueSnils] = React.useState('');
    const [valueDate, setValueDate] = React.useState('');

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

                    <form className='form form-registration'>
                        <label>
                            ФИО <span>*</span>
                            <input className='input-row' type="text" name="name" placeholder='Фамилия Имя Отчество' />
                        </label>
                        <div className='input-wrapper-row'>
                            <label>
                                Email<span>*</span>
                                <input className='input-row' type="text" name="name" placeholder='Адрес будет логином на портале' />
                            </label>

                            <label>
                                Телефон<span>*</span>
                                <MaskedInput
                                    maskGenerator={maskPhone}
                                    value={valuePhone}
                                    onChange={setValuePhone}

                                    className='input-row'
                                    type="text"
                                    name="name"
                                    placeholder='+7(___)___-__-__' />

                            </label>
                        </div>

                        <div className='input-wrapper-row'>
                            <label>
                                СНИЛС <span>*</span>
                                <MaskedInput
                                    maskGenerator={maskSnils}
                                    value={valueSnils}
                                    onChange={setValueSnils}

                                    className='input-row'
                                    type="text"
                                    name="name"
                                    placeholder='___-___-__' />
                            </label>

                            <label>
                                Дата рождения<span>*</span>
                                <MaskedInput
                                    maskGenerator={maskDate}
                                    value={valueDate}
                                    onChange={setValueDate}
                                    className='input-row' type="text" name="name" placeholder='__.__.____' />
                            </label>
                        </div>

                        <div className='checkboxes-wrapper'>
                            <div className='checkbox-wrapper'>
                                <input className='custom-checkbox' id='1' type="checkbox" />
                                <label className='label-checkbox' for='1'>Согласен на обработку моих персональных данных <span>*</span> </label>
                            </div>

                            <div className='checkbox-wrapper'>
                                <input className='custom-checkbox' id='2' type="checkbox" />
                                <label className='label-checkbox' for='2'>Согласен на получение уведомлений и рассылок <span>*</span> </label>
                            </div>
                        </div>


                        <div className='modal__footer'>
                            <button className='button-submit' type="submit" >Зарегистрироваться</button>
                            <button class="button-submit button-outline" href="#forget">Отказаться</button>
                        </div>

                    </form>
                    :
                    <form className='form'>
                        <label>
                            Ваш email <span>*</span>
                            <input type="text" name="name" placeholder='Укажите адрес электронной почты' />
                        </label>

                        <label>
                            Введите пароль <span>*</span>
                            <input type="password" name="name" placeholder='*****' />
                        </label>
                        <div className='modal__footer'>
                            <button className='button-submit' type="submit" >Добавить запись</button>
                            <a class="button-link" href="#forget">Забыли пароль?</a>
                        </div>
                    </form>}
            </div>
        </div >
    );
}
