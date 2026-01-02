
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function Dumpreport() {
  return (
    <Box sx={{  m : 2 , display:'flex',fontweight :'bold' ,fontSize: '5px'}} >
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        View
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'View',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>View Dump Report</option>
          <option value={20}>View  Calander File</option>
          
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
