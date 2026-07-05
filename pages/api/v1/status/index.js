function status(request, response) {
  response.status(200).json({
    mensagem: "Olá, Mundo!",
  });
}

export default status;
