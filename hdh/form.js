function validateForm() {

    let val = true;
    let nameValue = document.forName.nameName.value;
    let numberValue = 12345678900
    let pass = 1;
    let pass2 = 2;

    // let genderSelected = document.querySelector('input[Select gender]:checked')
    // alert('genderSelected>>', genderSelected)
    // console.log('document.querySelector')
    // Gender Validation

    // let genderSelected = document.querySelector('input[name="gender"]:checked');
    // if ('genderSelected',) {
    //     alert(" select a gender.");
    //     val = true;
    // }
    function validateGender() {
        let gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) return alert("Please select a gender."), false;
        alert("Selected Gender: " + gender.value);
        return true;
    }
    

    if (nameValue.lenght < 5) {
        alert("im in if condition");
        val = false;
    }
    if (nameName) {
        alert('is this working')
        val = false
    }
    // if (numberValue < 10 || numberValue > 10) {
    //     val = false
    // }
    if (numberValue.length == 10) {
        val = false
    }
    return val;
}
function resetForm() {
    alert('im int here')
    console.log(document.forName.nameName.value = '')
}
