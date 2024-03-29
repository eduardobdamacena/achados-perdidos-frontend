import { UserPlaceInterface } from './UserPlaceInterface';

export interface LoginFormDataInterface {
    email: string;
    password: string;
}

export interface RegisterPlaceUserFormDataInterface
    extends UserPlaceInterface {}

export interface ObjectFormInterface {
    nome: string;
    descricao: string;
    imagem: string;
}

export interface InformOnwerFormInterface {
    dono_nome: string;
    dono_cpf: string;
}
