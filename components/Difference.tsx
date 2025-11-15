import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Difference({}: Props) {
  return (
    <Box bg='#efe6c8' py={{ base: 10, md: 16 }}>
        <Heading as='h3' fontSize={{ base: "xl", sm: "2xl", md: '2em', lg: "2.5em" }} mb={{ base: 6, md: 10 }} color='#254f33' textDecoration='underline' textUnderlineOffset='.3em' width={{ base: "100%", lg: "70%" }} px={{ base: 4, md: "2.3em" }} textAlign={{ base: "center", md: "left" }}>How to make a Difference.</Heading>

        <Flex direction={{ base: "column", lg: "row" }} align={{ base: "center", md: "start" }} justify="space-between" px={{ base: 4, md: 8 }} gap={{ base: 8, md: 6 }}> 
          <Box flex='1' px={{ base: 2, md: 6 }}>
            {[
              {
                amount: "₦550",
                desc: "Keeps a Girl in School for a Day",
                detail:
                  "Every little bit counts. With just ₦550, you help cover a girl's daily cost of education - from learning materials to school access.",
              },
              {
                amount: "₦200,000",
                desc: "Sponsors One Girl for a Year",
                detail:
                  "This covers her full academic year tuition. You give her stability, safety, and a future.",
              },
              {
                amount: "₦1,000,000",
                desc: "Sponsors 5 Girls for a Year",
                detail:
                  "Invest in five lives, five futures. Your impact multiplies when you sponsor a group of girls to stay in school, learn, and thrive.",
              },
            ].map((item, i) => (
              <Text key={i} fontSize={{ base: "md", sm: "lg", md: "1.2em" }} mb={{ base: 6, md: 12 }} color="#254f33" lineHeight="tall" textAlign="center" maxW="95%" mx="auto">
                <b>{item.amount}</b> {item.desc} <br />
                {item.detail}
              </Text>
            ))}
          </Box>

          <Box flexShrink={0} w={{ base: "100%", sm: "80%", md: "auto" }} textAlign="center">
            <Image src="/Difference.png" alt="Make a Difference" width={500} height={500} className="border-solid border-[#254f33] border-4 shadow-sm" style={{ maxWidth: '100%', height: 'auto' }}/>
          </Box>
        </Flex>

        <Button bg='#b85b2a' color='white' display='block' mx='auto'mt={{ base: 6, md: 10 }} px={{ base: 6, sm: 8 }} fontSize={{ base: "md", sm: "lg", md: "1.15em" }}fontWeight='bold' boxShadow='lg' _hover={{'color':'#f34418', 'bg':'#efe6c8'}} borderRadius='2xl'>Donate Here</Button>
    </Box>
  )
}