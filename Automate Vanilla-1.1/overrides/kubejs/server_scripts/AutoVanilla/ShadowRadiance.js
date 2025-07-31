ServerEvents.recipes(event => {
   event.custom({
       "type": "create:mixing",
	   "heat_requirement": "superheated",
       "ingredients": [
           {
               "item": "create:refined_radiance"
           },
           {
               "item": "create:shadow_steel"
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
                   "id": "kubejs:shadow_radiance"
               },
               "amount": 1
           }
       ]
   })
})