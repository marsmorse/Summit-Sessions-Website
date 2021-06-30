const LabelErrors = {
    name: [0, 1],
    email: [0, 2],
    textbox: [0, 1]
}
const Errors = {
    messages: [
        `input exceeds maximum amount of characters`,
        `input does not meet the minimum number of characters `,
        `input must be a valid email with an @ and .com, .org, etc..`
    ],

    //returns true if input is wrong 
    tests: [ 
        function(value, min, max) { return (value.length > max)? true:false; },
        function(value, min, max) { return (value.length < min)? true:false; },
        function(value, min, max) { return (value.match(/((\w+)@(\w+).\w\w\w)/g) !== null)? false:true; }
    ]
}
export { LabelErrors, Errors }