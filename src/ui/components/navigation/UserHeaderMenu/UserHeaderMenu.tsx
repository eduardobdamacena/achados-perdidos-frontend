import MenuItem from '@mui/material/MenuItem';
import { ButtonMenuStyled, StyledMenu } from './UserHeaderMenu.style';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRef } from 'react';
import Link from 'next/link';

export interface UserHeaderMenuProps {
    user_name: string;
    open: boolean;
    onClick: (event: React.MouseEvent) => void;
    onMenuClick: (event: React.MouseEvent) => void;
    onMenuClose: (event: React.MouseEvent) => void;
    onLogout?: () => void;
}

const UserHeaderMenu: React.FC<UserHeaderMenuProps> = (props) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div>
            <ButtonMenuStyled
                variant="contained"
                onClick={props.onClick}
                endIcon={<ArrowDropDownIcon fontSize="large" />}
                ref={buttonRef}
            >
                {props.user_name}
            </ButtonMenuStyled>
            <StyledMenu
                open={props.open}
                onClose={props.onMenuClose}
                onClick={props.onMenuClick}
                anchorEl={buttonRef.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem disableRipple>
                    <Link href={''}>Alterar Dados</Link>
                </MenuItem>
                <MenuItem disableRipple onClick={props.onLogout}>
                    Sair
                </MenuItem>
            </StyledMenu>
        </div>
    );
};

export default UserHeaderMenu;
