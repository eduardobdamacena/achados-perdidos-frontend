import { styled, Box, Typography } from '@mui/material';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import Skeleton from '@mui/material/Skeleton';

export const LocalContainer = styled(Box)`
    display: grid;
    grid-template-columns: 400px auto;
    justify-content: center;
    margin-top: 54px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 120px auto;
        margin-top: 26px;
    }
`;

export const ImageLocal = styled('img')`
    width: 400px;
    margin: auto;
    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 120px;
    }
`;

export const LocalInformationContainer = styled('div')`
    margin: auto 0 auto 69px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        margin: auto 0 auto 30px;
    }
`;

export const LocalTitle = styled(Typography)`
    font-size: 18px;
    font-weight: 500;
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 12px;
    }
`;

export const LocalAddress = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    width: 187px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 11px;
        margin-top: 5px;
        width: 112px;
    }
`;

export const SeeObjectsButton = styled(RoudedButton)`
    variant: 'contained';
    margin-top: 21px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-top: 8px;
        font-size: 9px;
        height: 20px;
    }
`;

export const LocalNoImageSkeleton = styled(Skeleton)`
    width: 400px;
    height: 278px;
    margin: auto;
    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 120px;
        height: 84px;
    }
`;
