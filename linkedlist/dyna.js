const linkedListEle = document.getElementById("linkedList");
const inputElementEle = document.getElementById("inputElement");
const onClickAddEle = document.getElementById("onClickAdd");
const onClickDelEle = document.getElementById("onClickDel");
const onClickAddAtBegEle = document.getElementById('onClickAddAtBeg');
const inputElementBegEle = document.getElementById('inputElementBeg');
const onClickDelStartEle = document.getElementById('onClickDelStart');

var count = 0;

function createAndAppend(number) {
    let nodeId = "node" + count
    count = count + 1
    let imgAndNode = document.createElement("div");
    imgAndNode.id = nodeId;
    imgAndNode.classList.add("a")

    let nodeCon = document.createElement("div");
    nodeCon.classList.add("node-con");

    let numberEle = document.createElement("p");
    numberEle.classList.add("number");
    numberEle.textContent = number;
    nodeCon.appendChild(numberEle);

    imgAndNode.appendChild(nodeCon)

    let imgCon = document.createElement("i")
    imgCon.classList.add("fas",  "fa-long-arrow-alt-right", "arrow")
    imgAndNode.appendChild(imgCon)

    return imgAndNode
}


function addEle() {
    let number = inputElementEle.value;
    linkedListEle.appendChild(createAndAppend(number))
}

function delEle() {

    linkedListEle.lastChild.remove()
}

function addBegEle() {
    let number = inputElementBegEle.value
    linkedListEle.prepend(createAndAppend(number))
}

function removeStart() {
    linkedListEle.firstChild.remove()
}

onClickAddEle.addEventListener('click', addEle)
onClickDelEle.addEventListener('click', delEle)
onClickAddAtBegEle.addEventListener('click', addBegEle)
onClickDelStartEle.addEventListener('click', removeStart)