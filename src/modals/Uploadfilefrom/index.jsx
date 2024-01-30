import React from 'react'
import { Box, Typography } from "@mui/material";
import"../Uploadfilefrom/modal.css"
import { Img } from 'components';

const ModalPopup=(props)=> {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#111111',
    border: '3px dotted #F4F4F4',
    borderRadius: '25px',
    
    width:640,
    height:340,
    p:2
  };
  
  return (
    <div className='modal'>
    <Box sx={style}>
      <div style={{display:'flex', justifyContent:'flex-end', }}>
      <Img
                            className="h-[33px] ml-2 my-px"
                            src="images/Xcircle.svg"
                            alt="television"
                            id="icon"
                            onClick={props.handleClose}
                        />

      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Img
                            className=" ml-2 my-px"
                            src="images/Frame 12961.svg"
                            alt="television"
                        />

      </div>
  </Box>
  </div>
  )
}

export default ModalPopup
