import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { registerAsWebComponent } from 'react-webcomponentify'

export const MyButton = (props) => {
  return (
    <Stack direction='row' spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href='#text-buttons'>Link</Button>
    </Stack>
  )
}

registerAsWebComponent(MyButton, 'my-button', 'element')

/*
 In html: 
 <my-button></my-button>
 or
<my-button id="my-custom-btn" text="my kickass button"></my-button>

and 

<script type="text/javascript"> 
  window.onload = function() {
    var myBtn = document.getElementById("my-custom-btn");
    myBtn.setProps({
      onClick: function() {
        console.log("my-button was clicked");
      }
    });
  };
</script>
*/
