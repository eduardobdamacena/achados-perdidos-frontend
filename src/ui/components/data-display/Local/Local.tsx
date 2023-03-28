import React from 'react';
import {
    ImageLocal,
    LocalInformationContainer,
    LocalAddress,
    LocalContainer,
    LocalTitle,
    LocalNoImageSkeleton,
    SeeObjectsButton,
} from './Local.style';
import { PlaceInterface } from 'data/@types/PlaceInterface';
import Link from 'next/link';

interface LocalProps {
    place: PlaceInterface;
}

const Local: React.FC<LocalProps> = ({ place }) => {
    return (
        <LocalContainer>
            {place.imagem ? (
                <ImageLocal src={place.imagem} />
            ) : (
                <LocalNoImageSkeleton variant="rectangular" animation={false} />
            )}
            <LocalInformationContainer>
                <LocalTitle>{place.nome}</LocalTitle>
                <LocalAddress>{place.endereco}</LocalAddress>
                <Link href={'/local?id=' + place.id}>
                    <SeeObjectsButton variant="contained">
                        Ver objetos
                    </SeeObjectsButton>
                </Link>
            </LocalInformationContainer>
        </LocalContainer>
    );
};

export default Local;
