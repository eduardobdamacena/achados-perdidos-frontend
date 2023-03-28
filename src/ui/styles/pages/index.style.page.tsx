import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';

export const PageContainer = styled(Container)`
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-top: -25px;
        justify-content: center;
        flex: 1;
    }
`;

export const SearchContainer = styled('div')`
    width: 100%;
    max-width: 568px;
    margin: 54px auto 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4.5)};

    ${({ theme }) => theme.breakpoints.down('md')} {
        margin: 25px auto 0px;
    }
`;

export const SearchButton = styled(RoudedButton)`
    width: 151px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 103px;
    }
`;
