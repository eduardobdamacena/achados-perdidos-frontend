import {
    ButtonMenuStyled,
    MenuItemStyled,
    MenuStyled,
} from './UserHeaderMenu.style';
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
            <MenuStyled
                open={props.open}
                onClose={props.onMenuClose}
                onClick={props.onMenuClick}
                anchorEl={buttonRef.current}
                keepMounted
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    style: {
                        width: buttonRef.current
                            ? buttonRef.current.clientWidth
                            : undefined,
                    },
                }}
            >
                <MenuItemStyled id="alterar-dados" disableRipple>
                    <Link href={''}>Alterar Dados</Link>
                </MenuItemStyled>
                <MenuItemStyled
                    id="logout"
                    disableRipple
                    onClick={props.onLogout}
                >
                    Sair
                </MenuItemStyled>
            </MenuStyled>
        </div>
    );
};

export default UserHeaderMenu;
