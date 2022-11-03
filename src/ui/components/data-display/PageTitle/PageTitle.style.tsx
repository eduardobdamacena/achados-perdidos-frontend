import { styled } from '@mui/material';

export const ContainerPagetTitle = styled('div')`
    text-align: center;
`;

export const PageTitleStyled = styled('h1')`
    font-size: x-large;
    color: #293845;
`;

export const PageSubtitleStyled = styled('h2')`
    font-size: ${({ theme }) => theme.typography.caption};
    color: #293845;
    margin-top: ${({ theme }) => theme.spacing()};
    font-size: medium;
`;
