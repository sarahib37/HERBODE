import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <Box bg='#efe6c8' py={{ base: 10, md: 16 }} id='about'>
        <Flex direction={{ base: "column", md: "column", lg: "row" }} align={{ base: "center", md: "center", lg: "start" }} justify="space-between" px={{ base: 4, sm: 6, md: 8 }} mb={{ base: 8, md: 10 }} gap={{ base: 6, md: 8 }}>
          <Box flex='1' maxW={{ base: "100%", md: "80%", lg: "70%" }} px={{ base: 2, md: 6 }}>
            <Heading as='h2' size={{ base: "lg", sm: "xl", md: "2xl" }}mb={4} color='#254f33' textDecoration='underline' textUnderlineOffset='.3em'> About Us.</Heading>

            <Text fontSize={{ base: "md", sm: "lg", md: "1.3em" }} mt={{ base: 6, md: 10 }} color='#5f5454' lineHeight='tall'>
            Herbode is a women-only sanctuary dedicated to empowering women from all walks of life. We provide an inclusive space where every voice matters and every dream is valid. Our mission is to champion personal growth, inspire bold leadership, and ignite a passion for social justice that drives meaningful change. Through mentorship, advocacy, and collaboration. Herbode nurtures a powerful network of changemakers who uplift one another, break barriers, and shape a brighter, more equitable future for women everywhere.
            </Text>
          </Box>

          <Box flexShrink={0} w={{ base: "100%", sm: "80%", md: "auto" }} textAlign="center">
            <Image src="/About.png" alt="About Herbode" width={500} height={500} className="border-solid border-[#254f33] border-4 shadow-sm" style={{ maxWidth: '100%', height: 'auto' }}/>
          </Box>
        </Flex>

        <Flex w={{ base: "100%", md: "80%", lg: "60%" }} align='center' mx='auto' mb={{ base: 6, md: 8 }} justify={{ base: "center", sm: "center", md: "space-around" }} direction={{ base: 'column', sm: 'row' }} gap={4}>
          <Link href={'https://forms.gle/2SPXubVcQWnKMn8M6'} passHref legacyBehavior>
            <Button bg="#254f33" borderRadius="2xl" color="white" px="1.2em" fontSize={{ base: "md", sm: "lg", md: "1.15em" }} fontWeight="bold" boxShadow="lg" _hover={{ color: '#254f33', bg: '#efe6c8' }}>
              Join Our Community.
          </Button>
          </Link>
          <Button bg="#254f33" borderRadius="2xl" color="white" px="1.2em" fontSize={{ base: "md", sm: "lg", md: "1.15em" }} fontWeight="bold" boxShadow="lg" _hover={{ color: '#254f33', bg: '#efe6c8' }}>
            Read Our Blog.
          </Button>
          <Button bg="#254f33" borderRadius="2xl" color="white" px="1.2em" fontSize={{ base: "md", sm: "lg", md: "1.15em" }} fontWeight="bold" boxShadow="lg" _hover={{ color: '#254f33', bg: '#efe6c8' }}>
            Support Us.
          </Button>
        </Flex>

        <Flex direction={{ base: "column", md: "column", lg: "row" }} align={{ base: "center", md: "center", lg: "start" }} justify="space-between" px={{ base: 4, sm: 6, md: 8 }} gap={{ base: 6, md: 10 }}>
          <Box flex='1' maxW={{ base: "100%", md: "80%", lg: "70%" }}  px={{ base: 2, md: 6 }}>
              <Heading as='h3' size={{ base: "md", sm: "lg", md: "xl" }} mb={4} color='#254f33' textDecoration='underline' textUnderlineOffset='.3em'>Our Mission Statement</Heading>

              <Text fontSize={{ base: "md", sm: "lg", md: "1.3em" }} mb={{ base: 8, md: 12 }} color='#2a2a2a' lineHeight='tall'>
              To be a safe space for women and girls in need, empowering them through shelter, education and community-driven support to rebuild their lives with dignity and strength.
              </Text>

              <Heading as='h3' size={{ base: "md", sm: "lg", md: "xl" }} mb={4} color='#254f33' textDecoration='underline' textUnderlineOffset='.3em'>Our Vision Statement.</Heading>

              <Text fontSize={{ base: "md", sm: "lg", md: "1.3em" }} mb={6} color='#2a2a2a' lineHeight='tall'>
              A society where every woman is safe, empowered and supported with access to shelter and opportunity for growth.
              </Text>
          </Box>

          <Box flexShrink={0} w={{ base: "100%", sm: "80%", md: "auto" }} textAlign="center">
            <Image src="/Mission.png" alt="Mission Herbode" width={500} height={500} className="border-solid border-[#254f33] border-4" style={{ maxWidth: '100%', height: 'auto' }}/>
          </Box>
        </Flex>
    </Box>
  )
}