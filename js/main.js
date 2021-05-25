
    /*//// Check Full Name */

function nameChecker() {
    let text = document.querySelector('#text')
    let alertName = document.querySelector('#alertName')

    function validateName(val){
        let rename = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
        return rename.test(val);
    }

text.onkeyup = function validateN() {
    if (validateName(text.value)) {
        text.style.borderColor="mediumseagreen"
        alertName.classList.add('d-none') 
    } else {
        text.style.borderColor="red"
        alertName.classList.remove('d-none')   
      }

}

}

nameChecker()

    /*//// Check Email */

function emailChecker(){
    let email = document.getElementById("email");
    let alertBox = document.querySelector('#alertEmail')
    function validateEmail(val) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(val);
    }
    email.onkeyup = function validate() {
      if (validateEmail(email.value)) {
       email.style.borderColor="mediumseagreen"
       alertBox.classList.add('d-none') 
      } else {
        email.style.borderColor="red"
       alertBox.classList.remove('d-none')   
      }
    }
  }
  emailChecker()
  


    /*//// Check Telephone Number */


  function telChecker(){
    let alertTel = document.querySelector('#alertTel')
    let tel = document.querySelector('#tel')
    function validateTel(val) {
      let regTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,4}$/im
      return regTel.test(val);
    }
    tel.onkeyup = function validate() {
      if (validateTel(tel.value)) {
       tel.style.borderColor="mediumseagreen"
       alertTel.classList.add('d-none') 
      } else {
        tel.style.borderColor="red"
        alertTel.classList.remove('d-none')   
      }
    }
  }
  telChecker()

    /*//// Check Message */

  function messageChecker(){
    let comment = document.querySelector('#comment')
    let alertMsg = document.querySelector('#alertMsg')
    comment.onkeyup = function() {
       if (comment.value.length>3)  {
        comment.style.borderColor = "mediumseagreen"
        alertMsg.classList.add('d-none') 
      }
      else {
        comment.style.borderColor = "red"
        alertMsg.classList.remove('d-none') 
      }
    }
  }
  messageChecker()


    /*//// Check CheckBox */


    let alertBox = document.querySelector('#alertBox')
    let checkbox = document.querySelector("#cbx")
    let boxy = document.querySelector("#boxy")
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            boxy.style.borderColor="green"
            alertBox.classList.add('d-none')
        } else {
            boxy.style.borderColor="red"
            alertBox.classList.remove('d-none')
        }
      })


    /*//// img file uploader */
  
  var ppp = document.getElementById('ppp');
  var file = document.getElementById('file');
  var panel = document.getElementById('panel');
  var loadFilea = function(event) {
    var image = document.getElementById('outputa');
    panel.classList.add('d-none')
    file.classList.remove('d-none') 
    ppp.classList.remove('d-none') 
    image.src = URL.createObjectURL(event.target.files[0]);
    };




