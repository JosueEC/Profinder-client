import { Box, Badge } from '@chakra-ui/layout'
import { chakra, useColorModeValue } from '@chakra-ui/system'

export default function PostRegister () {
  const bgElement = useColorModeValue('white', 'gray.800')
  const txtColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <Box // card
      bg={bgElement}
      width='600px'
      height={{
        lg: '250px'
      }}
      mx={{
        lg: 8
      }}
      display={{
        lg: 'flex'
      }}
      maxW={{
        lg: '5xl'
      }}
      shadow={{
        lg: 'lg'
      }}
      rounded={{
        lg: 'lg'
      }}
    >
      <Box
        w={{
          lg: '50%'
        }}
      >
        <Box
          h={{
            base: 64,
            lg: 'full'
          }}
          rounded={{
            lg: 'lg'
          }}
          bgSize='cover'
          style={{
            backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxosowAZ8xrfmOtp2p3zpGR7IYzSJUDuGUQ&usqp=CAU')"
          }}
        />
      </Box>

      <Box
        py={5}
        px={6}
        maxW={{
          base: 'xl',
          lg: '5xl'
        }}
        w={{
          lg: '50%'
        }}
      >
        <Badge
          colorScheme='green'
          fontSize='1.1rem'
        >
          Activa
        </Badge>
        <chakra.h2
          fontSize={{
            base: '2xl',
            md: '2xl'
          }}
          color='gray.800'
          _dark={{
            color: 'white'
          }}
          fontWeight='bold'
        >
          Asistente virtual para tareas administrativas
          {/* <chakra.span
              color='brand.600'
              _dark={{
                color: 'brand.400'
              }}
            >
              Idea
            </chakra.span> */}
        </chakra.h2>
        <chakra.p
          mt={4}
          color={txtColor}
        >
          Diseño prendas de moda innovadoras y vanguardistas para lucir con estilo.
        </chakra.p>

        {/* <Box mt={8}>
            <Link
              bg='gray.900'
              color='gray.100'
              px={5}
              py={3}
              fontWeight='semibold'
              rounded='lg'
              _hover={{
                bg: 'gray.800'
              }}
            >
              Start Now
            </Link>
          </Box> */}
      </Box>
    </Box>

  )
}
