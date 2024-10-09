// Listen to form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);


function saveBookmark(e){
    
    // select values from input elements
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    // create bookmark array object
    var bookmark = {

        name : siteName,
        url : siteUrl

    }

    // local storage test
    // pass key & value
    localStorage.setItem('test', 'Hello World!');

    // click sumbit & go to storage > local storage > http://127.0.0.1:5500
    // see saved items


    // prevent submit to log message
    e.preventDefault();

}