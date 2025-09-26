"use client"

import { Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[auto] md:h-[100vh] pb-[2em] md:pb-[.5em] text-center flex flex-col items-center justify-center text-primary overflow-hidden"
      // style={{ backgroundImage: "url('/Hero.webp')" }}
    >
      <Image
        src="/Hero.webp"
        alt="Empowered Nigerian women standing together for Herbode's mission"
        fill
        priority
        className="object-cover object-center z-0"
      />

      <Flex position='relative' zIndex='10' flexDir='column' width={useBreakpointValue({base: '90%', md: '50%'})} gap='1em' shadow='sm' background="linear-gradient(135deg, #618361, white, #618361)" padding='1.5em' mt={useBreakpointValue({base: '8em', md:'6em'})}>
        <header>
          <h1 className="text-5xl font-bold drop-shadow-lg z-30">
            For <span className="italic">women</span>, by <span className="italic">women</span>, and with <span className="italic">women</span>
          </h1>

          <blockquote>
            <p>
              "The connections between and among women are the most feared, the most problematic, and the most potentially transforming force on the planet."
            </p>
            <Text fontWeight='bold' fontStyle='italic'>Adrienne Rich</Text>
          </blockquote>
        </header>

        <Flex justifyContent='center' alignItems='center' gap={useBreakpointValue({base:'1em', md:'3em'})} flexDir={useBreakpointValue({base: 'column', md:'row'})}>
          <Link href="/blog" passHref legacyBehavior>
            <Button as='a' aria-label="Read articles and updates from Herbode's blog" p='1em' _hover={{bg: 'black', transform: 'scale(1.05)', transition: "all 0.3s ease-in-out"}}>Read our Blog</Button>
          </Link>
          <Button as='a' aria-label="Join Herbode's community or volunteer your support" p='1em' _hover={{bg: 'black', transform: 'scale(1.05)', transition: "all 0.3s ease-in-out"}}>Join us</Button>
        </Flex>
      </Flex>
    </section>
  );
}
