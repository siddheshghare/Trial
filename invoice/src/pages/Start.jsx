import React, { useState } from 'react'
import Header from '../components/Header'
import { Box, Button, Typography } from '@mui/material'
import AddInvoice from '../components/AddInvoice'


export default function Start() {

    const [Invoice, setInvoice] = useState(false)

    const toggle = () => {
        setInvoice('true')

    }

    return (
        <>

            <Header />
            <Box style={{ margin: 20 }}>
                <Typography variant='h4'>Pending Invoices</Typography>
                {!Invoice && <Button
                    variant='contained'
                    style={{ marginTop: 20 }}
                    onClick={toggle}
                >Add Invoice</Button>}
                {Invoice && <AddInvoice />}
            </Box>
        </>
    )
}
