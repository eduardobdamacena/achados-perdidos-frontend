import { TableCell, TableRow } from '@mui/material';
import {
    TableBodyStyled,
    TableContainerStyled,
    TableHeadStyled,
    TableStyled,
} from './Table.style';

export interface TableProps<T> {
    header: string[];
    data: T[];
    rowElement: (item: T, index: number) => React.ReactNode;
}

export type TableTypeComponent = <T>(
    props: TableProps<T>
) => React.ReactElement;

const Table: TableTypeComponent = ({ header, data, rowElement }) => {
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
                <TableBodyStyled>{data.map(rowElement)}</TableBodyStyled>
            </TableStyled>
        </TableContainerStyled>
    );
};

export default Table;
