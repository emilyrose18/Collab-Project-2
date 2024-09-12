// if (typeof window !== "undefined") {
// const formEl = document.getElementById('form');
// const buttonEl = document.getElementById("button")
// let bucketlistEl = document.getElementById("savedBucketlists");

// const handleFormSubmit = function (event) {
//   event.preventDefault();

//   const locationEl = document.getElementById('location').value.trim();
//   const descriptionEl = document.getElementById('description').value.trim();
//   const dueDateEl = document.getElementById('dueDate').value.trim();
  
//   if (!locationEl || !descriptionEl || !dueDateEl) {
//       const errorEl = document.getElementById('error');
//       errorEl.textContent = 'Please complete the form.';
      
//     return;
//     };
    
//     let formData = {
//         location: locationEl,
//         description: descriptionEl,
//         dueDate: dueDateEl,
//     };
    
//     bucketlistEl.innerHTML="";
//     formData = document.createElement("div");
//     bucketlistEl.appendChild(formData);
    
//     buttonEl.addEventListener('submit', handleFormSubmit)}};
    

    
    
    
    
    
    const bucketlist = document.getElementById("savedBucketlist");
    function createList(location, description, dueDate) {
        
        const list = document.createElement('h1');
        
        const listLocation = document.createElement('div');
        listLocation.textContent = location;
    
        const listDescription = document.createElement('p');
        listDescription.textContent = description;
    
        const listDuedate = document.createElement('h2');
        listDuedate.textContent = dueDate;
        
        list.appendChild(listLocation);
        list.appendChild(listDescription);
        list.appendChild(listDuedate);
    
        return list;
}

// Example usage
const list1 = createList('HEELLOOOOO');
bucketlist.appendChild(list1);
