import { styled } from '@mui/material/styles';

export const PictureViewer = styled('div')`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin: 0 25%;

    img {
        width: 100%;
    }

    Button {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 3;
    }
`;
