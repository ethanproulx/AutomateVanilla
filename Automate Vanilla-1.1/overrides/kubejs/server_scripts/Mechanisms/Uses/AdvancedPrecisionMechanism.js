ServerEvents.recipes(event => {
    event.smithing(
        'create:attribute_filter',                       // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'minecraft:gray_wool',                          // arg 3: the item to be upgraded
        'create:brass_nugget'                            // arg 4: the upgrade item
    )
    event.smithing(
        'create:smart_fluid_pipe',                       // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'create:fluid_pipe',                             // arg 3: the item to be upgraded
        'create:electron_tube'                           // arg 4: the upgrade item
    )
    event.smithing(
        'create:smart_chute',                            // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'create:chute',                                  // arg 3: the item to be upgraded
        'create:electron_tube'                           // arg 4: the upgrade item
    )
    event.smithing(
        'create:content_observer',                       // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'minecraft:observer',                            // arg 3: the item to be upgraded
        'create:electron_tube'                           // arg 4: the upgrade item
    )
	event.smithing(
        'create:packager',                       		 // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'minecraft:hopper',                            	 // arg 3: the item to be upgraded
        'create:electron_tube'                           // arg 4: the upgrade item
    )
	event.smithing(
        'create_factory_logistics:jar_packager',         // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'uppers:upper',                            	 	 // arg 3: the item to be upgraded
        'create:electron_tube'                           // arg 4: the upgrade item
    )
	event.smithing(
        'create:package_frogport',                       // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'minecraft:slime_ball',                          // arg 3: the item to be upgraded
        'create:item_vault'                              // arg 4: the upgrade item
    )
	event.smithing(
        'create:factory_gauge',                       // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'create:precision_mechanism',                          // arg 3: the item to be upgraded
        'minecraft:comparator'                              // arg 4: the upgrade item
    )
	event.smithing(
        'create_factory_logistics:factory_fluid_gauge',                       // arg 1: output
        'createmechanisms:advanced_precision_mechanism', // arg 2: the smithing template
        'create:precision_mechanism',                          // arg 3: the item to be upgraded
        'minecraft:repeater'                              // arg 4: the upgrade item
    )
})