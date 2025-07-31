ServerEvents.recipes(event => {
    event.smithing(
        'create:steam_whistle',                          // arg 1: output
        'createmechanisms:heat_mechanism',               // arg 2: the smithing template
        'minecraft:copper_block',                        // arg 3: the item to be upgraded
        'create:golden_sheet'                            // arg 4: the upgrade item
    )
    event.smithing(
        'create:steam_engine',                           // arg 1: output
        'createmechanisms:heat_mechanism',               // arg 2: the smithing template
        'minecraft:copper_block',                        // arg 3: the item to be upgraded
        'create:brass_sheet'                             // arg 4: the upgrade item
    )
    event.shaped(
        Item.of('create:empty_blaze_burner', 1), // arg 1: output
        [
            'BAB',
            'ABA', // arg 2: the shape (array of strings)
            'BAB'
        ],
        {
            A: 'minecraft:iron_block',
            B: 'createmechanisms:heat_mechanism'
        }
    )
})