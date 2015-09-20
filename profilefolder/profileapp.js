$(document).ready(function(){


});
function createGoal()
{

    $('#createGoalDialog').modal();

}

function saveGoal()
{
    alert('Your Goal was saved');
    $('#createGoalDialog').modal('hide');
    $('#GoalLabel').append(" <div id='Goal2'><table width='66%' border='1px'><thead><tr><th colspan='3' id='G1'><center><img id= 'removeButton' src='http://i795.photobucket.com/albums/yy232/DaedalusIcarusHelios/closeX.png' onclick='removeGoal();'>Get Straight A's</center></th></tr></thead><tbody><tr><td>Step 1:</td><td div='sub2.1'>Do All Homework</td><td name='due2.1'>DUE BLEHEHEH</td></tr><tr><td>Step 2:</td><td name='sub2.2>Dracula</td><td name='due2.2'>DUE BLEHEHEH</td></tr><tr><td>Step 3:</td><td name='sub2.3'>Bride of Frankenstein</td><td name='due2.3'>DUE BLEHEHEH</td></tr><tr><td>Step 4:</td><td name='sub2.4'>Bride of Frankenstein</td><td name='due2.4'>DUE BLEHEHEH</td></tr></tbody></table><br><div class='progress'><div class='progress-bar'role='progressbar' aria-valuenow='100' aria-valuemin='0'aria-valuemax='100' style='width: 100%;' id='thebar'>100%</div></div>");
    
    

}
function removeGoal()
{
    $('#Goal1').remove();
}

function removeSub(){
  
}
