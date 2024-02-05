import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Button from "./components/customButton"

const DivisionPage: React.FC<PageProps> = () => {
  const [buttonVal, setButtonVal] = useState(0);
  return (

    <main className='p-5'>
      <h1>Hello</h1>
      <h1>Colorful Custom Button Components</h1>
      <Button 
        border="none"
        color="blue"
        height = "200px"
        onClick={() => {setButtonVal(buttonVal+1)}}
        radius = "50%"
        width = "200px"
        children = {buttonVal}
      />
    </main>
      
  )
}

export default DivisionPage

export const Head: HeadFC = () => <title>Division Page</title>
