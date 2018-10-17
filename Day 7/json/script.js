/* JSON containing an array of video objects */
var videos = [
  {
    "youtubeId":"Tj_0zcOlb4M",
		"title":"The Good Place",
		"author":"A good one",
		"favorite": false
  },
  {
    "youtubeId":"epUk3T2Kfno",
		"title":"Otters holding hands",
		"author":"So cute",
		"favorite": false
  },
  {
    "youtubeId":"iJ4T9CQA0UM",
		"title":"Guy On A Buffalo",
		"author":"Truly amazing",
		"favorite": false
	},
	{
    "youtubeId":"QLvvkTbHjHI",
		"title":"What's this?",
		"author":"How should i know",
		"favorite": true
	},
	{
    "youtubeId":"9JDzlhW3XTM",
		"title":"I wanna be Like you",
		"author":"Go ahead",
		"favorite": false
  }
];


/* Create a div to hold the video player */
var body = document.getElementsByTagName('body')[0]; //Get the body
var videoWatcher = document.createElement('div'); //Create a new div
videoWatcher.id = 'video-watcher'; //Assign the div and ID
body.appendChild(videoWatcher); //Append the new ID to the body
var playerContainer = document.getElementById('video-watcher'); //Select the new div and store it in a variable for use later.

var videodescription = document.createElement('h2');

/* Function that adds each video from the JSON to the list of videos */

var addVideoToList = function(video) {
	/* Get the list of all the videos */
	var videoList = document.getElementById('videos-list');

	/* Create the elements we'll need. */
	var videoLink = document.createElement('a'); //Create a link
	var videoTitle = document.createTextNode(video.title); //Create a text node with the video title
	var videoThumb = document.createElement('img'); //Create an image for the video thumbnail
	var videoItem = document.createElement('li'); //Create a list item to add to the list of videos

	if (video.favorite){
		// videoItem.style.border = "thick solid #ff0000"
		videoItem.setAttribute("style", "border: 1px solid red");
	}
	
	var thumbnailURL = youtube.generateThumbnailUrl(video.youtubeId); //Get the URL of the video thumbnail
	videoThumb.src = thumbnailURL; //Set the src attribute of the image
	videoLink.appendChild(videoThumb); //Append the image to the link
	videoLink.appendChild(videoTitle); //Append the video title to the link
	videoItem.appendChild(videoLink); //Append the video link to the list item
	videoList.appendChild(videoItem); //Append the list item to the list of videos
	
	/* Add our event handler to play the video we want to watch */
	videoLink.addEventListener('click', function(e){
		e.preventDefault(); //Prevent the browser's default click behavior

		var videoEmbed = document.createElement('iframe'); //Create an iframe
		videoEmbed.src = youtube.generateEmbedUrl(video.youtubeId); //Set the src to the video
		videoEmbed.width = 1024; //Set the width of the video iframe
		videoEmbed.height = 600; //Set the height of the video iframe
		videoEmbed.innerHTML = videoTitle;
		

		playerContainer.innerHTML = ''; //Erase any previously appended items from the video player div

		videodescription.innerHTML = video.title + " " + video.author;
		videoWatcher.appendChild(videodescription);


		playerContainer.appendChild(videoEmbed); //Append the new iframe we just created

	});
}

/* Loop through all the videos in the JSON and add each to the list of videos */
for (var i=0; i<videos.length; i++) {
	addVideoToList(videos[i]);
}