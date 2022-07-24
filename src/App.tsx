import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SideBar from './Components/SideBar';
import MyIngredients from './Components/MyIngredients';
import WhatCanIMake from './Components/WhatCanIMake';
import AllRecipes from './Components/AllRecipes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import ExpandRepertoire from './Components/ExpandRepertoire';
import MyNotebook from './Components/MyNotebook';

function App() {
  const queryClient = new QueryClient();

  return (

    <QueryClientProvider client={queryClient}>
      <div className="flex w-full h-screen justify-center text-color12 bg-gradient-to-r from-color2 via-color1 to-color3">
        <Router>
          <SideBar></SideBar>
          <div className="w-full ml-48 p-5 h-full ">
            <div className=" shadow-color4 shadow-md  bg-color1 p-5 h-full bg-gradient-to-br from-color1 via-color2 to-color8/10 rounded-lg ">
              <Routes>
                <Route path="/myingredients" element={<MyIngredients />} />
                <Route path="/whatcanimake" element={<WhatCanIMake />} />
                <Route path="/allrecipes" element={<AllRecipes />} />
                <Route path="/expandrepertoire" element={<ExpandRepertoire />} />
                <Route path="/mynotebook" element={<MyNotebook />} />
                <Route path="*" element={<Navigate to="/whatcanimake" replace />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default App;
