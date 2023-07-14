import { Alert, AlertTitle, Collapse, Stack, Typography } from "@mui/material"
import { useState } from "react"

export const HomePage = () => {

const [close,setClose] = useState(true)

  return (
    <>
    <h1>HomePage</h1>
    <Stack spacing={2} >
      <Alert severity="error" >
        <AlertTitle>
          title
        </AlertTitle>
        Lorem ipsum dolor sit amet.
        </Alert>
        <Alert variant="standard" severity="info" >
        <AlertTitle>
          title
        </AlertTitle>
        Lorem ipsum dolor sit amet.
        </Alert>
        <Alert severity="success" variant="outlined" >
        <AlertTitle>
          title
        </AlertTitle>
        Lorem ipsum dolor sit amet.
        </Alert>
        <Collapse in={close}  >
        <Alert onClose={()=>setClose(false)} variant="filled" severity="warning" >
        <AlertTitle>
          title
        </AlertTitle>
        Lorem ipsum dolor sit amet.
        </Alert>
        </Collapse>
    </Stack>
    </>
  )
}
