const linkedListEle = document.getElementById("linkedList");
const inputElementEle = document.getElementById("inputElement");
const onClickAddEle = document.getElementById("onClickAdd");
const onClickDelEle = document.getElementById("onClickDel");
const onClickAddAtBegEle = document.getElementById('onClickAddAtBeg');
const inputElementBegEle = document.getElementById('inputElementBeg');

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

    linkedListEle.appendChild(imgAndNode)

}

function removeChild() {
    let count = linkedListEle.getElementsByTagName("i").length
    for (var i = 0; i<count; i++) {
        a = linkedListEle.id
        console.log(a)
        linkedListEle.removeChild(linkedListEle.id)
    }
    
}

function appendStarting() {
    
}

function addEle() {
    let number = inputElementEle.value;
    createAndAppend(number)
}

function delEle() {

    removeChild()
}

function addBegEle() {
    let number = inputElementBegEle.value
    appendStarting()
}

onClickAddEle.addEventListener('click', addEle)
onClickDelEle.addEventListener('click', delEle)
onClickAddAtBegEle.addEventListener('click', addBegEle)