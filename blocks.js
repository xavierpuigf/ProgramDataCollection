function getRooms(){
  var results = [];
  for (var i = 0; i < room_types.length; i++){
    results.push([room_types[i], room_types[i].toUpperCase()]);
  }
  return results;
}
function getAffordances(){
  aux = Object.keys(affordances);
  var results = [];
  for (var i = 0; i < aux.length; i++){
    results.push([aux[i], aux[i].toUpperCase()]);
  }
  return results;
}
function getObjects(){
  var aux = object_types;
  aux = aux.concat(room_types);
  var results = [];
  for (var i = 0; i < aux.length; i++){
    results.push([aux[i], aux[i].toUpperCase()]);
  }
  return results;
}
function getObjectsforAction(action_name, arg){
  var aux = dictionary_allowances[action_name].fields[arg].types_allowed;
  var results = [];
  for (var i = 0; i < aux.length; i++){
    results.push([aux[i], aux[i].toUpperCase()]);
  }
  return results;
}


Blockly.Blocks['type_object'] = { 
  init: function() {

    this.setInputsInline(true);
    var blockInt = this;
    //var actionId = parseInt($('.accordion-body.in').attr('id').substr(8));
    this.actId = this.workspace.id_action;
    
    this.obtainworkspaceVariables = function(aux){
      return this.workspace.variablesforObjects;
      // var thisworkspaceVariables = {};
      // for (var action_elem = 0; action_elem < actions.length; action_elem++){
      //   if (actions[action_elem].id == actionId){
      //     thisworkspaceVariables = actions[action_elem].workspace.variablesforObjects;
      //   }
      // }
      // return thisworkspaceVariables;
    }
    this.changeObject = function(newOp){
      var inputExists = blockInt.getInput('ITEMINP');
      var varSpecial = new Blockly.FieldVariableSpecial(
        Blockly.Msg.VARIABLES_DEFAULT_NAME, newOp, blockInt.obtainworkspaceVariables(blockInt.actId));
        if (inputExists) {
          inputExists.removeField('VAR');
          inputExists.appendField(varSpecial, 'VAR');
        }
    }
    this.getObj = function(block){
      var sourceBlock = blockInt; // this.sourceBlock_
      if (sourceBlock && sourceBlock.parentBlock_){
        var block_parent = sourceBlock.parentBlock_;
        // get input num
        var input_num = 0;
        for (var i = 1; i < block_parent.inputList.length; i++){
          var bi = block_parent.inputList[i].connection.targetConnection;
          if (bi){
            if (bi.sourceBlock_.id == sourceBlock.id) input_num = i;
          }
        }
        var action_name = block_parent.action_name;
        console.log(action_name);
        obj_res = getObjectsforAction(action_name, input_num-1);

      }
      else {
        // If it does not appear in any parent block
        obj_res = getObjects();
      }
      var obj_res_available = [];
      var thisworkspaceVariables = blockInt.obtainworkspaceVariables(blockInt.actId);
      for (var i = 0; i < obj_res.length; i++){
        for (var elem in thisworkspaceVariables){
          if (elem == obj_res[i][1]) obj_res_available.push(obj_res[i]);
        }
      }
      return obj_res_available;
    }

    var objectsSelect = this.getObj();
    var dropdown = new Blockly.FieldDropdown(this.getObj, this.changeObject);
    var varSpecial = new Blockly.FieldVariableSpecial(
        Blockly.Msg.VARIABLES_DEFAULT_NAME, objectsSelect[0][1], this.obtainworkspaceVariables(this.actId));
  
    this.appendDummyInput('TYPE')
      .appendField(dropdown, 'TYPE');
    this.appendDummyInput('ITEMINP')
        .appendField('number')
        .appendField(varSpecial, 'VAR')
    
    this.setColour(100);
    this.setOutput(true, null);
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');

  },
  onchange: function(event){
    // This is when you manually put the block inside an action
    if (event.blockId == this.id && event.type == 'move' && (event.newParentId || event.oldParentId)){
     var id_parent = event.newParentId;
     if (id_parent){
        var input_num = parseInt(event.newInputName.substr(5));
        var actindex = 0;
        for (var i = 0; i < actions.length; i++){
          if (actions[i].id == this.actId) actindex = i;
        }
        var block_parent = actions[actindex].workspace.blockDB_[id_parent];
        action_name = block_parent.action_name;
        objects = getObjectsforAction(action_name, input_num);
     }
     else {
       objects = getObjects();
     }
     var obj_res_available = [];
      var thisworkspaceVariables = this.obtainworkspaceVariables(this.actId);
      for (var i = 0; i < objects.length; i++){
        for (var elem in thisworkspaceVariables){
          if (elem == objects[i][1]) obj_res_available.push(objects[i]);
        }
      }
     var inputExists = this.getInput('TYPE');
     var varSpecial = new Blockly.FieldDropdown(this.getObj, this.changeObject);
     this.changeObject(obj_res_available[0][1]);
      if (inputExists) {
        inputExists.removeField('TYPE');
        inputExists.appendField(varSpecial, 'TYPE');
      }
    }
 
    var mode = 'object';//this.getFieldValue('TYPE');
    this.outputConnection.setCheck(mode);
  }
};

Blockly.Blocks['start_block2'] = {
init: function() {
 Blockly.pathToBlockly = '/data/vision/torralba/frames/data_acquisition/SyntheticStories/web_interface2/syntheticstory/ProgramDataCollection/'
 this.appendDummyInput()
     .appendField('action starts')
     .appendField(new Blockly.FieldImage('assets/greenflag.png', 15, 15, 'flag'));
 this.setNextStatement(true);
     //.appendField('add blocks');
 this.setColour(70);
 this.setMovable(false);
 this.setInputsInline(false)  }
};


