import './style.css';

import { useState } from 'react';
import { FormProvider, useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { formValidationRevolser } from '../../validations/formValidation';
import { sendContactForm } from "../../services/ContactService";
import { IContactForm } from '../../interfaces/IContactForm';

import EmailIcon2 from '../../assets/icons/emailIcon2.svg';
import PhoneIcon2 from '../../assets/icons/phoneIcon2.svg';

export function Contact() {

    const [isLoading, setIsLoading] = useState(false);
    const [alertError, setAlertError] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const formsMethods = useForm<IContactForm>({ resolver: formValidationRevolser });
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset
    } = formsMethods;

    async function onSubmit(data: IContactForm) {
        setIsLoading(true);
        try {
            await sendContactForm(data)
            setAlertSuccess(true);
            reset();
        } catch (error) {
            setAlertError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='contact' id='contact'>
            <div className='containerContact'>
                <div className='containerInformation'>
                    <p className='subtitleContact'>Entrar em contato</p>
                    <p className='contactParagraph'>
                        Sou muito acessível e adoraria falar com você. Fique à vontade
                        para ligar, me envie um e-mail. Siga-me nas redes sociais ou
                        simplesmente preencha o formulário de consulta.
                    </p>

                    <div className='contactDetails'>
                        <figure>
                            <img src={PhoneIcon2} alt='Phone Icon' />
                        </figure>
                        <p>(71) 9 9309-2086</p>
                    </div>

                    <div className='contactDetails'>
                        <figure>
                            <img src={EmailIcon2} alt='E-mail Icon' />
                        </figure>
                        <p>vanilo.ferreira03@gmail.com</p>
                    </div>
                </div>
                <div className='containerForm'>
                    <p className='subtitleContact'>Me mande uma mensagem</p>
                    <FormProvider {...formsMethods}>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <input {...register('name')} type='text' placeholder='Nome' />
                            {errors?.name?.message && (<p className='errorMessage'>{errors?.name?.message}</p>)}
                            <input {...register('email')} type='email' placeholder='E-mail' />
                            {errors?.email?.message && (<p className='errorMessage'>{errors?.email?.message}</p>)}
                            <input {...register('subject')} type='text' placeholder='Assunto' />
                            {errors?.subject?.message && (<p className='errorMessage'>{errors?.subject?.message}</p>)}
                            <textarea
                                {...register('message')}
                                placeholder='Sua mensagem'
                                id='yourMessage'
                            />
                            {errors?.message?.message && (<p className='errorMessage'>{errors?.message?.message}</p>)}
                            <button className='contactButton' type="submit" disabled={isLoading}>
                                {isLoading ? "Enviando..." : "Enviar"}
                            </button>

                            {alertError && (
                                <Alert className='alert' variant="filled" severity="error"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setAlertError(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                > Erro ao enviar mensagem.<br/>
                                    Tente novamente.</Alert>
                            )}

                            {alertSuccess && (
                                <Alert className='alert' variant="filled" severity="success"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setAlertSuccess(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                > Mensagem enviada com sucesso!</Alert>
                            )}
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
};