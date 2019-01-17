var room_types = ['Kitchen', 'Bathroom', 'Living Room', 'Dining Room', 'Bedroom', 'Kids Bedroom', 'Entrance Hall', 'Home office'];
var affordances = {};
affordances['surfaces'] = ['Bed', 'Bench', 'Board Game', 'Book', 'Nightstand', 'Carpet', 'Cd Player', 'Chair', 'Chessboard', 'Coffee Table', 'Couch', 'Cutting Board', 'Desk', 'Dishrack', 'Filing Cabinet', 'Ironing Board', 'Mousepad', 'Music Stand', 'Pantry', 'Piano Bench', 'Placemat', 'Plate', 'Sauce Pan', 'Sofa', 'Stove', 'Table', 'Table Cloth', 'Kitchen Counter', 'Bathroom Counter', 'Dvd Player', 'Bathroom Cabinet', 'Kitchen Cabinet', 'Floor'];
affordances['grabbable'] = ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Food_Bread', 'Broom', 'Brush', 'Button', 'Cards', 'Food_Carrot', 'Cd Player', 'Cellphone', 'Centerpiece', 'Food_Cereal', 'Check', 'Food_Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Cloth Napkin', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Colander', 'Comb', 'Comforter', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Crackers', 'Crayon', 'Creditcard', 'Cup', 'Cutting Board', 'Deck Of Cards', 'Food_Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'Dishrack', 'Document', 'Dog', 'Donut', 'Drawing', 'Drinking Glass', 'Dry Pasta', 'Duster', 'Dustpan', 'Electric Shaver', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Folder', 'Food_Food', 'Fork', 'Form', 'Foundation', 'FryingPan', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighter', 'Homework', 'Iron', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Milk', 'Mop', 'Mop Bucket', 'Mouse', 'Mug', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Food_Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Food_Oatmeal', 'Oven Mitts', 'Painting', 'Pajamas', 'Paper', 'Paper Towel', 'Pasta', 'Food_Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano Bench', 'Pillow', 'Food_Pizza', 'Placemat', 'Plate', 'Pot', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipt', 'Remote Control', 'Magazine', 'Food_Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Food_Snack', 'Soap', 'Sponge', 'Spoon', 'Food_Sugar', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Textbook', 'Thread', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Food_Turkey', 'Food_Vegetable', 'Video Game Controller', 'Water Glass', 'Wine Glass', 'Vacuum Cleaner', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Food_Fruit', 'Food_Orange', 'Food_Cake', 'Food_Chicken', 'Food_Apple', 'Food_Egg', 'Food_Fish', 'Food_Fish', 'Food_Onion', 'Food_Rice', 'Food_Jam'];
affordances['sittable'] = ['Bathtub', 'Bed', 'Bench', 'Chair', 'Couch', 'Love Seat', 'Piano Bench', 'Sofa', 'Toilet'];
affordances['lieable'] = ['Bathtub', 'Bed', 'Bench', 'Couch', 'Love Seat', 'Sofa'];
affordances['hangable'] = ['Blanket', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Dustpan', 'Oven Mitts', 'Toilet Paper', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks'];
affordances['drinkable'] = ['Coffee', 'Juice', 'Milk', 'Water'];
affordances['eatable'] = ['Food_Bread', 'Food_Carrot', 'Food_Cereal', 'Food_Cheese', 'Food_Dessert', 'Food_Food', 'Food_Noodles', 'Food_Oatmeal', 'Food_Peanut Butter', 'Food_Pizza', 'Food_Salt', 'Food_Snack', 'Food_Sugar', 'Food_Turkey', 'Food_Vegetable', 'Food_Fruit', 'Food_Orange', 'Food_Cake', 'Food_Chicken', 'Food_Apple', 'Food_Egg', 'Food_Fish', 'Food_Fish', 'Food_Onion', 'Food_Rice', 'Food_Jam'];
affordances['recipient'] = ['Blender', 'Bowl', 'Coffe Maker', 'Coffee Cup', 'Coffee Pot', 'Colander', 'CookingPot', 'Cup', 'Drinking Glass', 'FryingPan', 'Glass', 'Kettle', 'Measuring Cup', 'Mop Bucket', 'Plate', 'Pot', 'Rag', 'Sauce Pan', 'Sink', 'Toothbrush', 'Water Glass', 'Wine Glass', 'Washing Machine'];
affordances['cuttable'] = ['Band-aids', 'Bills', 'Food_Bread', 'Cards', 'Food_Carrot', 'Food_Cheese', 'Cloth Napkin', 'Food_Dessert', 'Drawing', 'Envelope', 'Food_Food', 'Hair', 'Note Pad', 'Notebook', 'Novel', 'Food_Pizza', 'Printing Paper', 'Textbook', 'Thread', 'Toilet Paper', 'Food_Turkey', 'Food_Vegetable', 'Food_Fruit', 'Food_Orange', 'Food_Cake', 'Food_Chicken', 'Food_Apple', 'Food_Egg', 'Food_Fish', 'Food_Fish', 'Food_Onion'];
affordances['pourable'] = ['After Shave', 'Blender', 'Food_Cereal', 'Cleaning Bottle', 'Cleaning Solution', 'Coffee', 'Coffee Cup', 'Conditioner', 'Cup', 'Detergent', 'Dirt', 'Dish Soap', 'Face Soap', 'Facial Cleanser', 'Glass', 'Juice', 'Laundry Detergent', 'Measuring Cup', 'Milk', 'Pasta', 'Food_Salt', 'Sauce', 'Shampoo', 'Shaving Cream', 'Food_Sugar', 'Tooth Paste', 'Water', 'Food_Rice'];
affordances['can_open'] = ['Address Book', 'After Shave', 'Basket for Clothes', 'Blender', 'Book', 'Nightstand', 'Cd Player', 'Closet', 'Coffe Maker', 'Coffee Pot', 'Cupboard', 'Curtain', 'Diary', 'DishWasher', 'Door', 'Dresser', 'Envelope', 'Filing Cabinet', 'Folder', 'Freezer', 'Fridge', 'Garbage Can', 'Mail', 'Microwave', 'Mini-fridge', 'Music Stand', 'Newspaper', 'Note Pad', 'Notebook', 'Novel', 'Oven', 'Printer', 'Magazine', 'Shoe-shine Kit', 'Textbook', 'Toilet', 'Trashcan', 'Washing Machine', 'Eyes_both', 'Dvd Player', 'Bathroom Cabinet', 'Kitchen Cabinet', 'Eye_left', 'Eye_right', 'Stove'];
affordances['has_switch'] = ['Alarm Clock', 'Blender', 'Blow Dryer', 'Cd Player', 'Coffe Maker', 'Computer', 'Console', 'DishWasher', 'Electric Shaver', 'Electrical Outlet', 'Faucet', 'Fax Machine', 'Floor Lamp', 'Hairdryer', 'Kettle', 'Lamp', 'Laptop', 'Laser Pointer', 'Light', 'Lighting', 'Microwave', 'Oven', 'Printer', 'Radio', 'Remote Control', 'Shredder', 'Stereo', 'Stove', 'Telephone', 'Television', 'Toaster', 'Video Game Console', 'Washing Machine', 'Vacuum Cleaner', 'Dvd Player'];
affordances['readable'] = ['Address Book', 'Bills', 'Book', 'Check', 'Diary', 'Document', 'Folder', 'Homework', 'Mail', 'Newspaper', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Receipt', 'Magazine', 'Textbook'];
affordances['lookable'] = ['Alarm Clock', 'Board Game', 'Centerpiece', 'Computer', 'Drawing', 'Laptop', 'Painting', 'Television', 'Wall Clock'];
affordances['containers'] = ['Basket for Clothes', 'Nightstand', 'Closet', 'Coffe Maker', 'Cupboard', 'DishWasher', 'Dresser', 'Filing Cabinet', 'Folder', 'Freezer', 'Fridge', 'Garbage Can', 'Microwave', 'Mini-fridge', 'Music Stand', 'Oven', 'Sauce Pan', 'Sink', 'Toilet', 'Toothbrush Holder', 'Trashcan', 'Washing Machine', 'Bathroom Cabinet', 'Kitchen Cabinet'];
affordances['clothes'] = ['Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Glasses', 'Headset', 'Oven Mitts', 'Pajamas', 'Shoes', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks'];
affordances['person'] = ['Woman', 'Man', 'Child'];
affordances['body_part'] = ['Hair', 'Hands_both', 'Feet_both', 'Face', 'Legs_both', 'Arms_both', 'Eyes_both', 'Eye_left', 'Eye_right', 'Legs_right', 'Legs_left', 'Hands_left', 'Hands_right', 'Arms_left', 'Arms_right', 'Feet_right', 'Feet_left'];
affordances['cover_object'] = ['Blanket', 'Centerpiece', 'Cloth Napkin', 'Curtain', 'Envelope', 'Napkin', 'Newspaper', 'Paper Towel', 'Rag', 'Sheets', 'Table Cloth', 'Towel'];
affordances['has_plug'] = ['Alarm Clock', 'Blender', 'Blow Dryer', 'Cd Player', 'Cellphone', 'Coffe Maker', 'Console', 'Controller', 'Electric Shaver', 'Fax Machine', 'Freezer', 'Fridge', 'Hairdryer', 'Iron', 'Kettle', 'Keyboard', 'Laptop', 'Light', 'Lighting', 'Microphone', 'Microwave', 'Mini-fridge', 'Mouse', 'Oven', 'Phone', 'Printer', 'Radio', 'Shredder', 'Stereo', 'Telephone', 'Television', 'Toaster', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Washing Machine', 'Vacuum Cleaner', 'Dvd Player'];
affordances['has_paper'] = ['Address Book', 'Bills', 'Book', 'Bookmark', 'Cards', 'Check', 'Cloth Napkin', 'Coffee Filter', 'Deck Of Cards', 'Diary', 'Document', 'Drawing', 'Envelope', 'Folder', 'Form', 'Homework', 'Mail', 'Napkin', 'Newspaper', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Painting', 'Paper', 'Paper Towel', 'Printing Paper', 'Receipt', 'Magazine', 'Textbook', 'Toilet Paper'];
affordances['movable'] = [];
affordances['cream'] = ['After Shave', 'Food_Cheese', 'Conditioner', 'Dish Soap', 'Face Soap', 'Facial Cleanser', 'Foundation', 'Glue', 'Jelly', 'Nail Polish', 'Food_Peanut Butter', 'Sauce', 'Shaving Cream', 'Soap', 'Tooth Paste', 'Food_Jam'];
var dictionary_allowances = {
    Walk: {
        'block_name': 'walk',
        'fields': [
            {
                'type': 'Target location',
                'type_name': 'to',
                'types_allowed': ['Kitchen', 'Bathroom', 'Living Room', 'Dining Room', 'Bedroom', 'Kids Bedroom', 'Entrance Hall', 'Home office', 'Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all_rooms_obj'],
            }
        ],
        'category': 'Movement'
    },
    Run: {
        'block_name': 'run',
        'fields': [
            {
                'type': 'Target location',
                'type_name': 'to',
                'types_allowed': ['Kitchen', 'Bathroom', 'Living Room', 'Dining Room', 'Bedroom', 'Kids Bedroom', 'Entrance Hall', 'Home office', 'Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all_rooms_obj'],
            }
        ],
        'category': 'Movement'
    },
    Lie: {
        'block_name': 'lie',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'in',
                'types_allowed': [],
                'classes_allowed': ['lieable'],
            }
        ],
        'category': 'Movement'
    },
    Sit: {
        'block_name': 'sit',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'in',
                'types_allowed': [],
                'classes_allowed': ['sittable'],
            }
        ],
        'category': 'Movement'
    },
    StandUp: {
        'block_name': 'stand up',
        'fields': [],
        'category': 'Movement'
    },
    Jump: {
        'block_name': 'jump',
        'fields': [],
        'category': 'Movement'
    },
    Dance: {
        'block_name': 'dance',
        'fields': [],
        'category': 'Movement'
    },
    PutBack: {
        'block_name': 'put',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            },
            {
                'type': 'Target destination',
                'type_name': 'in/on',
                'types_allowed': [],
                'classes_allowed': ['surfaces', 'containers'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Cut: {
        'block_name': 'cut',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['cuttable'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Pour: {
        'block_name': 'pour',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['pourable'],
            },
            {
                'type': 'Target destination',
                'type_name': 'into',
                'types_allowed': ['Sponge'],
                'classes_allowed': ['recipient', 'body_part', 'clothes'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Grab: {
        'block_name': 'grab',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Drop: {
        'block_name': 'drop',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Throw: {
        'block_name': 'throw',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            },
            {
                'type': 'Target destination',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['recipient'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Shake: {
        'block_name': 'shake',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Open: {
        'block_name': 'open',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['can_open'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Close: {
        'block_name': 'close',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['can_open'],
            }
        ],
        'category': 'Object Manipulation'
    },
    SwitchOn: {
        'block_name': 'switch on',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['has_switch'],
            }
        ],
        'category': 'Electronics'
    },
    SwitchOff: {
        'block_name': 'switch off',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['has_switch'],
            }
        ],
        'category': 'Electronics'
    },
    Read: {
        'block_name': 'read',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['readable'],
            }
        ],
        'category': 'Look'
    },
    LookAt: {
        'block_name': 'look at',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Look'
    },
    Call: {
        'block_name': 'call',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'with',
                'types_allowed': ['Telephone, Cellphone'],
                'classes_allowed': [],
            }
        ],
        'category': 'Electronics'
    },
    Text: {
        'block_name': 'text',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'with',
                'types_allowed': ['Telephone', 'Cellphone'],
                'classes_allowed': [],
            }
        ],
        'category': 'Electronics'
    },
    Drink: {
        'block_name': 'drink',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'from',
                'types_allowed': [],
                'classes_allowed': ['drinkable', 'recipient'],
            }
        ],
        'category': 'Food'
    },
    Eat: {
        'block_name': 'eat',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'from',
                'types_allowed': ['Hand'],
                'classes_allowed': ['recipient'],
            }
        ],
        'category': 'Food'
    },
    Wash: {
        'block_name': 'wash',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Cleaning'
    },
    Wipe: {
        'block_name': 'wipe',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Cleaning'
    },
    Enter: {
        'block_name': 'enter',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Shower', 'Bathtub'],
                'classes_allowed': [],
            }
        ],
        'category': 'Movement'
    },
    Leave: {
        'block_name': 'leave',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Shower', 'Bathtub'],
                'classes_allowed': [],
            }
        ],
        'category': 'Movement'
    },
    PutOn: {
        'block_name': 'put on',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['clothes'],
            }
        ],
        'category': 'Object Manipulation'
    },
    PutOff: {
        'block_name': 'put off',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['clothes'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Break: {
        'block_name': 'break',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Brush: {
        'block_name': 'brush',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Teeth', 'Hair'],
                'classes_allowed': [],
            }
        ],
        'category': 'Body Manipulation'
    },
    Climb: {
        'block_name': 'climb',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['surfaces'],
            }
        ],
        'category': 'Movement'
    },
    Cover: {
        'block_name': 'cover',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            },
            {
                'type': 'Target tool',
                'type_name': 'with',
                'types_allowed': [],
                'classes_allowed': ['cover_object'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Crawl: {
        'block_name': 'crawl',
        'fields': [
            {
                'type': 'Target location',
                'type_name': 'to',
                'types_allowed': ['Kitchen', 'Bathroom', 'Living Room', 'Dining Room', 'Bedroom', 'Kids Bedroom', 'Entrance Hall', 'Home office', 'Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all_rooms_obj'],
            }
        ],
        'category': 'Movement'
    },
    Dial: {
        'block_name': 'dial',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Telephone'],
                'classes_allowed': [],
            }
        ],
        'category': 'Electronics'
    },
    Flush: {
        'block_name': 'flush',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Toilet'],
                'classes_allowed': [],
            }
        ],
        'category': 'Cleaning'
    },
    Fold: {
        'block_name': 'fold',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['has_paper', 'clothes', 'cover_object'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Knock: {
        'block_name': 'knock',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'on',
                'types_allowed': ['Door', 'Wall'],
                'classes_allowed': [],
            }
        ],
    },
    Lift: {
        'block_name': 'lift',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            }
        ],
        'category': 'Object Manipulation'
    },
    PlugIn: {
        'block_name': 'plug in',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['has_plug'],
            }
        ],
        'category': 'Electronics'
    },
    PlugOut: {
        'block_name': 'plug out',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['has_plug'],
            }
        ],
        'category': 'Electronics'
    },
    PointAt: {
        'block_name': 'point',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'at',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Body Manipulation'
    },
    Pull: {
        'block_name': 'pull',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Push: {
        'block_name': 'push',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Stir: {
        'block_name': 'stir',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['drinkable'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Touch: {
        'block_name': 'touch',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Unfold: {
        'block_name': 'unfold',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['has_paper', 'clothes', 'cover_object'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Write: {
        'block_name': 'write',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'into',
                'types_allowed': [],
                'classes_allowed': ['has_paper'],
            }
        ],
    },
    TurnTo: {
        'block_name': 'turn',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'to',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Movement'
    },
    WakeUp: {
        'block_name': 'wake up',
        'fields': [],
        'category': 'Movement'
    },
    Watch: {
        'block_name': 'watch',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['lookable'],
            }
        ],
        'category': 'Look'
    },
    Scrub: {
        'block_name': 'scrub',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Cleaning'
    },
    Sleep: {
        'block_name': 'sleep',
        'fields': [],
        'category': 'Other'
    },
    Shave: {
        'block_name': 'shave',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['body_part'],
            }
        ],
        'category': 'Cleaning'
    },
    Spit: {
        'block_name': 'spit',
        'fields': [
            {
                'type': 'Target destination',
                'type_name': 'into',
                'types_allowed': [],
                'classes_allowed': ['recipient'],
            }
        ],
        'category': 'Body Manipulation'
    },
    Wrap: {
        'block_name': 'wrap',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            },
            {
                'type': 'Target tool',
                'type_name': 'with',
                'types_allowed': [],
                'classes_allowed': ['cover_object'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Unwrap: {
        'block_name': 'unwrap',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Uncover: {
        'block_name': 'uncover',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Greet: {
        'block_name': 'greet',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['person'],
            }
        ],
        'category': 'Communicate'
    },
    Soak: {
        'block_name': 'soak',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            },
            {
                'type': 'Target recipient',
                'type_name': 'into',
                'types_allowed': [],
                'classes_allowed': ['recipient'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Stretch: {
        'block_name': 'stretch',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['body_part'],
            }
        ],
        'category': 'Body Manipulation'
    },
    Sew: {
        'block_name': 'sew',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['cover_object', 'clothes'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Squeeze: {
        'block_name': 'squeeze',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Spread: {
        'block_name': 'spread',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['cream'],
            },
            {
                'type': 'Target surface',
                'type_name': 'into',
                'types_allowed': ['Toothbrush'],
                'classes_allowed': ['eatable', 'recipient', 'body_part'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Type: {
        'block_name': 'type',
        'fields': [
            {
                'type': 'Target object',
                'type_name': 'with',
                'types_allowed': ['Telephone', 'Keyboard', 'Cellphone'],
                'classes_allowed': [],
            }
        ],
        'category': 'Electronics'
    },
    Find: {
        'block_name': 'find',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Other'
    },
    PutObjBack: {
        'block_name': 'put back',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': [],
                'classes_allowed': ['grabbable'],
            }
        ],
        'category': 'Object Manipulation'
    },
    Rinse: {
        'block_name': 'rinse',
        'fields': [
            {
                'type': 'Target object',
                'type_name': '',
                'types_allowed': ['Address Book', 'After Shave', 'Alarm Clock', 'Band-aids', 'Basket for Clothes', 'Bathtub', 'Bed', 'Bench', 'Bills', 'Blanket', 'Blender', 'Blow Dryer', 'Board Game', 'Book', 'Bookmark', 'Bowl', 'Bread', 'Broom', 'Brush', 'Button', 'Cabinet', 'Cards', 'Carpet', 'Carrots', 'Cat', 'Cd Player', 'Cellphone', 'Centerpieces', 'Cereal', 'Chair', 'Checks', 'Cheese', 'Chef Knife', 'Chessboard', 'Cleaning Bottle', 'Cleaning Solution', 'Closet', 'Cloth Napkins', 'Clothes_dress', 'Clothes_pants', 'Clothes_shirt', 'Clothes_skirt', 'Coffe Maker', 'Coffee', 'Coffee Cup', 'Coffee Filter', 'Coffee Pot', 'Coffee Table', 'Colander', 'Comb', 'Comforter', 'Computer', 'Conditioner', 'Console', 'Controller', 'CookingPot', 'Couch', 'Crackers', 'Crayons', 'Creditcard', 'Cup', 'Cupboards', 'Curtain', 'Cutting Board', 'Deck Of Cards', 'Desk', 'Dessert', 'Detergent', 'Diary', 'Dirt', 'Dish Soap', 'DishWasher', 'Dishrack', 'Documents', 'Dog', 'Donuts', 'Door', 'Drawing', 'Dresser', 'Drinking Glasses', 'Dry Pasta', 'Drying Rack', 'Duster', 'Dustpan', 'Electric Shaver', 'Electrical Outlet', 'Envelope', 'Face Soap', 'Facial Cleanser', 'Faucet', 'Fax Machine', 'Filing Cabinet', 'Floor Lamp', 'Fly', 'Folder', 'Food', 'Fork', 'Forms', 'Foundation', 'Freezer', 'Fridge', 'FryingPan', 'Garbage Can', 'Glass', 'Glasses', 'Glue', 'Groceries', 'Ground Coffee', 'Hair', 'Hairbrush', 'Hairdryer', 'Hanger', 'Headset', 'Highlighters', 'Homework', 'Iron', 'Ironing Board', 'Jelly', 'Juice', 'Kettle', 'Keyboard', 'Knife', 'Lamp', 'Laptop', 'Laser Pointer', 'Laundry Detergent', 'Light', 'Lighting', 'Love Seat', 'Mail', 'Measuring Cup', 'Mechanical Pencil', 'Microphone', 'Microwave', 'Milk', 'Mini-fridge', 'Mirror', 'Mop', 'Mop Bucket', 'Mouse', 'Mousepad', 'Mug', 'Music Stand', 'Nail Polish', 'Napkin', 'Needle', 'Newspaper', 'Noodles', 'Note Pad', 'Notebook', 'Notes', 'Novel', 'Oatmeal', 'Oven', 'Oven Mitts', 'Painting', 'Pajamas', 'Pantry', 'Paper', 'Paper Towel', 'Pasta', 'Peanut Butter', 'Pen', 'Pencil', 'Phone', 'Piano', 'Piano Bench', 'Pillow', 'Pizza', 'Placemats', 'Plate', 'Pot', 'Printer', 'Printing Paper', 'Radio', 'Rag', 'Razor', 'Receipts', 'Remote Control', 'Magazine', 'Salt', 'Sauce', 'Sauce Pan', 'Scissors', 'Scrabble', 'Shampoo', 'Shaving Cream', 'Sheets', 'Shoe-shine Kit', 'Shoes', 'Shower', 'Shredder', 'Sink', 'Snack', 'Soap', 'Sofa', 'Sponge', 'Spoon', 'Stereo', 'Stove', 'Sugar', 'Table', 'Table Cloth', 'Tape', 'Tea Bag', 'Teeth', 'Telephone', 'Television', 'Textbook', 'Thread', 'Toaster', 'Toilet', 'Toilet Paper', 'Tooth Paste', 'Toothbrush', 'Toothbrush Holder', 'Towel', 'Toy', 'Trashcan', 'Turkey', 'Vegetable', 'Video Game Console', 'Video Game Controller', 'Wall Clock', 'Water Glass', 'Wine Glass', 'Woman', 'Man', 'Child', 'Hands', 'Feet', 'Face', 'Legs', 'Arms', 'Water', 'Washing Machine', 'Vacuum Cleaner', 'Eyes', 'Kitchen Counter', 'Bathroom Counter', 'Slippers', 'Clothes_hat', 'Clothes_gloves', 'Clothes_underwear', 'Clothes_jacket', 'Clothes_scarf', 'Clothes_socks', 'Dvd Player', 'Wooden Spoon', 'Bird'],
                'classes_allowed': ['all'],
            }
        ],
        'category': 'Cleaning'
    },
};
