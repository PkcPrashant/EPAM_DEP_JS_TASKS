var data;
function fetchData(searchTerm, query) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDHT5ukuCBHgTyvpMVGiFXRuSksrLM-gvo&type=video&part=snippet&maxResults=15&${query}&q=${searchTerm}`;
    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            data = resp;
            showContent(resp.items);
        })
        .catch(alert);
}
