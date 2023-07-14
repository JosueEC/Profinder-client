import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Avatar,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function EditClient() {
  const fileInputRef = React.useRef();

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <VStack as="form" alignItems="center" h="100%">
      <FormControl>
        <FormLabel>Imagen</FormLabel>
        <Avatar size="xl" name="Nombre y apellido" src="url de la imagen" />
        <IconButton
          aria-label="Subir imagen"
          icon={<AddIcon />}
          variant="outline"
          onClick={handleFileUpload}
        />
        <Input
          ref={fileInputRef}
          type="file"
          display="none"
          accept="image/jpeg, image/jpg, image/png, application/pdf"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Nombre y apellido</FormLabel>
        <Input variant="unstyled" placeholder="Nombre y apellido" />
      </FormControl>
      <FormControl>
        <FormLabel>Correo electrónico</FormLabel>
        <Input variant="unstyled" type="email" placeholder="Correo electrónico" />
      </FormControl>
      <FormControl>
        <FormLabel>Contraseña</FormLabel>
        <Input variant="unstyled" type="password" placeholder="Contraseña" />
      </FormControl>
      <Spacer />
      <Button type="submit">Guardar cambios</Button>
    </VStack>
  );
}

export default EditClient;