import { styled } from '@mui/material/styles';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import { Typography } from '@mui/material';
import {
    BaseGrid,
    FormDataBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';

export const DeletePlaceContainer = styled(BaseGrid)`
    margin: 36px 0px 72px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-top: 0px;
    }
`;

export const DeletePlaceBorder = styled(FormDataBorder)`
    gap: ${({ theme }) => theme.spacing(1.5)};
    ${({ theme }) => theme.breakpoints.down('md')} {
        gap: ${({ theme }) => theme.spacing(0.75)};
    }
`;

export const TitleDeletePlace = styled(Typography)`
    &.MuiTypography-root {
        font-size: 18px;
        font-weight: 500;
        ${({ theme }) => theme.breakpoints.down('md')} {
            font-size: 12px;
        }
    }
`;

export const DescriptionDeletePlace = styled(Typography)`
    &.MuiTypography-root {
        font-size: 18px;
        font-weight: 400;
        ${({ theme }) => theme.breakpoints.down('md')} {
            font-size: 12px;
        }
    }
`;

export const ButtonDeletePlace = styled(RoudedButton)`
    margin-top: 21px;
    justify-self: end;
    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-top: 22px;
        font-size: 13px;
        justify-self: center;
    }
`;
