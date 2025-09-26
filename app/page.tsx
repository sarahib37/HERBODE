'use client'

import About from "@/components/About"
import Difference from "@/components/Difference"
import Educate from "@/components/Educate"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { Box } from "@chakra-ui/react"
type Props = {}

export default function page({}: Props) {
  return (
    <Box  w="100%" overflowX="hidden" fontSize={{ base: "md", md: "lg" }} pt={{base: '5.5em', md:'0em'}} lineHeight="taller">
        <Hero/>
        <About/>
        <Educate/>
        <Difference/>
        <Footer/> 
    </Box>    
  )
}