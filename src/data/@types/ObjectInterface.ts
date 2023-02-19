import { ApiLinksInterface } from './ApiLinksInterface';

export interface ObjectInterface {
    id?: number;
    nome: string;
    descricao: string;
    entregue: boolean;
    data_cadastro: string | Date;
    imagem?: string;
    links: ApiLinksInterface[];
}
