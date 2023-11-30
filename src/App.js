import './App.css';
import { TextField,Stack,Button} from '@mui/material';
import { useState } from 'react';

function App() {

  const [total,setTotal]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [time,setTime]=useState(0)

  const [validPrinciple,setValidPrinciple]=useState(true)
  const [validRate,setValidRate]=useState(true)
  const [validTime,setValidTime]=useState(true)





  const validateInput=(e)=>{
    const {name,value}=e.target
    // console.log(typeof value)
    // console.log(!!value.match(/^[0-9]{1,}$/))
    if(!!value.match((/^[0-9]{1,}$/))){
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(true)
      }
    
    else if(name=='rate')
    {
      setRate(value)
      setValidRate(true)
    }
    else {
      setTime(value)
      setValidTime(true)
    }
  }
    
    else{
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(false)
      }
      else {
        setTime(value)
        setValidTime(false)
      }

    }
  
  }


  // console.log(principle,rate,time)

   const handleSubmitted=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !time){
      alert('Enter valid values!')
    }
    else{
      let a=principle*rate/100*time
      setTotal(a)
    }

   }

   const valreset=()=>{
    setPrinciple(0)
    setRate(0)
    setTime(0)
    setTotal(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidTime(true)

   }

  
  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
     <div className='bg-light p-5 rounded'>
     <h1>Simple Interest App</h1>
     <p>Calculate your simple interest here!</p>
        <div style={{backgroundColor:'#E1E164'}} className="text-center rounded">
          <h4 className='pt-3'> ₹{''}{total}</h4>
          <p className='pb-3'>Your total interest!</p>
        </div>
        <form action="" className='my-5' onSubmit={(event)=>handleSubmitted(event)}>
        <div className='mb-3'>
          <TextField id="outlined-basic1" label="₹ Principle Amount" variant="outlined" className='w-100' value={principle || ''} name='principle' onChange={(event)=>validateInput(event)} />
          {
            !validPrinciple &&
            <div className='text-danger'>
              *invalid principle amount value

            </div>
          }
        </div>
        <div className='mb-3'>
          <TextField id="outlined-basic2" label="Rate of interest (p.a)%" variant="outlined" className='w-100' value={rate || ''} name='rate' onChange={(event)=>validateInput(event)} />
          {
            !validRate &&
            <div className='text-danger'>
              *invalid rate value
            </div>
          }
          
        </div>
        <div className='mb-3'>
          <TextField id="outlined-basic3" label="Time Period (Yr)" variant="outlined" className='w-100' value={time || ''} name='time' onChange={(event)=>validateInput(event)} />
          {
           !validTime &&
         <div className='text-danger'>
            *invalid years

          </div>
         }
        </div>
        
          <Stack spacing={2} direction={'row'}>
          <Button variant="contained" type='submit' style={{height:'50px',width:'250px'}} className='bg-dark' disabled={validPrinciple && validRate && validTime ? false : true} >CALCULATE</Button>
          <Button variant="outlined"  style={{height:'50px',width:'250px'}} onClick={valreset}>Reset</Button>

          </Stack>
        
          
          </form>
      </div>

    </div>
  );
}

export default App;
