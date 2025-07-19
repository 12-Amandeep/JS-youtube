// Immediately Invoked Function Expression (IIFE)

(function db() {              // Named IIFE
    console.log(`DB CONNECTED`);
}) ();                        // Now it will be immediatly executed - sometimes it doesn't know where to end so we need to add the ';' at the end

//can also be written as:

( (name) => {               // Unnamed IIFE with parameter
    console.log(`${name}`);
}) ("Amandeep")