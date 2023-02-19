import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    styled,
} from '@mui/material';

export const TableStyled = styled(Table)`
    .MuiTableCell-root {
        border: solid 1px #9eadba;
        padding: 14px 33px;
        font-size: 18px;
    }
`;

export const TableHeadStyled = styled(TableHead)`
    .MuiTableCell-root {
        color: #293845;
    }
`;

export const TableBodyStyled = styled(TableBody)`
    .MuiTableCell-root {
        color: #9eadba;
    }
`;

export const TableContainerStyled = styled(TableContainer)`
    &.MuiTableContainer-root {
        max-width: 970px;
    }
`;
