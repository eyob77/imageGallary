let child = document.querySelectorAll(".box>.child");
const backgroundImages = document.querySelectorAll(".bgs");
const container = document.querySelector(".container");
const cover = document.querySelector(".blackCover");
const titles= document.querySelectorAll(".title");
const detailedInfo = document.querySelectorAll(".deitaleInfo");
const backBtn = document.querySelectorAll(".back");
container.scroll({
  behavior:"smooth"
})






let current = 0;
let target = 0;
const ease = 0.02;
let elCurrent = 0;
let requestId = 0;
let clicked = false
let temp = -1;
let clickedIndex = -1;
let replacedElement =  document.createElement("div");
const offset = 29

child.forEach((ch,index)=>{
  ch.setAttribute("data-index",`${index}`)
  const image = document.createElement("img");
  image.src = `./asset/${offset+index}.jpg`;
  ch.appendChild(image)
})

document.body.style.height = `${container.getBoundingClientRect().width + window.innerWidth/2}px`



// child.forEach((ch,i)=>{
//   ch.addEventListener("click",()=>{
//     if(!clicked){
//       // temp = i;
//       // clickedIndex = i
//       // clicked = true;
//       // stop()
//       // const parent = ch.parentElement;
//       // const {width,height,top,left} = parent.getBoundingClientRect();
//       // info.parentInfo = {width,height,top,left};
//       // const {width:chWidth,height:chHeight,top:chTop,left:chLeft} = ch.getBoundingClientRect();
//       // info.childInfo = {chHeight,chLeft,chTop,chWidth};
//       // parent.removeChild(ch);
//       // backgroundImages[i].appendChild(ch);
//       // ch.style=`
//       // left:${chLeft}px;
//       // top:${chTop}px;
//       // width:${chWidth}px;
//       // height:${chHeight}px;
//       // `;
//       // clipPath({width,height,left,top},i,"clipPath");
//       // backgroundImages[i].classList.add("expand");
//       // container.classList.add("containerFinalState");
//       // ch.classList.add("Cover");
//       // intialization(i)
//       // ch.querySelector("img").classList.add("ZoomOut");
  
//       // [...child].filter(che => che != ch).map(che=>che.parentElement).forEach((pa,ind)=>{
//       //   pa.style.animationDelay = `${0.1*ind}s`;
//       //   pa.classList.add("toTop")
//       // });
//       // [...child].filter(che => che != ch).forEach(che =>{
//       //   che.classList.add("toLeft")
        
//       // })
//       // cover.style.opacity = "1";
//       // replacElement(parent,i)
//       // setTimeout(()=>{
//       //   container.removeAttribute("style");
//       //   [...child].filter(che => che != ch).map(che=>che.parentElement).forEach((pa)=>{
//       //     pa.removeAttribute("style")
//       //     pa.classList.remove("toTop")
//       //   });
//       // },1700)
//     }else{
//       // if(clicked && backgroundImages[clickedIndex].classList.contains("expand") && temp == clickedIndex){
//       //   backgroundImages[clickedIndex].removeAttribute("style");
//       //   backgroundImages[clickedIndex].firstChild.removeAttribute("style");
//       //   backgroundImages[clickedIndex].firstChild.style=`
//       //   width:100%;
//       //   height:100%
//       //   `;
//       //   setTimeout(()=>{
//       //     backgroundImages[clickedIndex].firstChild.classList.remove("Cover","child");
//       //     backgroundImages[clickedIndex].classList.remove("expand");
//       //     backgroundImages[clickedIndex].querySelector("img").classList.remove("ZoomOut")
//       //   },800)
//       // }
//       // handleSlider(i)
//     }
    
//   })
// })

// replacedElement.addEventListener("click",()=>{
//   handleSlider(clickedIndex)
// })
titles.forEach((ti,index)=>{
  ti.addEventListener("click",()=>{
    clicked = false;
    detailedInfo[index].classList.add("deitaleInfoUp");
    detailedInfo[index].querySelector(".infoContainer").scroll({
      behavior:"smooth"
    })
  })
})
backBtn.forEach((bt,index)=>{
  bt.addEventListener("click",()=>{
    clicked = true;
    detailedInfo[index].classList.remove("deitaleInfoUp")
  })
})
addGlobalEventListener(container,"click",".box>.child",(e)=>{
  let ch = e;
  let i = Number(e.getAttribute("data-index"));
  if(!clicked){
    temp = i;
    clickedIndex = i
    clicked = true;
    stop()
    const parent = ch.parentElement;
    const {width,height,top,left} = parent.getBoundingClientRect();
    const {width:chWidth,height:chHeight,top:chTop,left:chLeft} = ch.getBoundingClientRect();
    parent.removeChild(ch);
    backgroundImages[i].appendChild(ch);
    ch.style=`
      left:${chLeft}px;
      top:${chTop}px;
      width:${chWidth}px;
      height:${chHeight}px;
    `;
    clipPath({width,height,left,top},i,"clipPath");
    backgroundImages[i].classList.add("expand");
    container.classList.add("containerFinalState");
    ch.classList.add("Cover");
    intialization(i)
    ch.querySelector("img").classList.add("ZoomOut");
      
    [...child].filter(che => che != ch).map(che=>che.parentElement).forEach((pa,ind)=>{
      pa.style.animationDelay = `${0.1*ind}s`;
      pa.classList.add("toTop")
    });
    [...child].filter(che => che != ch).forEach(che =>{
      che.classList.add("toLeft")
            
    })
    cover.style.opacity = "1";
    titles[i].classList.add("up");
    replacElement(parent,i)
    setTimeout(()=>{
      container.removeAttribute("style");
      [...child].filter(che => che != ch).map(che=>che.parentElement).forEach((pa)=>{
        pa.removeAttribute("style")
        pa.classList.remove("toTop")
      });
    },1700)
  }else{
     if(clicked && backgroundImages[clickedIndex].classList.contains("expand") && temp == clickedIndex){
        backgroundImages[clickedIndex].removeAttribute("style");
        backgroundImages[clickedIndex].firstChild.removeAttribute("style");
        backgroundImages[clickedIndex].firstChild.style=`
          width:100%;
          height:100%
        `;
        setTimeout(()=>{
          backgroundImages[clickedIndex].firstChild.classList.remove("Cover","child");
          backgroundImages[clickedIndex].classList.remove("expand");
          backgroundImages[clickedIndex].querySelector("img").classList.remove("ZoomOut")
        },1000)
      };
      [...titles].forEach(ti=>{
        ti.classList.remove("up");
      })
      titles[i].classList.add("up");

      handleSlider(i)
  }
})
document.addEventListener("wheel",()=>{
  if(clicked){

    clicked = false;
    let currentOnBackground;
    if(temp == clickedIndex){
      currentOnBackground = backgroundImages[clickedIndex];
      currentOnBackground.classList.remove("expand");
    }else{
      currentOnBackground = [...backgroundImages].find(bg => bg.classList.contains("full") );
    }
    // const currentOnBackground = [...backgroundImages].find(bg => bg.classList.contains("full") );
    currentOnBackground.classList.remove("full")
    currentOnBackground.classList.add("finale")
    cover.style.opacity = "0"

    const {width,height,left,top} = container.getBoundingClientRect();

    container.style=`
      top:${top+20}px;
      left:${left}px;
      height:${height}px;
      width:${width}px;gap:5px;
    `;
    
    [...child].map(che=>che.parentElement).forEach((pa,ind)=>{
      if(pa.classList.contains("box")){
        pa.style.animationDelay = `${0.07*ind}s`;
        pa.classList.add("toTop")
      }
    });
    target = window.scrollY;
    current = target;
    container.style.setProperty("--target",`${-current }px`);
    container.classList.add("containerInterMediate");
    child = document.querySelectorAll(".box>.child");
   
   
    replacedElement = null;
    replacedElement = document.createElement("div");
    [...titles].forEach(ti=>{
      ti.classList.remove("up");
    })
    setTimeout(()=>{
      [...child,replacedElement].forEach(che=>{
        che.classList.remove("toLeft")
      });
    },1000)
    setTimeout(()=>{
      finshing();
      container.removeAttribute("style")
      container.classList.remove("containerInterMediate");
      container.classList.remove("containerFinalState");
      currentOnBackground.classList.remove("finale");
      [...child].map(che=>che.parentElement).forEach((pa)=>{
        pa.removeAttribute("style")
        pa.classList.remove("toTop")
      });
      
      
      start();
    },1700);
    


  }
})

function addGlobalEventListener(parent,type,selector,callback){
  parent.addEventListener(type,(e)=>{
    if(e.target.parentElement.matches(selector)){
      let event = e.target.parentElement
      callback(event)
    }
  })
}










function animate(){
  current = lerp(current,target,ease)
  current = parseFloat(current.toFixed(2))
  elCurrent = remap(0,1,0,document.body.clientHeight-innerWidth/2,current);
  transformImage(elCurrent)
  target = window.scrollY;
  setTransform(container,`translate(${-current}px,-50%)`)

  requestId = requestAnimationFrame(animate);
}


animate()


function transformImage(elCurrent){
  [...child,replacedElement].forEach(el=>{

    const elWidth = el.getBoundingClientRect().width;
    let elRatio = elCurrent*elWidth*0.71428571;
    setTransform(el,`translateX(${elRatio}px)`) ;
  })
}


function clipPath({width,height,top,left},i,name){
  const leftTop = {
    x:(left/window.innerWidth)*100,
    y:(top/window.innerHeight)*100
  }
  const rightTop = {
    x:((left+width)/window.innerWidth)*100,
    y:(top/window.innerHeight)*100
  }
  const leftBottom = {
    x:(left/window.innerWidth)*100,
    y:((top+height)/window.innerHeight)*100
  }
  const rightBottom = {
    x:((left+width)/window.innerWidth)*100,
    y:((top+height)/window.innerHeight)*100
  }
  backgroundImages[i].style.setProperty(`--${name}`,`polygon(${leftTop.x}% ${leftTop.y}%, ${rightTop.x}% ${rightTop.y}%, ${rightBottom.x}% ${rightBottom.y}%, ${leftBottom.x}% ${leftBottom.y}%)`)
}


function handleSlider(ind){
  if(temp != -1){
    if(temp > ind){
      for(let i = ind+1;i<child.length;i++){
        backgroundImages[i].classList.add("rightClip")
        if(backgroundImages[i].classList.contains("leftClip")){
          backgroundImages[i].classList.remove("leftClip")
        }
      }
    }else if(temp < ind){
      for(let i = 0;i<=ind-1;i++){
        if(backgroundImages[i].classList.contains("rightClip")){
          backgroundImages[i].classList.remove("rightClip")
        }
        backgroundImages[i].classList.add("leftClip")
      }
    }
    backgroundImages[temp].classList.remove("full")
  }
 
  setTimeout(()=>{
    backgroundImages[temp].classList.remove("expand");

    [...backgroundImages].filter(e => e != backgroundImages[ind]).forEach(e=>{
      e.querySelector("img").classList.remove("scale");
      e.querySelector("img").classList.add("image");
      e.style.zIndex = `${1}`;

    })
  },0);
  backgroundImages[ind].style.zIndex = `${8}`
  backgroundImages[ind].classList.add("full");
  backgroundImages[ind].querySelector("img").classList.add("scale");
  backgroundImages[ind].querySelector("img").classList.remove("image");
  if(backgroundImages[ind].classList.contains("leftClip")||backgroundImages[ind].classList.contains("rightClip")){
    backgroundImages[ind].classList.remove("leftClip")
    backgroundImages[ind].classList.remove("rightClip")
  }
  temp = ind
  
}
function intialization(index){
 
  [...backgroundImages].filter(bg => bg != backgroundImages[index]).forEach((e,ind)=>{
    const child = document.createElement("div");
    const image = document.createElement("img");
    child.style.width="100%";
    child.style.height="100%";
    image.classList.add("image")
    if(ind<index){
      
      e.classList.add('leftClip');
      image.src = `../asset/${offset + ind}.jpg`;
    }else{
      e.classList.add('rightClip');
      image.src = `../asset/${offset + ind +1}.jpg`; 
    }
    child.appendChild(image);
    e.appendChild(child)
  })
    
}


function replacElement(parent,i){
  const img = document.createElement("img");
  img.src = `./asset/${offset + i}.jpg`;
  replacedElement.appendChild(img);
  replacedElement.setAttribute("data-index",`${i}`);
  replacedElement.style.transform="translateY(150%)";
  replacedElement.style.transition ="transform 2s ease 2.7s";
  replacedElement.classList.add("child","toLeft","replaced");
  setTimeout(()=>{
    replacedElement.removeAttribute("style");
    replacedElement.classList.remove("replaced")
  },1000)
  
  parent.appendChild(replacedElement)
}
function finshing(){
  backgroundImages.forEach(bg=>{
    bg.removeChild(bg.firstChild);
    if(bg.classList.contains("leftClip")){
      bg.classList.remove("leftClip")
    }else{
      bg.classList.remove("rightClip")
    }
  })
}















function start(){
  requestId = requestAnimationFrame(animate)
}
function stop(){
  if(requestId){
    cancelAnimationFrame(requestId)
  }
}




function setTransform(el,transfrom){
  el.style.transform = transfrom;
}
function lerp(a,b,t){
  return a + (b-a)*t;
}

function invLerp(a,b,v){
  return (v-a)/(b-a);
}

function remap(newA,newB,oldA,oldB,v){
  return lerp(newA,newB,invLerp(oldA,oldB,v));
}


