function init(){
  pages = document.getElementById('content').getElementsByTagName('div')  ;
  location.href = "/#start";
  goto();
}
function goto(){
  url = new URL(window.location.href);
  hash = url.hash.slice(1);
  for(i=0;i<pages.length;i++){
    pages[i].style.display = "none";
  }
  document.getElementById(hash).style.display = 'grid';
}
function analysePasteSeq(){
  generateTable();
  location.href = '/#result';
}
