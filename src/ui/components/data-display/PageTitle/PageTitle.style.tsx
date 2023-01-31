import { styled } from '@mui/material';

export const ContainerPagetTitle = styled('div')`
    text-align: center;
`;

export const PageTitleStyled = styled('h2')`
    margin: 0;
    font-size: 36px;
    color: #293845;
    font-weight: 700;
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 18px;
    }
`;

export const PageSubtitleStyled = styled('h2')`
    font-size: 18px;
    font-weight: 400;
    color: #293845;
    margin-top: ${({ theme }) => theme.spacing(2)};
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 12px;
    }
`;
