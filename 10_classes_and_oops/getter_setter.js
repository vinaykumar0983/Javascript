class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email (){
        return `${this._email}`
    }

    set email(value){
        this._email = value
    }

    get password (){
        return `${this._password}Vinay`
    }

    set password(value){
        this._password = value
    }
}

const vinay = new User("vinay@gmail.com","123abc")
console.log(vinay.password);
console.log(vinay.email);
