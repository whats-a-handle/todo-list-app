/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import CustomAppBar from './Components/CustomAppBar';

export default function App() {
  return (
    <>
      <CustomAppBar />
      <HomePage />
    </>
  );
}
