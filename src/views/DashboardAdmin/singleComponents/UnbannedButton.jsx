import { Button } from '@chakra-ui/button'
import { useToast } from '@chakra-ui/toast'
import { useProfesionalDash } from '../../../services/zustand/useProfesionalDash'
import { URL } from '../constants'

export default function UnbannedButton () {
  const toast = useToast()
  const {
    postBannedProfesional,
    getProfesional
  } = useProfesionalDash(state => state)

  async function handleUnbannedAction () {
    await postBannedProfesional()
    await getProfesional(URL.GET_PROFESIONAL)
    toast({
      title: 'Cuenta activada',
      description: 'La cuenta ha sido restaurada',
      status: 'success',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true
    })
  }

  return (
    <Button
      size='sm'
      variant='solid'
      colorScheme='messenger'
      onClick={handleUnbannedAction}
    >
      Activar Cuenta
    </Button>
  )
}
