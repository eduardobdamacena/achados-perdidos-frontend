import * as yup from 'yup';

export const FormSchemaService = {
    login() {
        return yup.object().shape({
            login: yup
                .object()
                .shape({
                    email: yup
                        .string()
                        .required('Informe o E-mail')
                        .email('E-mail inválido'),
                    password: yup.string().min(5, 'Senha muito curta'),
                })
                .defined(),
        });
    },
};
