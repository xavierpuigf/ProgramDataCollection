function Action (id, xml_name, results=false, is_test=false) {
  this.is_test = is_test;
  this.name = 'Default';
  this.show_description = show_description;
  this.id = id;
  this.results = results;
  this.description = '';
  this.xml_program;
  this.setNameAction = function(name){
    cont_id = this.id;
    this.name = name;
    $("#header_"+cont_id).empty();
    $("#header_"+cont_id).append(name)
    $("#header_"+cont_id).attr('href', '#collapse'+cont_id);
    //$("#collapse"+cont_id).attr('class', 'accordion-body in collapse');
    editing_name = false;
  }
  this.createActionHTML = function(xml_name){
    name_field = '<input id="action_name" type="text" class="input-xlarge" placeholder="Write the name of the action">';
    var close = '<div class="span1 offset4"> <button type="button" id="removebutton'+id+'" class="btn btn-default btn-lg" style="margin-top: 10%;" onclick="removeAction('+id+')"> <span class="glyphicon glyphicon-trash"> </span> </button></div>';
    var dispstr = 'none';
    console.log(this.show_description);
    if (this.show_description){
      var dispstr = 'inherit';
    }
    var str = '<div id="descriptionContainer'+this.id+'" style="display:'+dispstr+'">';
    str += '<h4> 2. Write a description of the task </h4>';
    str += '<input id="description'+(this.id).toString()+'" type="text" class="input-block-level" placeholder="Write a description of the task">'
    str += '</div>'
    str += '<div id="definitions">';
    str += '<br>';
    str += '<h4> 3. Set the scene for the task </h4>'
    str += '<div class="row-fluid"><div class= "span5"><h5> Room Definitions </h5></div>';
    str += '<button type="button" id="addLocation'+this.id+'" class="btn btn-default btn-lg" onclick="addLocation('+this.id+')"> Add Room</button></div>';
    str += '<div id="locations'+(this.id).toString()+'"></div>';
    str += '<br>';
    str += '<div class="row-fluid"><div class= "span5"><h5> Prop Definitions </h5></div>';
    str += '<button type="button"  id="addProp'+this.id+'" class="btn btn-default btn-lg" onclick="addProp('+this.id+')"> Add Prop </button></div>';
    str += '<div id="props'+(this.id).toString()+'"></div>';
    str += '</div>'; //
    str += '<div class="row-fluid" style="padding-top: 3%">';
    str += '<div class= "span7"><h4> 4. Create the script for the task </h4></div>';
    str += '</div>'
    str += '<div id="step_container'+this.id+'" class="step-group"; style="width:100%; height:600px;">  <div id="blocklydiv'+this.id+'""></div>'
    var holder = '<div id="collapse'+this.id+'" class="accordion-body collapse"><div class="accordion-inner">'+str+'</div></div>';
    var hc = '<a id ="header_'+id+'" style="font-size: 30px;  height: 35px; display: inline-block" class="accordion-toggle" data-toggle="collapse" data-parent=".action-group" href="#">'+name_field+'</a>';
    var header_content = '<div class="row-fluid"><div class="span7">'+hc+'</div>' +close+'</div>'
    var header =  '<div class="accordion-heading">'+header_content+'</div>';
    
    var group = '<div class="accordion-group" id="accordion_'+this.id+'">'+header+holder+'</div>'

    var _self = this;
    $(".action-group").append(group)
    $("#action_name").keyup(function(event){
      if (event.keyCode == 13) {
          _self.setNameAction($(this).val());
      }
    });
    //$("#addStep_"+this.id).on('click', (function(){_self.addStep()}));
    //$("#addVariable_"+this.id).on('click', (function(){_self.createVariable()}));
    var blocklyDiv = document.getElementById('blocklydiv'+this.id);
    var blocklyArea = document.getElementById('step_container'+this.id);
    
    this.workspace = Blockly.inject(blocklyDiv,
          {toolbox: document.getElementById('toolbox'),
          disable: true,
      trashcan: true,
          zoom: {enabled: true,
                    controls: true,
                    maxScale: 2,
                    minScale: .1,
                    scaleSpeed: 1.1},
            grid: {spacing: 20,
                length: 3,
                colour: '#ccc',
                snap: true}});
    this.workspace.variablesforObjects = {};
    this.workspace.object_types = object_types;
    this.workspace.id_action = this.id;
    var onresize = function(e) {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
          x += element.offsetLeft;
          y += element.offsetTop;
          element = element.offsetParent;
        } 
        while (element);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    };
    window.addEventListener('resize', onresize, false);
    onresize();
    if (xml_name.endsWith('.xml')){
      if (this.results) this.loadAction(xml_name);
      else this.loadAMTDescription(xml_name);
    }
    else {
      if (xml_name){
        this.setNameAction(xml_name);
      }
      this.loadDefault();
      this.updatetoolbox();
    }  
    $('.accordion-toggle').click(function(e){
      // retrieve action id
      var action_id = parseInt(e.currentTarget.id.split('_')[1]);
      actions[retrieveAction(id)].updatetoolbox();
    });
  }
  this.loadDefault = function(){
    if (use_new_action_block)
      var xml_text = '<?xml version="1.0"?> \
              <xml xmlns="http://www.w3.org/1999/xhtml"> \
              <block type="start_block2" movable="false" x="200" y="70" ></block>\
              </xml>';
    else
      var xml_text = '<?xml version="1.0"?> \
              <xml xmlns="http://www.w3.org/1999/xhtml"> \
              <block type="start_block2" movable="false" x="70" y="70" ></block>\
              </xml>';
    var xml_file = Blockly.Xml.textToDom(xml_text);
    Blockly.Xml.domToWorkspace(xml_file, this.workspace);
  }

  this.loadAction = function(xml_name_cont){
    var action = this;
    //console.log(xml_name_cont)
    var xml_name_cont_js = xml_name_cont.split('.')[0]+'.js';
    $.getScript( xml_name_cont_js)
    .done(function( script, textStatus ) {
      var keys = Object.keys(res_prop);
      for (var ids = 0; ids < keys.length; ids++){
        var elem = keys[ids];
        if ($.inArray(downCase[elem], room_types) > -1){
         addLocation(action.id, downCase[elem], res_prop[elem].toString());
        }
        else addProp(action.id, downCase[elem], res_prop[elem].toString());
      }
      action.workspace.variablesforObjects = res_prop;
      $.ajax({
        type: "POST",
          url: "php/xml_manager.php",
        data: {
          xml_name: xml_name_cont,
          action: 'load',
          folder: './',
        },
        success: function(resultData){
          xml_text = action.processXML(resultData);
          console.log(xml_text);
          xml_file = Blockly.Xml.textToDom(xml_text);
          ase = xml_file;
          action.xml_program = xml_file.getElementsByTagName('program')[0];
          var name_action = xml_file.getElementsByTagName('actionname')[0].textContent;
          action.setNameAction(name_action);
          action.loadworkspace();
          $('#description'+action.id).val(xml_file.getElementsByTagName('description')[0].textContent);
          
          
          }
      })
    });
  }
  this.loadAMTDescription = function(xml_name_cont){
    var action = this;
    $.ajax({
      type: "POST",
        url: "xml_manager.php",
      data: {
        xml_name: xml_name_cont,
        action: 'load',
        folder: 'actions_MT/results_xml_july/',
      },
      success: function(resultData){
        xml_text = action.processXML(resultData);
        xml_file = Blockly.Xml.textToDom(xml_text);
        ase = xml_file;
        var name_action = xml_file.getElementsByTagName('actionname')[0].textContent;
        action.setNameAction(name_action);
        $('#description'+action.id).val(xml_file.getElementsByTagName('description')[0].textContent);
        action.loadDefault();
        var props = xml_file.getElementsByTagName('props')[0].textContent.split(',');
        var rooms = xml_file.getElementsByTagName('scene')[0].textContent.split(',');
        for (var i = 0; i < props.length; i++){
          if ($.inArray(props[i], action.obtainUnsetObjects()) > -1){
            addProp(action.id, props[i]);
          }
        }
        for (var i = 0; i < rooms.length; i++){
          if ($.inArray(rooms[i], action.obtainUnsetLocations()) > -1){
            addLocation(action.id, rooms[i]);  
          }  
        }
        //action.setVariable(xml_file.getElementsByTagName('scene')[0].textContent, 1);
        
        
        }
    });
  }
  this.processXML = function(xml_test){
    // Converts XML to new or old block format, for now we only support
    // converting to new
    if (use_new_action_block == false) return xml_test;
    xml_test = xml_test.replace('x="70" y="70"', 'x="160" y="70"');
    while (xml_test.search('action_') > -1){
      var index = xml_test.search('action_');
      var index_end_action = xml_test.indexOf('"', index);
      var index_end_block = xml_test.indexOf('>', index);
      // Before the action tag
      var prev = '<block type="';
      var first_part = xml_test.substring(0, index-prev.length);
      // after the action tag
      var second_part = xml_test.substring(index_end_block+1, xml_test.length);
      // first part, end of block
      var end_first_block = xml_test.substring(index_end_action+1, index_end_block+1);
      var init_action = 'action_'.length;
      var action_name = xml_test.substring(index+init_action, index_end_action);
      var middle = '<block type="test_Block2" '+end_first_block;
      middle += '<mutation name_action="'+action_name+'"></mutation>';
      middle += '<field name="TYPEACTION">'
      middle += dictionary_allowances[action_name].block_name;
      middle +='</field>';
      xml_test = first_part + middle + second_part;
    }
    return xml_test;

  }
  this.createXMLforAction = function(){
    var xml_program = this.saveworkspace();
    var xml_blocks = xml_program.children;
    var xml = xml_program.cloneNode();
    var description = document.createElement('description');
    var name_action = document.createElement('actionname');
    var program = document.createElement('program');
    while(xml_blocks.length > 0){
      program.appendChild(xml_blocks[0]);
    }
    this.description = $('#description'+this.id).val();
    description.appendChild(document.createTextNode(this.description));
    name_action.appendChild(document.createTextNode(this.name));
    xml.appendChild(name_action);
    xml.appendChild(description);
    xml.appendChild(program);
    var xml_text = Blockly.Xml.domToText(xml);
    return xml_text;
  }
  this.saveAction = function (xml_name_cont){
    
    var xml_text = this.createXMLforAction()
    $.ajax({
      type: "POST",
        url: "xml_manager.php",
      data: {
        xml_name: xml_name_cont,
        xml_data: xml_text,
        action: 'save',
      },
      success: function(resultData){
        console.log(resultData);
        }
    });
  }
  this.obtainVariablesUsedinWorkSpace = function(){
    var dbb = this.workspace.blockDB_;
    var res =  [];
    for (elem in dbb){
      var block = dbb[elem];
      if (block.type == 'type_object'){
        var elem_name = block.getInput('TYPE');
        var elem_num = block.getInput('ITEMINP');
        if (elem_name){
          console.log(elem_num);
          var elem_name_m = elem_name.fieldRow[0].text_;
          var elem_num_m = elem_num.fieldRow[1].text_;
          res[elem_name_m.toUpperCase()] = parseInt(elem_num_m);
        }
      }
    }
    return res;

  }
  this.obtainUnsetLocations = function(){
    var options = room_types;
    var options_in_workspace = [];
    for (var elem in this.workspace.variablesforObjects){
      options_in_workspace.push(downCase[elem]);  
    } 
    options = $(options).not(options_in_workspace).get();
    return options;
  }
  this.obtainUnsetObjects = function(){
    var options = object_types;
    var options_in_workspace = [];
    for (var elem in this.workspace.variablesforObjects){
      options_in_workspace.push(downCase[elem]);  
    } 
    options = $(options).not(options_in_workspace).get();
    return options;

  }
  this.removeVariable = function(name){
    if (this.obtainVariablesUsedinWorkSpace()[name.toUpperCase()]){
      alert('This variable is in use');
      return false;
    }
    delete this.workspace.variablesforObjects[name.toUpperCase()];
    return true;
  }
  this.setVariable = function(name, amount){
    this.workspace.variablesforObjects[name.toUpperCase()] = amount; 

  }
  this.checkpropsandlocations = function (){
    var elem_loc = $('#locations'+this.id+' .location_elem').last();
    var elem_prop = $('#locations'+this.id+' .location_elem').last();
    if (elem_loc.children().length == 1) return 'There is an undefined location definition';
    if (elem_prop.children().length == 1) return 'There is an undefined prop definition'; 
    var location = elem_loc.children().first().text();
    var prop = elem_prop.children().first().text();
    var nprop = elem_prop.children().last().children().first().children().first().text();
    var nloc = elem_loc.children().last().children().first().children().first().text();
    if (nloc == 'Select ') return location+' is missing a quantity.';
    if (nprop == 'Select ') return prop+' is missing a quantity.';
    // The errors will always be in the last one

    return '';
  }
  this.checkworkspace = function(){
    if (this.workspace.topBlocks_.length > 1) 
      return 'There are some disconnected blocks in the script';
    var all_blocks = Object.keys(this.workspace.blockDB_);
    if (all_blocks.length == 1){
      return 'The script is empty';
    }
    if (all_blocks.length < 4){
      return 'The script is too short';
    }
    for (var i = 0; i < all_blocks.length; i++){
      var block_int = this.workspace.blockDB_[all_blocks[i]];
      var name_block = block_int.type;
      if (name_block == 'test_Block2'){
        if (block_int.action_name == 'Select'){
          return 'One block has no action defined. Select the action'
        }
        var children_filled = 0;
        var children_should_have = block_int.inputList.length - 1;
        if (block_int.childBlocks_){
          children_filled = block_int.childBlocks_.length;
          if (children_filled.length > 0){
            if (children_filled[children_filled.length - 1].type == 
                'test_Block2'){
              children_filled -= 1;
            }
          }
        }
        console.log(children_filled);
        console.log(block_int.inputList.length);

        if (children_filled < children_should_have){
          return 'Block '+block_int.action_name+' is missing inputs'
        }
      }
    }
    return '';

  }
  this.updatetoolbox = function(){
    Blockly.hideChaff(false);
    if (use_new_action_block == false)
      addCategories(this.workspace.variablesforObjects);
    var this_action = this;
    $(document).ready(function(){
      if (use_new_action_block == false)
        fillCategories(this_action.workspace.variablesforObjects);
      else
        addGeneralBlock2(this_action.workspace.variablesforObjects);
      this_action.workspace.updateToolbox(document.getElementById('toolbox'));
    });

  }
  this.loadworkspace = function(){ 
    this.workspace.clear();
    Blockly.Xml.domToWorkspace(this.xml_program, this.workspace)
  }
  this.saveworkspace = function (){
    this.xml_program = Blockly.Xml.workspaceToDom(this.workspace);
    return this.xml_program;
    
  }
  this.check_if_used = function(var_name){
    for (var i = 0; i < this.command_list.length; i++){
      if (this.command_list[i].class_type == 'step'){
        args = this.command_list[i].arguments;
        for (var gg = 0; gg < args.length; gg++){
          if (args[gg] == var_name) return true;
        }
      }
    }
    return false;
  }
  this.createActionHTML(xml_name);

  
}
