//Library imports
import React from 'react';

//Internal Imports
import SingleStoreApplication from './shared/containers/singleStoreApplication';
import ThemeProvider from './providers/ThemeProvider';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <SingleStoreApplication />
      </ThemeProvider>
    </>
  );
};

export default App;
