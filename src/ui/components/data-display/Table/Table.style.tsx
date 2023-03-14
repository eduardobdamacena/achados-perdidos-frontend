import {
    Pagination,
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
        ${({ theme }) => theme.breakpoints.down('md')} {
            padding: 11px 8px;
        }
    }
`;

export const TableHeadStyled = styled(TableHead)`
    .MuiTableCell-root {
        font-size: 18px;
        font-weight: 700;
        color: #293845;
        ${({ theme }) => theme.breakpoints.down('md')} {
            font-size: 10px;
            font-weight: 500;
        }
    }
`;

export const TableBodyStyled = styled(TableBody)`
    .MuiTableCell-root {
        font-size: 18px;
        font-weight: 400;
        color: #9eadba;
        ${({ theme }) => theme.breakpoints.down('md')} {
            font-size: 8px;
        }
    }
`;

export const TableContainerStyled = styled(TableContainer)`
    &.MuiTableContainer-root {
        max-width: 970px;
    }
`;

export const TablePaginationStyled = styled(Pagination)`
    display: flex;
    justify-content: flex-end;
`;
