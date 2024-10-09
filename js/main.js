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

    // check if bookmarks exist in local storage
    if(localStorage.getItem('bookmarks') === null){

        // initalize array
        var bookmarks = [];

        // insert to array
        bookmarks.push(bookmark);

        // save bookmarks array to local storage
        // save it as a string with JSON.stringify()
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }




/*  // local storage test
    // save to local storage
    localStorage.setItem('test', 'Hello World!');
    // get item from local storage
    console.log(localStorage.getItem('test'));
    // delete item from local storage
    localStorage.removeItem('test');
    // get item from local storage
    console.log(localStorage.getItem('test')); */



    // prevent submit to log message
    e.preventDefault();

}