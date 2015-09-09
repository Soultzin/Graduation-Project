$(document).ready(function(){
    $("#button").click(function(){
        $("#CGoal").detatch;
    });
    $("#button").click(function(){
        $("#GoalLabel").append("<div id = 'CGoal'> New Goal: <input type='text'><br><button id = 'Create' class='btn btn-primary'>Create</button> </div>");
    });
    $("#Create").click(function(){
        $("#CGoal").detatch;
    });
});