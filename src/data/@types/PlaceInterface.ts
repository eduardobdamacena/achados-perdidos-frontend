import { ApiLinksInterface } from './ApiLinksInterface';

export interface PlaceInterface {
    id?: number;
    nome: string;
    endereco: string;
    contato: string;
    descricao: string;
    imagem?: string;
    links: ApiLinksInterface[];
}
