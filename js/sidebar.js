var SideBarView=function (container,model) {
  var numberOfGuests = container.find("#numberOfGuests");
  var guestNumInput=container.find(".box [type=number]");
  numberOfGuests.html(model.getNumberOfGuests());


}
