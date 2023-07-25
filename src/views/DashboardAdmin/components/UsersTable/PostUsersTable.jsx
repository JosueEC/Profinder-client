import { Flex } from '@chakra-ui/layout'
import PostRegister from '../../singleComponents/PostRegister'
import { useColorModeValue } from '@chakra-ui/color-mode'

export default function PostUsersTable () {
  const bgColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <Flex // container principal
      bg={bgColor}
      wrap='wrap'
      p='1rem'
      gap={5}
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      <PostRegister />
      <PostRegister />
      <PostRegister />
      <PostRegister />
      <PostRegister />
      <PostRegister />
    </Flex>
  )
}
