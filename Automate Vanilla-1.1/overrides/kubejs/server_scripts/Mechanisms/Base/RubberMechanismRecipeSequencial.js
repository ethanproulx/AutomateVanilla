ServerEvents.recipes(event => {
  event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "createmechanisms:wooden_mechanism"
       },
       "loops": 2,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:rubber_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_rubber_mechanism" },
                   { "item": "createmechanisms:cured_rubber" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_rubber_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_rubber_mechanism"
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
                           "id": "createmechanisms:incomplete_rubber_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_rubber_mechanism" },
                   { "item": "create:copper_nugget" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_rubber_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_rubber_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_rubber_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_rubber_mechanism"
           },
           "amount": 1
       }
   })
})