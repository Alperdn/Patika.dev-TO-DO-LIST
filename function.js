// FIRST SELECT ITEMS WITH DOM
 let newTaskDom = document.getElementById("task")
 let newListDom = document.getElementById("list")
 let existingListItems = newListDom.querySelectorAll('li');
 let toastError = document.querySelector(`.toast.error`);
 let toastOkay = document.querySelector(`.toast.success`)
 
 // ADDING PROPERTIES TO LIST ELEMENTS THAT ALREADY GIVEN TO US
 existingListItems.forEach(li => {
     var span = document.createElement('span');//CREATING A SPAN FOR 'X' BUTTON
     span.textContent = "\u00d7";//ASCII CODE OF X
     li.appendChild(span);
     
     // WHENEVER WE CLICK ON THAT 'X' IT WILL REMOVE THE PARENT ELEMENT OF SPAN(WHICH IS 'LI')
     span.addEventListener('click', function deleteElement(event) {
         event.target.parentElement.remove();
     });
 });

 // THIS FUNCTION HELPS US ABOUT WHEN WE CLICK ON A LIST ELEMENT IT ADDS 'TEXTSTYLE' CLASS TO THE 'LI'
 // 'TEXTSTYLE' DRAWS LINE THROUGH THE LIST ELEMENT, PAINTS BACKGROUND TO THE COLOR SPECIFIED TO US AND CHANGES TEXT COLOR
newListDom.addEventListener('click', function(i){
    if(i.target.tagName === "LI"){
        i.target.classList.toggle('textStyle')
    }
})

// FUNCTION THAT ADDS ELEMENT
 function newElement(){

    if(newTaskDom.value === "" || newTaskDom.value.trim() === ""){ // CHECKING THE BAR WHETHER IT'S EMPTY OR IS USER TRYING TO ENTER A BLANK SENTENCE
    
        $(toastError).toast(`show`); // IF FIRST CONDITION IS VALID, ERROR TOAST WILL BE DISPLAYED
    
    } else {
        // FIRTS CREATE A 'LI', THEN GIVE THE INPUT VALUE TO THE 'LI' AND ADD IT TO LIST
        let li = document.createElement('li')
        li.innerHTML = newTaskDom.value
        newListDom.appendChild(li)

        // ALREADY EXPLAINED IN FIRST FUNCTION
        let span = document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
        // TOAST THAT WILL DISPLAY WHEN LIST ELEMENT SUCCESFULLY ADDED
        $(toastOkay).toast(`show`);
    }
    // THIS CLEARS THE BAR
    newTaskDom.value=""

}

// IT WORKS SAME AS THE FIRST FUNCTION'S DELETE FUNCTION
newListDom.addEventListener('click', function deleteElement(event){
    if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
    } 
})

// LOCAL STORAGE PROPERTIES WILL BE ADDED SOON