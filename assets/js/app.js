// getting id from html document
const row = document.getElementById('row');
const heading = document.getElementById('heading');
const noteTitle = document.getElementById('recipient-name')
const noteBody = document.getElementById('message-text');
const saveBtn = document.getElementById('saveBtn');
const edit = document.getElementById('edit');
let noteHeaders = document.getElementsByClassName('noteTitle');
let noteBodies = document.getElementsByClassName('noteBody');

saveBtn.addEventListener('click',function(){
    let div = document.createElement('div');
    div.classList.add('col-lg-4');
    if(noteTitle.value || noteBody.value){
      div.innerHTML = `
      <div class=" border border-3 rounded p-3 h-100 mb-5 note">
        <div class=" ">
          <h4>${noteTitle.value}</h4>
          <hr>
          <p>${noteBody.value}</p>
        </div>
            <div class="cardFooter">
                  <button type="button" class="btn btn-primary">Delete</button>
            </div>
      </div>
    `;
    row.appendChild(div);
    }    
})

// making edit button functionable
edit.addEventListener('click', function(event){
  let noteHeaderText;
  let noteBodyText;
  for(let noteHeader of noteHeaders){
    noteHeaderText = noteHeader.innerText;    
  }
  for(let noteBody of noteBodies){
    noteBodyText = noteBody.innerText;
  }
  noteTitle.value = noteHeaderText;
  noteBody.value = noteBodyText;
  console.log(noteHeaderText);  
  // console.log(event.target.parentNode.parentNode.classList);
})

