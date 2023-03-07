import TextField from '../TextField/TextField';
import { TextFieldProps } from '@mui/material';
import { FileContainer } from './FileField.style';
import { ChangeEvent, useState } from 'react';

export interface FileFieldProps
    extends Omit<TextFieldProps, 'onChange' | 'label' | 'helperText'> {
    label?: string;
    helperText?: string;
    onChange: (files: FileList) => void;
}

const FileField: React.FC<FileFieldProps> = ({
    label,
    helperText,
    onChange,
    ...props
}) => {
    const [filePath, setFilePath] = useState('');

    function handleFileChange(event: ChangeEvent) {
        const target = event.target as HTMLInputElement,
            files = target.files;

        if (files !== null && files.length) {
            setFilePath(files[0]?.name || '');
            onChange(files);
        }
    }

    return (
        <FileContainer>
            <TextField
                label={label}
                helperText={helperText}
                value={filePath}
                fullWidth
                {...props}
            />
            <TextField type={'file'} fullWidth onChange={handleFileChange} />
        </FileContainer>
    );
};

export default FileField;
