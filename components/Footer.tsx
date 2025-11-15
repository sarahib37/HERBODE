import { Box, Flex, HStack, Icon, Span, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaInstagram, FaLinkedin, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

type Props = {}

export default function Footer({}: Props) {
  return (
    <Box bg='#d2a857' id='contact' color='#14291b' py={8} px={{ base: 4, md: 8, lg: "5em" }}>
          <Flex direction={{ base: "column", md: "row" }} justify='space-between' align={{ base: "flex-start", md: "center" }} mx='auto' gap={{ base: 8, md: 6 }}>
              <VStack maxW={{ base: "100%", md: "50%" }} align="flex-start" gap={3}>
                <Flex align='flex-start' justify='left' width='100%'>
                    <Image src='/Logo2.png' alt='Herbode logo' width={50} height={50}/>
                </Flex>
                <Text fontSize={{ base: "sm", md: "md" }}>Herbode is a women-led community dedicated to empowering women and girls through support, connection, and our Educate A Girl Child mission.</Text>
              </VStack>

              <VStack alignItems='flex-start' justifyContent='left'> 
                <HStack>
                  <Flex  p='.3em' borderRadius='50%' bg='transparent' border='1px solid #14291b' color='#14291b'>
                    <Icon as={FaEnvelope} boxSize={15}/>
                  </Flex>
                  <Link href='mailto:info@herbode.org' className="bg-transparent">
                    <Text color="#14291b">info@herbode.org</Text>
                  </Link>
                </HStack>

                {/* <HStack>
                  <Flex  p='.3em' borderRadius='50%' bg='transparent' border='1px solid #14291b' color='#14291b'>
                    <Icon as={FaPhoneAlt} boxSize={15}/>
                  </Flex>
                  <Link href='tel:+2348182287842' className="bg-transparent">
                  <Text color="#14291b">+234 818 228 7842</Text>
                  </Link>
                </HStack> */}

                <HStack>
                  <Flex  p='.3em' borderRadius='50%' bg='transparent' border='1px solid #14291b' color='#14291b'>
                    <Icon as={FaMapMarkerAlt} boxSize={15}/>
                  </Flex>
                  <Text color="#14291b">Ibadan, Nigeria</Text>
                </HStack>
              </VStack>

              <VStack align='flex-start' gap={3}>
                <Text fontWeight='bold'>Connect With Us</Text>
                <HStack gap={4}>
                  <Link href={'https://www.instagram.com/officialherbode/'} className="bg-transparent" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaInstagram} boxSize={10} color='#14291b' />
                  </Link>
                  <Link href={'https://x.com/herbode'} className="bg-transparent" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaTwitter} boxSize={10} color='#14291b'/>
                  </Link>
                  <Link href={'https://www.linkedin.com/company/herbode/'} className="bg-transparent" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaLinkedin} boxSize={10} color='#14291b'/>
                  </Link>
                </HStack>
              </VStack>
          </Flex>

          <Box textAlign='center' mt={6} fontSize={{ base: "xs", md: "sm" }}>
            © 2025 <b>Herbode</b>. All rights reserved | Made with 💚 by <Link href='https://sarah-igwe.vercel.app' className="bg-transparent" target="_blank" rel="noopener noreferrer"><Span color="#14291b" fontWeight='bold' textDecoration='underline' textUnderlineOffset={4}>Sarah</Span></Link>
          </Box>
        </Box> 
  )
}