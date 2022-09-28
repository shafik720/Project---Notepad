// getting id from html document
const row = document.getElementById('row');
const heading = document.getElementById('heading');
const noteTitle = document.getElementById('noteTitle')
const noteBody = document.getElementById('noteContent');
const createBtn = document.getElementById('createBtn');
const edits = document.getElementsByClassName('edit');
let noteHeaders = document.getElementsByClassName('noteTitle');
let noteBodies = document.getElementsByClassName('noteBody');

createBtn.addEventListener('click',function(){
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
for(let edit of edits){
  edit.addEventListener('click', function(){
    console.log('click');
  })
}
