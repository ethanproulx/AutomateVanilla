ServerEvents.recipes(event => {
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "minecraft:iron_block"
       },
       "loops": 3,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:zinc_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_zinc_mechanism" },
                   { "item": "create:large_cogwheel" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_zinc_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_zinc_mechanism"
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
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_zinc_mechanism" },
                   { "item": "create:cogwheel" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_zinc_mechanism" },
                   { "item": "create:zinc_nugget" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_zinc_mechanism"
           },
           "amount": 1
       }
   })
})