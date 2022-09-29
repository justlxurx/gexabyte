import { Box } from '@mui/system'
import React from 'react'

const ContactUsGradients = () => {
  return (
    <div>
      <Box sx={{ position: 'absolute', left: 0, height: '120vh', width: '100px', zIndex: -1, background: 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }}>
      </Box>
      <Box sx={{ position: 'absolute', left: '32.5%', height: '120vh', width: '200px', zIndex: -1, background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }}>
      </Box>
      <Box sx={{ position: 'absolute', top: 0, height: '100px', width: '100%', zIndex: -1, background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }}>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 0, height: '100px', width: '100%', zIndex: -1, background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }}>
      </Box>
    </div>
  )
}

export default ContactUsGradients