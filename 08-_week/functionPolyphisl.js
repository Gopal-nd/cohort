const { BsYoutube } = require("react-icons/bs")

if(!Function.prototype.MyApply){
    Function.prototype.MyApply = function(){
        console.log('my applay called',this)
    }
}

function ok(){
    console.log('hi')
}


ok.MyApply()