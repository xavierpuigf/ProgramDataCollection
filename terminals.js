
function findArguments(action_name,id){
  var aux = dictionary_allowances[action_name].fields

  resp = id;
  result = [];
  //var a1 = aux[resp].classes_allowed.slice();
  var a2 = aux[resp].types_allowed.slice();
//for (var i = 0; i < a1.length; i++) a1[i] = a1[i].toUpperCase();
  for (var i = 0; i < a2.length; i++) a2[i] = a2[i].toUpperCase();
  result =  a2;
 
  return result
}
function intersection(a,b){
  a.sort();
  b.sort();
  var i = 0;
  var j = 0;
  var resp = [];
  while (i < a.length && j < b.length){
    if (a[i] == b[j]){ 
      resp.push(a[i]);
      i++; j++;
    }
    else if (a[i] < b[j]) i++;
    else j++;
  }
  return resp;
}
function checkActionDisabled(action_name, objects_available){
  // for each of the action's fields, there must be at least an object available
  var num_fields = dictionary_allowances[action_name].fields.length;
  var args = [];
  for (var i = 0; i < num_fields; i++){
    args = findArguments(action_name, i);
    // if none of the allowances is in arguments, block
    if (intersection(args, Object.keys(objects_available)).length == 0){
      return true;
    }
  }
  return false; // Not disabled
}

function addCategories(props_available){
  $('#toolbox').empty();
  var categories = [];
  var actions_defined = Object.keys(dictionary_allowances);
  var colour = [];
  for (var i = 0; i < actions_defined.length; i++){
    var category_name = 'Other';
    if (dictionary_allowances[actions_defined[i]].category) 
        category_name = dictionary_allowances[actions_defined[i]].category;
    categories.push(category_name);
    if (props_available && !checkActionDisabled(actions_defined[i], props_available)) 
        colour[category_name] = 160;
  }
  categories = categories.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
  for (var i = 0; i < categories.length; i++){
    var category_name = '<category name="'+categories[i]+'"></category>';
    if (colour[categories[i]]) 
        category_name = '<category name="'+categories[i]+'" colour="160"></category>';
    $('#toolbox').prepend(category_name);
  }
  //var category_name = '<category name="Special Block" colour="270"><block type="special_Block"></block></category>';
  //$('#toolbox').append(category_name);
  var category_name = '<category name="Action Block" colour="200"></category>';
  $('#toolbox').append(category_name);
  var category_name = '<category name="Action Block Testing" colour="200"></category>';
  $('#toolbox').append(category_name);

}
function fillCategories(props_available){
  /// Creates blocks for the categories 
  $('category').empty();
  //$($('category[name="Special Block"')[0]).append(
//      '<block type="special_block"></block>');
  terminalActionsKeys = Object.keys(dictionary_allowances)
  for (var it = 0 ;  it < terminalActionsKeys.length; it++){

    name_action  = terminalActionsKeys[it];
    var name_block = 'action_'+name_action;
    Blockly.Blocks[name_block] = {
      init: function() {
        name_action = this.type.split('_')[1];
        block_name = dictionary_allowances[name_action].block_name;
        arguments_val = dictionary_allowances[name_action].fields;
        this.appendDummyInput().appendField(block_name);
        for (var aux = 0; aux < arguments_val.length; aux++){
          name_field = arguments_val[aux].type_name;
          this.appendValueInput('VALUE'+aux)
              .setCheck(['object'])
              .appendField(name_field.toLowerCase());

        }
    this.action_name = name_action;
        this.setColour(160);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setInputsInline(true);
        //this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      },
      onchange: function(event){
        var is_any_workspace = false;
        var action_id = -1;
        if (event.type == 'create' && this.id == event.blockId){
          for (var i = 0; i < actions.length; i++){
            if (event.workspaceId == actions[i].workspace.id){
              action_id = i;
              is_any_workspace = true;
            }
          }
          
          if (is_any_workspace){

            for (var i = 1; i < this.inputList.length; i++){
              if (!this.inputList[i].connection.targetConnection){
                var created_block = null;
                if (this.type == 'action_Move'){
          created_block = actions[action_id].workspace.newBlock(
              'type_room');
        }
                else created_block = actions[action_id].workspace.newBlock(
            'type_object');
                created_block.initSvg();
                created_block.render();
                this.inputList[i].connection.connect(created_block.outputConnection);
              }
            }
          }
        }
      }
    };
    val_disabled = 'false';
    if (!props_available) val_disabled = 'true';
    else if (checkActionDisabled(name_action, props_available)) 
    val_disabled = 'true';
    var category = dictionary_allowances[name_action].category;
    if (!category) category = 'Other';
    $($('category[name="'+category+'"]')[0]).append(
      '<block type="'+name_block+'" disabled="'+val_disabled+'"></block>');
  }
}

function addGeneralBlock(props_ava2ilable){
  var val_disabled = 'false';
  var name_block = 'action_Block2';
  var actions_defined = Object.keys(dictionary_allowances);
  Blockly.Blocks[name_block] = {
    mutationToDom: function(){
    var container = document.createElement('mutation');
    container.setAttribute('name_action', this.action_name);
    return container;
    },
    domToMutation: function(xmlElement){
      var action_name = xmlElement.getAttribute('name_action')
      
      this.action_name = action_name;
      if (action_name in dictionary_allowances){
        arguments_val = dictionary_allowances[action_name].fields;
        for (var inp_id = 0; inp_id < arguments_val.length; inp_id++){
          name_field = arguments_val[inp_id].type_name;
          this.appendValueInput('VALUE'+inp_id.toString())
            .setCheck(['object'])
            .appendField(name_field.toLowerCase());
    
        }
      }
    
    },
      init: function() {
      var currentBlock = this;
      this.getActions = function(){
      actions_available = new Array();
      if (!currentBlock.action_name){
        actions_available.push(['Select action', 'Select']);
        return actions_available;
      }

      var current_props = currentBlock.workspace.variablesforObjects;
      for (var i = 0; i < actions_defined.length; i++){
        if (current_props
          && !checkActionDisabled(actions_defined[i], current_props)){
            block_name = dictionary_allowances[actions_defined[i]].block_name;
            actions_available.push([block_name, 
                         'action_'+actions_defined[i]])
          }
      }
      return actions_available;
      }
      this.connectBlocks = function(){
            for (var i = 1; i < this.inputList.length; i++){
              if (!this.inputList[i].connection.targetConnection){
                var created_block = null;
                if (this.type == 'action_Move'){
          created_block = this.workspace.newBlock(
              'type_room');
        }
                else created_block = this.workspace.newBlock(
            'type_object');
                created_block.initSvg();
                created_block.render();
                this.inputList[i].connection.connect(created_block.outputConnection);
              }
            }
      }
      this.changeAction = function(newOp){
      var action_name = newOp.split('_')[1];
      currentBlock.action_name = action_name;
      arguments_val = dictionary_allowances[action_name].fields;
      // Remove previous inputs
      var childBlock = currentBlock.childBlocks_;
      cont = 0
      while (cont < childBlock.length){
        if (childBlock[cont].type == 'type_object'){
          childBlock[cont].dispose();
        }
        else {
          cont++;
        }
      }
      var num_inputs = currentBlock.inputList.length - 1
      for (var child = 0; child < num_inputs; child++){
        currentBlock.removeInput('VALUE'+child.toString(), true);
      }
      for (var aux = 0; aux < arguments_val.length; aux++){
        name_field = arguments_val[aux].type_name;
        currentBlock.appendValueInput('VALUE'+aux.toString())
          .setCheck(['object'])
          .appendField(name_field.toLowerCase());
  
      }
      currentBlock.connectBlocks();    
      }
    // We should create a special field
    var dropdown = new Blockly.FieldDropdown(this.getActions, this.changeAction);
    this.appendDummyInput('TYPE').appendField(dropdown, 'TYPEACTION')
    this.action_name = 'Select'
    /*
        block_name = dictionary_allowances[this.action_name].block_name;
        arguments_val = dictionary_allowances[this.action_name].fields;
    //this.appendDummyInput().appendField(block_name);
        for (var aux = 0; aux < arguments_val.length; aux++){
          name_field = arguments_val[aux].type_name;
          this.appendValueInput('VALUE'+aux.toString())
              .setCheck(['object'])
              .appendField(name_field.toLowerCase());

        }*/
    
        this.setColour(120);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setInputsInline(true);
        //this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    //this.changeAction();
      }
  };
    $($('category[name="Action Block"]')[0]).append(
      '<block type="'+name_block+'" disabled="'+val_disabled+'"></block>');
}
function addGeneralBlock2(props_available){
  var val_disabled = 'false';
  var name_block = 'test_Block2';
  var actions_defined = Object.keys(dictionary_allowances);
  Blockly.Blocks['test_Block2'] = {
    mutationToDom: function(){
    var container = document.createElement('mutation');
    container.setAttribute('name_action', this.action_name);
    return container;
    },
    domToMutation: function(xmlElement){
      var action_name = xmlElement.getAttribute('name_action')
      
      this.action_name = action_name;
      if (action_name in dictionary_allowances){
        arguments_val = dictionary_allowances[action_name].fields;
        for (var inp_id = 0; inp_id < arguments_val.length; inp_id++){
          name_field = arguments_val[inp_id].type_name;
          this.appendValueInput('VALUE'+inp_id.toString())
            .setCheck(['object'])
            .appendField(name_field.toLowerCase());
    
        }
      }
    
    },
      init: function() {
      var currentBlock = this;
      this.getActions = function(){
      actions_available = new Array();
      if (!currentBlock.action_name){
        actions_available.push(['Select action', 'Select']);
        return actions_available;
      }

      var current_props = currentBlock.workspace.variablesforObjects;
      for (var i = 0; i < actions_defined.length; i++){
        if (current_props
          && !checkActionDisabled(actions_defined[i], current_props)){
            block_name = dictionary_allowances[actions_defined[i]].block_name;
            actions_available.push([block_name, 
                         'action_'+actions_defined[i]])
          }
      }
      return actions_available;
      }
      this.connectBlocks = function(){
            for (var i = 1; i < this.inputList.length; i++){
              if (!this.inputList[i].connection.targetConnection){
                var created_block = null;
                if (this.type == 'action_Move'){
          created_block = this.workspace.newBlock(
              'type_room');
        }
                else created_block = this.workspace.newBlock(
            'type_object');
                created_block.initSvg();
                created_block.render();
                this.inputList[i].connection.connect(created_block.outputConnection);
              }
            }
      }
      this.checkAction = function(newOp){
      if (!newOp || newOp.split('_').length < 2){
        return null;
      }
      else return true;
      }
      this.changeAction = function(newOp){
      if (!newOp || newOp.split('_').length < 2){
        return null;
      }
      var action_name = newOp.split('_')[1];
      if (!(action_name in dictionary_allowances)) return null; 
      currentBlock.action_name = action_name;
      arguments_val = dictionary_allowances[action_name].fields;
      // Remove previous inputs
      var childBlock = currentBlock.childBlocks_;
      cont = 0
      while (cont < childBlock.length){
        if (childBlock[cont].type == 'type_object'){
          childBlock[cont].dispose();
        }
        else {
          cont++;
        }
      }
      var num_inputs = currentBlock.inputList.length - 1
      for (var child = 0; child < num_inputs; child++){
        currentBlock.removeInput('VALUE'+child.toString(), true);
      }
      for (var aux = 0; aux < arguments_val.length; aux++){
        name_field = arguments_val[aux].type_name;
        currentBlock.appendValueInput('VALUE'+aux.toString())
          .setCheck(['object'])
          .appendField(name_field.toLowerCase());
  
      }
      currentBlock.connectBlocks();    
      return true;
      }
    // We should create a special field
    var dropdownText = new Blockly.FieldDropdownText(this.getActions, this.checkAction, this.changeAction);
    this.appendDummyInput('TYPE').appendField(dropdownText, 'TYPEACTION')
    this.action_name = 'Select'
        this.setColour(120);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setInputsInline(true);
        //this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    //this.changeAction();
      }
  };
  $('#toolbox').empty();
    $('#toolbox').append(
      '<block type="'+name_block+'" disabled="'+val_disabled+'"></block>');
      $('#toolbox').append('<block type="and_or_block"></block>');
      $('#toolbox').append('<block type="if_then_block"></block>');
      $('#toolbox').append('<block type="type_state"></block>');
      $('#toolbox').append('<block type="type_spatial"></block>');
    //$($('category[name="Action Block Testing"]')[0]).append(
  //    '<block type="'+name_block+'" disabled="'+val_disabled+'"></block>');
}
//addCategories();
//fillCategories();
//addGeneralBlock();
//addGeneralBlock2();



