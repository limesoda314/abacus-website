import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Button from "./components/customButton"

const MultiplicationPage: React.FC<PageProps> = () => {
  const [buttonVal, setButtonVal] = useState(0);
  return (

    <main className='p-5'>
      <h1>Hello</h1>
      <h1>Colorful Custom Button Components</h1>
      <Button 
        border="none"
        color="green"
        height = "200px"
        onClick={() => {setButtonVal(buttonVal+1)}}
        radius = "50%"
        width = "200px"
        children = {buttonVal}
      />
    </main>
      
  )
}

export default MultiplicationPage

export const Head: HeadFC = () => <title>Multiplication Page</title>
