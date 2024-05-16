async function listaVideos() {
  const response = await fetch("http://localhost:3000/videos");
  const responseJson = await response.json();

  return responseJson;
}

export const listaJson = [listaVideos()];