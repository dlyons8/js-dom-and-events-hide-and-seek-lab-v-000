function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rankedArray = document.querySelectorAll('.ranked-list')

  for (const subArray of rankedArray) {
    let array = subArray.children
    for (let i = 0; i < array.length; i++) {
      array[i].innerHTML = parseInt(array[i].innerHTML) + n
    }
  }
}

function deepestChild(){
  let nodeList = document.getElementById('grand-node').querySelectorAll('div')

  return nodeList[nodeList.length-1]
}
