StartupEvents.registry('block', event => {
  event.create('nether_star_block')
	.displayName('Nether Star Block')
	.soundType('glass')
	.hardness(1.0)
	.lightLevel(0.5)
})