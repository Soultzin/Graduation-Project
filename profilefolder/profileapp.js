$(document).ready(function(){


});
function createGoal()
{
    $('#createGoalDialog').modal();
}

function saveGoal()
{
    $('#createGoalDialog').modal('hide');

    //Let's create the table
    var goalName = $('#G1Entry').val();

    $('#G1Entry').val("");

    var tableKey = goalName.replace(/[^a-z0-9]|\s+|\r?\n|\r/gmi, "_");

    $('#studentGoals').append("<h1>" + goalName + "</h1><button type='button' class='btn btn-primary' onclick='showGoalStep(\"" + tableKey + "\")'" + ">Add</button>");

    var tableDiv = $("<div class='table-responsive'>");

    $('#studentGoals').append(tableDiv);

    var table = $("<table id='" + tableKey + "' " + "class='table table-striped table-bordered table-hover table-condensed small'>");

    tableDiv.append(table);

    ///
    /// Table head
    ///
    html = "<thead>" +
        "    <tr>" +
        "        <th><strong>Description</strong></th>" +
        "        <th><strong>Value</strong></th>" +
        "        <th></th>" +
        "     </tr>" +
        "</thead>";

    var tableHead = $(html);
    table.append(tableHead);

}
function removeGoal()
{
    $('#Goal1').remove();
}

function removeSub(){
  
}

function showGoalStep(goalId) {

    console.log("Table Key: " + goalId);
    $('#stepTableName').val(goalId);
    $('#createStepDialog').modal();

    console.log("I'm done with the dialog");

}

function createStep() {

    console.log("Step Name: " + $('#stepEntry').val());
    console.log("Step Date: " + $('#stepDate').val());
    console.log("goalId: " + $('#stepTableName').val());

    var tableName = $('#stepTableName').val();

    var table = document.getElementById(tableName);
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = $('#stepEntry').val();
    cell2.innerHTML = $('#stepDate').val();
    cell3.innerHTML = "<button type='button' class='btn btn-default' data-dismiss='modal'>Delete</button>"

}
