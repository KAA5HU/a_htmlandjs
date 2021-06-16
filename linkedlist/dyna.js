//getting all the elements from the file index.html
const linkedListEle = document.getElementById("linkedList");
const inputElementEle = document.getElementById("inputElement");
const onClickAddEle = document.getElementById("onClickAdd");
const onClickDelEle = document.getElementById("onClickDel");
const onClickAddAtBegEle = document.getElementById('onClickAddAtBeg');
const inputElementBegEle = document.getElementById('inputElementBeg');
const onClickDelStartEle = document.getElementById('onClickDelStart');
const removeNodeEle = document.getElementById('removeNode');
const ElementRemoveClickEle = document.getElementById('ElementRemoveClick');
const newNumberEle = document.getElementById('newNumber');
const exitingNumberEle = document.getElementById('exitingNumber');
const addsideEle = document.getElementById('addside');
const replaceNewEle = document.getElementById('replaceNew');
const replaceExitEle = document.getElementById('replaceExit');
const replceClickEle = document.getElementById('replceClick');
const addNewNumberEle = document.getElementById('addNewNumber');
const addExitNumberEle = document.getElementById('addExitNumber');
const addAfterClickEle = document.getElementById('addAfterClick');
const sortEle = document.getElementById('sort');
//Here every node and arrow is creating but its not printing
//its just returning
function createAndAppend(number) {
    let nodeId = "node" + number
    let imgAndNode = document.createElement("div");
    imgAndNode.id = nodeId;
    imgAndNode.classList.add("a")

    let nodeCon = document.createElement("div");
    nodeCon.classList.add("node-con");

    let numberEle = document.createElement("p");
    numberEle.classList.add("number");
    numberEle.textContent = number; //value
    nodeCon.appendChild(numberEle);

    imgAndNode.appendChild(nodeCon)

    let imgCon = document.createElement("i") //arrow image
    imgCon.classList.add("fas",  "fa-long-arrow-alt-right", "arrow")
    imgAndNode.appendChild(imgCon)

    return imgAndNode
}

//returning the node and array 
//and appending to the linkedlListEle
function addEle() {
    let number = inputElementEle.value;
    linkedListEle.appendChild(createAndAppend(number))
    inputElementEle.value = ""
}
//Used the Dom Elements to perform the operations directly
function delEle() {

    linkedListEle.lastChild.remove()
}

//function to add elements at the beggining
//for that prepend method is used
function addBegEle() {
    let number = inputElementBegEle.value
    linkedListEle.prepend(createAndAppend(number))
    inputElementBegEle.value = ""
}

//function is used to remove the start node 
//from the linkedListEle
function removeStart() {
    linkedListEle.firstChild.remove()
}

//function used to remove the an element which user want to remove
function removeAnyEle() {
    number = removeNodeEle.value
    let count = document.getElementsByTagName('i').length
    if (count == 0) {
        alert("List is empty") //if list is empty
    }
    else{
    for (var i = 0; i<count; i++) {
        if(document.getElementById("node" + number).textContent == number) {
            document.getElementById("node" + number).remove()
        }
    }
    removeNodeEle.value = ""
}
}
//function used to print the elements before the user enter element
function addside() {
    newNum = newNumberEle.value;
    exitNumber = exitingNumberEle.value;
    let count = document.getElementsByTagName('i').length
    if (count == 0) {
        alert("List is empty") //if list is empty
    }
    else {
        for (var i = 0; i<count; i++) {
            if (document.getElementById("node" + exitNumber).textContent == exitNumber) {
                var a = createAndAppend(newNum)
                linkedListEle.insertBefore(a, document.getElementById("node" + exitNumber))
                break
            } 
        }
    }
}
//function used to replace elements
function replaceBtt() {
    let exitNUm = replaceExitEle.value
    let newNUm = replaceNewEle.value
    let count = document.getElementsByTagName('i').length
    if (count == 0) {
        alert("List is empty") //if list is empty
    }else {
        for (var i=0; i< count; i++) {
            if (document.getElementById("node" + exitNUm).textContent == exitNUm) {
                var a = createAndAppend(newNUm)
                r = document.getElementById("node" + exitNUm).childNodes[0]
                r.replaceChild(a, r.childNodes[0])
                
            }
        }
    }
}

//function used to print teh elememts after the user enter the elements
function addAfter() {
    let newNum = addNewNumberEle.value
    let exitNUm = addExitNumberEle.value
    let count = document.getElementsByTagName('i').length
    if (count == 0) {
        alert("List is empty") //if list is empty
    } 
    else {
        for (var i=0; i<count; i++) {
            if (document.getElementById("node" + exitNUm).textContent == exitNUm) {
                
                var a = createAndAppend(newNum)
                linkedListEle.insertBefore(a, document.getElementById("node" + exitNUm).nextSibling)
                break
            }
        }
    }
}

function sorting() {
    let count = document.getElementsByTagName('i').length
    firstChild = linkedListEle.firstChild.textContent
    a = document.getElementById("node"+firstChild)
    b = a.nextSibling
    console.log(a)
    
    if (a.textContent > b.textContent) {
        console/log("true")     
    }  
}


//This are the event listeners
onClickAddEle.addEventListener('click', addEle)
onClickDelEle.addEventListener('click', delEle)
onClickAddAtBegEle.addEventListener('click', addBegEle)
onClickDelStartEle.addEventListener('click', removeStart)
ElementRemoveClickEle.addEventListener('click', removeAnyEle)
addsideEle.addEventListener('click', addside)
replceClickEle.addEventListener('click', replaceBtt)
addAfterClickEle.addEventListener('click', addAfter)
sortEle.addEventListener('click', sorting)