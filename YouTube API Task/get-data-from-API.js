var nextPageToken, prevPageToken;

const fetchVideoData = (searchTerm, pageTokenQuery) => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDHT5ukuCBHgTyvpMVGiFXRuSksrLM-gvo&type=video&part=snippet&maxResults=15&${pageTokenQuery}&q=${searchTerm}`;
    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            nextPageToken = resp.nextPageToken;
            prevPageToken = resp.prevPageToken;
            showSearchResults(resp.items);
        })
        .catch(alert);
}