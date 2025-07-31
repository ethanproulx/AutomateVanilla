ServerEvents.recipes(event => {
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "minecraft:bucket"
       },
       "loops": 1,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "kubejs:spectral_fluid_bucket"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:red_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:orange_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:yellow_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:green_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:blue_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:purple_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "minecraft:bucket"
           },
           "amount": 1
       }
   })
})