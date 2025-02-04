export const Items: {[itemid: string]: ModdedItemData} = {
    paraorb: {
		name: "Para Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'par',
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('par', pokemon);
		},
		desc: "At the end of each turn, tries to paralyze the holder.",
		shortDesc: "Tries to para the holder.",
		num: -1,
		gen: 4,
	},
	frozenorb: {
		name: "Frozen Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'frz',
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			pokemon.trySetStatus('frz', pokemon);
		},
		desc: "At the end of each turn, tries to freeze the holder.",
		shortDesc: "Tries to freeze the holder.",
		num: -2,
		gen: 4,
	},
	relicsheet: {
		name: "Relic Sheet",
		spritenum: 390,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Meloetta') {
				pokemon.formeChange('Meloetta-Pirouette');
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Meloetta') return false;
			return true;
		},
		itemUser: ["Meloetta"],
		num: -3,
		gen: 8,
		desc: "If held by Meloetta: Pirouette Forme on entry.",
	},
	nullifyorb: {
		name: "Nullify Orb",
		shortDesc: "Nullify the holder's ability.",
		fling: {
			basePower: 30,
		},
		onStart(pokemon) {
			if (pokemon.getAbility().isPermanent) return;
			pokemon.addVolatile('gastroacid');
		},
		num: -4,
		gen: 8,
	},

	//mega stones
	meteorfragment: {
		name: "Meteor Fragment",
		spritenum: 578,
		megaStone: "Rayquaza-Mega",
		megaEvolves: "Rayquaza",
		itemUser: ["Rayquaza"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -5,
		gen: 8,
		desc: "If held by a Rayquaza, this item allows it to Mega Evolve in battle.",
	},
	necrosolunite: {
		name: "Necrosolunite",
		spritenum: 687,
		megaStone: "Necrozma-Ultra",
		itemUser: ["Necrozma-Ultra"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -6,
		gen: 8,
		desc: "If held by a Necrozma-Dusk-Mane, this item allows it to Ultra Burst in battle.",
	},
	butterfrite: {
		name: "Butterfrite",
		spritenum: 578,
		megaStone: "Butterfree-Mega",
		megaEvolves: "Butterfree",
		itemUser: ["Butterfree"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -7,
		gen: 8,
		desc: "If held by a Butterfree, this item allows it to Mega Evolve in battle.",
	},
	arbokinite: {
		name: "Arbokinite",
		spritenum: 578,
		megaStone: "Arbok-Mega",
		megaEvolves: "Arbok",
		itemUser: ["Arbok"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -8,
		gen: 8,
		desc: "If held by a Arbok, this item allows it to Mega Evolve in battle.",
	},
	wigglytite: {
		name: "Wigglytite",
		spritenum: 578,
		megaStone: "Wigglytuff-Mega",
		megaEvolves: "Wigglytuff",
		itemUser: ["Wigglytuff"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -9,
		gen: 8,
		desc: "If held by a Wigglytuff, this item allows it to Mega Evolve in battle.",
	},
	machampite: {
		name: "Machampite",
		spritenum: 578,
		megaStone: "Machamp-Mega",
		megaEvolves: "Machamp",
		itemUser: ["Machamp"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -10,
		gen: 8,
		desc: "If held by a Machamp, this item allows it to Mega Evolve in battle.",
	},
	meganite: {
		name: "Meganite",
		spritenum: 578,
		megaStone: "Meganium-Mega",
		megaEvolves: "Meganium",
		itemUser: ["Meganium"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -11,
		gen: 8,
		desc: "If held by a Meganium, this item allows it to Mega Evolve in battle.",
	},
	typhlosionite: {
		name: "Typhlosionite",
		spritenum: 578,
		megaStone: "Typhlosion-Mega",
		megaEvolves: "Typhlosion",
		itemUser: ["Typhlosion"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -12,
		gen: 8,
		desc: "If held by a Typhlosion, this item allows it to Mega Evolve in battle.",
	},
	feraligatrite: {
		name: "Feraligatrite",
		spritenum: 578,
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		itemUser: ["Feraligatr"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -13,
		gen: 8,
		desc: "If held by a Feraligatr, this item allows it to Mega Evolve in battle.",
	},
	noctowlite: {
		name: "Noctowlite",
		spritenum: 578,
		megaStone: "Noctowl-Mega",
		megaEvolves: "Noctowl",
		itemUser: ["Noctowl"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -14,
		gen: 8,
		desc: "If held by a Noctowl, this item allows it to Mega Evolve in battle.",
	},
	crobatite: {
		name: "Crobatite",
		spritenum: 578,
		megaStone: "Crobat-Mega",
		megaEvolves: "Crobat",
		itemUser: ["Crobat"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -15,
		gen: 8,
		desc: "If held by a Crobat, this item allows it to Mega Evolve in battle.",
	},
	magcargonite: {
		name: "Magcargonite",
		spritenum: 578,
		megaStone: "Magcargo-Mega",
		megaEvolves: "Magcargo",
		itemUser: ["Magcargo"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -16,
		gen: 8,
		desc: "If held by a Magcargo, this item allows it to Mega Evolve in battle.",
	},
	volbite: {
		name: "Volbite",
		spritenum: 578,
		megaStone: "Volbeat-Mega",
		megaEvolves: "Volbeat",
		itemUser: ["Volbeat"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -17,
		gen: 8,
		desc: "If held by a Volbeat, this item allows it to Mega Evolve in battle.",
	},
	illumite: {
		name: "Illumite",
		spritenum: 578,
		megaStone: "Illumise-Mega",
		megaEvolves: "Illumise",
		itemUser: ["Illumise"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -18,
		gen: 8,
		desc: "If held by a Illumise, this item allows it to Mega Evolve in battle.",
	},
	flygonite: {
		name: "Flygonite",
		spritenum: 578,
		megaStone: "Flygon-Mega",
		megaEvolves: "Flygon",
		itemUser: ["Flygon"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -19,
		gen: 8,
		desc: "If held by a Flygon, this item allows it to Mega Evolve in battle.",
	},
	cacturnitex: {
		name: "Cacturnite X",
		spritenum: 578,
		megaStone: "Cacturne-Mega-X",
		megaEvolves: "Cacturne",
		itemUser: ["Cacturne"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -20,
		gen: 8,
		desc: "If held by a Cacturne, this item allows it to Mega Evolve in battle.",
	},
	cacturnitey: {
		name: "Cacturnite Y",
		spritenum: 578,
		megaStone: "Cacturne-Mega-Y-Day",
		megaEvolves: "Cacturne",
		itemUser: ["Cacturne"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -21,
		gen: 8,
		desc: "If held by a Cacturne, this item allows it to Mega Evolve in battle.",
	},
	whiscashite: {
		name: "Whiscashite",
		spritenum: 578,
		megaStone: "Whiscash-Mega",
		megaEvolves: "Whiscash",
		itemUser: ["Whiscash"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -22,
		gen: 8,
		desc: "If held by a Whiscash, this item allows it to Mega Evolve in battle.",
	},
	froslassite: {
		name: "Froslassite",
		spritenum: 578,
		megaStone: "Froslass-Mega",
		megaEvolves: "Froslass",
		itemUser: ["Froslass"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -23,
		gen: 8,
		desc: "If held by a Froslass, this item allows it to Mega Evolve in battle.",
	},
	krookodite: {
		name: "Krookodite",
		spritenum: 578,
		megaStone: "Krookodile-Mega",
		megaEvolves: "Krookodile",
		itemUser: ["Krookodile"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -24,
		gen: 8,
		desc: "If held by a Krookodile, this item allows it to Mega Evolve in battle.",
	},
	crustlite: {
		name: "Crustlite",
		spritenum: 578,
		megaStone: "Crustle-Mega",
		megaEvolves: "Crustle",
		itemUser: ["Crustle"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -25,
		gen: 8,
		desc: "If held by a Crustle, this item allows it to Mega Evolve in battle.",
	},
	zoroarkite: {
		name: "Zoroarkite",
		spritenum: 578,
		megaStone: "Zoroark-Mega",
		megaEvolves: "Zoroark",
		itemUser: ["Zoroark"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -26,
		gen: 8,
		desc: "If held by a Zoroark, this item allows it to Mega Evolve in battle.",
	},
	chesnaughtite: {
		name: "Chesnaughtite",
		spritenum: 578,
		megaStone: "Chesnaught-Mega",
		megaEvolves: "Chesnaught",
		itemUser: ["Chesnaught"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -27,
		gen: 8,
		desc: "If held by a Chesnaught, this item allows it to Mega Evolve in battle.",
	},
	delphite: {
		name: "Delphite",
		spritenum: 578,
		megaStone: "Delphox-Mega",
		megaEvolves: "Delphox",
		itemUser: ["Delphox"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -28,
		gen: 8,
		desc: "If held by a Delphox, this item allows it to Mega Evolve in battle.",
	},
	ribombinite: {
		name: "Ribombinite",
		spritenum: 578,
		megaStone: "Ribombee-Mega",
		megaEvolves: "Ribombee",
		itemUser: ["Ribombee"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -29,
		gen: 8,
		desc: "If held by a Ribombee, this item allows it to Mega Evolve in battle.",
	},
	salazzlite: {
		name: "Salazzlite",
		spritenum: 578,
		megaStone: "Salazzle-Mega",
		megaEvolves: "Salazzle",
		itemUser: ["Salazzle"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -30,
		gen: 8,
		desc: "If held by a Salazzle, this item allows it to Mega Evolve in battle.",
	},
	golisopodite: {
		name: "Golisopodite",
		spritenum: 578,
		megaStone: "Golisopod-Mega",
		megaEvolves: "Golisopod",
		itemUser: ["Golisopod"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -31,
		gen: 8,
		desc: "If held by a Golisopod, this item allows it to Mega Evolve in battle.",
	},
	dhelmite: {
		name: "Dhelmite",
		spritenum: 578,
		megaStone: "Dhelmise-Mega",
		megaEvolves: "Dhelmise",
		itemUser: ["Dhelmise"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -32,
		gen: 8,
		desc: "If held by a Dhelmise, this item allows it to Mega Evolve in battle.",
	},
	centiskorchitex: {
		name: "Centiskorchite X",
		spritenum: 578,
		megaStone: "Centiskorch-Mega-X",
		megaEvolves: "Centiskorch",
		itemUser: ["Centiskorch"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -33,
		gen: 8,
		desc: "If held by a Centiskorch, this item allows it to Mega Evolve in battle.",
	},
	centiskorchitey: {
		name: "Centiskorchite Y",
		spritenum: 578,
		megaStone: "Centiskorch-Mega-Y",
		megaEvolves: "Centiskorch",
		itemUser: ["Centiskorch"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -34,
		gen: 8,
		desc: "If held by a Centiskorch, this item allows it to Mega Evolve in battle.",
	},
	// frosmite: { //removed
	// 	name: "Frosmite",
	// 	spritenum: 578,
	// 	megaStone: "Frosmoth-Mega",
	// 	megaEvolves: "Frosmoth",
	// 	itemUser: ["Frosmoth"],
	// 	onTakeItem(item, source) {
	// 		if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
	// 		return true;
	// 	},
	// 	num: -36,
	// 	gen: 8,
	// 	desc: "If held by a Frosmoth, this item allows it to Mega Evolve in battle.",
	// },
	baskironite: {
		name: "Baskironite",
		spritenum: 578,
		megaStone: "Baskiron-Mega",
		megaEvolves: "Baskiron",
		itemUser: ["Baskiron"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -35,
		gen: 8,
		desc: "If held by a Baskiron, this item allows it to Mega Evolve in battle.",
	},
	terreptilite: {
		name: "Terreptilite",
		spritenum: 578,
		megaStone: "Terreptile-Mega",
		megaEvolves: "Terreptile",
		itemUser: ["Terreptile"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -36,
		gen: 8,
		desc: "If held by a Terreptile, this item allows it to Mega Evolve in battle.",
	},
	rocksterite: {
		name: "Rocksterite",
		spritenum: 578,
		megaStone: "Rockster-Mega",
		megaEvolves: "Rockster",
		itemUser: ["Rockster"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -37,
		gen: 8,
		desc: "If held by a Rockster, this item allows it to Mega Evolve in battle.",
	},
	infarmatemite: {
		name: "Infarmatemite",
		spritenum: 578,
		megaStone: "Infarmatem-Mega",
		megaEvolves: "Infarmatem",
		itemUser: ["Infarmatem"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -38,
		gen: 8,
		desc: "If held by a Infarmatem, this item allows it to Mega Evolve in battle.",
	},

	chakraseed: {
		name: "Chakra Seed",
		shortDesc: "If the terrain is Chakra Terrain, raises holder's Defense by 1 stage. Single use.",
		spritenum: 664,
		fling: {
			basePower: 10,
		},
		onStart(pokemon) {
			if (!pokemon.ignoringItem() && this.field.isTerrain('chakraterrain')) {
				pokemon.useItem();
			}
		},
		onTerrainChange(pokemon) {
			if (this.field.isTerrain('chakraterrain')) {
				pokemon.useItem();
			}
		},
		boosts: {
			def: 1,
		},
		num: -39,
		gen: 8,
	},
	honey: {
		name: "Honey",
		fling: {
			basePower: 30,
		},
		num: -40,
		gen: 4,
    	shortDesc: "Pokemon with the ability Honey Gather or Sweet Veil heal 12.5% when holding this item. Heals status.",
		onAfterSetStatus(status, pokemon) {
			pokemon.eatItem();
		},
		onUpdate(pokemon) {
			if (pokemon.status || pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.cureStatus();
			pokemon.removeVolatile('confusion');
		},
	},
	indecisiveorb: {
		name: "Indecisive Orb",
		fling: {
			basePower: 30,
		},
		onDisableMove: function(pokemon) {
			if (pokemon.lastMove && pokemon.lastMove.id !== 'struggle') pokemon.disableMove(pokemon.lastMove.id);
		},
		onModifyDamage(damage, source, target, move) {
			return this.chainModify([0x14CC, 0x1000]);
		},
		desc: "Holder's move have 1.2x BP, but it can't use the same move twice in a row.",
		num: -41,
		gen: 8,
	},
	deepseascale: {
		inherit: true,
		name: "Deep Sea Scale",
		shortDesc: "If held by a Clamperl or a Gorebyss, its Sp. Def is x1.5.",
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.name === 'Clamperl' || pokemon.baseSpecies.name === 'Gorebyss') {
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Clamperl", "Gorebyss"],
	},
	deepseatooth: {
		inherit: true,
		name: "Deep Sea Tooth",
		shortDesc: "If held by a Clamperl or a Huntail, its Sp. Atk is x1.5.",
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.name === 'Clamperl' || pokemon.baseSpecies.name === 'Huntail') {
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Clamperl", "Huntail"],
	},
	// sandwiches
	mightysandwichkoraidon: {
		name: "Mighty Sandwich (Koraidon)",
		shortDesc: "Allows Koraidon to be its strongest version.",
		// spritenum: 699,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 1007) || pokemon.baseSpecies.num === 1007) {
				return false;
			}
			return true;
		},
		forcedForme: "Koraidon",
		itemUser: ["Koraidon"],
		num: -42,
		gen: 8,
	},
	mightysandwichmiraidon: {
		name: "Mighty Sandwich (Miraidon)",
		shortDesc: "Allows Miraidon to be its strongest version.",
		// spritenum: 699,
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 1008) || pokemon.baseSpecies.num === 1008) {
				return false;
			}
			return true;
		},
		forcedForme: "Miraidon",
		itemUser: ["Miraidon"],
		num: -43,
		gen: 8,
	},
	seginstar: {
		name: "Segin Star",
		spritenum: 646,
		fling: {
			basePower: 20,
			status: 'slp',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === -79 || pokemon.baseSpecies.num === -79) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Verivavroom') {			
				this.add('-item', pokemon, 'Segin Star');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Segin Star changed its form and ability!`);
			}
		},
		onStart(pokemon) {
			const oldAbility = pokemon.setAbility('intimidate');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Intimidate', '[from] item: Segin Star');
				return;
			}
			return oldAbility as false | null;
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Segin Star boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Segin Star boost');
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Verivavroom"],
		num: -44,
		gen: 9,
		desc: "Verivavroom: Gains STAB on Dark-type, Ability: Intimidate.",
	},	
	schedarstar: {
		name: "Schedar Star",
		spritenum: 632,
		fling: {
			basePower: 20,
			status: 'brn',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === -79 || pokemon.baseSpecies.num === -79) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Verivavroom') {			
				this.add('-item', pokemon, 'Schedar Star');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Schedar Star changed its form and ability!`);
			}
		},
		onStart(pokemon) {
			const oldAbility = pokemon.setAbility('speedboost');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Speed Boost', '[from] item: Schedar Star');
				return;
			}
			return oldAbility as false | null;
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Segin Star boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Segin Star boost');
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Verivavroom"],
		num: -45,
		gen: 9,
		desc: "Verivavroom: Gains STAB on Fire-type, Ability: Speed Boost.",
	},	
	navistar: {
		name: "Navi Star ",
		spritenum: 638,
		fling: {
			basePower: 20,
			status: 'psn',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === -79 || pokemon.baseSpecies.num === -79) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Verivavroom') {			
				this.add('-item', pokemon, 'Schedar Star');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Schedar Star changed its form and ability!`);
			}
		},
		onStart(pokemon) {
			const oldAbility = pokemon.setAbility('toxicdebris');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Toxic Debris', '[from] item: Navi Star');
				return;
			}
			return oldAbility as false | null;
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Segin Star boost');
				return this.chainModify(2/1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Poison') {
				this.debug('Segin Star boost');
				return this.chainModify(2/1.5);
			}
		},
		itemUser: ["Verivavroom"],
		num: -46,
		gen: 9,
		desc: "Verivavroom: Gains better Poison-type, Ability: Toxic Debris.",
	},	
	ruchbahstar: {
		name: "Ruchbah Star",
		spritenum: 648,
		fling: {
			basePower: 20,
			status: 'confusion',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === -79 || pokemon.baseSpecies.num === -79) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Verivavroom') {			
				this.add('-item', pokemon, 'Ruchbah Star');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Ruchbah Star changed its form and ability!`);
			}
		},
		onStart(pokemon) {
			const oldAbility = pokemon.setAbility('mistysurge');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Misty Surge', '[from] item: Ruchbah Star');
				return;
			}
			return oldAbility as false | null;
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				this.debug('Ruchbah Star boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fairy') {
				this.debug('Ruchbah Star boost');
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Verivavroom"],
		num: -47,
		gen: 9,
		desc: "Verivavroom: Gains STAB on Fairy-type, Ability: Misty Surge.",
	},	
	caphstar: {
		name: "Caph Star",
		spritenum: 637,
		fling: {
			basePower: 20,
			status: 'par',
		},
		onTakeItem(item, pokemon, source) {
			if (source?.baseSpecies.num === -79 || pokemon.baseSpecies.num === -79) {
				return false;
			}
			return true;
		},
		onSwitchIn(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Verivavroom') {			
				this.add('-item', pokemon, 'Caph Star');
				this.add('-anim', pokemon, "Cosmic Power", pokemon);
				this.add('-message', `${pokemon.name}'s Caph Star changed its form and ability!`);
			}
		},
		onStart(pokemon) {
			const oldAbility = pokemon.setAbility('stamina');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Stamina', '[from] item: Ruchbah Star');
				return;
			}
			return oldAbility as false | null;
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Ruchbah Star boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Ruchbah Star boost');
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Verivavroom"],
		num: -48,
		gen: 9,
		desc: "Verivavroom: Gains STAB on Fighting-type, Ability: Stamina.",
	},	
	// identitycard: { //WIP
	// 	name: "Identity Card",
	// 	spritenum: 0, 
	// 	shortDesc: "Holder's typing cannot be changed by any effect.",
	// 	ignoreKlutz: true,
	// 	onHit(pokemon) {
	// 		if (pokemon.setType(pokemon.getTypes(true).map(type => type === "Electric" ? "???" : type))){
	// 			this.add('-block', target, 'item: Identity Card');
	// 		}
	// 	},
	// 	num: -49,
	// 	gen: 8,
	// },
}