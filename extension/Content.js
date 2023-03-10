let david_laid_Images=[
    "https://biographypedia.org/wp-content/uploads/2019/08/maxresdefault-28.jpg",
    "https://www.greatestphysiques.com/wp-content/uploads/2017/10/David-Laid.04.jpg",
    "https://wallpapercave.com/wp/wp4530273.jpg",
    "https://i.pinimg.com/originals/11/41/a1/1141a1c907187bc1a6d873bc50c57059.jpg",
    "https://pbs.twimg.com/profile_images/662890223936778240/AJIY_WDC.jpg",
    "https://th.bing.com/th/id/OIP.jl8BYBOXvJPgfuEUzYLkNwHaJ4?pid=ImgDet&w=181&h=242&c=7&dpr=1.4"
];
const img=document.getElementsByTagName("img")
for(let i=0;i<img.length;i++){
    const randomImg=Math.floor(Math.random()*david_laid_Images.length)
    img[i].src=david_laid_Images[randomImg]
}
const h3=document.getElementsByTagName("h1")
for(let i=0;i<h3.length;i++){
    h3.innerHTML="Prakhar";
}