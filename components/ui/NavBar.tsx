import { useContext } from 'react'
import { UIContext } from '../../context/ui'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
export const NavBar = () => {
  const { openSideMenu } = useContext(UIContext)
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
