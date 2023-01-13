import React from 'react'
import styled from 'styled-components'

function Kontakt() {
  return (
    <body>
        <h3>Kontakta oss</h3>
        <Input placeholder="Förnamn" /> 
        <Input placeholder="Efternamn" />
        <Input placeholder="Mejladress" />
        <Textarea placeholder="Fråga" />
        
       <label>Kategori</label> 
      <select>
        <option>Våra produkter</option>
        <option>Samarbeta med oss</option>
        <option>Jobba hos oss</option>

      </select>
        <button>Skicka</button>
        </body>
  )
}

export default Kontakt

const Input = styled.input`
padding: 10px;
width: 100%;
padding: 20px;
margin: 10px;

`

const Textarea = styled.textarea`
width: 50%;
margin: auto;

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