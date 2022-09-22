import React,{useState} from 'react'
import './Meet.css'
import Stack from "@mui/material/Stack";
import Modal from '@mui/material/Modal';
import Model from "../../Img/main.jpg";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Menu from "../Menu/Menu";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfiniteScroll from "react-infinite-scroll-component";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Meet = () => {
  const [select,setSelect]=useState(true)
  const theme = useContext(themeContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const darkMode = theme.state.darkMode;
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    height:600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  const Data=[
    {
      name: 'Faizan',
      img:Model,
      id:1,
      model:1
    },
    {
      name: 'Arnav',
      img:Model,
      id:1,
      model:2
    },
    {
      name: 'Amelia',
      img:Model,
      id:0,
      model:3
    },


  
   
  ]
  const Bio=[
    {
      model:1,
      name:'Faizan',
      height: '5’11',
      neck: '17',
      arm: '14.5',
     armhole: '21',
      sleeveLength: '27',
       shoulder: '18',
        chest:'40',
       waist : '32',
lowerWaist: '34',
 hips: '39',
  trouserLength:'40',
   thigh: '23',
knee: '16',
ankle: '12',
shoes: '43'
    }
  ]


  return (
   <div className="meet">
  <div className="m-meet" style={{ display: darkMode ? "none" : "flex" }}>
  <div className="m-header">

    <Stack direction='row' spacing={25} >
      <span className='gender' onClick={()=>setSelect(true)} style={{textDecoration: select?'underline':'none'}} >men</span>
      <span className='gender' onClick={()=>setSelect(false)} style={{textDecoration: select?'none':'underline'}} >women</span>
    </Stack>
        
    </div>
  
    <div className='m-main'>
      
    <Stack marginTop={0} alignItems='center' justifyContent={'center'} direction='row' spacing={3}>
    <div
  id="scrollableDiv"
  style={{
    height: '63vh',
    overflow: 'auto',
    display: 'flex',

    flexDirection: 'column',
  }}
>
  {/*Put the scroll bar always on the bottom*/}
  <InfiniteScroll
    dataLength={20}

    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    inverse={true} //
    hasMore={true}
  
    scrollableTarget="scrollableDiv"
  >
    <div className='row g-3'>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
<Box sx={style}>
        <div className="data">
          <img src={Model} className='dataImg'  />
          <div className="d-bio">
{
  Bio.map((i)=>{
    return(
      <div className="d-info">
    
        <span>{i.name}</span>
        <span>Height: {i.height}</span>
        <span>Neck: {i.neck}</span>
        <span>Arm: {i.arm}</span>
        <span>Arm hole: {i.armhole}</span>
          <span>Sleeve length: {i.sleeveLength}</span>
            <span>Shoulder: {i.shoulder}</span>
            <span>Chest: {i.chest}</span>
            <span>Waist: {i.waist}</span>
            <span>Lower waist: {i.lowerWaist}</span>
            <span>Hips: {i.hips}</span>
            <span>Trouser length: {i.trouserLength}</span>
            <span>Thigh: {i.thigh}</span>
            <span>Knee: {i.knee}</span>
            <span>Ankle: {i.ankle}</span>
            <span>Shoes: {i.shoes}</span>
            </div>
    )
  })
}
          </div>
        </div>
        </Box>
      </Modal>
     {
      Data.map((i)=>{
     if(select==true&&i.id===1)
      {
        return(
          <div className=' col-xl col-lg-4 col-md-6 col-sm-6'>
<Card border='0' onClick={handleOpen}  style={{ width: '12rem',height:'14rem' }} className="bg-dark text-white card" >
      <Card.Img  style={{ width: '12rem',height:'14rem',overflow:'hidden' }} src={i.img} alt="Model" />
      <Card.ImgOverlay >
        <Card.Text className='card-text' >
        {i.name}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
        )
      }else if(select === false && i.id === 0)
      {
        return(
          <div className=' col-xl  col-lg-4 col-md-6 col-sm-6'>
        <Card border='0' onClick={handleOpen} style={{ width: '12rem',height:'14rem' }} className="bg-dark text-white card">
        
              <Card.Img style={{ width: '12rem',height:'14rem',overflow:'hidden' }} src={i.img} alt="Model" />
              <Card.ImgOverlay >
                <Card.Text className='card-text' >
                {i.name}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
        </div>
        )
      }else{
        return null;
      }

        
      })
     }
    
</div>
</InfiniteScroll>
</div>

</Stack>
</div>
  </div>
    <Menu />
   </div>
  )
}

export default Meet
