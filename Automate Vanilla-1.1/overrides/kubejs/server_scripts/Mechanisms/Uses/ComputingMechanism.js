ServerEvents.recipes(event => {
    event.smithing(
        'create:creative_motor',                       	 	   // arg 1: output
        'createmechanisms:computing_mechanism', 			   // arg 2: the smithing template
        'kubejs:nether_star_block',                            // arg 3: the item to be upgraded
        'minecraft:netherite_block'                            // arg 4: the upgrade item
    )
	event.smithing(
        'create:creative_fluid_tank',                          // arg 1: output
        'createmechanisms:computing_mechanism', 			   // arg 2: the smithing template
        'kubejs:nether_star_block',                            // arg 3: the item to be upgraded
        'create_enchantment_industry:super_experience_block'   // arg 4: the upgrade item
    )
	event.smithing(
        'create:creative_fluid_tank',                          // arg 1: output
        'createmechanisms:computing_mechanism', 			   // arg 2: the smithing template
        'minecraft:netherite_block',                            // arg 3: the item to be upgraded
        'kubejs:nether_star_block'   						   // arg 4: the upgrade item
    )
	event.smithing(
        'create:creative_blaze_cake',                          // arg 1: output
        'createmechanisms:computing_mechanism', 			   // arg 2: the smithing template
        'minecraft:netherite_block',                           // arg 3: the item to be upgraded
        'minecraft:netherite_block'   						   // arg 4: the upgrade item
    )
	event.smithing(
        'create:handheld_worldshaper',                         // arg 1: output
        'createmechanisms:computing_mechanism', 			   // arg 2: the smithing template
        'kubejs:nether_star_block',                            // arg 3: the item to be upgraded
        'create:extendo_grip'   						   	   // arg 4: the upgrade item
    )
})