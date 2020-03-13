const showSearchResults = (dataList) => {
    
    const template = document.querySelector("template");

    const videoCardList = document.querySelector("#videoCardList");

    videoCardList.textContent = "";

    var fragment = new DocumentFragment();

    dataList.forEach(data => {
        const videoCardNode = document.importNode(template.content.querySelector("#videoCard"), true);

        const titleNode = document.importNode(template.content.querySelector("#videoTitle"), true);
        const previewNode = document.importNode(template.content.querySelector("#preview"), true);
        const authorNode = document.importNode(template.content.querySelector("#author"), true);
        const publishedNode = document.importNode(template.content.querySelector("#published-date"), true);
        const descriptionNode = document.importNode(template.content.querySelector("#description"), true);

        const {title, channelTitle, publishedAt, description, thumbnails} = data.snippet;
        titleNode.textContent = title;
        previewNode.innerHTML = `<img src = "${thumbnails.medium.url}"/>`;
        authorNode.textContent = channelTitle;
        publishedNode.textContent = publishedAt;
        descriptionNode.textContent = description;

        videoCardNode.textContent = "";
        videoCardNode.appendChild(previewNode);
        videoCardNode.appendChild(titleNode);
        videoCardNode.appendChild(authorNode);
        videoCardNode.appendChild(publishedNode);
        videoCardNode.appendChild(descriptionNode);

        fragment.appendChild(videoCardNode);
    })

    videoCardList.appendChild(fragment);
}

