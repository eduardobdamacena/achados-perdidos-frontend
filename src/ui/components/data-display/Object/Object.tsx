import { ShortObjectInterface } from 'data/@types/ObjectInterface';
import {
    ContactButton,
    ImageObject,
    ObjectContainer,
    ObjectDescription,
    ObjectDate,
    ObjectInformationContainer,
    ObjectNoImageSkeleton,
    ObjectTitle,
} from './Object.style';
import { DateService } from 'data/services/DateService';

interface ObjectProps {
    object: ShortObjectInterface;
    onClickSeeContact: () => void;
}

const ObjectComponent: React.FC<ObjectProps> = ({
    object,
    onClickSeeContact,
}) => {
    return (
        <ObjectContainer>
            {object.imagem ? (
                <ImageObject src={object.imagem} />
            ) : (
                <ObjectNoImageSkeleton
                    variant="rectangular"
                    animation={false}
                />
            )}
            <ObjectInformationContainer>
                <ObjectTitle>{object.nome}</ObjectTitle>
                <ObjectDescription>{object.descricao}</ObjectDescription>
                <ObjectDate>
                    Data que o objeto foi cadastrado:
                    {DateService.getFormatedDate(
                        new Date(object.data_cadastro as string)
                    )}
                </ObjectDate>
                <ContactButton variant="contained" onClick={onClickSeeContact}>
                    Entrar em contato
                </ContactButton>
            </ObjectInformationContainer>
        </ObjectContainer>
    );
};

export default ObjectComponent;
