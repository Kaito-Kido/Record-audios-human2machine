import React from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import Select from './Select'
const Header = () => (
  <div className="header">
    <Select />
    <Button variant="outlined">Claim</Button>
    <Button variant="outlined">Start</Button>
    <Button variant="outlined">Submit</Button>
  </div>
)
export default Header;