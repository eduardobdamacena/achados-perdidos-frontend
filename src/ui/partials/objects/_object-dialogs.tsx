import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import { ObjectInterface } from 'data/@types/ObjectInterface';
import React from 'react';

interface ConfirmDialogProps {
    object: ObjectInterface;
    onConfirm: (objectId: number) => void;
    onCancel: () => void;
}

export const RemoveDialog: React.FC<ConfirmDialogProps> = (props) => {
    return (
        <Dialog open={true} onClose={props.onCancel}>
            <DialogTitle>{'Tem certeza em apagar o objeto?'}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    O objeto {props.object.nome} será removido.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onCancel}>Cancelar</Button>
                <Button
                    onClick={() => props.onConfirm(props.object.id as number)}
                    autoFocus
                >
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};
