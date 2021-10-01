function transformUpperCase(_val){
    return _val.toUppercase()
}

let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna.value = transformUpperCase(elNamaPengguna.value)
})