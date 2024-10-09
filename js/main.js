// Listen to form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmarks
function saveBookmark(e){
    
    // select values from input elements
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    // Call validateForm() to check if the inputs are valid
    if(!validateForm(siteName, siteUrl)){

        // if invalid stop running code
        return false;

    }


 
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

   // re-fetch bookmarks after updating array
   fetchBookmarks();

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
                                    + ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '
                                    +'</h3>'+
                                 '</div>';

   }

}


// Delete bookmarks
function deleteBookmark(url){

    // get bookmarks array from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // loop through bookmarks array 
   for(var i = 0; i < bookmarks.length; i++){

        // check if current url 
        // is equal to url passed from delete button
        if(bookmarks[i].url == url){

            // remove current url from array
            bookmarks.splice(i, 1);

            /*  splice(i, 1) removes the bookmark at index i from the bookmarks array.
                i is the index of the bookmark that matches.
                1 indicates that you want to delete exactly 1 element from 
                the array starting at index i.
                 */

        }
   }

   // save updated array to local storage
   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

   // re-fetch bookmarks after updating array
   fetchBookmarks();

}


// Validate Form
function validateForm(siteName, siteUrl){


    // if siteName or siteUrl is null
    if(!siteName || !siteUrl){

        alert('Please fill in the form');
        return false; // stop running
    }

    // regular expression to validate urls
    var expression = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9#-]+\/?)*$/;
    var regex = new RegExp(expression);

    // if entered value does not match regex
    if(!siteUrl.match(regex)){

        alert('Please use a valid URL');
        return false; // stop running
    }

    // if above conditions are not met
    // keep code running 
    return true;
}