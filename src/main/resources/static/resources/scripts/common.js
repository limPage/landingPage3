const skillButton= window.document.querySelectorAll('.my-skill-li');
const skillInfo=window.document.querySelectorAll('.skill-info')
const skillToggle=window.document.querySelectorAll('.toggle')

for (let i = 0; i < skillButton.length; i++) {

    skillButton.item(i).addEventListener("click",()=>{
        if ( skillInfo.item(i).classList.contains("visible")){
            skillInfo.item(i).classList.remove("visible");
            skillToggle.item(i).innerText="ㆍㆍㆍ";
        }else {
            skillInfo.item(i).classList.add("visible");
            skillToggle.item(i).innerText="●";

        }

    })


}