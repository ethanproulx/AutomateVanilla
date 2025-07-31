ServerEvents.recipes(event => {
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "createmechanisms:ender_mechanism"
       },
       "loops": 8,
       "results": [
           {
               "chance": 0.99,
               "item": {
                   "id": "createmechanisms:computing_mechanism"
               }
           },
		   {
               "chance": 0.01,
               "item": {
                   "id": "create_enchantment_industry:super_experience_block"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:wooden_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:rubber_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:zinc_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:heat_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:advanced_precision_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_computing_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 1000,
                       "fluid": "create_dragons_plus:dragon_breath"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_computing_mechanism"
           },
           "amount": 1
       }
   })
})