ServerEvents.recipes(event => {
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "create:precision_mechanism"
       },
       "loops": 4,
       "results": [
           {
               "chance": 92.0,
               "item": {
                   "id": "createmechanisms:advanced_precision_mechanism"
               }
           },
           {
               "chance": 2.0,
               "item": {
                   "id": "create:precision_mechanism"
               }
           },
           {
               "chance": 2.0,
               "item": {
                   "id": "createmechanisms:wooden_mechanism"
               }
           },
           {
               "chance": 2.0,
               "item": {
                   "id": "createmechanisms:zinc_mechanism"
               }
           },
           {
               "chance": 2.0,
               "item": {
                   "id": "createmechanisms:rubber_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_advanced_precision_mechanism" },
                   { "item": "createmechanisms:wooden_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_advanced_precision_mechanism"
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
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_advanced_precision_mechanism" },
                   { "item": "createmechanisms:zinc_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_advanced_precision_mechanism"
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
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_advanced_precision_mechanism" },
                   { "item": "createmechanisms:rubber_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_advanced_precision_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_advanced_precision_mechanism"
           },
           "amount": 1
       }
   })
})