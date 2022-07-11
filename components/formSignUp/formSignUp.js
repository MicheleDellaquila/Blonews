import { useState } from 'react';
import Field from '../../reusable/field/field';
import classes from './formSignUp.module.scss';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Button from '../../reusable/button/button';
import GoogleLogin from 'react-google-login';
import useForm from '../../hooks/useForm';
import { signUpForm, signUpFormSchema } from '../../utility/schemaForm';

const FormSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { fields, errors, changeField, clearErrorField, submitForm } =
    useForm(signUpForm);
  const iconPassword = showPassword ? (
    <AiOutlineEye />
  ) : (
    <AiOutlineEyeInvisible />
  );

  // sign up user
  const signUpUserHandler = (e) => {
    e.preventDefault();
    const formHandler = submitForm(signUpFormSchema);

    // check if form is valid
    if (typeof formHandler === 'function') {
      formHandler(async () => {
        try {
          const response = await httpRequest(`${process.env.NEXT_PUBLIC_PATH}/signUp`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(fields),
          });

          // if response go to the error
          if (response.data?.message) {
          
            return;
          }

          localStorage.setItem('token', JSON.stringify(response.data.token));
          localStorage.setItem('user', JSON.stringify({});
        } catch (e) {
          setTypeNotification('error');
          setMessage(e.message);
        }
      });
    }
  };

  return (
    <form
      className={classes.FormSignUp}
      noValidate
      onSubmit={signUpUserHandler}
    >
      <div className={classes.FormSignUp__row}>
        <div className={classes.FormSignUp__col}>
          <Field
            label='Nome *'
            type='text'
            placeholder='Inserisci il tuo nome'
            onChange={(e) => changeField('name', e.target.value)}
            value={fields.name}
          />
        </div>
        <div className={classes.FormSignUp__col}>
          <Field
            label='Cognome *'
            type='text'
            placeholder='Inserisci il tuo nome'
            onChange={(e) => changeField('surname', e.target.value)}
            value={fields.surname}
          />
        </div>
      </div>
      <Field
        label='Email *'
        type='email'
        placeholder='Inserisci la tua email'
        onChange={(e) => changeField('email', e.target.value)}
        value={fields.email}
      />
      <Field
        label='Password *'
        inputIcon={iconPassword}
        onClickIcon={() => setShowPassword((prev) => !prev)}
        type={showPassword ? 'text' : 'password'}
        placeholder='Inserisci la tua password'
        onChange={(e) => changeField('password', e.target.value)}
        value={fields.password}
      />
      <Field
        label='Editore'
        type='text'
        placeholder='Inserisci il tuo editore o lascia vuoto se sei un freenlacer'
        onChange={(e) => changeField('editorialBoard', e.target.value)}
        value={fields.signUpForm}
      />
      <div className={classes.FormSignUp__footer}>
        <Button size='md' variant='primary'>
          Registrati
        </Button>
        <div className={classes.FormSignUp__box}>
          <hr className={classes.FormSignUp__line} />
          <p className={classes.FormSignUp__text}>OR</p>
          <hr className={classes.FormSignUp__line} />
        </div>
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_API__KEY__GOOGLE}
          render={(renderProps) => (
            <Button size='md' variant='outline' onClick={renderProps.onClick}>
              Registrati con google
            </Button>
          )}
        />
      </div>
    </form>
  );
};

export default FormSignUp;
