// import React from 'react'
import { colors } from '../../assets/colors';
import styles from './button.module.scss';
import { BsArrowRight } from "react-icons/bs";
import { useState } from 'react';
import { Box } from '@mui/material';

export const Button = ({ children, shadow, bgcolor = '#00C795', color = 'white', width = '100%',onClick=()=>null }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.wrapper} >
      <Box
        component={'button'}
        className={`${styles.cta}  `}
        onClick={onClick}
        sx={{
          border:'0px',
          bgcolor,
          color,
          minWidth: width,
          padding: width === '157px' ? '10px' : '10px 24px',
          boxShadow: shadow ? `6px 6px 0 ${(typeof shadow !== 'boolean') ? shadow : '#562288'}` : 'none',
          "&:hover": {
            boxShadow: shadow ? `10px 10px 0 ${(typeof shadow !== 'boolean') ? shadow : '#562288'}` : 'none',
          }
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <span style={{ fontFamily:'satoshi'}}>{children}</span>
        {(shadow && hover) && <span><BsArrowRight className={styles.one} /> </span>}
      </Box>
    </div >
  );
};

