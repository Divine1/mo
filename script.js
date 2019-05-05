
// setTimeout(function(){
//     console.log("in setTimeout")
//     var ele = document.getElementsByClassName("heartimg")[0];
//     ele.style.display="none";
// },2000)
//gallerycontent
//document.body.style.backgroundImage = "url('img_tree.png')";

var path="/mo/static/images/gallery/";
var galleryData=[
    path+"brides1.jpg",
    path+"brides2.jpg",
    path+"brides3.jpg",
    path+"invitation1.jpeg",
    path+"invitation2.jpeg",
    path+"landing.jpg",
    path+"mohan1.jpg",
    path+"mohan2.jpg",
    path+"mohan3.jpg",
    path+"parent1.jpg",
    path+"parent2.jpg",
    path+"parent3.jpg",
    path+"parent4.jpg"
];

var gallerycontent = document.getElementById("gallerycontent");

galleryData.forEach((function(data,index){
    console.log("gallery data ",data," index ",index);
    var divtag = document.createElement("div");
    var att = document.createAttribute("class");
    att.value="galleryitem";
    divtag.setAttributeNode(att);
    divtag.style.backgroundImage = "url("+data+")";
    divtag.setAttribute("onclick","clickGalleryImage('"+index+"','"+data+"')")
    gallerycontent.appendChild(divtag);
}))

function clickGalleryImage(index,data){
    console.log("clickGalleryImage index ",index," data ",data )
}

