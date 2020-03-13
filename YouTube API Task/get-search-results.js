let searchTerm;

const getSearchResults = () => {
    if(document.querySelector("input#searchVideoInput")) {
        searchTerm = document.querySelector("input#searchVideoInput").value;
        (searchTerm) && fetchVideoData(searchTerm);
    } else{
        fetchVideoData('');
    }
};

getSearchResults();

const getSearchResultsNextPage = () => fetchVideoData(searchTerm , `pageToken=${nextPageToken}`);

const getSearchResultsPreviousPage = () => prevPageToken && fetchVideoData(searchTerm , `pageToken=${prevPageToken}`);