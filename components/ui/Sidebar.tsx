import { useContext } from 'react'
import {
  Box,
  Drawer,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemButton,
  Divider,
  List,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import EmailIcon from '@mui/icons-material/Email'
import { UIContext } from '../../context/ui'
const menuItems: string[] = ['Inobx', 'Starred', 'Send Mail', 'Drafts']
export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext)
  return (
    <Drawer anchor='left' open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography>Menú</Typography>
        </Box>
        <List>
          {' '}
          {menuItems.map((menuItem, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxIcon /> : <EmailIcon />}
              </ListItemIcon>
              <ListItemText>{menuItem}</ListItemText>
            </ListItemButton>
          ))}
        </List>

        <Divider />
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxIcon /> : <EmailIcon />}
              </ListItemIcon>
              <ListItemText>{menuItem}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
