import { Fragment, useContext, useEffect, useState } from 'react';
import classes from './formSignIn.module.scss';
import Field from '../../reusable/field/field';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Button from '../../reusable/button/button';
import useForm from '../../hooks/useForm';
import { signInForm, signInFormSchema } from '../../utility/schemaForm';
import Loader from '../../reusable/loader/loader';
import Toast from '../../reusable/toast/toast';
import { signIn } from 'next-auth/react';

const formSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState(null);
  const { fields, errors, changeField, clearErrorField, submitForm } =
    useForm(signInForm);
  const iconPassword = showPassword ? (
    <AiOutlineEye />
  ) : (
    <AiOutlineEyeInvisible />
  );

  // sign up user
  const signUpUserHandler = async (e) => {
    e.preventDefault();
    setLoader((prev) => !prev);
    const formHandler = submitForm(signInFormSchema);

    // check if form is valid
    if (typeof formHandler !== 'function') {
      setTypeMessage('error');
      setMessage('Form dati non valido');
      setLoader((prev) => !prev);
      return;
    }

    // send http request
    const response = await formHandler(() =>
      signIn('credentials', {
        redirect: false,
        email: fields.email,
        password: fields.password,
      }),
    );

    // check status next auth
    if (response.error) {
      setLoader((prev) => !prev);
      setTypeMessage('error');
      setMessage(response.message);
      return;
    }

    setTypeMessage('success');
    setMessage('Utente loggato con successo');
    setLoader((prev) => !prev);
  };

  // cleat toast
  const clearToastHandler = () => {
    setTypeMessage(null);
    setMessage(null);
  };

  return (
    <Fragment>
      <Toast type={typeMessage} message={message} onClose={clearToastHandler} />
      <form
        className={classes.FormSignIn}
        onSubmit={signUpUserHandler}
        noValidate
      >
        <Field
          label='Email *'
          type='email'
          placeholder='Inserisci la tua email'
          onFocus={() => clearErrorField('email')}
          onChange={(e) => changeField('email', e.target.value.trim())}
          value={fields.email}
          error={errors.email?.required || errors.email?.isValid}
        />
        <Field
          label='Password *'
          inputIcon={iconPassword}
          onClickIcon={() => setShowPassword((prev) => !prev)}
          type={showPassword ? 'text' : 'password'}
          placeholder='Inserisci la tua password'
          onFocus={() => clearErrorField('password')}
          onChange={(e) => changeField('password', e.target.value.trim())}
          value={fields.password}
          error={errors.password?.required || errors.password?.isValid}
        />
        <div className={classes.FormSignIn__footer}>
          <Button size='md' variant='primary'>
            {loader ? <Loader /> : 'Accedi'}
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default formSignIn;
