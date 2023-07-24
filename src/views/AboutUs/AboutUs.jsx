import { Grid, Box, Text, Image, Link, Icon, Heading, useMediaQuery } from '@chakra-ui/react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';


const peopleData = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    githubURL: 'https://github.com/NathalyQuiva',
    title: 'Software Engineer',
    phoneNumber: '+1 (123) 456-7890',
    country: 'United States',
    imageUrl: 'path/to/john_doe_image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }, {
    name: 'John Doe',
    email: 'john.doe@example.com',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    githubURL: 'https://github.com/NathalyQuiva',
    title: 'Software Engineer',
    phoneNumber: '+1 (123) 456-7890',
    country: 'United States',
    imageUrl: 'path/to/john_doe_image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }, {
    name: 'John Doe',
    email: 'john.doe@example.com',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    githubURL: 'https://github.com/NathalyQuiva',
    title: 'Software Engineer',
    phoneNumber: '+1 (123) 456-7890',
    country: 'United States',
    imageUrl: 'path/to/john_doe_image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }, {
    name: 'John Doe',
    email: 'john.doe@example.com',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    githubURL: 'https://github.com/NathalyQuiva',
    title: 'Software Engineer',
    phoneNumber: '+1 (123) 456-7890',
    country: 'United States',
    imageUrl: 'path/to/john_doe_image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }, {
    name: 'John Doe',
    email: 'john.doe@example.com',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    githubURL: 'https://github.com/NathalyQuiva',
    title: 'Software Engineer',
    phoneNumber: '+1 (123) 456-7890',
    country: 'United States',
    imageUrl: 'path/to/john_doe_image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }, {
    name: 'John Doe',
    email: 'john.doe@example.com',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    githubURL: 'https://github.com/NathalyQuiva',
    title: 'Software Engineer',
    phoneNumber: '+1 (123) 456-7890',
    country: 'United States',
    imageUrl: 'path/to/john_doe_image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },, {
    name: 'John Doe',
    email: 'john.doe@example.com',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    githubURL: 'https://github.com/NathalyQuiva',
    title: 'Software Engineer',
    phoneNumber: '+1 (123) 456-7890',
    country: 'United States',
    imageUrl: 'path/to/john_doe_image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }, {
    name: 'John Doe',
    email: 'john.doe@example.com',
    linkedinURL: 'https://www.linkedin.com/in/johndoe/',
    githubURL: 'https://github.com/NathalyQuiva',
    title: 'Software Engineer',
    phoneNumber: '+1 (123) 456-7890',
    country: 'United States',
    imageUrl: 'path/to/john_doe_image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }
 
];



const AboutUs = () => {
    const [isLargerThanSm] = useMediaQuery("(min-width: 30em)");
    const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
    const [isLargerThanLg] = useMediaQuery("(min-width: 62em)");
  
    let columnCount;
    if (isLargerThanLg) {
      columnCount = 4;
    } else if (isLargerThanMd) {
      columnCount = 3;
    } else if (isLargerThanSm) {
      columnCount = 2;
    } else {
      columnCount = 1;
    }
  
  
        return (
          <Box py={{ base: 8, md: 18 }} px={4} textAlign="center">
            <Heading fontSize={{ base: "3xl", md: "4xl" }} color="teal.600" mb={4}>
              Conoce a nuestro equipo
            </Heading>
            <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }} maxW="600px" mx="auto" mb={8}>
              Esta página está elaborada por un equipo interdiciplinario, comprometido a realizar desarrollo FullStack de calidad
            </Text>
      
            <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
              {peopleData.map((person, index) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                  <Image src={person.imageUrl} alt={person.name} borderRadius="full" boxSize="150px" mx="auto" mb={4} />
      
                  <Text fontWeight="bold" fontSize="xl" mb={2}>
                    {person.name}
                  </Text>
      
                  <Text fontSize="sm" color="teal.500" mb={2}>
                    {person.title}
                  </Text>
      
                  <Text fontSize="sm" mb={2}>
                    {person.email}
                  </Text>
      
                  <Box display="flex" justifyContent="center" mb={2}>
                    <Link href={person.linkedinURL} isExternal mx={2}>
                      <Icon as={FiLinkedin} boxSize={6} color="teal.500" />
                    </Link>
                    <Link href={person.githubURL} isExternal mx={2}>
                      <Icon as={FiGithub} boxSize={6} color="teal.500" />
                    </Link>
                  </Box>
      
                  <Text fontSize="sm" mb={2}>
                    {person.phoneNumber}
                  </Text>
      
                  <Text fontSize="sm" mb={2}>
                    {person.country}
                  </Text>
      
                  <Text fontSize="sm" textAlign="justify">
                    {person.description}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      };
      
      export default AboutUs;