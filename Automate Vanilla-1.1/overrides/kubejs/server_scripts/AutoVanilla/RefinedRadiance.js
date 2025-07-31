ServerEvents.recipes(event => {
   event.custom({
       "type": "create:mixing",
	   "heat_requirement": "heated",
       "ingredients": [
           {
               "item": "minecraft:gold_block"
           },
           {
               "item": "minecraft:glowstone_dust"
           },
		   {
			   "item": "minecraft:ender_eye"
		   },
		   {
			   "item": "minecraft:amethyst_shard"
		   },
		   {
			   "item": "create:electron_tube"
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
                   "id": "create:refined_radiance"
               },
               "amount": 1
           }
       ]
   })
})