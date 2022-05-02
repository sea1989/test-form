import React from "react";

export default function FormAuth() {

    return (
        <form className='form form-auth'>
            <label>
                Ваш email <span>*</span>
                <input type="email" name="name" placeholder='Укажите адрес электронной почты' />
            </label>

            <label>
                Введите пароль <span>*</span>
                <input type="password" name="name" placeholder='*****' />
            </label>
            <div className='modal__footer'>
                <button className='button-submit' type="submit" >Добавить запись</button>
                <a class="button-link" href="#forget">Забыли пароль?</a>
            </div>
        </form>
    );
}
