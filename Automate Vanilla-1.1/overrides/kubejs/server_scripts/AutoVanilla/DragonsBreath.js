ServerEvents.recipes(event => {
   event.custom({
       "type": "create:mixing",
	   "heat_requirement": "superheated",
       "ingredients": [
           {
               "item": "minecraft:dragon_egg"
           },
           {
               "item": "minecraft:ender_eye"
           },
		   {
               "item": "minecraft:phantom_membrane"
           },
		   {
               "item": "minecraft:chorus_fruit"
           },
		   {
               "item": "minecraft:end_stone"
           },
           {
               "type": "fluid_stack",
               "amount": 250,
               "fluid": "create_enchantment_industry:experience"
           }
       ],
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "minecraft:dragon_egg"
               },
               "amount": 1
           },
		   {
			   "amount": 250,
			   "id": "create_dragons_plus:dragons_breath"
		   }
       ]
   })
})