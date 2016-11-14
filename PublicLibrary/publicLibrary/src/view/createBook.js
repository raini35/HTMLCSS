pl.view.createBook = {
	setupUserInterface: function() {
		var saveButton = document.forms['Book'].commit; 
		// load all book objects
		Book.loadAll(); 
		//Set an event handler for the save/submit button
		saveButton.addEventListener("click", p1.view.createBook.handleSaveButtonClickEvent); 
		window.addEventListener("beforeunload", function() {
			Book.saveAll(); 
		}); 
}, 

	//save user input data 
	handleSaveButtonClickEvent: function () {
		var formE1 = document.forms['Book']; 
		var slots = { isbn: formE1.isbn.value, 
			title: formE1.title.value, 
			year: formE1.year.value}; 
		Book.add(slots); 
		formE1.reset(); 
	}
}; 

