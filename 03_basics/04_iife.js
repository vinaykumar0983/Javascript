// Immediately Invoked Function Expressions (IIFE)

(function chai(){               // Named IIFE
    console.log(`DB Connected`);  
})();                            // ; used for end ,Special case

// (function code(){
//     console.log(`DB Connected Two`);  
// })();

(  (username) => {                // UnNamed IIFE
      console.log(`DB Connected Two ${username}`); 
})("Vinay")


// ()  function   , () for execution  just like chai()

