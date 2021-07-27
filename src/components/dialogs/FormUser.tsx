import {
  Grid, TextField, Select, MenuItem, FormControl, InputLabel,
} from '@material-ui/core';
import { useEffect, useState } from 'react';

export interface DataAPI {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: string,
}

interface Props {
  onUpdate: (data: DataAPI) => void
}

function Component(props: Props) {
  const [data, setData] = useState<DataAPI>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    const { onUpdate } = props;
    onUpdate(data);
  }, [data]);

  const handleInput = (keyValue: Partial<DataAPI>) => {
    setData({ ...data, ...keyValue });
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <TextField label="First name" value={data.firstName} onChange={({ target: { value } }) => handleInput({ firstName: value as string })} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Last name" value={data.lastName} onChange={({ target: { value } }) => handleInput({ lastName: value as string })} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Birthday" />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="password"
          label="password"
          value={data.password}
          onChange={({ target: { value } }) => handleInput({ ...data, password: value as string })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Email" value={data.email} onChange={({ target: { value } }) => handleInput({ ...data, email: value as string })} />
      </Grid>
      <Grid item xs={6}>
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={data.role}
            onChange={({ target: { value } }) => handleInput({ ...data, role: value as string })}
          >
            <MenuItem value="administrator">Administrator</MenuItem>
            <MenuItem value="client">Client</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export const FormUser = Component;
export default FormUser;
