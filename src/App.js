import React, { useEffect, useState } from 'react';
import './CSS/background.css';
import { Grid } from '@material-ui/core';
import LeftBar from './components/Leftbar';
import Charts from './components/Charts';
import BottomSection from './components/Bottomsection';


function App() {
  const [frender, setfrender] = useState(0);
  useEffect(() => {
    window.addEventListener('resize', forceRender);
    return () => {
      window.removeEventListener('resize', forceRender);
    }
  }, [])


  const forceRender = () => {
    setfrender(frender => frender + 1);
  }

  return (
    <div className="body">
      <Grid container>
        <Grid item lg={2} sm={2} md={2} xs={12}>
          <LeftBar />
        </Grid>
        <Grid item lg={10} sm={10} md={10} xs={12}>
          <Charts />
          <BottomSection />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
