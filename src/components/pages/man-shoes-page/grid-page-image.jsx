import React from 'react'
import { styled } from '@mui/material/styles';

const SquareContainer = styled('div')({
  position: 'relative',
  borderRadius: 12,
  overflow: 'hidden',
  cursor: 'pointer',
  ':before': {
    content: '" "',
    display: 'block',
    width: '100%',
    paddingTop: '100%',
  },
  '>*': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const GridPageImage = ({ alt, ...props }) => <SquareContainer><img {...props} alt={alt ?? 'Mes nenaudojam SEO'} /></SquareContainer>;

export default GridPageImage;