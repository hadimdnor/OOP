function loadUser(){
    let url = "https://randomuser.me/api/"
    console.log(url)

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let fn = document.getElementById("firstName")
        let In = document.getElementById("lastName")
        let phone = document.getElementById("phone")
        let img = document.getElementById("userImg")

        fn.innerHTML = data.results[0].name.first
        In.innerHTML = data.results[0].name.last
        phone.innerHTML = data.results[0].phone
        img.src = data.results[0].picture.large

    })
}

let elLoadUser = document.getElementById("getRandomUser")
elLoadUser.addEventListener("click", function(){
    loadUser()
})

let elLoadMultipleUser = document.getElementById("getMultipleUser")
elLoadMultipleUser.addEventListener("click", function(){
    let userCount = document.getElementById("userCount")
    loadMultipleUser(userCount.value)
})

function loadMultipleUser(userCount){
    let url = "https://randomuser.me/api/?results=" + userCount
    let temp = ""

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let allUsers = document.getElementById("allUsers")

        for(let i = 0; i< data.results.length; i++){
            let fn = '<div>' + data.results[i].name.first + '<div>'
            let In = '<div>' + data.results[i].name.last + '<div>'
            let phone = '<div>' + data.results[i].phone + '<div>'
            let img = '<img src="'+ data.results[i].picture.large + '">'

            temp = temp + fn + In + phone +img
        }
        allUsers.innerHTML= temp
    })
}


let elLoadGender = document.getElementById("getGenderUser")
elLoadGender.addEventListener("click", function(){
    console.log("Load Gender click")
    //  get gender

    let gender = document.getElementById("userGender")
    console.log(gender.value)

    // get the number of result
    let numberOfResult = document.getElementById("userGenderCount")
    console.log(numberOfResult.value)
   
    // call loadGender() and pass gender and number of result

    loadGender(gender.value,numberOfResult.value)
})

function loadGender(gender, userCount){
    let url = "https://randomuser.me/api/?results="+userCount+"&gender="+gender 
    console.log(url)
    let temp = ""

    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        let resultDiv = document.getElementById("allGenderUsers")

        for(let i = 0; i< data.results.length; i++){
            let fn = '<div>' + data.results[i].name.first + '<div>'
            let In = '<div>' + data.results[i].name.last + '<div>'
            let phone = '<div>' + data.results[i].phone + '<div>'
            let img = '<img src="'+ data.results[i].picture.large + '">'

            temp = temp + fn + In + phone +img
        }
        resultDiv.innerHTML= temp
    })
}