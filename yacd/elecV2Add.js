let path = document.createElement("div")
path.style="position: absolute;top: 2em;right: 8em;background: var(--color-text);color: var(--color-background);padding: 6px;font-size: 22px;border-radius: 16px;cursor: pointer;visibility: visible;"
path.innerHTML = '<input id="path" style="border: none;border-radius: 10px;padding: 4px 10px;width: 360px;">'
document.body.append(path)

let div = document.createElement("div")
div.id = "reload"
div.innerHTML = "reload"
div.style = "position: absolute;top: 2em;right: 2em;background: var(--color-text);color: var(--color-background);padding: 8px 16px;font-size: 22px;border-radius: 16px;cursor: pointer;"
div.addEventListener("click", function () {
  let body = { path: document.querySelector("#path").value || "D:\\Program Files\\fQthings\\clash\\config.yaml" }
  // console.log(body)
  fetch("/configs",{method: "put", body: JSON.stringify(body)}).then(res=>{
      console.log("reload done")
      alert(res.status + " - " + res.statusText + " reload done")
    })
})
document.body.append(div)