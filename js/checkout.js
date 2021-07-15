// Get the input fields
// var password = document.querySelector(".password");
// var phone = document.querySelector('.phone');
// var name = document.querySelector('.name');
// var surname = document.querySelector('.name');
// var email = document.querySelector('.email');
// var adress = document.querySelector('.adress');

// // Get the error elements


// Exercise 9





function validate() {

    var errorPassword = document.getElementById("errorPassword");
    var errorName = document.getElementById('errorName');
    var errorPhone = document.getElementById('errorPhone');
    var errorSurname = document.getElementById('errorSurname')

    const parametros = document.querySelectorAll('.parametro');


    parametros.forEach(parametro => {
        let correcto = true;
        let valor = parametro.value;
        if ((valor.length < 3) || (valor.length == undefined)) {

            parametro.nextSibling.textContent = "El contenida ha de tener más de 3 caracteres"


        } else {

            if (parametro.classList.contains("name")) {
                for (let i = (valor.length - 1); i >= 0; i--) {
                    if (correcto) {
                        let caracter = valor.charAt(i)
                        let isNumber = isNaN(caracter)
                        if (!isNumber) {
                            errorName.style.background = 'red'
                            errorName.innerText = 'El nombre solo acepta letras'
                            correcto = false;
                        }
                    }
                }
            }

            if (parametro.classList.contains("surname")) {
                for (let i = (valor.length - 1); i >= 0; i--) {
                    if (correcto) {
                        let caracter = valor.charAt(i)
                        let isNumber = isNaN(caracter)
                        if (!isNumber) {
                            errorSurname.style.background = 'red'
                            errorSurname.innerText = 'El apellido solo acepta letras'
                            correcto = false;

                        }
                    }
                }
            }

            if (parametro.classList.contains("phone")) {
                for (let i = (valor.length - 1); i >= 0; i--) {
                    if (correcto) {
                        let caracter = valor.charAt(i)
                        let isNumber = isNaN(caracter)
                        if (isNumber) {
                            errorPhone.style.background = 'red'
                            errorPhone.innerText = 'El telefono solo acepta numeros'
                            correcto = false;
                        }
                    }
                }
            }

            if (parametro.classList.contains("password")) {
                let letras = 0;
                let numeros = 0;
                for (let i = (valor.length - 1); i >= 0; i--) {
                    let caracter = valor.charAt(i)
                    let isNumber = isNaN(caracter)
                    if (isNumber) {
                        letras++

                    } else if (!isNumber) {
                        numeros++
                    }
                }
                if ((letras == 0) || (numeros == 0)) {
                    errorPassword.style.background = 'red'
                    errorPassword.innerText = 'La contraseña ha de contener numeros y letras'

                }
            }

        }
    })

}


