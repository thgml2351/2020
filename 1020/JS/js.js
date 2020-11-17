//글쓰기  불러오기
const MODAL = document.querySelector(".modalBox");
const checkDelBtn = document.getElementById("checkDelBtn");
const delBtn = document.querySelectorAll(".delBtn");
const modifyBtn = document.querySelectorAll(".modifyBtn");
var sw, category, title, writer;
var ca, ti, wr;
//칸 안에 있는 삭제
function delRowOne(event) {
    var thisTd = event.target.parentNode;
    var thisTr = thisTd.parentNode;
    var thisThead = thisTr.parentNode;
    thisThead.removeChild(thisTr);
  }

function modify(event) {
    sw = 1;
    MODAL.classList.remove("hidden");

    var thisTd = event.target.parentNode;
    var thisTr = thisTd.parentNode;

    ca = thisTr.cells[1];
    ti = thisTr.cells[2];
    wr = thisTr.cells[3];

    Array.from(document.getElementById("write-category").options).forEach(function (data) {
        if(data.innerText == ca.innerText){
            data.selected = true;
        }
    })
    document.getElementById("write-title").value = ti.innerText;
    document.getElementById("write-writer").value = wr.innerText;

}

function test() {
    sw = 0;
    MODAL.classList.remove("hidden");
}
function test2() {
    MODAL.classList.add("hidden");
}


//추가
function rowAdd() {
    if(sw==0) {

    
        var boardTable = document.getElementById('boardTable');

        category = document.getElementById('write-category');
        category = category.options[category.selectedIndex].text;
    
        title = document.getElementById('write-title').value;
    
        writer = document.getElementById('write-writer').value;
        
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1
        var day = date.getDate();
        var today = year+"-"+month+"-"+day;
    
        var row = boardTable.insertRow(1); // 상단에 추가
    
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
    
        cell1.innerHTML = "<td><input type='checkbox'></td>";
        cell2.innerHTML = "<td>"+category+"</td>";
        cell3.innerHTML = "<td>"+title+"</td>";
        cell4.innerHTML = "<td>"+writer+"</td>";
        cell5.innerHTML = "<td>"+today+"</td>";
    
        var inputBtn_s = document.createElement("input");
        inputBtn_s.setAttribute("type", "button");
        inputBtn_s.classList.add("modifyBtn");
        inputBtn_s.value = "수정";
        inputBtn_s.addEventListener("click", modify);
        cell6.appendChild(inputBtn_s);
    
        var inputBtn = document.createElement("input");
        inputBtn.setAttribute("type", "button");
        inputBtn.classList.add("delBtn");
        inputBtn.value = "삭제";
        inputBtn.addEventListener("click", delRowOne);
        cell6.appendChild(inputBtn);

        MODAL.classList.add("hidden");
    }else {
        
        category = document.getElementById('write-category');
        category = category.options[category.selectedIndex].text;
        ca.innerHTML = category;

        title = document.getElementById('write-title').value;
        ti.innerHTML = title;

        writer = document.getElementById('write-writer').value;
        wr.innerHTML = writer;

        MODAL.classList.add("hidden");
        
    }
    }


//선택 삭제
function delRow() {
    var boardTable = document.getElementById('boardTable');

    for(var i = 1; i<boardTable.rows.length;i++) {
        var chkbox = boardTable.rows[i].cells[0].childNodes[0].checked;

        if(chkbox) {
            boardTable.deleteRow(i);
            i--;
        }
    }
}

delBtn.forEach(function (data) {
    data.addEventListener("click", delRowOne);
})

modifyBtn.forEach(function (data) {
    data.addEventListener("click", modify);
})

checkDelBtn.addEventListener("click", delRow);
