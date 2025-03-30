import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

const formValidationSchema = yup.object({
    name: yup.string().required('Digite o seu nome'),
    email: yup.string().email('Preencha um e-mail válido').required('Informe o seu e-mail'),
    subject: yup.string().required('Informe o assunto'),
    message: yup.string().required('Digite uma mensagem'),
}); 

export const formValidationRevolser = yupResolver(formValidationSchema);