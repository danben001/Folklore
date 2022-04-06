const search = () =>{
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("comic-list")
  const comic = document.querySelectorAll(".comicSearch")
  const cname = storeitems.getElementsByTagName("h2")

  for(var i=0; i < cname.length; i++){
    let match = comic[i].getElementsByTagName('h2')[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML

      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
        comic[i].style.display = "";
      }else{
        comic[i].style.display = "none";
      }
    }
  }
}


//Referenced From https://youtu.be/ZFUOC-y4i0s
