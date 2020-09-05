import React, {useEffect,useState} from "react";
import { useForm , Controller} from "react-hook-form";
import {Select, MenuItem, FormControl, Radio, FormControlLabel, RadioGroup} from "@material-ui/core";
import isEmail from "validator/lib/isEmail";


const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
  },
 
};

export default function App() {
  const { register, handleSubmit, setValue, reset, watch, errors, formState } = useForm({
    mode: "onBlur",
  });
  const {setdata,data}=useState();// i tried to set data in this but i am not able to.
  const selectValue = watch("select");
  const value=watch("radio");

  function onSubmit(data) {
    console.log(data);
   
  }

  useEffect(() => {
    register({ name: "select" });
  }, [register]);


  const handleChange = e => {
    setValue("select", e.target.value);

  }
  const handleRadioChange = e => {
    setValue("radio", e.target.value);

  }


  return (
    <div class="myapp">
      <h4>My Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-4"><label className="name"> Name : </label></div>
           <div className="col-md-6">
             <input className ="inputlabel" type="text" name="Name" ref={
              register({
                required: true,
                pattern: /^[A-Za-z]/
              })}
          style={{ borderColor: errors.Name && "red" }}            
            placeholder="Name" />  
            {errors.Name && <span className="errors">This is required</span>}       
              
           </div>
        </div>
        <div className="row">
          <div className="col-md-4"><label className="positionLabel"> City : </label></div>
           <div className="col-md-6">
           
             <Select className="dropdown" required value={selectValue} onChange={handleChange} >             
             <MenuItem value={10}>Brampton</MenuItem>
             <MenuItem value={20}>Missisuaga</MenuItem>
             <MenuItem value={30}>Toronto</MenuItem>
             <MenuItem value={40}>Oakville</MenuItem>
             <MenuItem value={50}>Milton</MenuItem>
             <MenuItem value={60}>Hamilton</MenuItem>
             </Select>
    
             {errors.City && <span className="errors">This is required</span>}   
           </div>
        </div>
        <div className="row">
          <div className="col-md-4"><label className="positionLabel">Email:</label></div>
          <div className="col-md-6">
          <input className="inputlabel"
          name="email"
          ref={register({required: true,
            validate: (input) => isEmail(input),
          })}
          style={{  borderColor: errors.email && "red" }}
          placeholder="Email"
        />
        {errors.email && <span className="errors">This is required</span>} 
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"> <label className="notice">Notifications:</label></div>
         <div className="col-md-4">
        <RadioGroup  name="Notifications" value={value} onChange={handleRadioChange} >
      <FormControlLabel value="Yes" control={<Radio />} label="Yes!" labelPlacement="end"/>
      <FormControlLabel value="No" control={<Radio />} label="No." labelPlacement="end"/>
      </RadioGroup>
      </div>
        </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6"><button type="submit" className="button" disabled={formState.isSubmitting}>
          Submit
        </button></div>
      </div>
      
      </form>
    </div>
  );
}