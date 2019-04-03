# this are the files we used in the paper
import xml.etree.ElementTree as ET
import sys
import os
import glob
import script_utils

conti = 0
input_file = sys.argv[1]
if len(sys.argv) > 2:
    output_file = sys.argv[2]
else:
    output_file = 'out_prog.txt'

content, special_cont = script_utils.parseXMLV2(input_file)                
with open(output_file,'w+') as f:
        f.writelines("%s\n" % l for l in content)

