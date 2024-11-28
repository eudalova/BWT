async function getResponce() {

    let responce = await fetch("breeds.json")
    console.log("responce:\n", responce, "\n /responce: \n")
    let content = await responce.text()
    console.log("await responce.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 9)
    console.log("content.slice(0, 9)", content)
    let key
    for (key in content) {
        console.log(content[key].name)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class=""card-img-top"" src=${content[key].imgSrc}>
        <a href="wikiLink" class="card-title">${content[key].name}</a>
        <p class="card-text">${content[key].description}.</p>
        </li>
                `
    }
}
getResponce()