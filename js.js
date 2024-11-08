size = '99%';

function min(){
    size = '48%';
    Save();
}

function max(){
    size = '99%';
    Save();
}

function addProgect(){
    var newImg = document.createElement('img');
    newImg.src = 'https://s3.objstor.cloud4u.com/unti-prod-people/file/presentation/project/ayv2o57ygu.jpg';
    newImg.className = 'new';
    newImg.style.width = size;
    newImg.style.height = size;
    newImg.style.border = 'solid()';
    document.getElementById('list').appendChild(newImg);
    newImg.onclick = deleteItem;
    Save();
}

function deleteItem(){
    document.getElementById('list').removeChild(this)
    Save();
}

function Save(){
    localStorage.savedList = document.getElementById('list').innerHTML;
}

function load(){
    document.getElementById('list').innerHTML = localStorage.savedList;

    for (var i=0; i < list.children.length; i++){
        list.children[i].onclick = deleteItem;
    }
}

if (localStorage.savedList){
    load();
}