import React from 'react';

import styled from 'styled-components'
import image1 from '../../image1.png'

const ShapesExampleStyled = styled.div`
  position: relative;
  /* display: flex; */

  /* font-size: 20px; */
`
const StyledImage = styled.img`
  height: 200px;
  width: 200px;

  float: left;
`

const RoundImage = styled(StyledImage)`
  shape-outside: circle();
  border-radius: 50%;
`

const InsetImage = styled(StyledImage)`
  shape-outside: inset(50px);
`

const CutTextLeft = styled.div`
  height: 200px;
  width: 400px;
  float:left;
  shape-outside: polygon(0 0, 0 300px, 350px 300px);
`
const CutTextRight = styled.div`
  float: right;
  shape-outside: polygon(200px 300px, 300px 300px, 300px 0, 0 0);
  height: 300px;
  width: 350px;
`

export const ShapesExample = () =>
  <ShapesExampleStyled>
    <RoundImage src={image1}/>
    <p> <b>shape-outside: circle();</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante. Maecenas condimentum quam gravida lacus malesuada commodo.
     In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis. Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante. Maecenas condimentum quam gravida lacus malesuada commodo.
     In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis. Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante. Maecenas condimentum quam gravida lacus malesuada commodo.
     In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis. Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.</p>

<br/><br/><br/><br/><br/>
     <InsetImage src={image1}/>
    <p> Maecenas condimentum quam gravida lacus malesuada commodo. In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis.<b>;shape-outside: inset(50px);</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante.  Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante. Maecenas condimentum quam gravida lacus malesuada commodo.
     In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis. Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante. Maecenas condimentum quam gravida lacus malesuada commodo.
     In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis. Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.</p>

     <br/><br/><br/><br/><br/>
     <CutTextLeft/>
     <CutTextRight/>
    <p> <b>polygon(0 0, 0 300px, 200px 300px);</b>Maecenas condimentum quam gravida lacus malesuada commodo. In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante.  Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis s tempor, commodo lacus eu, facilisis s tempor, commodo lacus eu, facilisis s tempor,
     commodo lacus eu, facilisis s tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante. Maecenas condimentum quam gravida lacus malesuada commodo.
     In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis. Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus ante. Maecenas condimentum quam gravida lacus malesuada commodo.
     In ut pharetra nisi, nec posuere enim. Nam interdum ex nec erat placerat, vel lacinia quam iaculis. Maecenas sollicitudin libero libero,
      viverra imperdiet nulla pretium sed. Nam at est eros. Sed tellus nisl, finibus eu nisi ut, posuere aliquet felis. Donec ut mi quis nulla iaculis euismod.
     Suspendisse potenti. Cras at mauris tempor, commodo lacus eu, facilisis lacus. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Aenean lacus sapien, sodales eu pharetra vel, elementum rutrum eros. Cras risus odio, fermentum vitae lectus vitae, varius ullamcorper dui.</p>

  </ShapesExampleStyled>
