function Log(hitId, task_name) {
	this.hitId = hitId;
	this.task_name = task_name;
	this.logEvents = [this.addEvent('Create action')];
	this.addLogDB = function(finished=false){
		var text = this.logtoText();
			
	}
	this.addEvent = function(message){
		this.logEvents.push(message + ': '+ new Date().toLocaleString());
		this.addLogDB();
	}


	this.clickSubmit = function(){
		this.addEvent('clickSubmit');
	}
	this.startDescription = function(){
		this.addEvent('Start description');
	}
	this.addDescription = function(){
		this.addEvent('Add description');
	}
	this.openAction = function(){
		this.addEvent('Opening action');
	}
	this.closeInstruction = function(){
		this.addEvent('Closing action');
	}
	this.openInstruction = function(){
		this.addEvent('Opening instruction');
	}
	this.closeInstruction = function(){
		this.addEvent('Closing instruction');
	}
	this.addPropRoom = function(prop_name){
		this.addEvent('Added prop '+prop_name);
	}
	this.removePropRoom = function(prop_name){
		this.addEvent('Remove prop '+prop_name);
	
	}
	this.createPropRoom = function(){
		this.addEvent('Create new prop');
	
	}
	this.addAction = function(){
		this.addEvent('Added new action block');
	
	}
	this.removeAction = function(){
		this.addEvent('Added new action block');
	
	}
	this.setAction = function(action_name){
		this.addEvent('Selected action '+action_name);
	
	}
	this.connectAction = function(action_name){
		this.addEvent('Connected action '+action_name);
	
	}
	this.setObject = function(action_name, object_name){
		this.addEvent('Set object'+action_name);
	
	}
	this.logtoText = function(){
		var txt_res = '';
		for (var i = 0; i < logEvents.length; i++){
			var text_this = (i+1).toString() + ". " +this.logEvents[i]+'\n';
			txt_res += text_this;
		}
		return txt_res;
	}
}
