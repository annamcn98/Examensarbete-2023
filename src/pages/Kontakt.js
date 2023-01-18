
import React from 'react'
import { useState, useEffect} from 'react';
import styled from 'styled-components'

function Kontakt() {
  const initialValues = { mejladress: "", fråga:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (formValues.mejladress && formValues.fråga) {
        setFormSuccess(true);
    } else {
        setFormSuccess(false);
        
    }
};

const [formSuccess, setFormSuccess] = useState(false);

useEffect(() => {
  if (formSuccess) {
      setTimeout(() => {
          window.location.reload();
      }, 1500);
  }
}, [formSuccess]);


    const validate = (values) => {
    const errors = {}
    const regex = "";
    if (!values.mejladress){
      errors.mejladress = "Mejladress saknas";
    }
    if (!values.fråga){
      errors.fråga ="Frågefältet är tomt";
    }

    return errors;

  }

  return (
    <div>
    <Form onSubmit={handleSubmit}>
        <h3>Kontakta oss</h3>
        <Errors>
        {formSuccess && <p>Ditt meddelande har skickats!</p>}
        <p>{formErrors.mejladress}</p>
        <p>{formErrors.fråga}</p>
        </Errors>
        <Divflex>
        <Input placeholder="Namn" /> 
        <Input placeholder="Efternamn" /> 
        </Divflex>
        <Flex2>
        <Inputmejl type="text" name="mejladress" placeholder="Mejladress *"  value={formValues.mejladress}  onChange={handleChange} />
        <Textarea type="text" name="fråga" placeholder="Fråga *"  value={formValues.fråga} onChange={handleChange} />
        </Flex2>
        <Button>Skicka</Button>
        </Form>

        </div>
  )
}



export default Kontakt


const Input = styled.input`
height: 50px;
width: 350px;
border-radius: 7px;
border: gray;
`

const Inputmejl = styled.input`
height: 50px;
width: 742px;
border-radius: 7px;
border: gray;
margin-bottom:30px;
margin-top:30px;
`

const Textarea = styled.textarea`
height:150px;
width: 744px;
border-radius: 7px;
border: gray;
margin-bottom: 20px;
`
 
const Button = styled.button`
width: 100%;
height: 50px;
border-radius: 7px;
border: gray;
margin-bottom: 20px;
background-color: #EEB5A2;
&:hover {
 background-color: #FAEDE4;
}
`

const Divflex = styled.div`
display:flex;
justify-content: space-between;
width:100%;
`

const Flex2 = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
`

const Form = styled.form`
display:flex;
justify-content: center;
width: 750px;
flex-direction:column;
margin:auto;
`

const Errors = styled.p`

border-radius: 10px;
color:#FD461C;
padding: 15px; 
font-size: 14px; 
margin-top: 10px;
text-decoration:underline;
font-weight:bold;
`