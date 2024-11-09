import React from 'react'
import { AppBar , Toolbar} from '@mui/material';

export default function Header() {
    const logo="https://cdni.iconscout.com/illustration/premium/thumb/coder-illustration-download-in-svg-png-gif-file-formats--programmer-developer-developing-businex-flatline-pack-business-illustrations-2896007.png?f=webp"
  return (
    
   
    <AppBar color='secondary' position='static'>
        <Toolbar>
            <img src={logo}alt ="logo" style={{width:120}}/>

        </Toolbar>
    </AppBar>
  )
}
