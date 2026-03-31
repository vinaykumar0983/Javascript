const user = {
    username:"Vinay",
    losinCount:8,
    signIn:true,

    getUserDetails: function(){
      // console.log("Got user details");
       //console.log(`UserName : ${this,this.username}`)
       //console.log(this);
       
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

//console.log(this);


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting  = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    //return this;    //it autometically definie
}


const userOne = new User("Vinay",22, true);

const userTwo = new User("Krishna",19,false);
console.log(userOne.constructor);
//console.log(userTwo);

