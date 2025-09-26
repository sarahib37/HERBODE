import React from 'react'
import SampleBlogs from '@/config/sampleblogs'
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { slugify } from '@/lib/slugify'

type Props = {}

interface BlogType {
    slug: string;
    title: string;
    description: string;
    category: string[];
    imageUrl: string;
    author: string;
    date: string;
}
  

export default function Articles({}: Props) {
    const latestArticles = SampleBlogs.slice(0, 4) as BlogType[]
    const [latest, ...others] = latestArticles

    return (
        <Box as='section' padding='3em'>
            <Flex paddingBottom='2em' justifyContent='space-between'>
                <h2>Latest Articles</h2>
                <Link href="/blog" passHref legacyBehavior>
                    <Button as='a' fontSize='1em' aria-label="Read articles and updates from Herbode's blog" p='1em' _hover={{bg: 'black', transform: 'scale(1.05)', transition: "all 0.3s ease-in-out"}}>View All</Button>
                </Link>
            </Flex>

            <Flex gap='2em'>
                <Flex flexDirection='column' gap='1em'>
                    <Image src={latest.imageUrl} alt={latest.title} className="w-[100%] h-[40%] object-cover rounded-[2%]" width={1000} height={1000} />
                    
                    <Flex flexDirection='column' gap='.5em'>
                        <p>{latest.date}</p>
                        <Text as='h2' width='85%'>{latest.title}</Text>
                        <p>{latest.description}</p>
                        <Flex justifyContent='space-between'>
                        <Flex align="center" gap={2}>
                            {/* <Avatar size="xs" name={latest.author} bg="gray.500" color="white" /> */}
                            <Text>
                                By <b>{latest.author}</b>
                            </Text>
                        </Flex>
                            <Flex gap="1" wrap="wrap">
                                {latest.category.map((category, index) => (
                                    <React.Fragment key={category}>
                                        <Link as='a' href={`/blog/${slugify(category)}`} passHref legacyBehavior>
                                            <Text
                                            as="span"
                                            color="white.300"
                                            textDecor="underline"
                                            _hover={{ color: 'blue.200' }}
                                            cursor="pointer"
                                            >
                                            {category}
                                            </Text>
                                        </Link>
                                        {index < latest.category.length - 1 && (
                                            <Text as="span" color="gray.300">
                                            ,&nbsp;
                                            </Text>
                                        )}
                                    </React.Fragment>
                                ))}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex flexDir='column' gap='1.5em'>
                    {others.map((blog) => {return(
                        <Flex gap='1em'>
                             <Box position="relative" width={['100%', '100%', '10em']} height="100%" flexShrink={0}>
                                <Image src={blog.imageUrl} alt={blog.title} fill style={{ objectFit: 'cover', borderRadius: '8px'}}
                                />
                            </Box>

                            <Flex flexDirection='column' gap='1.2em'>
                                <p>{blog.date}</p>
                                <Text as='h4' width='100%' fontSize='1.6em'>{blog.title}</Text>
                                <Flex justifyContent='space-between'>
                                <Flex align="center" gap={2}>
                                    {/* <Avatar size="xs" name={latest.author} bg="gray.500" color="white" /> */}
                                    <Text as='p' fontSize='.9em'>
                                        By <b>{blog.author}</b>
                                    </Text>
                                </Flex>
                                    <Flex gap="1" wrap="wrap">
                                        {blog.category.map((category, index) => (
                                            <React.Fragment key={category}>
                                                <Link as='a' href={`/blog/${slugify(category)}`} passHref legacyBehavior>
                                                    <Text
                                                    as="span"
                                                    color="white.300"
                                                    textDecor="underline"
                                                    _hover={{ color: 'blue.200' }}
                                                    cursor="pointer"
                                                    fontSize='.8em'
                                                    >
                                                    {category}
                                                    </Text>
                                                </Link>
                                                {index < latest.category.length - 1 && (
                                                    <Text as="span" color="gray.300">
                                                    ,&nbsp;
                                                    </Text>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    )})}
                </Flex>
            </Flex>
        </Box>
    )
}