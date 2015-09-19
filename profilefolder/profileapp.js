$(document).ready(function(){


});
function createGoal()
{

    $('#createGoalDialog').modal();

}

function saveGoal()
{
    alert("saveGoal");
    $('#createGoalDialog').modal('hide');

}
function removeGoal()
{
    $('#Goal1').remove();
}