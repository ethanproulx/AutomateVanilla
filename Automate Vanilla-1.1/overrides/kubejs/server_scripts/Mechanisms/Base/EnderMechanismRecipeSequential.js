ServerEvents.recipes(event => {
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "createmechanisms:advanced_precision_mechanism"
       },
       "loops": 4,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:ender_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_ender_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "kubejs:spectral_fluid"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_ender_mechanism" },
                   { "item": "kubejs:shadow_radiance" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_ender_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_ender_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "kubejs:spectral_fluid"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_ender_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "minecraft:lava"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_ender_mechanism" },
                   { "item": "createmechanisms:advanced_precision_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_ender_mechanism"
           },
           "amount": 1
       }
   })
})