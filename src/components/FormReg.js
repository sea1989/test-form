import React from "react";

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


export default function FormReg() {

    const [valuePhone, setValuePhone] = React.useState('');
    const [valueSnils, setValueSnils] = React.useState('');
    const [valueDate, setValueDate] = React.useState('');

    return (
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
    );
}
