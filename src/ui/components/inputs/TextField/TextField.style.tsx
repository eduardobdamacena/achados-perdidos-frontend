import { TextField, styled } from '@mui/material';

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root {
        border-radius: ${({ theme }) => theme.spacing()};
    }
`;
