import React from 'react'
import Input from '@mui/material/Input';



const RangeFieldInput = ({value, onChange}) => {
  return (
    <Input
    type='text'
    value={value}
    disableUnderline={true}
    />
  )
}

export default RangeFieldInput;