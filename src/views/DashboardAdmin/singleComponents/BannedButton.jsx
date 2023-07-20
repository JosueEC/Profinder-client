/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/button'
import { useToast } from '@chakra-ui/toast'
import { useProfesionalDash } from '../../../services/zustand/useProfesionalDash'
import { URL } from '../constants'

export default function BannedButton ({ id }) {
  const toast = useToast()
  const {
    postBannedProfesional,
    getProfesional
  } = useProfesionalDash(state => state)

  async function handleBannedAction () {
    await postBannedProfesional(id)
    await getProfesional(URL.GET_PROFESIONAL)
    toast({
      title: 'Cuenta baneada',
      description: 'La cuenta ha sido desactivada',
      status: 'success',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true
    })
  }

  return (
    <Button
      onClick={handleBannedAction}
      colorScheme='red'
    >
      Banear Cuenta
    </Button>
  )
}
