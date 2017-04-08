//Problem: Clicking on image takes user to a dead end
//Solution: Create lightbox - showing an enlarge version of the image.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//create var to keep tack of image index for prev/next
var $index = 0;

    //navigation
    var $galleryLength = $("#imageGallery li").length;

    //add PREV nav
    $overlay.append("<button class='fa fa-angle-left fa-3x btnGallery' id='btnPrev'></button>");

    //an image
    $overlay.append($image);

    //add NEXT nav
    $overlay.append("<button class='fa fa-angle-right fa-3x btnGallery' id='btnNext'></button>");

    //add caption
    $overlay.append($caption);

//create overlay
$("body").append($overlay);

//create image updated for overlay when navigating
var updateImage = function(imageLocation, imageCaption){

  //update the overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Get child <img> title atrbute and set caption
  $caption.text(imageCaption);
}

//capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    
    //Update overlay with the image clicked
    $image.attr("src", imageLocation);
  
    //show overlay
    $overlay.show();
    
    //get child's title attribute and set caption
    var captionText = $(this).children("img").attr("title");
    $caption.text(captionText);
});

//prev and next function
var prevNext = function(prev ) {
  //set prev to true to move backwards in the index if flag set move backwards, if not move forwards
  if(!prev) { $index++; }
  else { $index--; }

  //if out of index reset
  if ($index < 0) { $index = $galleryLength-1;}
  if ($index > 10) { $index = 0; }

  //grab the element with index and get link
  var newImgSelected = $("#imageGallery .filtr-item").get($index).getElementsByTagName("a");

  //grab link information
  var imageLocation = $(newImgSelected).attr("href");
  var imageCaption =  $(newImgSelected).children("img").attr("title");

  //update overlay with next/prev image
  updateImage(imageLocation, imageCaption);
}

//button events

$("#btnPrev").click(function(event){
      prevNext(true);
    });

    $("#btnNext").click(function(event){
      prevNext();
    });

    //when overlay is click
    $overlay.click(function(event){
      
        //hide the overlay  
        if(event.target.id == "overlay")
        $(this).slideUp("fast");
});