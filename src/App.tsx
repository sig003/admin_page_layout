import React from 'react';
import './layout.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; 

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '300px',
  }));
  
  return (
    <>
      <div className="top">TOP</div>
      <div className="content">
        <div className="left">LEFT</div> 
        <div className="center">
          <Grid container spacing={3} className="grid_blank">
            <Grid item xs={4} sm={4.3} md={3} lg={3} xl={4}>
              <Item>abcd</Item>
            </Grid>
            <Grid item xs={6.8} sm={6.8} md={6} lg={6.4} xl={6.2}>
              <Item>
                <div>asdasdasf</div>
                <div>asdasdasf</div>
                <div>asdasdasf</div>
                <div>asdasdasf</div>
                <div>asdasdasf</div>
              </Item>
            </Grid>
          </Grid>
          <Grid container className="grid_blank">
            <Grid item xs={10.7} sm={11.1} md={8.9} lg={9.3} xl={10.2}>
              <Item>abcdffafds</Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default App;
