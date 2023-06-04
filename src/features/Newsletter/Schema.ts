import * as yup from 'yup';

export const newsletterSchema = yup.object({
  email: yup
    .string()
    .required('Email is required!')
    .email('Email must be valid!'),
});

export type NewsletterData = yup.InferType<typeof newsletterSchema>;
