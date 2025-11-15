import React from 'react'
import { Box, Button, Flex, Text, VStack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import {FaDonate, FaFemale, FaGlobeAfrica} from 'react-icons/fa'
import { LuTarget } from 'react-icons/lu'

type Props = {}

export default function Hero({}: Props) {
  return (
    <Box bg='#1f4f2f'>
        <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'stretch' }} justify="space-between">
            <Box flex='1' bg='#efe6c8' w="100%" px={{ base: 4, sm: 6, md: 12, lg: 16 }} pt={{ base: 8, md: '6em', lg: '8em' }} textAlign={{ base: 'center', md: 'left' }}>
                <Text as='h1' fontSize={{ base: '1xl', sm: '2xl', md: '4xl', lg: '5xl', xl: '6xl' }} lineHeight='1.2' letterSpacing='wide' mb={{ base: 4, md: 6 }} color='#1f4f2f'>
                    Her Future <br/>Begins With <br/>An Education.
                </Text>

                <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }} mb={{ base: 4, md: 6 }} color='#49514a' width='100%'>
                    We are educating girls, breaking barriers and opening doors. Join us in giving more girls the chance to learn and thrive.
                </Text>

                <Button  bg='#254f33' borderRadius='2xl' color='white' display='block' margin='auto' px='1.2em' fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} fontWeight='bold' boxShadow='lg' w={{ base: '100%', sm: 'auto' }} mx={{ base: 'auto', md: '0' }} _hover={{'color':'#254f33', 'bg':'#efe6c8'}}>Educate A Girl Child.</Button>

                <Text color='#49514a' my='1em' fontSize={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} letterSpacing='.1em'>
                    <Link href={'https://www.instagram.com/officialherbode/'} passHref legacyBehavior>
                        <span className='bg-transparent'>Instagram</span>
                    </Link> · 
                    <Link href={'https://x.com/herbode'} passHref legacyBehavior>
                        <span className='bg-transparent'> Twitter</span>
                    </Link> · 
                    <Link href={'https://www.linkedin.com/company/herbode/'} passHref legacyBehavior>
                        <span className='bg-transparent'> LinkedIn</span>
                    </Link> 
                </Text>
            </Box>

            <Box mt={{ base: 6, md: '4em', lg: '6em' }} textAlign="center" w={{ base: '100%', md: '50%' }}>
                <Image src='/hero.png' alt='consent' width={620} height={700} style={{ maxWidth: '100%', height: 'auto' }}/>
            </Box>
        </Flex>
        <Box mx='auto' bg='#b85b2a'  borderRadius='sm' overflow='hidden' boxShadow='lg'>
        <Flex
          px={{ base: 4, sm: 6, md: 12, lg: 16 }}
          py={{ base: 6, md: 8 }}
          justify="space-evenly"
          align="center"
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 6, sm: 0 }}
        >
          <Stat icon={FaGlobeAfrica} value="3" label="States" />
          <Stat icon={FaDonate} value="100+" label="Donations" />
          <Stat icon={FaFemale} value="5" label="Girls Reached" />
          <Stat icon={LuTarget} value="100+" label="Waiting Girls" />
        </Flex>
      </Box>
    </Box>
  )
}

function Stat({
    icon,
    value,
    label,
    }: {
    icon: any
    value: string
    label: string
    }) {
    return (
        <VStack>
        <Flex gap={3} alignItems="center">
            <Icon as={icon} boxSize={{ base: 8, sm: 10, md: 12 }} color="white" />
            <Flex flexDirection="column" textAlign="left">
            <Text as="h1" fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="white">
                {value}
            </Text>
            <Text fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} color="whiteAlpha.800">
                {label}
            </Text>
            </Flex>
        </Flex>
        </VStack>
    )
}