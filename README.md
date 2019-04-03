# ProgramDataCollection
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
