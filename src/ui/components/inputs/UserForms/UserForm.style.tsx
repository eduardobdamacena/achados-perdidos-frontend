import { styled } from '@mui/material';
import RoudedButton from '../RoudedButton/RoudedButton';

export const BaseGrid = styled('div')`
    display: grid;
    grid-template-columns: minmax(200px, 970px);
    justify-content: center;
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
    } ;
`;

export const FormContainer = styled(BaseGrid)`
    margin-top: 54px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-top: 17px;
    }
`;

export const FormDataBorder = styled('div')`
    display: grid;
    border: 1px solid ${({ theme }) => theme.palette.grey[600]};
    padding: 28px 70px;
    gap: ${({ theme }) => theme.spacing(3)};

    ${({ theme }) => theme.breakpoints.down('md')} {
        padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(2)};
        gap: ${({ theme }) => theme.spacing(1.5)};
    }
`;

export const ButtonSubmit = styled(RoudedButton)`
    justify-self: center;
    margin: 36px 0px;
    min-width: 151px;
    min-height: 54px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        min-height: 32px;
        margin: 28px 0px;
    }
`;
