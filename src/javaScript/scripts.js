
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
       CheckCheckbox(){
              let numberBoxChecked = 0
              let allCheckBoxes = document.querySelectorAll('.checkbox')
              allCheckBoxes.forEach(checkBox  =>{
                     if(checkBox.checked){
                            numberBoxChecked++
                     }
                     console.log(numberBoxChecked)
              })
       
              return {numberBoxChecked}
       }
}
handleCheckbox.CheckCheckbox()

console.log(handleCheckbox.CheckCheckbox())
function checar(){
    var total = 0;
    let InputsChecked = 0
    var form = document.forms[0]; //pega o primeiro form q aparecer
           for (var i=0;i < form.elements.length;i++) //checa o numero de elementos no form
           {
                  
                   if(form.elements[i].type == "checkbox") //procura somente pelos 'checkbox'
                   {      if(form.elements[i].checked){
                     InputsChecked ++
              }
                           checa = form.elements[i]; //pega o atributo ID de cada checkbox
                          total += parseInt(checa.value);

    }
           }
           
           if(InputsChecked === 11){
                  redirectUser(total)
           }
         
           return total; //atualiza o campo
    
    }
    function soma()
    
    {
           handleCheckbox.CheckCheckbox().numberBoxChecked
    let InputsChecked = 0
    var total2 = 0;
    var form2 = document.forms[0]; //pega o primeiro form q aparecer
           for (var i2=0;i2 < form2.elements.length;i2++) //checa o numero de elementos no form

           {
                   if(form2.elements[i2].type == "checkbox") //procura somente pelos 'checkbox'
                   {
                          if(form2.elements[i2].checked){
                                 InputsChecked ++
                          }
                           checa2 = form2.elements[i2]; //pega o atributo ID de cada checkbox
                          if(checa2.checked)
    {
    total2 +=  parseInt(checa2.value);
    
    }
    
    
    }
   
           }
          form2.total_valor.value = checar()-parseInt(checar() - total2);
          //console.log(form2.total_valor.value)
        
           if(InputsChecked === 11){
                 redirectUser(form2.total_valor.value)
           }
          handleScroll.toRight(200)
    }
    
