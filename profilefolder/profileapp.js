$(document).ready(function(){


});
function createGoal()
{

    $('#createGoalDialog').modal();

}

function saveGoal()
{
    alert("Your Goal was saved");
    $('#createGoalDialog').modal('hide');

}
function removeGoal()
{
    $('#Goal1').remove();
}

function FillBilling(f) {
  if(f.billingtoo.checked == true) {
    f.billingname.value = f.shippingname.value;
    f.billingcity.value = f.shippingcity.value;
  }
}
function removeSub(){
  
}