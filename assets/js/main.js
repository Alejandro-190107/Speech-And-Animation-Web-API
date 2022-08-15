function previewImg(){
  
  var fileRead = document.getElementById("fileImg").files[0];
  var fileLoad = new FileReader();
  
    if (fileImg) {

      fileLoad.readAsDataURL(fileRead);
      fileLoad.onloadend = function () {

        document.getElementById("img-load").src = fileLoad.result;
        const imagen=document.getElementById("img-load");
      }    
    }
}
  document.getElementById('urlImg').addEventListener("change", function(){ 
  document.getElementById('img-load').src=this.value;});

/* ========================================== */

const buttonVoice = document.querySelector("#icon-Micro");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(SpeechRecognition) {

    //console.log("Your Browser supports speech Recognition");
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.lang = "es-MX";
    buttonVoice.insertAdjacentHTML("beforeend", '<button type="button" class="btn btn-dark" title="Activa El Microfono"> <i class="fas fa-microphone"></i></button>');

    const micBtn = buttonVoice.querySelector("button");
    const micIcon = micBtn.firstElementChild;

    micBtn.addEventListener("click", micBtnClick);

    function micBtnClick() {

      if(micIcon.classList.contains("fa-microphone")) { 
          recognition.start(); 
      }
      else {
          recognition.stop();
      }
    }

    recognition.addEventListener("start", startSpeechRecognition);

    function startSpeechRecognition() {

      micIcon.classList.remove("fa-microphone");
      micIcon.classList.add("fa-microphone-slash");
      buttonVoiceInput.focus();
      //console.log("Voice activated, SPEAK");

    }

    recognition.addEventListener("end", endSpeechRecognition);

    function endSpeechRecognition() {

      micIcon.classList.remove("fa-microphone-slash");
      micIcon.classList.add("fa-microphone");
      buttonVoiceInput.focus();
      //console.log("Speech recognition service disconnected");

    }

    recognition.addEventListener("result", resultOfSpeechRecognition);

    function resultOfSpeechRecognition(event) {

      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
  
      if(transcript.toLowerCase().trim()==="ayuda") { //* Comando AYUDA
        open("help.html");
      }
      
      /* ---------------------------------------------- */

      if (transcript.toLowerCase().trim() === "rebotar") { //* Comando REBOTAR

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 1300,
          web: {
            transform: [
              { offset: 0, value: "scale(1, 1)" },
              { offset: 0.3, value: "scale(1.25, .75)" },
              { offset: 0.4, value: "scale(.75, 1.25)" },
              { offset: 0.5, value: "scale(1.15, .85)" },
              { offset: 0.65, value: "scale(.95, 1.05)" },
              { offset: 0.75, value: "scale(1.05, .95)" },
              { offset: 1, value: "scale(1, 1)" }
            ] 
          } 
        });

        comvoice.play();
      }

      /* ---------------------------------------------- */

      if (transcript.toLowerCase().trim() === "flash") { //* Comando FLASH

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
          web: {
            opacity: [1, 0],
            opacity: [0, 1]
          }
        });

        comvoice.play();
      }

      /* ---------------------------------------------- */
      
      if (transcript.toLowerCase().trim() === "diagonal") { //* Comando DIAGONAL
        
        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
          web: {
            x: [80, 0],
            y: [50, 0]
          }
        });
        
        comvoice.play();
      }

      /* ---------------------------------------------- */

      if (transcript.toLowerCase().trim() === "aumenta") { //* Comando AUMENTA

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
          web: {
            transform: [
              { offset: 0.3, value: "scale(.5, .5)" },
              { offset: 0.4, value: "scale(.5, .5)" },
              { offset: 0.5, value: "scale(.15, .55)" },
              { offset: 1, value: "scale(1, 1)" }
            ]
          }
        });
        comvoice.play();

      }

      /* ---------------------------------------------- */

      if (transcript.toLowerCase().trim() === "cruz") { //* Comando CRUZ

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
            web: {
              transform: [
                'translateX(70px)', 
                'translatey(50px)',
                'translateX(-50px)',
                'translateY(20px)'
              ]
            }
        });

        comvoice.play();
      }

      /* ---------------------------------------------- */

      if (transcript.toLowerCase().trim() === "zoom") { //* Comando ZOOM

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
          web: {
            scale: [1, 1.2, 1],
            letterSpacing: [20,5]
          }
        });

        comvoice.play();
      }

      /* ---------------------------------------------- */

      if (transcript.toLowerCase().trim() === "crazy") { //* Comando CRAZY

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 1200,
                web: {
                    transform: ['translateY(300px)',
                    'translateX(100px)', 
                    'translateX(200px)',
                    'translateY(200px)',
                    'translateX(100px)',
                    'translateY(100px)',
                    'translateY(-100px)',
                    'translateY(-200px)',
                    'translateY(-200px)',
                    'translateX(50px)', 
                    'translatey(50px)',
                    'translateX(-100px)',
                    'translateX(1px)',
                    'translateX(0px)',
                    'translateY(2px)'],
                    opacity: [0,1,0,1,0,1]
                 }
          
          
        });

        comvoice.play();
      }

      /* ---------------------------------------------- */
      if (transcript.toLowerCase().trim() === "reducir") { //* Comando REDUCIR

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
          web: {
            transform: [
              { offset: 0.5, value: "scale(1.5, 1.2)" },
              { offset: 0.10, value: "scale(2, 1.2)" },
              { offset: 1.4, value: "scale(1, 1.2)"},
              { offset: 1.5, value: "scale(1, 1)" },
              { offset: 1, value: "scale(1, 1)" }
            ]
          }
        });

        comvoice.play();
      }
      /* ---------------------------------------------- */

        console.log(event); 
      }

      /* if (transcript.toLowerCase().trim() === "derecha") { //* Comando DERECHA

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
          web: {
            x: [300, 0],
            marginLeft: [0,50],
            rotateY: [20,1200]
          }
        });

        comvoice.play();
      } */

      /* if (transcript.toLowerCase().trim() === "rotar") {  //* Comando ROTAR

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
          web: {
            x: [300, 0],
            borderTopLeftRadius: [500],
            rotate: [40,500]
          }
        });

        comvoice.play();
      } */

      /* if (transcript.toLowerCase().trim() === "girar") { //* Comando GIRAR

        var comvoice= just.animate({
          targets: "#img-load",
          duration: 3500,
            web: {
              rotate: [2000, -2000],
              value: [-700, 50],
              rotateX: [80, 0],
              rotateY: [80, 0],
            }
        });

        comvoice.play();
      } */

      /* ---------------------------------------------- */
  }
  else {
    //console.log("Your Browser does not support speech Recognition");
    info.textContent = "Your Browser does not support Speech Recognition";
  }