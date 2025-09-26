import React from 'react'
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

type Props = {}

export default function Projects({}: Props) {
  return (
    <section className="w-full py-12 px-6 text-primary">
      <Flex direction="column" align="center" gap="2em" maxW="4xl" mx="auto">
        <Heading as="h2" size="xl" textAlign="center">
          Featured Projects
        </Heading>

        <Box 
          p="1.5em" 
          borderRadius="md" 
          bgGradient="linear(to-r, #fff, #e6f3e6)" 
          boxShadow="md"
          textAlign="center"
        >
          <Heading as="h3" size="lg" mb="4">
            Educate a Girl Child
          </Heading>
          <Text fontSize="md" mb="6">
            Every girl deserves access to quality education. This project is aimed at empowering young girls through learning opportunities, mentorship, and community support — one girl at a time.
          </Text>

          <Link href="/projects/educate-a-girl-child" passHref legacyBehavior>
            <Button as="a" aria-label="Read more about the Educate a Girl Child project" colorScheme="green">
              Click here for more
            </Button>
          </Link>
        </Box>
      </Flex>
    </section>
  )
}