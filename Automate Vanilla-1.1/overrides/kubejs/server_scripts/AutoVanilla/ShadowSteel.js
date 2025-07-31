ServerEvents.recipes(event => {
   event.custom({
       "type": "create:mixing",
	   "heat_requirement": "heated",
       "ingredients": [
           {
               "item": "minecraft:ender_pearl"
           },
           {
               "item": "minecraft:obsidian"
           },
		   {
			   "item": "create:polished_rose_quartz"
		   },
		   {
			   "item": "minecraft:netherite_scrap"
		   },
		   {
			   "item": "create:brass_ingot"
		   },
           {
               "type": "fluid_stack",
               "amount": 250,
               "fluid": "minecraft:lava"
           }
       ],
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "create:shadow_steel"
               },
               "amount": 1
           }
       ]
   })
})