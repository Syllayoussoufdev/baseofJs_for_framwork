//aassychronous function
// generalement utiliser pour les appels reseaux et les API
async function apiAple() {

    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts/1'); //attendre la reponse de l'API
    
    const data = await reponse.json(); //avoir la reponse en format JSON
    console.log(data);
}
apiAple(); //appel de la fonction


let c = 0;
  const affichage = document.getElementById("compteur");
  document.getElementById("plus").addEventListener("click", () => {
    c++;
    affichage.textContent = c;
  });
  document.getElementById("moins").addEventListener("click", () => {
    c--;
    affichage.textContent = c;
  });