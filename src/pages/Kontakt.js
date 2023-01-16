import React from 'react'
import styled from 'styled-components'

function Kontakt() {
  return (
    <Form>
        <h3>Kontakta oss</h3>
        <Divflex>
        <Input placeholder="Namn" /> 
        <Input placeholder="Efternamn" /> 
        </Divflex>
        <Flex2>
        <Inputmejl placeholder="Mejladress *" />
        <Textarea placeholder="Fråga *" />
        </Flex2>
        <Button>Skicka</Button>
        </Form>
  )
}

export default Kontakt

const Input = styled.input`
height: 50px;
width: 350px;
border-radius: 7px;
`

const Inputmejl = styled.input`
height: 50px;
width: 742px;
border-radius: 7px;
margin-bottom:30px;
margin-top:30px;
`

const Textarea = styled.textarea`
height:150px;
width: 744px;
border-radius: 7px;
margin-bottom: 20px;
`
 
const Button = styled.button`
width: 100%;
height: 50px;
border-radius: 7px;
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

















/* <div class="container">
    <form action="action_page.php">
  
      <label for="fn">Namn</label>
      <input type="text" id="fn" name="namn" placeholder="Fullständigt namn">
  
      <label for="en">Mejladress</label>
      <input type="text" id="ln" name="Mejl" placeholder="Mejladress">
  
      <label for="land">Land</label>
      <select id="land" name="Land">
        <option value="Sverige">Sverige</option>
        <option value="Norge">Norge</option>
        <option value="Danmark">Danmark</option>
        <option value="Finland">Finland</option>

      </select>
  
      <label for="förfrågan">Förfrågan</label>
      <textarea id="förfrågan" name="förfrågan" placeholder="Skriv här..." style="height:200px"></textarea>
  
      <input type="skicka" value="Skicka iväg förfrågan">   
      </form>
  
   
  </div>*/