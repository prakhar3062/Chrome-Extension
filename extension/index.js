
const getJokes=async()=>{
    try{
    const ch=Math.floor(Math.random()*18)+1
    const sl=Math.floor(Math.random()*20)+1
    let url="https://bhagavadgitaapi.in/slok/"
    url+=encodeURIComponent(ch)+'/'+encodeURIComponent(sl)+'/'
    //const url="https://api.chucknorris.io/jokes/random"
    console.log(url)
    const res=await fetch(url);
    console.log(res)
    const data=await res.json();
    console.log(data)
    const shlok=document.querySelector('#shlok');
    shlok.innerHTML=data.transliteration;
}
catch(error){
    console.log(error)
}
}

window.addEventListener('load',()=>{
   
    getJokes();
})