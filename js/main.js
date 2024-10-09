// Listen to form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmarks
function saveBookmark(e){
    
    // select values from input elements
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    // create bookmark array object
    var bookmark = {

        name: siteName,
        url: siteUrl

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

    } else { // if there is something in bookmarks (localStorage)

        // get bookmarks array from local storage
        // convert string to JSON
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        // add new bookmark to array
        bookmarks.push(bookmark);

        // save updated array to local storage
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


// Fetch Bookmarks
function fetchBookmarks(){

    // get bookmarks array from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

   // output bookmarks array to page

   // select div
   var bookmarkResults = document.getElementById('bookmarkResults');

   // add html div
   bookmarkResults.innerHTML = '';

   // loop through bookmarks array 
   for(var i = 0; i < bookmarks.length; i++){

    // get current bookmark name
    var name = bookmarks[i].name;

    // get current bookmark url
    var url = bookmarks[i].url;

    // append html with bookmark name to bookmarkResults div
    bookmarkResults.innerHTML += '<div class="bg-light p-3 mb-3">'+
                                    '<h3>'+name+
                                    ' <a class="btn btn-success" target="_blank" href="'+url+'">Visit</a> '
                                    + ' <a class="btn btn-danger" target="_blank" href="'+url+'">Delete</a> '
                                    +'</h3>'+
                                 '</div>';

   }

}