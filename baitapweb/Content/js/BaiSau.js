// Đối tượng 'Validator'
function Validator(options) {


    //hàm thực hiện validate 
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    // lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                //xử lý trường hợp blur ra khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                //xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    console.log(inputElement.value)
                }
            }
        })
    }
}

// Định nghĩa rules
// Nguyên tắc của các rules
//1. khi có lỗi => Trả ra messae lỗi
//2. khi hợp lệ => không trả ra cái gì cả (undefined)

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này"
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "vui lòng nhập email";
        }
    }
}

