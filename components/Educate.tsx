import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

export default function Educate({}: Props) {
  return (
    <Box w="100%" minH={{ base: "auto", md: "100vh" }} py={{ base: 10, md: 16 }} px={{ base: 4, sm: 6, md: 8 }} textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent= "center" color="white" bgImage="url(/Educate.png)" bgSize="cover" bgPos="center" bgColor="blackAlpha.700" bgBlendMode="multiply" overflow="hidden">
        <Box w={{ base: "100%", sm: "90%", md: "80%", lg: "65%" }} mx="auto" zIndex={1}>
            <Heading as='h2' size={{ base: "lg", sm: "xl", md: "2xl" }}  mb={{ base: 4, sm: 6 }} textDecoration='underline' textUnderlineOffset='.3em' textShadow='0 0 6px black' >Educate A Girl Child.</Heading>

            <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} pt={{ base: 4, sm: 6 }} lineHeight="taller" textShadow='0 0 4px black' >
                In Nigeria, over 10 million children are out of school - and 60% of them are girls. Poverty, early marriage, and lack of access to basic learning materials force many young girls to drop out before they even get a chance to dream.</Text>
            
            <Text  fontSize={{ base: "md", sm: "lg", md: "xl" }} pt={{ base: 4, sm: 6 }} lineHeight="taller" textShadow='0 0 4px black'>
                The <b>'Educate A Girl Child'</b> project is changing that story - one girl at a time. We cover school fees, uniforms, and stationery, helping young girls stay in school and stay hopeful. From rural village to undeserved urbancommunities, we're committed to making education a right, not a privilege. When you educate a girl child, you educate a generation.
            </Text>

            <Button  bg='#254f33' color='white' mt={{ base: 6, sm: 8 }} px={{ base: 6, sm: 8, md: 10 }} py={{ base: 4, sm: 5 }} fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight="bold" borderRadius="2xl" boxShadow="lg" _hover={{ color: "#254f33", bg: "#efe6c8" }}>Donate Here</Button>
        </Box>
    </Box>
  )
}