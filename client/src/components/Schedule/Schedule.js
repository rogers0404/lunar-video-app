import React, { useState } from "react";
import Calendar from 'react-calendar';
import { useMutation, useQuery } from '@apollo/react-hooks';
//import Auth from "../../utils/auth";
import api from "../../api"
import { ADD_APPOINTMENT } from "../../utils/mutations";
import { Container, Heading, FormControl, FormLabel, Input, Button, Select, Text, Box } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import { ME } from "../../utils/queries";


function Schedule(props) {
    // defining a state for the time for the schedule
  const [startDate, setStartDate] = useState(new Date());
  let email = '';
    
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
  const [value, onChange] = useState(new Date());

  const [addAppointment, { error}] = useMutation(ADD_APPOINTMENT);
  const {data} = useQuery(ME);
  const [link, setLink] = useState(null);

  console.log(value);

  const handleFormSubmit = async event => {
    event.preventDefault();
      /* before to save in DB we need to generate the link  */
      await api
      .createRoom()
      .then((room) => setLink(room.url))
      .catch((error) => {
        console.log('Error creating room', error);
      });
      //************************************************ */
    
    console.log(formState.day)
    console.log(formState.time)
    console.log(link)
    try{
       await addAppointment({
      variables: {
        day: formState.day, time: formState.time, link: link
      }
    });
    
    if(data)
         email = data.me.email;
        else
        console.log('no imprime nada')

    console.log(email);

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
            link: link,
            mail: email
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
  };

  const handleChange = event => {
    const { name, value } = event.target;
/*     console.log("name " + name);
    console.log("value " + value) */
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <Container>
      <Heading  color="#faf0ca" as="h2" size="xl" fontSize={{ base: "16px", md: "20px", lg: "30px" }} padding="3">Schedule your Appointment</Heading>
      <Calendar
        onChange={onChange}
        value={value}
      />
      <FormControl>
              <FormLabel color="#faf0ca">Select day</FormLabel>
              <DatePicker id="day" name="day"
                    dateFormat="MM/dd/yyyy"
                    selected={value}
                    // selected={startDate}
                    minDate={new Date()}
                    onChange={date => {setStartDate(date); setFormState({...formState, day: date.toLocaleDateString("en-US")});}}
                    customInput={<CustomInput/>}
                />
              <FormLabel color="white">Time (Hr)</FormLabel>
              <Select placeholder="Select option" id="time" name="time"  defaultValue="option1" onChange={handleChange} focusBorderColor="blue" color="white" borderColor="blue">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                {
              error ? 
                null 
                : 
                <Container>
                    <Text  padding="4"></Text>
                    <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>An email was sent with the information below </Text>
                    <Box borderRadius="md">
                        <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>Day: {formState.day} </Text>
                        <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>Time: {formState.time}</Text>
                        <Text color="#faf0ca" fontSize={{ base: "8px", md: "12px", lg: "16px" }} >Link: <a href={link} target="_blank" rel="noreferrer">{link}</a></Text>
                    </Box>
                    
                </Container>
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
