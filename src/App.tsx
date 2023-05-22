import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Events from './component/Events';

const queryClient = new QueryClient();
const App =() =>{
  return (

    <QueryClientProvider client={queryClient}>
    <div className="App">
     <Events />
    </div>
    </QueryClientProvider>
  );
}

export default App;
