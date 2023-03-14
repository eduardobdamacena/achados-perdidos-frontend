import { TableCell, TableRow } from '@mui/material';
import {
    TableBodyStyled,
    TableContainerStyled,
    TableHeadStyled,
    TablePaginationStyled,
    TableStyled,
} from './Table.style';
import { useMemo } from 'react';

export interface TableProps<T> {
    header: string[];
    data: T[];
    rowElement: (item: T, index: number) => React.ReactNode;
    itemsPerPage?: number;
    currentPage?: number;
}

export type TableTypeComponent = <T>(
    props: TableProps<T>
) => React.ReactElement;

const Table: TableTypeComponent = ({
    header,
    data,
    rowElement,
    itemsPerPage,
    currentPage,
}) => {
    const tableData = useMemo(() => {
        if (itemsPerPage !== undefined && currentPage !== undefined) {
            return data.slice(
                (currentPage - 1) * itemsPerPage,
                (currentPage - 1) * itemsPerPage + itemsPerPage
            );
        }
        return data;
    }, [data, itemsPerPage, currentPage]);
    return (
        <TableContainerStyled>
            <TableStyled>
                <TableHeadStyled>
                    <TableRow>
                        {header.map((title, index) => (
                            <TableCell key={index}>{title}</TableCell>
                        ))}
                    </TableRow>
                </TableHeadStyled>
                <TableBodyStyled>{tableData.map(rowElement)}</TableBodyStyled>
            </TableStyled>
        </TableContainerStyled>
    );
};

export default Table;
export const TablePagination = TablePaginationStyled;
