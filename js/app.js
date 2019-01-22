window.onload= function() {
	//We instantiate our model
	const model = new DinnerModel();
	// const sidebarView=new SideBarView()
	// And create the instance of ExampleView
	const exampleView = new ExampleView($("#exampleView"));
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

};
