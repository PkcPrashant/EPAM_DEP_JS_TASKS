function showContent(dataList) {//set parameter as datalist
    // dataList = dataList.items; 

    const template = document.querySelector("template.template");

    const addTemplateHere = document.querySelector(".addTemplateHere");

    addTemplateHere.textContent = "";

    dataList.forEach(data => {
        const mytemplateNode = document.importNode(template.content.querySelector(".mytemplate"), true);

        const titleNode = document.importNode(template.content.querySelector(".videoTitle"), true);
        const previewNode = document.importNode(template.content.querySelector(".preview"), true);
        const authorNode = document.importNode(template.content.querySelector(".author"), true);
        const publishedNode = document.importNode(template.content.querySelector(".published_date"), true);
        const descriptionNode = document.importNode(template.content.querySelector(".description"), true);

        // Add Data Here
        const {title, channelTitle, publishedAt, description, thumbnails} = data.snippet;
        previewNode.innerHTML = `<img src = "${thumbnails.medium.url}"/>`;
        titleNode.textContent = title;
        authorNode.textContent = channelTitle;
        publishedNode.textContent = publishedAt;
        descriptionNode.textContent = description;

        // Append All The Childs To The Div
        mytemplateNode.textContent = "";
        mytemplateNode.appendChild(previewNode);
        mytemplateNode.appendChild(titleNode);
        mytemplateNode.appendChild(authorNode);
        mytemplateNode.appendChild(publishedNode);
        mytemplateNode.appendChild(descriptionNode);

        // Append The Template To The Main Body > Main > Div
        addTemplateHere.appendChild(mytemplateNode);
    })
}
