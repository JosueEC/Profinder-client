import React from "react";
import ChatBot from "react-simple-chatbot";
const chatbotStyle = {
  background: "#f5f8fb", // Change the background color
  fontFamily: "Arial, sans-serif", // Change the font family
  headerBgColor: "#4CAF50", // Change the header background color
  headerFontColor: "#fff", // Change the header font color
  headerFontSize: "24px", // Change the header font size
  botBubbleColor: "#008080", // Change the bot's bubble background color
  botFontColor: "#fff", // Change the bot's bubble font color
  userBubbleColor: "#008080", // Change the user's bubble background color
  userFontColor: "#4CAF50", // Change the user's bubble font color
};

const ClieProfChatBot = () => {
  // Definimos los pasos del chatbot
  const steps = [
    {
      id: "1",
      message: "¡Hola! ¿Cómo te llamas?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hola {previousValue}! ¿Que horario deseas agendar?",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: "opcion1", label: "Por la mañana ?", trigger: "5" }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "5"
        { value: "opcion2", label: "Al mediodia? ", trigger: "6" }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "6"
        { value: "opcion3", label: "O a la tarde?", trigger: "7" }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "7"
      ],
    },
    {
      id: "5",
      message: "Te visitaremos entre el horario de 9 a 12 ",
      trigger: "8",
    },
    {
      id: "6",
      message: "Te visitaremos entre el horario de 12 a 14 ",
      trigger: "8",
    },
    {
      id: "7",
      message: "Te visitaremos entre el horario de 14 a 18 ",
      trigger: "8",
    },
    {
      id: "8",
      message: "¿Necesitas cambiar el horario?",
      trigger: "moreOptions",
    },
    {
      id: "moreOptions",
      options: [
        { value: "opcion1", label: "Sí", trigger: "4" },
        { value: "opcion2", label: "No", trigger: "byee" },
      ],
    },
    {
      id: "byee",
      message: "Adios!",
      trigger: "restartChatbot",
    },
    {
      id: "restartChatbot",
      message: "¿Te gustaría reiniciar la conversación?",
      trigger: "restartOptions",
    },
    {
      id: "restartOptions",
      options: [
        { value: "yes", label: "Sí", trigger: "1" },
        { value: "no", label: "No", end: true },
      ],
    },
  ];
  const chatbotHeaderTitle = "Asistente de ";

  return (
    <ChatBot
      steps={steps}
      headerTitle={chatbotHeaderTitle}
      style={chatbotStyle}
    />
  );
};

export default ClieProfChatBot;
