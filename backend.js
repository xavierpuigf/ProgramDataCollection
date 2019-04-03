var use_new_action_block = true;
var num_actions_do = 1;
var instructions_shown = false;
var show_description = true;

var cont = 0
var action_click = false;
var loaded = false;
var editing_name = false;
var number_actions = 0;
var actions = [];
var xml_results = [];

var workerId;
var assignmentId;
var hitId;
var gameId;
var expt = gup('expt');
var turkSubmitTo= gup('turkSubmitTo');

var id_examples = [];
var time_init;

var num_tasks = 1;
var task_name = 0;
var unnamed_task = 'Task without name';


function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return 'NO_VAL';
  else
    return results[1];
}
function switchInstruction(){
  if (!show_description){
    $('#descriptioninstruction').hide();
  }
  $('#instructiondiv').toggle();
  if (instructions_shown){
    $('#hide_instructions').html('Show Instructions');
    instructions_shown = false;

  }
  else {
    $('#hide_instructions').html('Hide Instructions');
    instructions_shown = true;

  }
}
function switchExample(){
  if (id_examples.length == 0){
    $('#hide_examples').html('Hide Examples');
    showExamples();

  }
  else {
    $('#hide_examples').html('Show Examples');
    hideExamples();

  }
}
function makeActionsClickable(id){
  if (action_click){
    return;
  }
  $(".action-head").css('background-color', 'LightBlue')
  $(".clickable-action").css( 'cursor', 'pointer' );
  $(".clickable-action").click(function() {
    id_name = $(this).attr('id');
    id_step = parseInt(id_name.split('_')[1]);
    actions[id].createStep(id_step);
    makeUnClickable();
        //window.document.location = $(this).data("href");
    });
    action_click = true
}
function setAutoComplete(aux, func){
  //var old_name = aux.parentNode.parentNode.parentNode.children[0].children[0].innerHTML;
  //var new_name = aux.innerHTML;
  //aux.parentNode.parentNode.parentNode.children[0].children[0].innerHTML = aux.innerHTML;
  var new_name = aux.value;
  var old_name = aux.value;
  if (func) func(old_name, new_name);
}
function addAutoComplete(name_button, name_objects, parent_element, doneFunction){
  var tags = name_objects;
  //str = '<div class=input-group"><input type="text" style="display: inline-block; padding-left: 1%; padding-right: 4%; margin-top:3%; width: 50%; font-size: 11px;" placeholder="'+name_button+'"  </input><span class="input-group-btn"><button class="btn btn-default" type="button"><span class="caret"></span></button></span></div>';
  var str = '<input type="text" style="display: inline-block; padding-left: 1%; padding-right: 4%; margin-top:3%; width: 50%; font-size: 11px;" placeholder="'+name_button+'"  </input>';
  
  $(parent_element).append(str);
  var aux = $(parent_element).children().last();
  $(aux).keypress(
    function(e){
      if (e.which == 13 && name_objects.indexOf(this.value) > -1){
        setAutoComplete(this, doneFunction);
      }
    }
  );
  var NoResultsLabel = 'No objects/props with this name';
  $(aux).autocomplete({
    source: function( request, response ) {
          if (request.term.length >=  0){
        var matcher = new RegExp( "" + $.ui.autocomplete.escapeRegex(
          request.term ), "i" );
            res = $.grep( tags, function( item ){
              aux = matcher.test( item );
              return aux
            });
            if (res.length == 0){
              res = [NoResultsLabel];
            }
        response(res);
          }
          else {
            $(aux).css('color', 'black');
            response(false);
          }
        },
        select: function (event, ui) {
            $("#objEnter").css('color', 'black');
            if (ui.item.label === NoResultsLabel) {
                event.preventDefault();
            }
            else {
              var name = ui.item;
              setAutoComplete(name, doneFunction);
            }
        },
        focus: function (event, ui) {
            if (ui.item.label === NoResultsLabel) {
                event.preventDefault();
            }
        },

        minLength: 0  
    }).data("ui-autocomplete")._renderItem =  function( ul, item ) {
            // Replace the matched text with a custom span. This
            // span uses the class found in the "highlightClass" option.
             var newText = String(item.value).replace(
                new RegExp("" + $.ui.autocomplete.escapeRegex( this.term ), "i"),
                "<strong>$&</strong>");
            return $("<li></li>")
                .data("ui-item.autocomplete", item)
                .append("<a>" + newText + "</a>")
                .appendTo(ul);
              
          };
    $(".ui-autocomplete").css("max-height", "200px");
    $(".ui-autocomplete").css("width", "150px");
    $(".ui-autocomplete").css("overflow-y", "auto");
    $(".ui-autocomplete").css("overflow-x", "hidden");

    $(".ui-autocomplete").css('font-size', '12px');
    $(".ui-autocomplete").css('font-family', 'Arial');
    $(aux).click(function(){
      $(this).autocomplete("search", "");
    });
  return $(parent_element).children().last();
}

function setTextDropDown(aux, func){
  var old_name = aux.parentNode.parentNode.parentNode.children[0].children[0].innerHTML;
  var new_name = aux.innerHTML;
  aux.parentNode.parentNode.parentNode.children[0].children[0].innerHTML = aux.innerHTML;
  if (func) func(old_name, new_name);

}
function createDropDown(name_button, name_objects, parent_element, doneFunction){

  str = `<div class="dropdown" style="display: inline-block; padding-left: 1%; padding-right: 4%;">
        <button class="btn dropdown-toggle" id="inp_impact" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span>`+name_button+' '+`</span><span class="caret"></span></button>
                <ul  ID="divNewNotifications" class="dropdown-menu" style='z-index: 5; max-height: 308px; overflow: auto;'>`;
    for (var i = 0; i < name_objects.length; i++){
      str += '<li><a>'+name_objects[i]+'</a></li>'; 
    }                     
    str += '</div>'
    $(parent_element).append(str);
    lis = $(parent_element).find('li');
    for (lid = 0; lid < lis.length; lid ++){
      $($(lis[lid]).children()[0]).click(function(){setTextDropDown(this, doneFunction);})
    }
    return $(parent_element).children().last();
}
function makeUnClickable(id){

  $(".action-head").css('background-color', 'Silver')
  $(".clickable-action").css( 'cursor', 'Default' );
  $(".clickable-action").off('click')
  action_click = false
}

function retrieveActions(){
  xml_results = new Array(actions.length);
  for (var i = 0; i < actions.length; i++){
    xml_results[i] = actions[i].createXMLforAction();  
  }
  str_final = '';
  for (var i = 0; i < xml_results.length; i++){
    if (!actions[i].is_test)
      str_final = str_final + xml_results[i]+'_END';
  }
  return str_final;
}
function retrieveLocationsandProps(){
  var str_final = "";
  for (var i = 0; i < actions.length; i++){
    if (!actions[i].is_test){
      var elems = $('#locations'+i+' .location_elem');
      var elem = JSON.stringify(actions[i].workspace.variablesforObjects); 
      str_final = str_final + elem + '_END';
    }
  }
  return str_final;
}
function compareBlocksXml(block1, block2){
  console.log(block1, block2);
  var type1 = block1.getAttribute('type');
  var type2 = block2.getAttribute('type');
  if (type1 == type2){
    if (type1 == "start_block2") return true; 
    if (type1.substr(0,7) == "special") return true;
    // obtain fields
    fields1 = Array.prototype.slice.call(block1.children);
    fields2 = Array.prototype.slice.call(block2.children);
    if (fields1[0].tagName == 'MUTATION'){
      fields1 = fields1.slice(2)
    }
    if (fields2[0].tagName == 'MUTATION'){
      fields2 = fields2.slice(2)
    }
    var aux1 = fields1.length - 1;
    var aux2 = fields2.length - 1;
    if (fields1[aux1].tagName.toUpperCase() == 'NEXT') aux1-=1;
    if (fields2[aux2].tagName.toUpperCase() == 'NEXT') aux2-=1;
    console.log(fields1);
    if (aux1 == aux2){
      for (var i = 0; i <= aux1; i ++){
        var vr1 = fields1[i].firstChild;
        var vr2 = fields2[i].firstChild;
        console.log(fields1[i].firstChild);
        for (var term = 0; term < 2; term++){
          if (vr1.children[term].getAttribute('name') != vr2.children[term].getAttribute('name')) return false;
          if (vr1.children[term].firstChild.data != vr2.children[term].firstChild.data){
            return false;  
          } 
        }
      }
      return true;
    }
  }
  return false;
}
function comparedoms(dom1, dom2, cont = -1){
  var be = false;
  if (cont == 0) return true;
  if (dom1 == null && dom2 == null) return true;
  if (dom1 == null || dom2 == null) return false;
  var tagtype1 = dom1.tagName.toUpperCase();
  var tagtype2 = dom2.tagName.toUpperCase();
  if (tagtype1 == tagtype2){
    if (tagtype1 == 'BLOCK') be = compareBlocksXml(dom1, dom2);
    else be = true;
    if (be){
      if (tagtype1 == 'BLOCK'){
        cont = cont - 1;
      }
      if (cont == 0) return true;
      var ch1 = dom1.lastElementChild;
      var ch2 = dom2.lastElementChild;
      if (ch1 != null && ch1.tagName.toUpperCase() == 'NEXT') ch1 = ch1.lastElementChild;
      else ch1 = null;
      if (ch2 != null && ch2.tagName.toUpperCase() == 'NEXT') ch2 = ch2.lastElementChild;
      else ch2 = null;
      var eq = comparedoms(ch1, ch2, cont);
      return eq;
      
    }
    else return false;
  }
  else return false;

}
function compareworkspaces(workspace1, workspace2){
  // true if workspaces are considered equal
  var dom1 = Blockly.Xml.workspaceToDom(workspace1).firstChild;
  var dom2 = Blockly.Xml.workspaceToDom(workspace2).firstChild;
  return this.comparedoms(dom1, dom2);
  
}
function confirmSubmit(){
  var time_end = new Date();
  var elapsed_time = time_end - time_init;
  var resultString = this.retrieveActions();
  for (var i = 0; i < actions.length; i++){
    if (show_description){
      var descript_id = 'description'+actions[i].id;
      if ($('#'+descript_id).val().length == 0){
        alert('There are errors in action: '+actions[i].name+'.\nPlease, correct them to submit.\n Description is missing.');
        return false;
      }
    }
    var msg = actions[i].checkworkspace();
    if (msg.length > 0){
      alert('There are errors in action: '+actions[i].name+'.\nPlease, correct them to submit.\n'+msg+'.');
      return false;
    }
    var msg = actions[i].checkpropsandlocations();
    if (msg.length > 0){
      alert('There are errors in action: '+actions[i].name+'.\nPlease, correct them to submit.\n'+msg+'.');
      return false;
    }
    // TODO: uncomment
    /*
    for (var j = 0; j <  i; j++){
      if (compareworkspaces(actions[i].workspace, actions[j].workspace)){
        alert('Actions '+actions[i].name+' and '+actions[j].name+' have the same program.\nPlease, change one of them.');
        return false;
      }
    }
    */

  }
  resultString += '_PROPS' + this.retrieveLocationsandProps();
    $('#answer').val(resultString);
    $('#assignment').val(assignmentId);
    $('#splitname').val(task_name.join('?'));
    $('#owner').val(gup('owner'));   
    $('#time').val(elapsed_time);   
  makeSubmission(elapsed_time);
  return true;

}
function createCell(program, remove, results, test){
  /*
   * program: name of the script 
   * remove: whether it should be possible to remove the action
   * results: whether there is an existing script
   * test: whether it serves as test
   */
  if (number_actions == 0){
    $(".action-group").empty();
  }
  number_actions = number_actions + 1;
  if (editing_name){
    //return
  }
  $(".accordion-toggle").collapse('show');
  if (!program){
    editing_name = true;
  }
  var id = cont;
  if (test){
    actions.unshift(new Action(id, program, results, test));
  }
  else {
    actions.push(new Action(id, program, results));  
  }
  cont = cont + 1
  if (!remove){
    $('#removebutton'+id).remove();
  }
  var actions_pending = num_actions_do  - actions.length + id_examples.length; 
  if (test){
    actions_pending = actions_pending + 1;
    $('#header_'+id).css('color', 'limegreen');  
  } 
  if (actions_pending == 0){
    $('#submitButton').val('Submit');
    $('#action_ad').prop('disabled', true);
    $('#submitButton').prop('disabled', false);
  }
  else {
    var text_submit = 'Submit ('+parseInt(actions_pending)+' actions left)';
    $('#submitButton').val(text_submit);
  }
  return id;
}
function removeLocation(id, name){

  // if it can be removed
  var loc_elems = $('.location_elem');
  if (actions[retrieveAction(id)].removeVariable(name)){
    for (var i = 0; i < loc_elems.size(); i++){
      var elem = $(loc_elems[i].children[0]).text();
      if (elem == name){
        $(loc_elems[i]).remove();
      }
    }
  }
  actions[retrieveAction(id)].updatetoolbox();
  
}
function addLocation(id, location_name, amount){
  var loc_div = '<div class="location_elem" style="height:60px; width:180px; display:inline-block; vertical-align: top"> Location </div>';
  $('#locations'+id).append(loc_div);
  var options = actions[retrieveAction(id)].obtainUnsetLocations();
  $('#addLocation'+id).prop('disabled', true);
  if (options.length == 0) return;
  
  if (!location_name){
    var func1 = function(old_name, new_name){
      $('#locations'+id).children().last().children().last().remove();
      var new_text = '<div style="padding-right: 5%; padding-left: 4%; color:#08c; display: inline-block;">'+new_name+'</div>';
      $('#locations'+id).children().last().append(new_text);
      $('#locations'+id).children().last().append('<br> <div style="font-size: small; display:inline-block; padding-right: 3px; padding-left: 3px"> Quantity </div>');
      var func2 = function(old_name2, new_name2){
        $('#addLocation'+id).prop('disabled', false);
        var button = '<button type="button" style="padding-right:15%" onclick="removeLocation('+id+',\''+new_name+'\')"; class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        if (old_name2 == "Select "){
          $('#locations'+id).children().last().append(button);  
        } 
        actions[retrieveAction(id)].setVariable(new_name, parseInt(new_name2));
        actions[retrieveAction(id)].updatetoolbox();
      }
      createDropDown('Select', ['1', '2', '3', '4', '5'], $('#locations'+id).children().last(),  func2);
    };
    //createDropDown('Select',  options, $('#locations'+id).children().last(), func1);
    addAutoComplete('Select', options, $('#locations'+id).children().last(),  func1);
  }
  else {
    var new_name = location_name;
    var new_text = '<div style="padding-right: 5%; padding-left: 4%; color:#08c; display: inline-block;">'+new_name+'</div>';
    $('#locations'+id).children().last().append(new_text);
    $('#locations'+id).children().last().append('<br> <div style="font-size: small; display:inline-block; padding-right: 3px; padding-left: 3px"> Quantity </div>');
    var func2 = function(old_name2, new_name2){
      $('#addLocation'+id).prop('disabled', false);
      var button = '<button type="button" style="padding-right:15%" onclick="removeLocation('+id+',\''+new_name+'\')"; class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'; 
      if (old_name2 == "Select "){
        $('#locations'+id).children().last().append(button);  
      }
      actions[retrieveAction(id)].setVariable(new_name, parseInt(new_name2));
      actions[retrieveAction(id)].updatetoolbox();
    }
    if (!amount) amount = '1';
    func2('Select ', amount);
    createDropDown(amount, ['1', '2', '3', '4', '5'], $('#locations'+id).children().last(),  func2);

  }

}
function removeProp(id, name){
  // if it can be removed
  var loc_elems = $('.prop_elem');
  if (actions[retrieveAction(id)].removeVariable(name)){
    for (var i = 0; i < loc_elems.size(); i++){
      var elem = $(loc_elems[i].children[0]).text();
      if (elem == name){
        $(loc_elems[i]).remove();
      }
    }
  }  
  actions[retrieveAction(id)].updatetoolbox();
}
function addProp(id, prop_name, amount){
  var prop_div = '<div class="prop_elem" style="height:60px; width:180px; display:inline-block; vertical-align: top"> Object </div>';
  $('#props'+id).append(prop_div);
  $('#addProp'+id).prop('disabled', true);
  var options = actions[retrieveAction(id)].obtainUnsetObjects();
  options = $(options).not(actions[retrieveAction(id)].used_props).get();
  if (options.length == 0) return;
  if (!prop_name){
    var func1 = function(old_name, new_name){
      $('#props'+id).children().last().children().last().remove();
      var new_text = '<div style="padding-right: 5%; padding-left: 4%; color:#08c; display: inline-block;">'+new_name+'</div>';
      $('#props'+id).children().last().append(new_text);
      $('#props'+id).children().last().append('<br> <div style="font-size: small; display:inline-block; padding-right: 3px; padding-left: 3px"> Quantity </div>');
      var func2 = function(old_name2, new_name2){
        // $('#props'+id).children().last().children().last().remove();
        // var new_text = '<div style="padding-right: 4%; padding-left: 1%; color:LightBlue; display: inline">'+new_name2+'</div>';
        // $('#props'+id).children().last().append(new_text);
        $('#addProp'+id).prop('disabled', false);
        var button = '<button type="button" style="padding-right:15%"  onclick="removeProp('+id+',\''+new_name+'\')"; class="close" style="margin-right: 58%" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        if (old_name2 == "Select "){
          $('#props'+id).children().last().append(button);
        }
        actions[retrieveAction(id)].setVariable(new_name, parseInt(new_name2));
        actions[retrieveAction(id)].updatetoolbox();
      }
      createDropDown('Select', ['1', '2', '3', '4', '5'], $('#props'+id).children().last(),  func2);
    };
    //createDropDown('Select', options, $('#props'+id).children().last(),  func1);
    addAutoComplete('Select', options, $('#props'+id).children().last(),  func1);
  }
  else {
    var new_name = prop_name;
    var new_text = '<div style="padding-right: 5%; padding-left: 4%; color:#08c; display: inline-block;">'+new_name+'</div>';
    $('#props'+id).children().last().append(new_text);
    $('#props'+id).children().last().append('<br> <div style="font-size: small; display:inline-block; padding-right: 3px; padding-left: 3px"> Quantity </div>');
    var func2 = function(old_name2, new_name2){
      $('#addProp'+id).prop('disabled', false);
      var button = '<button type="button" style="padding-right:15%" onclick="removeProp('+id+',\''+new_name+'\')"; class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'; 
      if (old_name2 == "Select "){
        $('#props'+id).children().last().append(button);  
      }
      actions[retrieveAction(id)].setVariable(new_name, parseInt(new_name2));
      actions[retrieveAction(id)].updatetoolbox();
    }
    if (!amount) amount = '1';
    $(document).ready(function(){
      func2('Select ', amount);
      createDropDown(amount, ['1', '2', '3', '4', '5'], $('#props'+id).children().last(),  func2);
    });
  }
}

function retrieveAction(id){
  var id_bo = -1;
  for (var i = 0; i < actions.length; i++){
    if (actions[i].id == id) id_bo = i;
  }
  return id_bo;
}
function removeAction(id){
  id_bo = retrieveAction(id);
  actions.splice(id_bo,1);
  number_actions = number_actions - 1;
  if (number_actions == 0){
    var text = '<h4> There are no actions yet</h4>'
    $(".action-group").append(text);
  }
  editing_name = false;
  $("#accordion_"+id).remove();
  if (actions.length < num_actions_do){
    var text_submit = 'Submit ('+parseInt(num_actions_do - actions.length)+' actions left)';
    $('#submitButton').val(text_submit);
    $('#action_ad').prop('disabled', false);
    $('#submitButton').prop('disabled', true);
  }
}
function showExamples(){
  if (id_examples.length == 0){
    id_examples.push(createCell('test_programs/test1.xml', false, true, true));
    //id_examples.push(createCell('AMT_programs/test/test2.xml', false, true, true));
    id_examples.push(createCell('test_programs/test3.xml', false, true, true));
  }
}
function hideExamples(){
  for (var i = 0; i < id_examples.length; i++){
    removeAction(id_examples[i]);
  }
  id_examples = [];
}
function makeSubmission(time_ellapsed){
  console.log(task_name.join('?'));
  $.ajax({
    type: "POST",
    url: "database_manager.php",
    async: false,
    data: {
      workerid: workerId,
      action: 'update',
      hitId: hitId,
      title: task_name.join('?'),
      time: time_ellapsed,
      assignmentId: assignmentId 
    },
    success: function(resultData){
      console.log(resultData);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       console.log(XMLHttpRequest);
       console.log(textStatus);
       console.log(errorThrown);
     }
  })

}
function hashCode(str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}
function checkTask(taskName){
  var taskNames = [
   'Pet the cat',
   'Turn on lights',
   'Watch TV',
   'Browse the internet',
   'Put groceries in the Fridge',
   'Pick up the phone',
   'Relax on the sofa',
   'Wash dishes with a dishwasher',
   'Listen to music',
   'Write an email',
   'Work on computer',
   'Wash clothes',
   'Go to toilet',
   'Set up the table',
   'Wash the dishes by hand',
   'Cook some food'];
  for (var i = 0; i < taskNames.length; i++){
    if (taskName == taskNames[i]) return true;
  }
  return false;
}
function retrieveActionsWorker(){
  var query = $.ajax({
    type: "POST",
    url: "database_manager.php",
    async: false,
    data: {
      workerid: workerId,
      action: 'retrieve',
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       console.log(XMLHttpRequest);
       console.log(textStatus);
       console.log(errorThrown);
     }
  })
  var resp = query.responseText;
  resultData = resp.split('?');
  var aux_n_task = gup('num_task');
  if (aux_n_task != 'NO_VAL'){
    num_tasks = parseInt(aux_n_task, 10);
    num_actions_do = num_tasks;
  }
  // Filter only to the actions we are interested i
  //resultData = resultData.filter(checkTask);
  if (resp.length == 0 || resultData.length == 0){
    return -1;
  }
  Math.seedrandom(hitId);
  var res_array = [];
  var aux_res_data = resultData.slice();
  num_tasks = Math.min(num_tasks, resultData.length);
  num_actions_do = num_tasks;
  for (var i = 0; i < num_tasks; i++){
    var index = parseInt(Math.random()*100)%aux_res_data.length;
    res_array.push(aux_res_data[index])
    aux_res_data.splice(index, 1);
  }
  index = hashCode(hitId)%resultData.length;
  return res_array;

}
function startup(){
  $("#feedback").val('');
  $('#submitButton').val('Submit ('+num_actions_do+' actions left)');
  $('#submitid').attr('action', decodeURIComponent(turkSubmitTo+'/mturk/externalSubmit'));
  workerId = gup('workerId');
  file_name = gup('filetasks');
  assignmentId = gup('assignmentId');
  hitId = gup('hitId');
  if (task_name != -1){
    if ( assignmentId == 'ASSIGNMENT_ID_NOT_AVAILABLE' ){
      $("#startHIT").html('<h3> Accept the hit before you can start </h3>');
    }else{
      if (file_name == 'NO_VAL' && workerId != 'NO_VAL'){
        task_name = retrieveActionsWorker();
        if (task_name == -1){
          $("#startHIT").html('<h3> Thank you! You have completed all the HITS we wanted for this task </h3>');
        
        }
      }
      if (task_name != -1){
        $("#startHIT").css('display', 'none');
        var str = ""
        $('#action_ad').click(function() {
          createCell()
        });
        if (gup('mode') == 'NO_VAL'){
          if (task_name == 0){
            task_name = [decodeURI(file_name)];  
          }
          time_init = new Date();
          for (var tid = 0; tid < task_name.length; tid++){
            createCell(task_name[tid])
          }

        }

      }
    }
    var mode = gup('mode');
    if (mode != 'NO_VAL'){
      $.ajax({
        type: "POST",
        url: "file_manager.php",
        async: false,
        success: function(resData){
          resultData = resData.split('?');
          for (var i = 0; i <resultData.length; i++){
            console.log(resultData[i])
            createCell('results_intentions/xml_files/'+resultData[i], false, true, true)
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           console.log(XMLHttpRequest);
           console.log(textStatus);
           console.log(errorThrown);
         }
      })
    }  
  }
}
