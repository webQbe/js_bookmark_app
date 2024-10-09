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

    // log bookmark object
    console.log(bookmark);




    // prevent submit to log message
    e.preventDefault();

}