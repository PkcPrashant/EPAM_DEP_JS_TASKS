var searchTerm;
function getData() {
    if(document.querySelector("input#takeSearchInput")) {
        let s = this.searchTerm;
        console.log(searchTerm);
        searchTerm = document.querySelector("input#takeSearchInput").value;
        console.log(s, searchTerm, "HIII");
        searchTerm = searchTerm ? searchTerm : '';
        if(searchTerm){
            fetchData(searchTerm);
        }
    } else{
        fetchData('');
    }
};
getData();

function getNextData(){
    fetchData(searchTerm , `pageToken=${data.nextPageToken}`);
    console.log(data.nextPageToken);
}

function getPreviousData(){
    data.prevPageToken && fetchData(searchTerm , `pageToken=${data.prevPageToken}`);
    console.log(data.prevPageToken);
}