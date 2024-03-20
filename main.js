document.querySelector('.enter').addEventListener('click',animeSearch)
document.querySelector('.instruct').addEventListener('click',instructions)
const animeImg=document.querySelector('.anime'),
 animeName =document.querySelector('.animeName'),
 helper=document.querySelector('.helper'),
 animeSim=document.querySelector('.similar'),
 animeVid= document.querySelector('.animeVideo'),
 direct=document.querySelectorAll('.direction')
 let hid=true;
 let obj;
 
 function instructions(){
  if (hid){
    helper.src='luffy thinkin.jpg'
    animeImg.src='luffy thinkin.jpg'
    animeVid.src='luffy thinkin.jpg'
    direct.forEach(e=>e.classList.toggle("hidden"))
    hid=false;
  }else{
    hid=true
    helper.src='luffysmiling.jpg'
    animeImg.src='luffysmiling.jpg'
    animeVid.src='luffysmiling.jpg'
    direct.forEach(e=>e.classList.add("hidden"))
  }
 }

  

  async function animeSearch(){
    let searchURL=encodeURIComponent(document.querySelector('input').value)
    
    try { fetch(
      `https://api.trace.moe/search?url=${searchURL}`,)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

    document.querySelector('.anime').src= data.result[0].image
    animeName.innerHTML=data.result[0].filename.substring(0,70)
    animeSim.innerHTML=data.result[0].similarity.toFixed(2)
    animeVid.src=data.result[0].video
    helper.src='luffy.jpg'
    
  })
     
    } catch (error) {
      console.error('Error:', error);
    }
    
    }
 