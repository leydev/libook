import {
  Grid, Avatar, TextField, Select, MenuItem, FormControl, InputLabel,
} from '@material-ui/core';
import { useState } from 'react';

interface DataAPI {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: string,
}

function Component() {
  const [data, setData] = useState<DataAPI>({
    firstName: '',
    lastName: '',
    email: 'wesley.waaraujo@gmail.com',
    password: '123456789',
    role: '',
  });

  return (
    <Grid container>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar style={{ width: '3em', height: '3em' }}>W</Avatar>
      </Grid>
      <Grid item xs={6}>
        <TextField label="First name" value={data.firstName} onChange={({ target: { value } }) => setData({ ...data, firstName: value as string })} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Last name" value={data.lastName} onChange={({ target: { value } }) => setData({ ...data, lastName: value as string })} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Birthday" />
      </Grid>
      <Grid item xs={6}>
        <TextField label="CPF" />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Email" value={data.email} onChange={({ target: { value } }) => setData({ ...data, email: value as string })} />
      </Grid>
      <Grid item xs={6}>
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={data.role}
            onChange={({ target: { value } }) => setData({ ...data, role: value as string })}
          >
            <MenuItem value="administrator">Administrator</MenuItem>
            <MenuItem value="Client">Client</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export const FormUser = Component;
export default FormUser;
