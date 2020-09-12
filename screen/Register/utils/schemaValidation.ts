/* eslint-disable prettier/prettier */
import * as Yup from 'yup';

export default Yup.object().shape({
    email: Yup.string().email('Email Only').required('Required'),
    weddingDate: Yup.date().required('Required'),
    budget: Yup.number()
        .min(6, 'Minimal Jutaan Bos'),
    guest: Yup.number().required('Required'),
});
