import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {
  React.useEffect(() => {
    var item_value_recuperado = sessionStorage.getItem("avatar_url");
    setavatarImgSrc(item_value_recuperado)
    console.log(item_value_recuperado)
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [avatarImgSrc, setavatarImgSrc] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    var avatarUrl = sessionStorage.getItem("avatar_url");
    setavatarImgSrc(avatarUrl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openProfile = () => {
    setAnchorEl(null);
    window.location.href = './Profile'
  };
  const openMyAcc = () => {
    setAnchorEl(null);
    window.location.href = './MyAccount'
  };
  const openCfg = () => {
    setAnchorEl(null);
    window.location.href = './Config'
  };
  const logOut = () => {
    setAnchorEl(null);
    sessionStorage.clear();
    window.location.href = './'
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src={`${avatarImgSrc}`}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={openProfile}>
          <Avatar src={`${avatarImgSrc}`} /> Perfil
        </MenuItem>
        <MenuItem onClick={openMyAcc}>
          <Avatar src={`${avatarImgSrc}`} /> Minha Conta
        </MenuItem>
        <Divider />
        <MenuItem onClick={openCfg}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configurações
        </MenuItem>
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Deslogar
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
