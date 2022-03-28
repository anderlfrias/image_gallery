const url = 'https://picsum.photos/v2/list';

console.log("Url: ", url);

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    console.log("data",data);
    let result = data.results;
    console.log(result);
})
    .catch(function(error) {
    console.log(error);
});