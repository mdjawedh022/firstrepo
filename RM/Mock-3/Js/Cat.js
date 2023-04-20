
let api = 'https://api.thecatapi.com/v1/images/search?limit=10'

let favouritelist = JSON.parse(localStorage.getItem("favourite")) || [];

const getImages = async(i) => {
    let res = await fetch(api)
    let data = await res.json()
    console.log(data)
    renderImages(data)
}
getImages()


let renderImages = (data) => {
    let container = document.getElementById('images')
    container.innerHTML = null;

    data.forEach((el) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'divimage')
    
        let img = document.createElement('img');
        img.setAttribute('class', 'cates')
        img.src = el.url
        img.addEventListener('click', () => {
            favouritelist.push(el);
            localStorage.setItem("favourite", JSON.stringify(favouritelist));
        })
    
        div.append(img)
        container.appendChild(div)
    })

}