''' Utility functions for scripts
'''
import pdb
import xml.etree.ElementTree as ET
def getDescription(name):
    ''' Given an xml with a script retrieves the scene and props
    Args:
        name: file name of the xml
    '''
    group = name.split('/')[0].split('_')[-1]
    splitname = name.split('/')[-1].split('_')[0]
    splitnum = int(name.split('/')[-1][-5])
    url = '/data/vision/torralba/frames/data_acquisition/SyntheticStories/web_interface2/syntheticstory'
    split_f = url + '/splits/tasks_'+group+'_split/'+splitname+'.js'
    with open(split_f, 'r') as spf:
        fi = spf.readlines()
    fi = fi[0]
    fi = fi[18:-3]
    fi = fi.split(',')[splitnum-1].strip()
    fi = fi[1:-1]
    file_js = url + '/'+fi+'.xml'
    with open(file_js, 'r') as fjs:
        val = fjs.readlines()
    val = val[0]
    val2 = val[val.find('<scene>')+7: val.find('</scene>')]
    val = val[val.find('<props>')+7: val.find('</props>')]
    return val, val2

def parseXMLV2(name):
    ''' Given an xml with a script, parses the xml
    Args:
        name: file name of the xml
    Returns:
        contents: the content of the xml, first 4 lines are name, description
                props and scene
        special_num: the number of spetial blocks
    '''
    with open(name, 'r') as f:
        xml_string = f.read()
    xml_string_cap = '<xml>' + xml_string[42:] 
    pdb.set_trace()
    e = ET.fromstring(xml_string_cap)
    action_name = e.find('actionname').text
    description = e.find('description').text
    program = e.find('program').find('block')
    contains_special = False
    props_name = ''
    scene_name = ''
    content = [action_name, description, props_name, scene_name]
    special_cont = 0
    while (program is not None and program.find('next') is not None 
           and not contains_special):
        program = program.find('next').find('block')
        type_block = program.get('type')
        
        # program_name
        program_line = '['+program.find('mutation').get('name_action')+']'
        # fill arguments
        args = program.findall('value')
        for arg in args:
            name_obj = arg.getchildren()[0].getchildren()[0].text
            quantity = arg.getchildren()[0].getchildren()[1 ].text
            program_line = program_line + ' <' + name_obj +'> ('+ quantity+')'
        content.append(program_line)
    return content, special_cont
def parseXML(name, readJS=True):
    ''' Given an xml with a script, parses the xml
    Args:
        name: file name of the xml
    Returns:
        contents: the content of the xml, first 4 lines are name, description
                props and scene
        special_num: the number of spetial blocks
    '''
    with open(name, 'r') as f:
        xml_string = f.read()
    xml_string_cap = '<xml>' + xml_string[42:] 
    e = ET.fromstring(xml_string_cap)
    action_name = e.find('actionname').text
    description = e.find('description').text
    program = e.find('program').find('block')
    contains_special = False
    if readJS:
        props_name, scene_name = getDescription(name)
    else:
        props_name = ''
        scene_name = ''
    content = [action_name, description, props_name, scene_name]
    special_cont = 0
    while (program is not None and program.find('next') is not None 
           and not contains_special):
        program = program.find('next').find('block')
        type_block = program.get('type')
        
        if (type_block == 'special_block'):
            special_descr = program.find('field')
            special_cont += 1
            if (special_descr.text == None):
                content.append("[Special] <>")
            else :
                content.append("[Special] <"+special_descr.text+">")

        else:
            # program_name
            program_line = '['+program.get('type').split('_')[1]+']'
            # fill arguments
            args = program.findall('value')
            for arg in args:
                name_obj = arg.getchildren()[0].getchildren()[0].text
                quantity = arg.getchildren()[0].getchildren()[1 ].text
                program_line = program_line + ' <' + name_obj +'> ('+ quantity+')'
            content.append(program_line)
    return content, special_cont
def getId():
    ''' Generate a unique string
    '''
    import uuid
    return str(uuid.uuid4())

def getTag(type_name, fields={}, tabs=0):
    ''' Generates a block tag
    '''
    otherfields = ''
    for key, val in fields.iteritems():
        otherfields += (' %s="%s"') % (key, val)
    content = 'type="%s" id="%s"%s' % (type_name, getId(), otherfields)
    tag_init = (' '*tabs) + '<block %s>'  % (content)
    tag_end = (' '*tabs) + '</block>'
    return tag_init + '\n%s' + tag_end + '\n'

def parseStrBlock(block_str):
    ''' Given a str block [Rinse] <CLEANING SOLUTION> (1)
        parses the block, returning Action, List Obj, List Instance
    '''
    action = block_str[1:block_str.find(']')]
    block_str = block_str[block_str.find(']')+3:-1]
    block_split = block_str.split(') <') # each element is name_obj> (num
    obj_names = [block[0:block.find('>')] for block in block_split]
    inst_nums = [block[block.find('(')+1:] for block in block_split]
    action = action.strip()
    obj_names_corr = []
    inst_nums_corr = []
    for i in range(len(obj_names)):
        if len(obj_names[i].strip()) > 0 and len(inst_nums[i].strip()) > 0:
            obj_names_corr.append(obj_names[i])
            inst_nums_corr.append(inst_nums[i])
    return action, obj_names_corr, inst_nums_corr


def genStrBlock(action, object_names, instr_nums):
    ''' inverse of parseStrBlock
    '''
    str_block = '[{}]'.format(action)
    for x,y in zip(object_names, instr_nums):
        str_block += ' <{}> ({})'.format(x, y)
    return str_block

def obtainProgram(blocks_str, i):
    ''' Generates the xml blocks given a string description of the program
    '''
    if i == len(blocks_str):
        return ''
    else:
        action_name, attrs, insts = parseStrBlock(blocks_str[i])
        block_action = getTag('action_'+action_name, tabs=(i*2))
        content = '' 
        # blocks corresponding to the attributes
        for iat, (attr, inst) in enumerate(zip(attrs, insts)):
            content = ((' ')*(i*2+1)+'<value name="VALUE%i">\n' % iat)
            field = (' ')*(i*2+3)+'<field name="TYPE">%s</field>\n' % attr
            field += (' ')*(i*2+3)+'<field name="VAR">%i</field>' % iat
            field += '\n'
            content += getTag("type_object", tabs = (i*2+2)) % field
            content +=(' ')*(i*2+1)+'</value>\n'
        if i < len(blocks_str)-1:
            content += ((' ')*(i*2+1)+
                        '<next>\n%s'+
                        (' ')*(i*2+1)+
                        '</next>\n') % obtainProgram(blocks_str, i+1)
        return block_action % content

def generateJSXML(script_descr, script_name, output_folder):
    ''' Given a txt description with a script, generates xml and javascript
        with the given script
    '''
    action_name, description, props, scene = script_descr[:5]
    blocks_str = sript_descr[4:]
    
    base_name = output_folder + script_name
    js_file_name = base_name + '.js'
    xml_file_name = base_name + '.xml'

    # generate JS with props
    prop_str = ','.join(['"'+prop.upper() + '":1'])
    js_content = 'var res_prop = {%s}' % prop_str
    with open(js_file_name, 'w+') as f:
        f.write(js_content)

    # generate XML
    # id is a 20-length random string
    blocks_init = getTag('start_block2', {'movable':'false',
                                          'x':'70',
                                          'y':'70'})
    program_tag = blocks_init % obtainProgram(blocks_str, 0)
    action_tag = '<actionname>%s</actionname>' % action_name
    description_tag = '<description>%s</description>' % description_name
    program_tag = '<program>%s</program>' % blocks
    program = action_tag + description_tag + program_tag
    xml_content = ('<xml xmlns="http://www.w3.org/1999/xhtml">%s</xml>' 
                   % program)

def obtainObjectsInterface():
    with open('stats/objects_interface.txt', 'r') as f:
        lines = f.readlines()
    lines = [x.strip().lower() for x in lines]
    return lines

def obtainActionsMapping():
    with open('stats/actions_interface.txt', 'r') as f:
        lines = f.readlines()
    lines1 = [x.split('--')[1].strip() for x in lines] # block name
    lines2 = [x.split('--')[0].strip() for x in lines] # name Push
    aux =  {x:y for x,y in zip(lines1, lines2)}
    return aux


def obtainActionsInterface():
    with open('stats/actions_interface.txt', 'r') as f:
        lines = f.readlines()
    lines = [x.split('--')[1].strip() for x in lines]
    # actions sorted by length, we want to pick the longest action
    lines.sort(lambda x,y: cmp(len(y), len(x)))
    return lines


