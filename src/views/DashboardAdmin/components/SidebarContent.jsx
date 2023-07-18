// import { CloseButton } from '@chakra-ui/close-button'
// import { useColorModeValue } from '@chakra-ui/color-mode'
// import { Box, Flex } from '@chakra-ui/layout'
// import {
//   DragHandleIcon,
//   EditIcon,
//   SettingsIcon
// } from '@chakra-ui/icons'

// export default function SidebarContent ({ onClose, ...rest }) {
//   const LinkItems = [
//     { name: 'Home', icon: DragHandleIcon },
//     { name: 'Profesionales', icon: EditIcon },
//     { name: 'Clientes', icon: EditIcon },
//     { name: 'Configuracion', icon: SettingsIcon }
//   ]

//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight='1px'
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos='fixed'
//       h='full'
//       {...rest}
//     >
//       <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
//         <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
//           Logo
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   )
// }
