
const data = [
    {
        id:1,
        question:"What is Frontend Mentor, and how will it help me?",
        answer:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        id:2,
        question:"Is Frontend Mentor free?",
        answer:"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        id:3,
        question:"Can I use Frontend Mentor projects in my portfolio?",
        answer:"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        id:4,
        question:"How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }

]

const accordionWrapper = document.querySelector(".accordion");



function createAccordionData(){
    accordionWrapper.innerHTML=data.map((dataItem)=>`
        <div class="accordion_item">
            <div class="accordion_title">
                <h3>${dataItem.question}</h3>
                
                <img src="./assets/images/icon-plus.svg" class="plus-icon" >
                
            </div>
            <div class="accordion_content">
                <p>${dataItem.answer}</p>
                
            </div>
        </div>
    `).join("")
}
//<img src="./assets/images/icon-plus.svg" id="plus-icon" >
//plusIcon.style.display='none';
//minusIcon.style.display='block';
createAccordionData();




getAccordionTitles = document.querySelectorAll(".accordion_title");

getAccordionTitles.forEach(currentItem=>{
    
    currentItem.addEventListener("click",(event)=>{
       
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active');
            
           
        }
        else{
            
            const getAlreadyAddeddActiveClass = document.querySelectorAll(".active");
            getAlreadyAddeddActiveClass.forEach(currentActiveItem=>{
                currentActiveItem.classList.remove("active");
                
            })
            currentItem.classList.add("active")
           
           
        //     var toggle = false;
        
        //   if (toggle === true) {
        //     document.getElementById("plus-icon").src = "./assets/images/icon-plus.svg";
        //   } else {
        //     document.getElementById("plus-icon").src = "./assets/images/icon-minus.svg";
            
        //   }
        //   toggle = !toggle;

        
        }
    })
})
const iconImg = document.querySelectorAll(".plus-icon");

iconImg.forEach((item,index) => {
    
    item.addEventListener("click", () => {
       item.src="./assets/images/icon-minus.svg"
    
    });
    
});
   


// if(item){
//     item.src=""
//     item.src="./assets/images/icon-plus.svg";
// }
// else{
//     item.src=""
//     item.src="./assets/images/icon-minus.svg";
// }