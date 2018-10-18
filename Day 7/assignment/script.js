let funcButton=document.getElementById("lyricsGrabber");
lyricsGrabber.addEventListener("click", ()=>{
let artist=document.lyricForm.Name.value;
let song=document.lyricForm.Song.value;
let url="https://api.lyrics.ovh/v1/" + artist +"/" + song
fetch(url, {
method:"GET",
headers:{
  'Content-type':'application/json'
}
})         
.then((results) => {
return results.json();
})
.then((resultspt2) => {
if(resultspt2.error!=null){
  let divHold=document.getElementById("container");
  divHold.innerHTML="";
  divHold.innerHTML="There was an Error, please try again";
}
else{
  let songArray=((resultspt2.lyrics).split("\n"));
  let divHolder=document.getElementById("container");
  divHolder.innerHTML="";
  for(let i of songArray){
  let Newp=document.createElement("p");
    Newp.innerHTML=i;
    Newp.classList.add("lyricP");
    container.appendChild(Newp);
} 
}
})
});