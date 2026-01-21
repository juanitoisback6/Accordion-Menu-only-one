const btns = document.querySelectorAll(".accordion-header");
const divs = document.querySelectorAll(".accordion-content");

console.log(btns);


btns.forEach((btn)=>{

          btn.addEventListener("click",()=>{
                        
                btns.forEach((btnI)=>{
console.log(btnI.className);
                                if(btnI != btn && btnI.className == "accordion-header active"){
                                        const nextItemI = btnI.nextElementSibling;
                                        console.log(btnI.className);
                                        btnI.classList.toggle("active");
                                         nextItemI.style.maxHeight = null;

                                };

                        });
                 
                const nextItem = btn.nextElementSibling;

                        

                    btn.classList.toggle("active");

                    if (nextItem.style.maxHeight){

                              nextItem.style.maxHeight = null;
                    }else {

                              nextItem.style.maxHeight = "100px";
                              nextItem.style.maxHeight = nextItem.scrollHeight + "px";
                    console.log(nextItem.scrollHeight); 
                    }
                       

                    console.log(nextItem);
                    
divs.forEach((div)=>{
                            console.log(div);
                    })
console.log("clicked" + btn.textContent);



          });

})