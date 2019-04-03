""" Transform the knowledge base for use in blocks """ 
var object_types = [];

for (var key in dictionary_allowances){
  vale = dictionary_allowances[key].fields;
  for (field_id = 0; field_id < vale.length; field_id++){
    argum = vale[field_id];
    types = [];
    if (vale[field_id].types_allowed){
      types = vale[field_id].types_allowed;
    }
    classes_argum = argum.classes_allowed;
    if (!classes_argum) continue
    for (var class_id = 0; class_id < classes_argum.length; class_id++){
        if (classes_argum[class_id] in affordances)  {
        types = types.concat(affordances[classes_argum[class_id]]);
      }
    }
    var unique = types.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })
    // alert(types); alert(unique);
    vale[field_id].types_allowed = unique;
    object_types = object_types.concat(unique);
  }
  dictionary_allowances[key].fields = vale;
  
}

object_types = object_types.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })
object_types = $(object_types).not(room_types).get();
object_types.sort();


var downCase = [];
for (var i = 0 ; i < object_types.length; i++) downCase[object_types[i].toUpperCase()] = object_types[i];
for (var i = 0 ; i < room_types.length; i++) downCase[room_types[i].toUpperCase()] = room_types[i];



