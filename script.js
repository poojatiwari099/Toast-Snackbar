const horizontal= document.getElementById("horizontal-position");
const vertical=document.getElementById("vertical-position");
const type=document.getElementById("type");
const message=document.getElementById("message");
const duration=document.getElementById("duration");
const duration1=document.getElementById("duration-output");
const showtoastbtn=document.getElementById("button");

duration.addEventListener("input",()=>{
    duration1.textContent = duration.value;


});

showtoastbtn.addEventListener("click",()=>{
    showToast(
    message.value,
    type.value,
    duration.value * 1000,
    horizontal.value,
    vertical.value

);
});
function showToast( message,type,duration,horizontal,vertical){
    const toast=document.createElement("div");
     toast.className=`toast ${type}`;
     toast.textContent=message;
    //   console.log(toast)
    //   document.body.appendChild(toast);

      toast.style.position="fixed";
      toast.style.zIndex=9999;
      toast.style.padding="20px 30px";
      toast.style.margin="20px";
      toast.style.borderRadius="8px";
      toast.style.backgroundColor=getTypecolor(type);
      toast.style.boxShadow="0 2px 8px rgba(0,0,0,0.3)";

if( vertical==="top"){
    toast.style.top="20px";
}
else{
    toast.style.bottom="20px";
}
if(horizontal==="left"){
    toast.style.left="20px";
}else{
    toast.style.right="20px";
}

document.body.appendChild(toast);


setTimeout(()=>{
    toast.remove();
},duration);
}



 function getTypecolor(type){
    switch(type){

case "normal":
       return  "rgb(234, 131, 193)";

 case "success":   

        return "rgb(13, 230, 223)";
case "error":
     return"rgb(236, 236, 67)";

case "warning":

     return "rgb(231, 42, 13)";

case "Info":
      
       return "rgb(11, 91, 103)";


    }
 }

showToast(message,type,duration,horizontal,vertical);
















































































































//  showtoastbtn.addEventListener("click",()=>{
//     const toast=document.createElement("div");
//     toast.className=`toast ${type.value}`;
//     toast.textContent=message.value;
//    console.log(toast)
//    document.body.appendChild(toast);
//  })
// function displaytoast(){
//      const massage=massage.value;
//      console.log(massage);
//     const horizontal=horizontal-position.value;
//     const vertical=vertical-position.value;
//      const duration=duration.value*1000;
//     showToast(message,type,duration,horizontal,vertical);

// }
// function showToast( message,type,duration,horizontal,vertical){
//     console.log(horizontal-position);
    
// if(horizontal==='left'){
// if(vertical==='top'){

//     leftTopcontainer.append(message,type,duration,horizontal,vertical);
// }else{
// leftBottomcontainer.append( message,type,duration,horizontal,vertical);
// }

// }else{
//     if(vertical===top){
//         rightTopcontainer.append(message,type,duration,horizontal,vertical);
    
//     }else{
//             rightTopcontainerBottomcontainer.append(message,type,duration,horizontal,vertical);

//         }
//     }
// }
// function createtoast(massage,type,duration,horizontal,vertical){
//     const toast=toastTemplate.content.clonenode(true);

    

// }



