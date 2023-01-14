let API_KEY = "AIzaSyD-dxrjbmAr543PA_2NPaGwkogDA5ydpOU";

let container = document.getElementById("container");

let searchVideo = async () => {
  try {
    let query = document.getElementById("query").value;

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20&type=video&order=viewCount&videoEmbebbable=true`
    );

    let data = await res.json();
    // console.log("items",items);
    let actual_data = data.items;
    display(actual_data);
    // console.log(actual_data);
  } catch (error) {
    console.log(error);
  }
};

let display = (data) => {
  container.innerHTML = null;
  data.map(({ snippet, id}) => {
    const title = snippet.title;
    const channel_name = snippet.channelTitle;
    const thumbnail = snippet.thumbnails.high.url;
    const videoId = id.videoId;

    const div = document.createElement("div");
    const img = document.createElement("img");
    const title_html = document.createElement("h5");
    const channelName_html = document.createElement("h4");

    img.src = thumbnail;
    title_html.innerText = title;
    channelName_html.innerText = channel_name;
    

     div.onclick=()=>{
      console.log('clicked')
     }

    div.append(img, title_html, channelName_html);
    container.append(div);
  });
};


// function storeClickedvideo(data){
//   localStorage.setItem("click_item",JSON.stringify(data))

//   window.location='video.html'
// }



const showVideo=(x)=>{
  window.location.href='video.html'

  x=JSON.stringify(x);

  localStorage.setItem('clicked_video',x)
}

// https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20
// let main_conatiner =document.getElementById("container");
// let API="AIzaSyD-dxrjbmAr543PA_2NPaGwkogDA5ydpOU";

// let searchVideo=async()=>{
// try{
//     let query=document.getElementById("query");

//     let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`)

//     let data=await res.json();

//     let actual_data=data.items
//     console.log(actual_data)
//     appendVideos(actual_data)
// } catch(err){
//     console.log("err:",err)
// }
// }
