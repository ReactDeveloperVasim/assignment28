import React from "react";
import { UserList } from "./component/UserList";
import { Card, CardContent, Grid, TextField } from "@mui/material";

function App() {
  return (
  <Grid container spacing={2}>

  
  <Grid item xs={12} sx={{bgcolor:"whitesmoke",margin:"0px"}}>
  <h1 style={{textAlign:"center", color:"red"}}>USER DETAILS</h1>
</Grid>
<Grid item xs={12}>
<Card sx={{bgcolor:"whitesmoke",margin:"0px",marginTop:"-30px"}}>
  <CardContent>
  <TextField  variant="outlined" fullWidth label="Search Here" />

  </CardContent>
</Card>
</Grid>

    <Card sx={{bgcolor:"whitesmoke",margin:"0px"}}>
      <CardContent>
      <UserList />

      </CardContent>
    </Card>
    </Grid>
    );
}

export default App;
