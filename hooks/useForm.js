import { useState } from 'react';
import validateForm from '../utility/validationForm';

const useForm = (initialState) => {
  const [fields, setFields] = useState({ ...initialState });
  const [errors, setErros] = useState({});

  // change field
  const changeField = (nameField, text) => {
    setFields({
      ...fields,
      [nameField]: text,
    });
  };

  // clear error
  const clearErrorField = (nameField) => {
    const copyErrors = { ...errors };
    copyErrors[nameField] = '';
    setErros({ ...copyErrors });
  };

  // submit form
  const submitForm = (schema) => {
    const errors = validateForm(fields, schema);

    // check if form is valid or not
    if (Object.keys(errors).length > 0) {
      setErros({ ...errors });
      return;
    }

    return (submitFormHandler) => {
      submitFormHandler();
    };
  };

  return {
    fields,
    errors,
    changeField,
    clearErrorField,
    submitForm,
  };
};

export default useForm;
