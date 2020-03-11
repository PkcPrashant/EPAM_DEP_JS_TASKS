function getData() {

    var searchTerm = document.querySelector("input#takeSearchInput").value || "trailers";

    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDHT5ukuCBHgTyvpMVGiFXRuSksrLM-gvo&type=video&part=snippet&maxResults=15&q=${searchTerm}`;
    fetch(url)
    .then(resp => resp.json())
    .then(resp => showContent(resp.items))
    .catch(alert);

}
