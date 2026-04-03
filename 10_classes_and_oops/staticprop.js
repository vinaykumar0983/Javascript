class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username : ${this.username}`);  
    }

   static createID(){
        return `123`
    }
    
}

const hitesh = new User("Vinay")

//console.log(hitesh.createID());


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@gmail.com")
console.log(iphone.createID);