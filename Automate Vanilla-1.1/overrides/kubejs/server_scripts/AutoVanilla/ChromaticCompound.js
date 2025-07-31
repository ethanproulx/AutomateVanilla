ServerEvents.recipes(event => {
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "create:andesite_alloy"
       },
       "loops": 3,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "kubejs:chromatic_compound"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
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
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
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
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
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
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
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
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
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
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
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
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "create:andesite_alloy"
           },
           "amount": 1
       }
   })
})