
let handleScroll = {
       allQuestionsCarossel: document.getElementById('allQuestions'),

       toRight(interval = 200){
              let allQuestionsCarossel =  handleScroll.allQuestionsCarossel
              let scroollViewWidht = allQuestionsCarossel.offsetWidth
             
              setTimeout(() => {
                     allQuestionsCarossel.scrollLeft += scroollViewWidht
              }, interval);
              clearTimeout
       },
       toLeft(){
              let allQuestionsCarossel =  handleScroll.allQuestionsCarossel
              let scroollViewWidht = allQuestionsCarossel.offsetWidth
             
              setTimeout(() => {
                     allQuestionsCarossel.scrollLeft -= scroollViewWidht
              }, interval);
              clearTimeout
       }
}
function redirectUser(result = 0){
       
       if(result <= 8){
              window.location.assign('https://ansiedade.futuro-agora.com/azul')
              return
       }
       if(result <= 17){
              
              window.location.assign('https://ansiedade.futuro-agora.com/cinza')
              return
       }
       if(result <= 33){
              window.location.assign('https://ansiedade.futuro-agora.com/vermelho')
       }
}
let handleCheckbox = {
       allCheckBoxes: document.querySelectorAll('.checkbox'),
       CheckCheckbox(){
              let boxValues = {}
              let numberBoxChecked = 0
              let {allCheckBoxes} = handleCheckbox

              allCheckBoxes.forEach(checkBox  =>{
                     if(checkBox.checked){
                            numberBoxChecked++
                            
                            boxValues[`box${numberBoxChecked}`] = checkBox.value
                            
                     }
                     console.log(boxValues)
                     
                     
              })
       
              return {numberBoxChecked,boxValues}
       },
       getCheckedValues(){
       },
       sumValuesChecked(){
              let total = 0
              let {boxValues} = handleCheckbox.CheckCheckbox()
              
              Object.keys(boxValues).map((key,value)=>{
                     
                     let newValue = parseInt(boxValues[key])
                     total += newValue
                    
              })
              return {total}
       }

       
}

function soma(){
           
           if(handleCheckbox.CheckCheckbox().numberBoxChecked == 11){
                 redirectUser(handleCheckbox.sumValuesChecked().total)
           }
          handleScroll.toRight(200)
    }
    
