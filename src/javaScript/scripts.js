
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
              try {
                     window.location.href = ('https://ansiedade.futuro-agora.com/azul')
              } catch (error) {
                     
              }
                      window.location.assign('https://ansiedade.futuro-agora.com/azul')
                      useful.alertMessage('você está sendo redirecionado')
              return
       }
       if(result <= 17){
              
              window.location.assign('https://ansiedade.futuro-agora.com/cinza')
              useful.alertMessage('você está sendo redirecionado')
              return
       }
       if(result <= 33){
              window.location.assign('https://ansiedade.futuro-agora.com/vermelho')
              useful.alertMessage('você está sendo redirecionado')
       }
       
}
let useful = {
       alertMessage(message = 'alerta'){
              alert(message)
       }
}
let handleInputRadios = {
       allInputRadios: document.querySelectorAll('.radio'),
       CheckInputRadio(){
              let boxValues = {}
              let numberBoxChecked = 0
              let {allInputRadios} = handleInputRadios

              allInputRadios.forEach(checkBox  =>{
                     if(checkBox.checked){
                            numberBoxChecked++
                            
                            boxValues[`box${numberBoxChecked}`] = checkBox.value
                            
                     }
                       
              })
       
              return {numberBoxChecked,boxValues}
       },
       
      
       sumValuesChecked(){
              let total = 0
              let {boxValues} = handleInputRadios.CheckInputRadio()
              
              Object.keys(boxValues).map((key,value)=>{
                     
                     let newValue = parseInt(boxValues[key])
                     total += newValue
                    
              })
              return {total}
       }

       
}

function soma(){
       
           
           if(handleInputRadios.CheckInputRadio().numberBoxChecked == 11){
       
                 redirectUser(handleInputRadios.sumValuesChecked().total)
                 
           }
          handleScroll.toRight(200)
    }
    
