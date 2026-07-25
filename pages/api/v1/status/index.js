import database from "infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows);
  response.status(200).json({
    mensagem: "Olá, Mundo!",
  });
}

export default status;
