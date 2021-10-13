let app = new Vue({
    el: "#app1",
    data: {
        message: "Hello Vue"

    }
})


let app2 = new Vue({
    el: "#app2",
    data:{
        massage: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://www.google.com",
        LinkTag: "Google Page"
    }
})

let app3 = new Vue({
    el: "#app3",
    data: {
        showIt: true
    },
    
    methods:{
        toggleMsg: function(){
            if(this.showIt){
                this.showIt = false
            }else{
                this.showIt = true
            }
        }
    }
})

let app4 = new Vue({
    el: "#app4",
    data: {
        theList:[
            {text: "Learn HTML"},
            {text: "Learn CSS"},
            {text: "Learn JS"}
        ]
    }
})


let app5 = new Vue({
    el: "#app5",
    data: {
        message: "Hello World"
    }
})