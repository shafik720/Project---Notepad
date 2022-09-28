// getting id from html document
const row = document.getElementById('row');
const heading = document.getElementById('heading');
const noteTitle = document.getElementById('noteTitle')
const noteBody = document.getElementById('noteContent');
const createBtn = document.getElementById('createBtn');
const edits = document.getElementsByClassName('edit');
let row2 = document.getElementById('row2');
let editBtn = document.getElementById('editBtn');
// let noteHeaders = document.getElementsByClassName('noteTitle');
// let noteBodies = document.getElementsByClassName('noteBody');



heading.addEventListener('click', function(){
  console.log('clicked');
  row2.style.display = 'block';
  editBtn.style.display = 'none';
  createBtn.style.display = 'block';
})
createBtn.addEventListener('click',function(){
    let div = document.createElement('div');
    div.classList.add('col-lg-4');
    if(noteTitle.value || noteBody.value){
    row2.style.display = 'none';
      div.innerHTML = `
      <div class=" border border-3 rounded p-3 h-100 mb-5 note">
        <div class=" ">
          <h4>${noteTitle.value}</h4>
          <hr>
          <p>${noteBody.value}</p>
        </div>
            <div class="cardFooter">
              <button type="button" class="btn btn-primary delete">Delete</button>
              <button type="button" class="btn btn-primary edit" >Edit</button>   
            </div>
      </div>
    `;
    row.appendChild(div);
    }
    
    
    for(let edit of edits){
      edit.addEventListener('click', function(){
        
      row2.style.display = 'block';
      editBtn.style.display = 'block';
      createBtn.style.display = 'none';
        console.log(event.target)
      })
    }
})

// making edit button functionable

