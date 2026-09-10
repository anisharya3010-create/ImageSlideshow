function openImage(img){
  document.getElementById("popup").style.display="block";
  document.getElementById("bigImage").src=img.src;

}
function closeImage(){
  document.getElementById("popup").style.display="none";
}