// Validación de los formularios


const validateName = (name) => {
    if(!name) return false;
    let lengthValid = name.trim().length >= 4;
    
    return lengthValid;
  }
  
  const validateEmail = (email) => {
    if (!email) return false;
    let lengthValid = email.length > 15;
  
    // validamos el formato
    let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let formatValid = re.test(email);
  
    // devolvemos la lógica AND de las validaciones.
    return lengthValid && formatValid;
  };
  
  const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return false;
    // validación de longitud
    let lengthValid = phoneNumber.length >= 8;
  
    // validación de formato
    let re = /^[0-9]+$/;
    let formatValid = re.test(phoneNumber);
  
    // devolvemos la lógica AND de las validaciones.
    return lengthValid && formatValid;
  };
  
  const validateFiles = (files) => {
    if (!files) return false;
  
    // validación del número de archivos
    let lengthValid = 1 <= files.length && files.length <= 5;
  
    // validación del tipo de archivo
    let typeValid = true;
  
    for (const file of files) {
      // el tipo de archivo debe ser "image/<foo>" o "application/pdf"
      let fileFamily = file.type.split("/")[0];
      typeValid &&= fileFamily == "image";
    }
  
    // devolvemos la lógica AND de las validaciones.
    return lengthValid && typeValid;
  };
  
  const validateSelect = (select) => {
    if(!select) return false;
    return true
  }
  
  const validateForm = () => {
    // obtener elementos del DOM usando el nombre del formulario.
    let region = document.getElementById("region").value;
    let email = document.getElementById("email").value;
    let comuna = document.getElementById("comuna").value;
    let nombre = document.getElementById("nombre").value;
    let numero = document.getElementById("numero").value;
    let diaInicio = document.getElementById("fecha-inicio");
    let tema = document.getElementById("tema").value;
    let imagen = document.getElementById("imagen").file;

    
  
    // variables auxiliares de validación y función.
    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
      invalidInputs.push(inputName);
      isValid &&= false;
    };
  
    // lógica de validación
    if (!validateName(nombre)) {
      setInvalidInput("Nombre");
    }
    if (!validateEmail(email)) {
      setInvalidInput("Email");
    }
    if (!validatePhoneNumber(numero)) {
      setInvalidInput("Número");
    }
    //if (!validateFiles(imagen)) {
    //  setInvalidInput("Fotos");
    //}
    if (!validateSelect(region)) {
      setInvalidInput("Región");
    }
    if (!validateSelect(comuna)) {
        setInvalidInput("Comuna")
    }
    if (!validateSelect(tema)) {
        setInvalidInput("Tema")
    }
    
  
    // finalmente mostrar la validación
    let validationBox = document.getElementById("val-box");
    let validationMessageElem = document.getElementById("val-msg");
    let validationListElem = document.getElementById("val-list");
    let formContainer = document.querySelector(".formularios");
  
    if (!isValid) {
      validationListElem.textContent = "";
      // agregar elementos inválidos al elemento val-list.
      for (input of invalidInputs) {
        let listElement = document.createElement("li");
        listElement.innerText = input;
        validationListElem.append(listElement);
      }
      // establecer val-msg
      validationMessageElem.innerText = "Los siguientes campos son inválidos:";
  
      // aplicar estilos de error
      validationBox.style.backgroundColor = "#ffdddd";
      validationBox.style.borderLeftColor = "#f44336";
  
      // hacer visible el mensaje de validación
      validationBox.hidden = false;
    } else {
      // Ocultar el formulario
      myForm.style.display = "none";
  
      // establecer mensaje de éxito
      validationMessageElem.innerText = "¡Formulario válido! ¿Deseas enviarlo o volver?";
      validationListElem.textContent = "";
  
      // aplicar estilos de éxito
      validationBox.style.backgroundColor = "#ddffdd";
      validationBox.style.borderLeftColor = "#4CAF50";
  
      // Agregar botones para enviar el formulario o volver
      let submitButton = document.createElement("button");
      submitButton.innerText = "Enviar";
      submitButton.style.marginRight = "10px";
      submitButton.addEventListener("click", () => {
        const mensaje = document.createElement("p");
        mensaje.innerText = "¡El formulario se ha enviado exitosamente!";
        mensaje.style.color = "green";
        mensaje.style.fontWeight = "bold";
        mensaje.style.marginTop = "10px";

         // Insertar el mensaje después del botón
        submitButton.insertAdjacentElement("afterend", mensaje);

  // Opcional: deshabilitar el botón para evitar múltiples envíos falsos
         submitButton.disabled = true;
      });
  
      let backButton = document.createElement("button");
      backButton.innerText = "Volver";
      backButton.addEventListener("click", () => {
        // Mostrar el formulario nuevamente
        myForm.style.display = "block";
        validationBox.hidden = true;
      });
  
      validationListElem.appendChild(submitButton);
      validationListElem.appendChild(backButton);
  
      // hacer visible el mensaje de validación
      validationBox.hidden = false;
    }
  };
  
  
  let submitBtn = document.getElementById("envio");
  submitBtn.addEventListener("click", validateForm);
  