function transformUpperCase(_val){
    return _val.toUpperCase()
}

let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna.value = transformUpperCase(elNamaPengguna.value)
})

function checkPassword(){
    let elKataLaluan = document.getElementById("kataLaluan")
    let pass_val = elKataLaluan.value
    if(pass_val.length > 5){
        alert("password length accepted")
    } else {
        alert("password too short - make sure it 5 or more words")
    }
}

let elPassword = document.getElementById("kataLaluan")
elPassword.onblur = checkPassword