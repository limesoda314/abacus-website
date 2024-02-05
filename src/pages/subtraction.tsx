import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Button from "./components/customButton"

const SubtractionPage: React.FC<PageProps> = () => {
  const [buttonVal, setButtonVal] = useState(0);
  return (

    <main className='p-5'>
      <h1>Hello</h1>
      <h1>Colorful Custom Button Components</h1>
      <Button 
        border="none"
        color="purple"
        height = "200px"
        onClick={() => {setButtonVal(buttonVal+1)}}
        radius = "50%"
        width = "200px"
        children = {buttonVal}
      />
    </main>
      
  )
}

export default SubtractionPage

export const Head: HeadFC = () => <title>Subtraction Page</title>
