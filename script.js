kayanYazi=function(nesne,zaman){
    let yaziNesne=nesne;

    setInterval(function(){
        let yazi=yaziNesne.innerHTML;
        let harf=yazi.substring(0,1);
        let kalan=yazi.substring(1,yazi.lenght);
        kalan=kalan+harf;
        yaziNesne.innerHTML=kalan;
    },zaman)
}
let nesne=document.getElementById("yazi");
kayanYazi(nesne,750);
