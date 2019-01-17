

var step_number = 1;
var nkey_tutorial = 'donetutorial192';
var tutorial_done = true;
var cell_aux = null;
function gup( name )
{
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
		return "NO_VAL";
	else
		return results[1];
}
function startTutorial(){
	$("#startHIT").css('display', 'none');
	$('#goal').hide();
	$('#hide_instructions').hide();
	$('#hide_examples').hide();
	$('#submitButton').hide();
	$('#instructiondiv').hide();
	$('#tutorialdiv').show();
	while (actions.length > 0) removeAction(actions[0].id);
	$("#next_tutorial").prop('disabled', true);
	$("#next_tutorial").text('Next');
	tutorialStep1();

}
function finalStep(){
	step_number = 12;
	tutorial_done = true;
	$("#next_tutorial").text('Finish');
	if (cell_aux != null) removeAction(cell_aux);
	cell_aux = null;
	$("#tutorialContent").empty();
	$("#section_tutorial").text("You have finished the tutorial, you can now start the tasks.");
	var instr = '<br> You can use the following key to skip the tutorial next time.'+' <h4> '+nkey_tutorial+' </h4> ';
	$('#tutorialContent').append(instr);
	
	
}
function tutorialStep4(step_num){
	$("#next_tutorial").prop('disabled', false);
	step_number = step_num;
	var aux = step_number - 4;
	var msg = ""
	if (aux == 0){
		msg = ' Add blocks to get the following:';
	}
	if (aux > 0){
		if (aux < 7) msg = ' Add blocks to get the following (If the picture is cropped, assume it continues from the previous script):';
	}
	var instructions = ['We start by going to the room and object of interest', 'Before interacting with the faucet, we need to find it', 'We grab the wine glass', 'Some actions require two objects, here we put the glass into the sink', 'We have 2 glasses, so we have to do the same with the second glass', 'We use the sponge to clean',  'We can put an object in a specific place, or just back where it was, as we do with sponge', 'If you need a block that is not defined, use the special block. Add as text the instruction that you would need. Try to reduce as much the number of these blocks.'];
	//while (actions.length > 0) removeAction(actions[0].id);
	$("#tutorialContent").empty();
	$("#section_tutorial").text("Creating the script");
	var instr = '<br> You will now create the script. <br><br> <ol style="font-size: medium"> \
		<li> You need to click the categories and select a block for your action.</li> \
	  	<li> Drag the block and drop it into the canvas </li> \
	  	<li> Once the block is in the canvas, select the object to interact with </li>\
	  	<li> Finally, if there are multiple objects of one kind, select which one to use, using the second number. </li>\
	 </ol>'+' <h4> '+instructions[aux]+' </h4> <br> <font color="blue">' +msg+'<br>   </font>';
	$('#tutorialContent').append(instr);
	//cell_aux = createCell('tutorial/tutorial.xml', false, true, false);
	$("#header_"+cell_aux).unbind( "click" );
	console.log(parseInt(aux+1));
	if (step_num < 11){
		var img = '<img style="height:'+parseInt(180)+'px"; src="tutorial/t'+parseInt(aux+1)+'.png"></img>';
		$("#tutorialContent").append(img);
	}
	
}
function checkStep4(step_num){
	var dom_mine = Blockly.Xml.workspaceToDom(actions[0].workspace).firstChild;
	var dom_obj = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="start_block2" id="Z|WO*rj_|KA1^@E,an+." movable="false" x="70" y="70"><next><block type="action_Walk" id="hG;tlz!Ju]vuS/fcMtKh"><value name="VALUE0"><block type="type_object" \
	id="_eFX|5e}LwiE}_h*jcO;"><field name="TYPE">KITCHEN</field><field name="VAR">1</field></block></value><next><block type="action_Walk" id="Dw;Mf7ve8PLblsL+?,VA"><value name="VALUE0"><block type="type_object" \
	id="pqcX!NlV}RMHMVr,#4IF"><field name="TYPE">SINK</field><field name="VAR">1</field></block></value><next><block type="action_Find" id="~=rUiAD[d4fl__*57da="><value name="VALUE0"><block type="type_object" \
	id=".czv}T:ykItmj2V7Ssrk"><field name="TYPE">FAUCET</field><field name="VAR">1</field></block></value><next><block type="action_SwitchOn" id="j[qrJn8[^!U0JFVSyl8K"><value name="VALUE0"><block type="type_object" \
	id="L_r=h:hFsst/idvYy2[C"><field name="TYPE">FAUCET</field><field name="VAR">1</field></block></value><next><block type="action_Find" id="3yJeZfex+Ine:Hr-?G0p"><value name="VALUE0"><block type="type_object" \
	id="P:B4{ZWWTfB^p]Tb)ckf"><field name="TYPE">WINE GLASS</field><field name="VAR">1</field></block></value><next><block type="action_Grab" id="jq/%FZk?W2o}xi}s`/no"><value name="VALUE0"><block type="type_object" \
	id="`mCk:FB3t@=6scXFQw?C"><field name="TYPE">WINE GLASS</field><field name="VAR">1</field></block></value><next><block type="action_Walk" id="A:K}^O|1r6uJk~Fz-6:8"><value name="VALUE0"><block type="type_object" \
	id="G5=BjkG]#Go93FZgCD*0"><field name="TYPE">SINK</field><field name="VAR">1</field></block></value><next><block type="action_PutBack" id="N}F/g1RgRnvvm6yxVK8k"><value name="VALUE0"><block type="type_object" id="HA=)6[ktol}OIw~(TPYk">\
	<field name="TYPE">WINE GLASS</field><field name="VAR">1</field></block></value><value name="VALUE1"><block type="type_object" id="V!QyD{mPU|{Qe+09F,uD"><field name="TYPE">SINK</field><field name="VAR">1</field>\
	</block></value><next><block type="action_Find" id="o[2fvbI.R7t5fwj=`-|e"><value name="VALUE0"><block type="type_object" id="WXFe,RLeE(XwOW]CX*:k"><field name="TYPE">WINE GLASS</field><field name="VAR">2</field></block>\
	</value><next><block type="action_Grab" id="QW2{EoK5?IL*|Q@s392o"><value name="VALUE0"><block type="type_object" id="2HL56bw-F/z_([J1!}l{"><field name="TYPE">WINE GLASS</field><field name="VAR">2</field></block></value>\
	<next><block type="action_Walk" id="Og3b:3J|Iuop8`*eCa7j"><value name="VALUE0"><block type="type_object" id="PiDs=5].6:;rlBQFsah{"><field name="TYPE">SINK</field><field name="VAR">1</field></block></value><next>\
	<block type="action_PutBack" id="pQlkJZ5cg`RZAk!X`^Zk"><value name="VALUE0"><block type="type_object" id="gD_Lu18HrMs{ux-|`|`!"><field name="TYPE">WINE GLASS</field><field name="VAR">2</field></block></value>\
	<value name="VALUE1"><block type="type_object" id=")3N^:5mu[N/7a*2Pi/w="><field name="TYPE">SINK</field><field name="VAR">1</field></block></value><next><block type="action_Find" id="ZL!(}:{5RN%WSq{/8k2!">\
	<value name="VALUE0"><block type="type_object" id="I=3X.gmO!FDn|EQ3Y5/b"><field name="TYPE">SPONGE</field><field name="VAR">1</field></block></value><next><block type="action_Grab" id="K{Jj3Xdjg6P^3Y;?n@|#">\
	<value name="VALUE0"><block type="type_object" id="s8t}SlAg}Qzfgm@zb{0@"><field name="TYPE">SPONGE</field><field name="VAR">1</field></block></value><next><block type="action_Walk" id="D.OJaUa{pow-!rz;QN_Z">\
	<value name="VALUE0"><block type="type_object" id="yhYp]dj~B7b-698@o`cK"><field name="TYPE">SINK</field><field name="VAR">1</field></block></value><next><block type="action_Grab" id="._A-L^Qm30!CGJKq!h,^">\
	<value name="VALUE0"><block type="type_object" id="GVtZ@hBHPooQu5.dTj1s"><field name="TYPE">WINE GLASS</field><field name="VAR">1</field></block></value><next><block type="action_Wash" id="(S^+{nUBYu9BT9SVxd@9">\
	<value name="VALUE0"><block type="type_object" id="l93SqS[7A,gTMh~|1sfo"><field name="TYPE">WINE GLASS</field><field name="VAR">1</field></block></value><next><block type="action_Grab" id="HeXhq!Ie%|y6OOiBU,I:">\
	<value name="VALUE0"><block type="type_object" id="-2{#/54@.HGTb6]pIc)a"><field name="TYPE">WINE GLASS</field><field name="VAR">2</field></block></value><next><block type="action_Wash" id="|P[Q4`#z)+_@WlEP`LAY">\
	<value name="VALUE0"><block type="type_object" id="uKrMX:n!aNXZ9:w7|Kw/"><field name="TYPE">WINE GLASS</field><field name="VAR">2</field></block></value><next><block type="action_PutObjBack" id="=V4S+Yuegylq!thpNcXY">\
	<value name="VALUE0"><block type="type_object" id=":};XY^J6g14jmb~7E!V#"><field name="TYPE">SPONGE</field><field name="VAR">1</field></block></value><next><block type="action_Rinse" id="Nh^q?Oj0-Eq{e(N1s;D3">\
	<value name="VALUE0"><block type="type_object" id="U*,NIT:qMJt0r]q}4ww}"><field name="TYPE">WINE GLASS</field><field name="VAR">1</field></block></value><next><block type="action_PutBack" id="^3MDOF#)J/[JKV+hMRss">\
	<value name="VALUE0"><block type="type_object" id="OhrkuO%){c|hAyO(Gnln"><field name="TYPE">WINE GLASS</field><field name="VAR">1</field></block></value><value name="VALUE1"><block type="type_object" id="xW;)4Z7YIAnv`xC}4m0j">\
	<field name="TYPE">DISHRACK</field><field name="VAR">1</field></block></value><next><block type="action_Rinse" id="Q*}mCAxLF]8vjX*2W0)Q"><value name="VALUE0"><block type="type_object" id="?lMSDTcDUo)!RSW!FTt)">\
	<field name="TYPE">WINE GLASS</field><field name="VAR">2</field></block></value><next><block type="action_PutBack" id=":h2x!/|#17ZAmn9bB@P%"><value name="VALUE0"><block type="type_object" id="wp%1BhahO*!7TNN/??Q5">\
	<field name="TYPE">WINE GLASS</field><field name="VAR">2</field></block></value><value name="VALUE1"><block type="type_object" id="k:HJj94WsaB.WII1h[I{"><field name="TYPE">DISHRACK</field><field name="VAR">1</field>\
	</block></value><next><block type="action_SwitchOff" id="`{1M}EL*B///[zfvW8l;"><value name="VALUE0"><block type="type_object" id="GcOiap=@s[2%J+E%JXar"><field name="TYPE">FAUCET</field><field name="VAR">1</field></block>\
	</value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next>\
	</block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';
	var dom_them = Blockly.Xml.textToDom(dom_obj).firstChild;
	var checks = [3, 5, 7, 9, 13, 20, 28];
	if (step_num == 11) return true;
	var numVals = checks[step_num-4];
	if (!comparedoms(dom_mine, dom_them, numVals)){
		alert("Please make sure that the script does match the picture");
	}
	else return true;
}
function tutorialStep3(){
	$("#next_tutorial").prop('disabled', false);
	step_number = 3;
	$("#tutorialContent").empty();
	$("#section_tutorial").text("Adding Props and Rooms");
	var instr = '<br> You have to start adding the rooms and props that you will need in your script. <br><br> <ol style="font-size: medium"> \
		<li> Some Props and Rooms are already added but they may not fit. You can delete them clicking the cross.</li> \
	  	<li> To add a Room or a Prop:</li> <ol><li> Click into Add Room or Add Prop </li><li> Type the name of the room or object and click enter. </li><li> Select the amount of objects you want </li></ol>\
	 </ol>'+'<font color="light-blue"> Remove and Add the props/rooms to have the following: <br>   \
		Room Definitions: Kitchen: 1 <br> Prop Definitions: Wine Glass: 2, Faucet: 1, Dishrack: 1, Sponge: 1, Sink: 1\
	 </font>';
	$('#tutorialContent').append(instr);
	$("#header_"+cell_aux).unbind( "click" );
	
}
function checkStep3(){

	var dictio = actions[0].workspace.variablesforObjects;
	var diction_want = {"KITCHEN": 1, "WINE GLASS": 2, "FAUCET": 1, "DISHRACK": 1, "SPONGE": 1, "SINK": 1};
	var obj1 = Object.keys(dictio);
	var obj2 = Object.keys(diction_want);
	console.log(obj1);
	console.log(obj2);
	var diff = $(obj1).not(obj2).get();
	var diff2 = $(obj2).not(obj1).get();
	if (diff.length > 0){
		var msg = 'These objects should not be in the action. Please remove them.\n';
		for (var it = 0; it < diff.length; it++) msg+= (diff[it])+'\n';
			alert(msg);
		return false;
	}
	if (diff2.length > 0){
		var msg = 'These objects should be in the action. Please add them.\n';
		for (var it = 0; it < diff2.length; it++) msg+= (diff2[it])+'\n';
		alert(msg);
		return false;
	}
	for (var i = 0; i < obj1.length; i++){
		if (dictio[obj1[i]] != diction_want[obj1[i]]){
			alert("The quantity of "+obj1[i]+" is wrong");
			return false;
		}
	}
	return true;

}
function tutorialStep2(){
	$("#next_tutorial").prop('disabled', false);
	step_number = 2;
	$("#tutorialContent").empty();
	$("#section_tutorial").text("Contents of action");
	var instr2 = '<br><br> Here you can see the content of an action. Each action contains: <br><br> <ol style="font-size: medium"> \
	  	<li> The description of the action. You need to create a script matching it, though you may change the description if it fits you.</li> \
	  	<li> The Rooms and Prop Definitions.</li> \
	  	<li> The canvas to create the script.</li> \
	  	</ol>'+ '<font color="blue"> Click next to go in the next step. </font>';
	   $('#tutorialContent').append(instr2);
	   $("#header_"+cell_aux).unbind( "click" );
}
function tutorialStep1(){
	step_number = 1;
	$("#tutorialContent").empty();
	var instr = '<br> The goal of this task is to create scripts for some given action descriptions, so that a robot can interpret and execute them.';
	instr += '<br> Below you have an example action description. <font color="blue"> Click on the name to open it. </font>';
	$('#tutorialContent').append(instr);
	cell_aux = createCell('tutorial/tutorial.xml', false, false, false);
	$("#header_"+cell_aux).click(
	  function() {
	  	$("#next_tutorial").prop('disabled', false);
	  	
	  }
	);
}
function checkKey(){
	console.log("HERE");
	if (nkey_tutorial == $("#inpkey").val()){

		tutorial_done = true;
		stopTutorial();
	}
	else {
		alert('The key is invalid');
		$("#inpkey").remove();
		$("#checkKey").remove();
		$("#skip_tutorial").prop('disabled', false);
		$("#skip_tutorialbeg").prop('disabled', false);
	}
}
function checkTutorial(aux){
	var input_key = '<input id="inpkey" type="text" style="display: inline" placeholder="Enter key"></input>';
	var but = '<button  id="checkKey" type="button" class="btn btn-default btn-lg" onClick="checkKey()" style="display: inline"> Check Key </button>';
	var key_b = "#skip_tutorial";
	if (aux) key_b = "#skip_tutorialbeg";
	$(key_b).after(but);
	$(key_b).after(input_key);
	$(key_b).prop('disabled', true);
	
	//stopTutorial();
	//tutorial_done = true;
}
function nextStepTutorial(){
	console.log(step_number)
	if (step_number == 1) tutorialStep2();
	else if (step_number == 2) tutorialStep3();
	else if (step_number > 2){
		if (step_number == 3){
			if (checkStep3()) tutorialStep4(step_number+1);
		}
		else {
			if (step_number == 12) stopTutorial();
			else {
				if (checkStep4(step_number)){
					if (step_number == 11) finalStep();
					else tutorialStep4(step_number+1);
				}
			}
		}
	}
	
}

function stopTutorial(){
	$('#goal').show();
	$('#hide_instructions').show();
	$('#hide_examples').show();
	$('#submitButton').show();
	$('#tutorialdiv').hide();
	if (cell_aux != null) removeAction(cell_aux);
	cell_aux = null;
	startup();

}

