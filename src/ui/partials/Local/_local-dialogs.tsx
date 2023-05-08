import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import React from 'react';

interface DeleteLocalDialogProps {
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export const DeleteLocalDialog: React.FC<DeleteLocalDialogProps> = (props) => {
    return (
        <Dialog open={true} onClose={props.onCancel}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onCancel}>Cancelar</Button>
                <Button onClick={() => props.onConfirm()} autoFocus>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};
