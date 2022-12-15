import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Registeration No." variant="outlined" value={student.regNo} onChange={(event)=> {
        setStudent({...student,regNo:event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event)=> {
        setStudent({...student,studentName:event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event)=> {
        setStudent({...student,grade:event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event)=> {
        setStudent({...student,section:event.target.value})
      }}/>
      <Button variant="contained" onClick={createStudent}>Create</Button>
    </Box>
  );
}