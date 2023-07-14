import {  Button, Typography } from '@mui/material'
import { useSnackbar } from 'notistack';
import React from 'react'


export const About = () => {

  const { enqueueSnackbar } = useSnackbar();

  const openSnack =()=>{
    enqueueSnackbar('Hola xD',{
      variant:'info',
      anchorOrigin:{
        vertical:'bottom',
        horizontal:'right'

      }
    })
  }
  
  return (
    <>
    <Typography variant='h4' >About</Typography>
    <Button variant='contained' color='primary' onClick={openSnack}  >open</Button>
    </>
  )
}
