import * as yup from 'yup';

export const contactUsSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string().required(),
  info: yup.string().required(),
  type: yup.string()
});
