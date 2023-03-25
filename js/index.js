const output=document.querySelector(".calculator__output");
const calcKeys=document.querySelectorAll(".calculator__keys button");
calcKeys.forEach(key=>{
  key.addEventListener("click",(e)=>{
    switch(e.target.textContent){
      case "AC":
      output.textContent="";
      break;
      case "=":
        output.innerText = eval(output.innerText.replace(/[^-+/*\d]/g, ''));
        break;

      default:
        output.textContent+=e.target.textContent;
    }
  })
})
