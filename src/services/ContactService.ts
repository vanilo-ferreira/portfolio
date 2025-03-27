import { IContactForm } from '../interfaces/IContactForm';

import { Api } from '../providers/Api';

export async function sendContactForm(data: IContactForm) {
    try {
        const response = await Api.post('/contact-me', data);
        return response;
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        throw error;
    }
}