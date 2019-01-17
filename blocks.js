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
  console.log(action_name)
  if (!action_name){
      return getObjects();
  }
  var aux = dictionary_allowances[action_name].fields[arg].types_allowed;
  var results = [];
  for (var i = 0; i < aux.length; i++){
    results.push([aux[i], aux[i].toUpperCase()]);
  }
  return results;
}

Blockly.Blocks['type_object2'] = { 
  init: function() {

    this.setInputsInline(true);
    var blockInt = this;
    //var actionId = parseInt($('.accordion-body.in').attr('id').substr(8));
    this.actId = this.workspace.id_action;
    
    this.obtainworkspaceVariables = function(aux){
      return this.workspace.variablesforObjects;
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
      var obj_res = getObjects();
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
    this.setOutput(true, 'object');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');

  }
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
    this.setOutput(true, 'object');
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

 Blockly.Blocks['and_or_block'] = {
   mutationToDom: function(){
    var container = document.createElement('mutation');
    container.setAttribute('num_elems', this.inputList.length-1);
    console.log(container);
    return container;
   },
   domToMutation: function(xmlElement) {
          var num_elems = xmlElement.getAttribute('num_elems')
          if (num_elems == 0){
              num_elems = 1
          }
          console.log(num_elems);
          for (it = 0; it < num_elems; it++){
            this.appendValueInput("boolean_conds_"+it);
          }
   },
   init: function() {
     Blockly.pathToBlockly = '/data/vision/torralba/frames/data_acquisition/SyntheticStories/web_interface2/syntheticstory/ProgramDataCollection'
     var currBlock = this;
     this.setInputsInline(false);
     var dropdown = new Blockly.FieldDropdown([['and', 'and'], ['or', 'or']]);

     this.appendDummyInput('TYPE').appendField(dropdown, 'TYPE_op');
     this.setColour(220);
     this.setOutput(true, null);
   },
   onchange: function(event){
       console.log(this.inputList);
       if (event.oldParentId != this.id && event.newParentId == this.id){
            console.log('Connect')
            var val = this.inputList.length-1;
            this.appendValueInput("boolean_conds_"+val);
       }
       else if (event.oldParentId == this.id && event.newParentId != this.id){
           console.log(this.inputList)
           var inp_id = parseInt(event.oldInputName.split('_')[2])+1;
           for (it = inp_id+1; it < this.inputList.length-1; it++){
            var nextBlock = this.inputList[it].connection.targetConnection.sourceBlock_;
            this.inputList[it-1].connection.connect(nextBlock.outputConnection);
           }
           var val = this.inputList.length-2;
           this.removeInput("boolean_conds_"+val);
       }
   }
 };

 Blockly.Blocks['cond_block'] = {
   init: function() {
     Blockly.pathToBlockly = '/data/vision/torralba/frames/data_acquisition/SyntheticStories/web_interface2/syntheticstory/ProgramDataCollection'

     this.setInputsInline(true);
     this.appendDummyInput()
         .appendField('Enter conditions')
      this.appendStatementInput('CONDITIONS')
     //this.setNextStatement(true);
         //.appendField('add blocks');
     this.setColour(160);
     this.setMovable(false);
   }
 };

 Blockly.Blocks['if_then_block'] = {
   init: function() {
     Blockly.pathToBlockly = '/data/vision/torralba/frames/data_acquisition/SyntheticStories/web_interface2/syntheticstory/ProgramDataCollection'

     var dropdown = new Blockly.FieldDropdown([['now','now'], ['minutes','minutes'], ['hours', 'hours']]);
     this.setInputsInline(false);
      this.appendValueInput('CONDITIONS').appendField('If')
      this.appendValueInput('THEN').appendField('Then')
      this.appendDummyInput()
          .appendField('Happens after').appendField(dropdown)
     this.setColour(50);
     this.setMovable(true);
     this.setNextStatement(true);
     this.setPreviousStatement(true);
   }
 };


Blockly.Blocks['type_state'] = { 
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
    this.changeState = function(newOp){
      // var inputExists = blockInt.getInput('ITEMINP');
      // var varSpecial = new Blockly.FieldVariableSpecial(
      //   Blockly.Msg.VARIABLES_DEFAULT_NAME, newOp, blockInt.obtainworkspaceVariables(blockInt.actId));
      //   if (inputExists) {
      //     inputExists.removeField('VAR');
      //     inputExists.appendField(varSpecial, 'VAR');
      //   }
    }
    this.getState = function(){
      if (!this) return;
      var block = this.sourceBlock_;
      var i = 0;
      if (block){
        if (!block.inputList[i].connection.targetConnection){
          return [['select', 'select']];
        }
        var bi = block.inputList[i].connection.targetConnection.sourceBlock_;
        console.log(bi);
        var selected_obj = bi.selected_object;
        obj_idx = parseInt(selected_obj.split('_')[1])-1;
        if (selected_obj.startsWith('objid')){

          states = object_states_dict[obj_idx+1]
        }
        else {
          var objects_selected = computeObjectsProg(blockInt.workspace.object_types, obj_idx);
          // Compute the states as the intersection
          var states = [];
          for (it=0; it<objects_selected.length; it++){
            var curr_states = object_states_dict[objects_selected[it]];
            if (it == 0) states = curr_states
            else {
              states = states.filter(value => -1 !==curr_states.indexOf(value));
            }
            console.log(states.length);
          }
        }
        console.log(objects_selected);
        var final_states = [];
        for (var i = 0; i < states.length; i++){
            final_states.push([states[i], states[i]]);
        }
        
        return final_states;
      }
      else {
        return [['select', 'select']];
      }
    }

	this.connectBlocks = function(){
      console.log('Try connect')
      if (!this.inputList[0].connection.targetConnection){
        created_block = this.workspace.newBlock('type_object2');
        created_block.initSvg();
        created_block.render();
        this.inputList[0].connection.connect(created_block.outputConnection);
      }
	    
	 }



    var dropdown = new Blockly.FieldDropdown(this.getState, this.changeState);
    this.appendValueInput('VALUE0').setCheck('object');
    this.appendDummyInput('TYPE')
      .appendField('has state')
      .appendField(dropdown, 'TYPE');
    
    this.setColour(290);
    this.setOutput(true, null);
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    
  },
  onchange: function(event){
  	if (event.blockId == this.id && event.type == 'move'){
  		if (this.workspace.object_types){
  			this.connectBlocks();	

  		}
  	}
  }
  
};



Blockly.Blocks['type_spatial'] = { 
  init: function() {

    this.setInputsInline(true);
    var blockInt = this;
    //var actionId = parseInt($('.accordion-body.in').attr('id').substr(8));
    this.actId = this.workspace.id_action;
    
    this.obtainworkspaceVariables = function(aux){
      return this.workspace.variablesforObjects;
    }
    this.changeState = function(newOp){
    }
    this.getState = function(){
      var block = this.sourceBlock_;
      var i = 0;
      if (block){
        var final_states = []; 
        for (var i = 0; i < relationships_taxonomy.length; i++){
            final_states.push([relationships_taxonomy[i], relationships_taxonomy[i].toUpperCase()]);
        }
        return final_states;
      }
      else {
        return [['select', 'select']];
      }
    }

	this.connectBlocks = function(){
      
      if (!this.inputList[0].connection.targetConnection){
        created_block = this.workspace.newBlock('type_object2');
        created_block.initSvg();
        created_block.render();
        this.inputList[0].connection.connect(created_block.outputConnection);
      }
      if (!this.inputList[2].connection.targetConnection){
        created_block = this.workspace.newBlock('type_object2');
        created_block.initSvg();
        created_block.render();
        this.inputList[2].connection.connect(created_block.outputConnection);
      }
	    
	 }



    var dropdown = new Blockly.FieldDropdown(this.getState, this.changeState);
    this.appendValueInput('VALUE0').setCheck('object');
    this.appendDummyInput('TYPE')
      .appendField('is')
      .appendField(dropdown, 'TYPE');
    this.appendValueInput('VALUE1').setCheck('object');
    
    this.setColour(290);
    this.setOutput(true, null);
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    console.log('HERE');
    
  },
  onchange: function(event){
  	if (event.blockId == this.id && event.type == 'move'){
  		if (this.workspace.object_types){
  			this.connectBlocks();	

  		}
  	}
  }
  
};

