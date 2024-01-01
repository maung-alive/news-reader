import React, { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Router from './Router';


export default function App() {
  return (
    <MainLayout>
      <Router />
    </MainLayout>
  )
}
