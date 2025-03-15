import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

const formValidationSchema = yup.object({
    name: yup.string().required('Preencha o nome'),
    email: yup.string().email('Preencha um e-mail válido').required('Preencha o e-mail'),
    subject: yup.string().required('Preencha um assunto'),
    message: yup.string().required('Preencha o conteúdo'),
}); 

export const formValidationRevolser = yupResolver(formValidationSchema);