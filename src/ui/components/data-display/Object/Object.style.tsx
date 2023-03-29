import { styled, Box, Typography } from '@mui/material';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import Skeleton from '@mui/material/Skeleton';

export const ObjectContainer = styled(Box)`
    display: grid;
    grid-template-columns: 400px auto;
    justify-content: center;
    margin-top: 54px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 120px auto;
        margin-top: 26px;
    }
    gap: 0px;
`;

export const ImageObject = styled('img')`
    margin: auto;
    width: 400px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 120px;
    }
`;

export const ObjectInformationContainer = styled('div')`
    margin: auto 0 auto 69px;
    gap: 0px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        margin: auto 0 auto 30px;
    }
`;

export const ObjectTitle = styled(Typography)`
    font-size: 18px;
    font-weight: 500;
    line-height: 16px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 12px;
        line-height: 13px;
    }
`;

export const ObjectDescription = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    width: 187px;
    line-height: 16px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 11px;
        margin-top: 5px;
        width: 112px;
        line-height: 13px;
    }
`;

export const ObjectDate = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    margin-top: 0px;
    line-height: 16px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 11px;
        line-height: 13px;
        width: 112px;
    }
`;

export const ContactButton = styled(RoudedButton)`
    variant: 'contained';
    margin-top: 21px;
    font-size: 14px;
    font-weight: 400;
    padding: 8px 20px;
    height: 33px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-top: 8px;
        font-size: 9px;
        height: 20px;
    }
`;

export const ObjectNoImageSkeleton = styled(Skeleton)`
    width: 400px;
    height: 278px;
    margin: auto;
    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 120px;
        height: 84px;
    }
`;
