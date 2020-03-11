function showContent(dataList)  {//set parameter as datalist
    // dataList = dataList.items; // Remove this line

    var template = document.querySelector("template.template");
    
    document.querySelector(".addTemplateHere").textContent = "";
    
    dataList.forEach(function(data){
        let mytemplateNode = document.importNode(template.content.querySelector(".mytemplate"), true);

        let titleNode = document.importNode(template.content.querySelector(".videoTitle"), true);
        let previewNode = document.importNode(template.content.querySelector(".preview"), true);
        let authorNode = document.importNode(template.content.querySelector(".author"), true);
        let publishedNode = document.importNode(template.content.querySelector(".published_date"), true);
        let descriptionNode = document.importNode(template.content.querySelector(".description"), true);
        
        // Add Data Here
        previewNode.innerHTML = `<img src = "${data.snippet.thumbnails.medium.url}"/>`;
        titleNode.textContent = data.snippet.title;
        authorNode.textContent = data.snippet.channelTitle;
        publishedNode.textContent = data.snippet.publishedAt;
        descriptionNode.textContent = data.snippet.description;
        
        // Append All The Childs To The Div
        mytemplateNode.textContent = "";
        mytemplateNode.appendChild(previewNode);
        mytemplateNode.appendChild(titleNode);
        mytemplateNode.appendChild(authorNode);
        mytemplateNode.appendChild(publishedNode);
        mytemplateNode.appendChild(descriptionNode);

        // Append The Template To The Main Body > Main > Div
        document.querySelector(".addTemplateHere").appendChild(mytemplateNode);
    })
}