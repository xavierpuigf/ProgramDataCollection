# ProgramDataCollection
![](assets/media1.gif)
This repository contains code to create programs based on [blockly](https://developers.google.com/blockly/) library
## Setup
Make sure you get the blockly submodule, modified to work with these programs. You can get it by cloning the repo recrusively.
``` bash
git clone --recursive https://github.com/xavierpuigf/ProgramDataCollection.git
```

After cloning the repository. Download closure-library from google. This repo is based on version `v20160619`

``` bash
git clone https://github.com/google/closure-library.git
git checkout tags/v20160619
```

Download `bootstrap 2.3.2` and place it under libraries

``` bash
cd libraries
wget https://getbootstrap.com/2.3.2/assets/bootstrap.zip
unzip bootstrap.zip
```

## Contents
- `backend.js`: starting point. Contains functions to create new actions, store them and submit tasks to AMT. 
- `action.js`: defines the class `Action`. Each action will contain a program and the block you want to store in it.
- `blocks.js`: contains the definitions of the blocks. Each block starts with Blockly.Blocks['name_block'] you can create there your own blocks.
- `terminals.js`: contains functions that fire when you modify the blocks, like setting the arguments etc. It also sets the toolbox to add blocks into the canvas.
- `knowledge_base/*`: contains js files with information to help populate the blocks (number of actions, interactions etc). 


## Usage
### Start annotation
Open `interface.html` in a browser as:
```
interface.html?filetasks={CONTENT}&mode={MODE}
```
Where `{MODE}` is the mode of annotation:
- `TASK_NAME`: Creates a single task with name `{CONTENT}`.
- `TASK_FILE_NAME`: Creates a task based on the contents of the file `example_tasks/{CONTENT}`
- `DATABASE`: to debug. Checks from a database, based on which workers did what.
- `CREATED_FILE`: to debug. Checks from a folder of saved programs

### Submit annotations
When you click submit, the programs will be stored in a field `answer` as a string. You can check it as:
``` js
$('answer').val()
```
Note that the annotations are stored to work with [AMT MATLAB annotation tool](https://github.com/adikhosla/mturkMatlab).

### Parse annotations
Once you get the resulting string, you will need to parse it into a program. First create an `.xml` file from each program, either by checking the `answer` field or the `save` in `./php/xml_manager`. Then parse the xml into a program running:
``` bash
python parse_result.py {input_xml} {out_file}
```
As an example, you can run
```
python create_action_file.py test_programs/test_new_block.xml
```
and check the file `out_prog.txt`.

Note that the files `test_programs/test{1,2,3}.xml` follow an old format, which needs to be parsed differently.
