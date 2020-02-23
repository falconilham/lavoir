/* eslint-disable prettier/prettier */
import * as Yup from 'yup';

export default Yup.object().shape({
    pria: Yup.string().required('Required'),
    wanita: Yup.string().required('Required'),
    weddingDate: Yup.date().required('Required'),
    budget: Yup.number('Only Number').required('Required'),
    guest: Yup.number('Only Number').required('Required'),
});
