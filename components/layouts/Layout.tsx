import { FC } from 'react'
import Head from 'next/head'
import Box from '@mui/material/Box'
import { NavBar, Sidebar } from '../ui'
interface Props {
  title?: string
  children?: any
}
export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <Sidebar />
      {/* SideBar */}
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  )
}
