const validateForm = (field, schema) => {
  let errors = {};

  // for fields
  loop1: for (const key in field) {
    for (const type in schema[key]) {
      switch (type) {
        case 'required': {
          if (!field[key]) {
            errors = {
              ...errors,
              [key]: {
                required: `Campo ${key} richiesto.`,
              },
            };
            continue loop1;
          }
          break;
        }

        case 'isValid': {
          const fieldValue =
            typeof field[key] === 'boolean' ? field[key] : field[key].trim();
          const isValid = schema[key].isValid?.(fieldValue);

          // if is not valid
          if (!isValid) {
            errors = {
              ...errors,
              [key]: {
                isValid: `Campo ${key} non valido`,
              },
            };
          }
          break;
        }

        default:
          return;
      }
    }
  }

  return errors;
};

export default validateForm;
