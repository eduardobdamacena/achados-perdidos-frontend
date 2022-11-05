import { styled } from '@mui/material';

export const FileContainer = styled('div')`
    position: relative;
    .MuiTextField-root:last-of-type {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }
`;
