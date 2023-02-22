import * as yup from 'yup';

export const FormSchemaService = {
    login() {
        return yup.object().shape({
            login: yup
                .object()
                .shape({
                    email: yup
                        .string()
                        .min(3, 'Email muito curto')
                        .max(255, 'Email muito grande')
                        .email('E-mail inválido')
                        .required('Informe o E-mail'),
                    password: yup.string().min(3, 'Senha muito curta'),
                })
                .defined(),
        });
    },
    local() {
        return yup
            .object()
            .shape({
                nome: yup
                    .string()
                    .min(3, 'Nome muito curto')
                    .max(255, 'Nome muito grande')
                    .required('Informe o nome'),
                endereco: yup
                    .string()
                    .min(3, 'Endereço muito curto')
                    .max(255, 'Endereço muito grande')
                    .required('Informe o endereço'),
                contato: yup
                    .string()
                    .min(3, 'Contato muito curto')
                    .max(255, 'Contato muito grande')
                    .required('Informe o contato'),
                descricao: yup.string().max(255, 'Descrição muito grande'),
            })
            .defined();
    },
    newUser() {
        return yup
            .object()
            .shape({
                usuario: yup.object().shape({
                    nome: yup
                        .string()
                        .min(3, 'Nome muito curto')
                        .max(255, 'Nome muito grande')
                        .required('Informe o nome'),
                    email: yup
                        .string()
                        .min(3, 'E-mail muito curto')
                        .max(255, 'E-mail muito grande')
                        .required('Informe o email'),
                    password: yup
                        .string()
                        .min(3, 'Senha muito curta')
                        .required('Informe a senha'),
                    password_confirmation: yup
                        .string()
                        .min(3, 'Senha muito curta')
                        .oneOf(
                            [yup.ref('password'), null],
                            'As senhas não são iguais'
                        ),
                }),
            })
            .defined();
    },
    newObject() {
        return yup.object().shape({
            nome: yup
                .string()
                .min(3, 'Nome muito curto')
                .max(255, 'Nome muito grande')
                .required('Informe o nome'),
            descricao: yup
                .string()
                .min(3, 'Descrição muito curta')
                .max(255, 'Descrição muito grande')
                .required('Informe a Descrição'),
        });
    },
};
