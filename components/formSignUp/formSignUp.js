import { Fragment, useContext, useEffect, useState } from 'react';
import Field from '../../reusable/field/field';
import classes from './formSignUp.module.scss';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Button from '../../reusable/button/button';
import useForm from '../../hooks/useForm';
import { signUpForm, signUpFormSchema } from '../../utility/schemaForm';
import { createUser } from '../../utility/httpRequests';
import Loader from '../../reusable/loader/loader';
import Toast from '../../reusable/toast/toast';
import { User } from '../../context/userContenxt';

const FormSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState(null);
  const { fields, errors, changeField, clearErrorField, submitForm } =
    useForm(signUpForm);
  const { updateUser } = useContext(User);
  const iconPassword = showPassword ? (
    <AiOutlineEye />
  ) : (
    <AiOutlineEyeInvisible />
  );

  // sign up user
  const signUpUserHandler = async (e) => {
    e.preventDefault();
    setLoader((prev) => !prev);
    const formHandler = submitForm(signUpFormSchema);

    // check if form is valid
    if (typeof formHandler !== 'function') {
      setTypeMessage('error');
      setMessage('Form dati non valido');
      setLoader((prev) => !prev);
      return;
    }
    const formData = new FormData();

    // load form data
    for (const key in fields) {
      formData.append(key, fields[key]);
    }

    // send http request
    const response = await formHandler(() => createUser(formData));
    console.log(response.message)

    // check status http
    if (response.status !== 200) {
      setLoader((prev) => !prev);
      setTypeMessage('error');
      setMessage(response.data);
      return;
    }

    // save data's user in context state
    updateUser({
      token: response.data.token,
      profile: {
        id: response.data.user._id,
        avatar: response.data.user.avatar,
        fullName: response.data.user.name + ' ' + response.data.user.surname,
      },
    });
    setTypeMessage('success');
    setMessage('Utente creato con successo');
    setLoader((prev) => !prev);
  };

  // clear toast
  const clearToastHandler = () => {
    setTypeMessage(null);
    setMessage(null);
  };

  return (
    <Fragment>
      <Toast type={typeMessage} message={message} onClose={clearToastHandler} />
      <form
        className={classes.FormSignUp}
        onSubmit={signUpUserHandler}
        name='avatar'
        enctype='multipart/form-data'
        noValidate
      >
        <div className={classes.FormSignUp__row}>
          <div className={classes.FormSignUp__col}>
            <Field
              label='Nome *'
              type='text'
              placeholder='Inserisci il tuo nome'
              onFocus={() => clearErrorField('name')}
              onChange={(e) => changeField('name', e.target.value.trim())}
              value={fields.name}
              error={errors.name?.required}
            />
          </div>
          <div className={classes.FormSignUp__col}>
            <Field
              label='Cognome *'
              type='text'
              placeholder='Inserisci il tuo nome'
              onFocus={() => clearErrorField('surname')}
              onChange={(e) => changeField('surname', e.target.value.trim())}
              value={fields.surname}
              error={errors.surname?.required}
            />
          </div>
        </div>
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
        <Field
          label='Editore'
          type='text'
          placeholder='Inserisci il tuo editore o lascia vuoto se sei un freenlacer'
          onChange={(e) => changeField('editorialBoard', e.target.value.trim())}
          value={fields.signUpForm}
        />
        <div className={classes.FormSignUp__footer}>
          <Button size='md' variant='primary'>
            {loader ? <Loader /> : 'Registrati'}
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default FormSignUp;
