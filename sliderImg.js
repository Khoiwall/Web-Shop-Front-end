var myIndex = 0;
sliderTimer();
function sliderTimer(){
    var slide = document.getElementsByClassName("appearSlide")

    for( var i = 0;i < slide.length; i++ ){
        
        
       
        if(1){
            slide[i].style.display = "none"
            console.log("12")
        }
        if(){
            console.log("nones")
            slide[i].style.display = "block"
        }
    }
    cv(slide);
    
  

   
   
}

function cv(slide){
    myIndex++;
    if (myIndex > slide.length) {myIndex = 1}    
            console.log(myIndex)
            setTimeout(sliderTimer, 1000);
}


// if (sliderTimer()){
//     console.log("g")
// }else{
//     function ab(slide){
        
    
//         for( var i = 0;i < slide.length; i++ ){
//             slide[i].style.display = "block"
//             console.log(slide[i])
//         }
    
        
//         setTimeout(sliderTimer, 1000);  
//     }
    
// }