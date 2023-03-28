import { ApiLinksInterface } from './ApiLinksInterface';

export interface ObjectInterface extends ShortObjectInterface {
    links: ApiLinksInterface[];
}

export interface ShortObjectInterface {
    id?: number;
    nome: string;
    descricao: string;
    entregue: boolean;
    data_cadastro: string | Date;
    imagem?: string;
}
