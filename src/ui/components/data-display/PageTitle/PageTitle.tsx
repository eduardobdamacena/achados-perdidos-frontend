import React from 'react';
import {
    ContainerPagetTitle,
    PageSubtitleStyled,
    PageTitleStyled,
} from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subtitle: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <ContainerPagetTitle>
            <PageTitleStyled>{title}</PageTitleStyled>
            {subtitle && <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>}
        </ContainerPagetTitle>
    );
};

export default PageTitle;
