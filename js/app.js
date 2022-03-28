const url = 'https://picsum.photos/v2/list';
const imagesContainer = document.getElementById('image_container');


console.log("Url: ", url);
console.log("imagesContainer", imagesContainer);

fetch(url)
.then((resp) => resp.json())
.then(function(images) {
    let html = '';
    console.log("data",images);
    images.forEach(img => {
        console.log(img.download_url);
        html += `<figure class="image">
                    <img src="${img.download_url}" alt="">
                </figure>`;
    });
    console.log(html);
    imagesContainer.innerHTML = html;
})
    .catch(function(error) {
    console.log(error);
});