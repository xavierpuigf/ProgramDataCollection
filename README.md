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
