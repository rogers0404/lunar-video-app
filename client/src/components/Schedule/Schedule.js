import React, { useState, useCallback, useEffect } from "react";
import { useMutation, useQuery, /* useDisclosure */ } from '@apollo/react-hooks';
//import Auth from "../../utils/auth";
import api from "../../api"
import { ADD_APPOINTMENT } from "../../utils/mutations";
import { Container, 
          Heading, 
          FormControl, 
          FormLabel, 
          Input, 
          Button, 
          Select, 
          Text, 
          Box, } from "@chakra-ui/react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import { ME } from "../../utils/queries";


function Schedule(props) {
    // defining a state for the time for the schedule
  const [startDate, setStartDate] = useState(new Date());
  const [ok, setOK] = useState(false);
  let email = '';
  let link = '';

  //const [aLink, setALink] =;
    
    // defining a custon input for the datepicker
    const CustomInput = ({ value, onClick }) => (
        <Input type="day" placeholder="mm/dd/yyy"
                name="day"
                color="white"
                onClick={onClick}
                onChange={handleChange}
                value={value}/>
      ); 

  const [formState, setFormState] = useState({ day: '', time: ''});

  //calendar state

  const [addAppointment] = useMutation(ADD_APPOINTMENT);
  const {data} = useQuery(ME);
  const [aLink, setALink] = useState('');

  const createLink = useCallback(() => {
    return api
      .createRoom()
      .then((room) => room.url)
      .catch((error) => {
        console.log('Error creating room', error);
      });
  }, []); 

  useEffect(() => {
    setALink(link)
  }, [link]);

  const handleFormSubmit = async event => {
    event.preventDefault();

    try{

      createLink()
      .then((url) => link = url)
      .then(()=>
           addAppointment({     
             variables: {day: formState.day, time: formState.time, link: link }    
            })
          )
      .then((data) => {
      console.log(data);
      })
      .then(()=> setALink(link))
    
    if(data)
         email = data.me.email;

    }catch (e) {
        console.log(e)
    }

    /*****************************************************/
    /**Sending the mail with nodemailer */

    let response = await fetch('/mail', {
      method: "POST",
      body: JSON.stringify({
          day: formState.day,
          time: formState.time,
          link: aLink,
          mail: email, 
          subject: 'Appointment Scheduled on '
      }),
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
    }),
      message = await response.json();
      console.log(message);
        //window.location.reload('/'); // we need to make anoter component to congratule the success of the operation

    /*****************************************************/

    /*****************setOK all operations ok***********************/
   
    setOK(true);
    
    /*****************************************************/
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <Container>
      <Heading  color="#faf0ca" as="h2" size="xl" fontSize={{ base: "16px", md: "20px", lg: "30px" }} padding="3">Schedule your Appointment</Heading>
      <FormControl isRequired>
              <FormLabel color="#faf0ca">Select day</FormLabel>
              <DatePicker id="day" name="day"
                    dateFormat="MM/dd/yyyy"
                    selected={startDate}
                    minDate={new Date()}
                    onChange={date => {setStartDate(date); setFormState({...formState, day: date.toLocaleDateString("en-US")});}}
                    customInput={<CustomInput/>}
                />
              <FormLabel color="white">Time (Hr)</FormLabel>
              <Select placeholder="Select option" id="time" name="time"  onChange={handleChange} focusBorderColor="blue" color="white" borderColor="blue">
                    <option value="12:00pm">12:00pm</option>
                    <option value="2:00pm">2:00pm</option>
                    <option value="4:00pm">4:00pm</option>
                </Select>
                 { ok ?
                  <Box>
                    <Text  padding="3"></Text>
                      <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>An email was sent with the information below </Text>
                      <Box borderRadius="md">
                          <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>Day: {formState.day} </Text>
                          <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>Time: {formState.time}</Text>
                          <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }} >Link: <a href={aLink} target="_blank" rel="noreferrer">{aLink}</a></Text>
                      </Box>   
                  </Box>
                  : null
                 }         
            <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                    onClick={handleFormSubmit}
            >
                    Submit
            </Button>
      </FormControl> 

    </Container>

  );

}

export default Schedule;
