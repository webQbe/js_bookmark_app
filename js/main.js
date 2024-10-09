// Listen to form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
    
    console.log('It works!');

    // prevent submit to log message
    e.preventDefault();

}