/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/button'
import { useToast } from '@chakra-ui/toast'
import { useProfesionalDash } from '../../../services/zustand/useProfesionalDash'
import { URL } from '../constants'

export default function RemovPremiumButton ({ id }) {
  const toast = useToast()
  const {
    postPremiumProfesional,
    getProfesional
  } = useProfesionalDash()

  async function handleActivePremium () {
    await postPremiumProfesional(id)
    await getProfesional(URL.GET_PROFESIONAL)
    toast({
      title: 'Premium desactivado',
      description: 'La cuenta ahora tiene el plan basico',
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
      colorScheme='pink'
      onClick={handleActivePremium}
    >
      Quitar Premium
    </Button>
  )
}
