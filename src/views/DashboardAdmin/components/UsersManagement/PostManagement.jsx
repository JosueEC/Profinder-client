import { Heading, Stack } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import PostUsersTable from '../UsersTable/PostUsersTable'

export default function PostManagement () {
  const txtColor = useColorModeValue('gray.600', 'gray.100')

  return (
    <Stack>
      <Heading
        color={txtColor}
      >
        Gestion de posteos
      </Heading>
      <PostUsersTable />
    </Stack>
  )
}
