//JSON
//java script object notation

// API
// application programming interface

user = {
    user_name: "John",
    user_email: "johngmail.com",
    user_address: "uk",

};

//convert my javascript object json string

json_file = JSON.stringify(user)
console.log(json_file);

// {"user_name":"John","user_email":"johngmail.com","user_address":"uk"}