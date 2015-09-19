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