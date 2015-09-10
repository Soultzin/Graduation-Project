$(document).ready(function(){


});
function createGoal()
{
    $("#GoalLabel").append("<div id = 'CGoal'> New Goal: <input type='text'><br><button id = 'Create' class='btn btn-primary' onclick='saveGoal();'>Create</button> </div>");
    $('#butGoal').removeAttr('onClick');

}

function saveGoal()
{
    alert("saveGoal");
    $('#butGoal').attr('onclick','createGoal()');
}