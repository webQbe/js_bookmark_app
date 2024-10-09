// Listen to form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);


function saveBookmark(e){
    
    // select input element
    var siteName = document.getElementById('siteName').value;

    // log element
    console.log(siteName);


    // prevent submit to log message
    e.preventDefault();

}