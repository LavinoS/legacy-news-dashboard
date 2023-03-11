import { emailValidation, specialChars } from './regularExpressions';

const validateFields = (fieldName, fieldValue) => {
  switch (fieldName) {
    case 'email':
      if (!emailValidation.test(fieldValue)) {
        return 'Please enter a valid email address';
      }

      return '';

    case 'password':
      if (fieldValue.length < 6) {
        return 'Your password must be at least 6 characters';
      }

      if (fieldValue.length > 20) {
        return 'Your password must be maximum 20 characters';
      }

      if (!/\d/.test(fieldValue)) {
        return 'Your password must contain at least one digit';
      }

      if (!/[A-Z]/.test(fieldValue)) {
        return 'Your password must contain at least one uppercase letter';
      }

      if (!specialChars.test(fieldValue)) {
        return 'Your password must contain at least one symbol';
      }

      return '';

    default:
      if (fieldValue.length < 6) {
        return 'Your name must have 6 characters';
      }

      if (specialChars.test(fieldValue)) {
        return `Symbols are not allowed`;
      }

      if (/\d/.test(fieldValue)) {
        return 'Numbers are not allowed';
      }

      return '';
  }
};

export default validateFields;
