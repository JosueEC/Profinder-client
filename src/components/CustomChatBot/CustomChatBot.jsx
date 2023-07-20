import ChatBot from 'react-simple-chatbot';

const CustomChatBot = () => {
  // Definimos los pasos del chatbot
  const steps = [
    {
      id: '1',
      message: '¡Hola! ¿Cómo te llamas?',
      trigger: '2', 
    },
    {
      id: '2',
      user: true, 
      trigger: '3', 
    },
    {
      id: '3',
      message: 'Hola {previousValue}! ¿En qué puedo ayudarte?',
      trigger: '4', 
    },
    {
      id: '4',
      options: [
        { value: 'opcion1', label: 'Eres Profesional ?', trigger: '5' }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "5"
        { value: 'opcion2', label: 'Buscas un Profesional ? ', trigger: '6' }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "6"
        { value: 'opcion3', label: 'Plan Premiun', trigger: '7' }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "7"
      ],
    },
    {
      id: '5',
      message: 'En PROFINDER relacionamos a profesionales capacitados con clientes que necesitan un servicio, ',
      trigger: '8'
    },
    {
      id: '6',
      message: 'En PROFINDER  encontraras miles de profesionales dispuestos a brindarte el mejor servicio, solo necesitas registrarte y buscar el profesional que deseas, filtra por profesion, genero, ubicacion...etc',
      trigger: '8'
    },
    {
      id: '7',
      message: 'Si eres un profesional en PROFINDER podrás adquirir un plan premiun, el cual te dará mejor exposición y diferentes beneficios, te invitamos a obtener tu plan premiun',
      trigger: '8'
    },
    {
      id: '8',
      message: '¿Necesitas algo más?',
      trigger: 'moreOptions',
    },
    {
      id: 'moreOptions',
      options: [
        { value: 'opcion1', label: 'Sí', trigger: '4' }, 
        { value: 'opcion2', label: 'No', trigger: 'byee' }, 
      ],
    },
    {
      id: 'byee',
      message: 'Adios!',
      trigger: 'restartChatbot'
    },
    {
      id: 'restartChatbot',
      message: '¿Te gustaría reiniciar la conversación?',
      trigger: 'restartOptions',
    },
    {
      id: 'restartOptions',
      options: [
        { value: 'yes', label: 'Sí', trigger: '1' },
        { value: 'no', label: 'No', end: true }, 
      ],
    },
  ];
  const chatbotHeaderTitle = "Asistente de PROFINDER";

  return <ChatBot steps={steps}
  headerTitle={chatbotHeaderTitle} />;
};

export default CustomChatBot;
