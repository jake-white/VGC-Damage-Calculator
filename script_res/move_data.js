var MOVES_RBY = {
    'Struggle': {
        bp:50,
        type: 'Normal',
        category: 'Physical'
    },
    '(No Move)': {
        bp: 0,
        type: 'Normal',
        category: 'Physical'
    },
    'Acid': {
        bp: 40,
        type: 'Poison'
    },
    'Bind': {
        bp: 15,
        type: 'Normal'
    },
    'Blizzard': {
        bp: 120,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Body Slam': {
        bp: 85,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'BubbleBeam': {
        bp: 65,
        type: 'Water'
    },
    'Clamp': {
        bp: 35,
        type: 'Water'
    },
    'Crabhammer': {
        bp: 90,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: true
    },
    'Dig': {
        bp: 100,
        type: 'Ground'
    },
    'Double Kick': {
        bp: 30,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true
    },
    'Double-Edge': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Drill Peck': {
        bp: 80,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Earthquake': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        isSpread: true
    },
    'Explosion': {
        bp: 170,
        type: 'Normal',
        category: 'Physical',
        isSpread: true
    },
    'Fire Blast': {
        bp: 120,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Fire Punch': {
        bp: 75,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Fire Spin': {
        bp: 15,
        type: 'Fire'
    },
    'Flamethrower': {
        bp: 95,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Hi Jump Kick': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Hydro Pump': {
        bp: 120,
        type: 'Water',
        category: 'Special'
    },
    'Hyper Beam': {
        bp: 150,
        type: 'Normal',
        category: 'Special'
    },
    'Ice Beam': {
        bp: 95,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Ice Punch': {
        bp: 75,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Mega Drain': {
        bp: 40,
        type: 'Grass'
    },
    'Night Shade': {
        bp: 100,
        type: 'Ghost',
        category: 'Special'
    },
    'Pin Missile': {
        bp: 14,
        type: 'Bug',
        category: 'Physical',
        isMultiHit: true
    },
    'Psychic': {
        bp: 90,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Quick Attack': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Razor Leaf': {
        bp: 55,
        type: 'Grass',
        category: 'Special',
        alwaysCrit: true
    },
    'Rock Slide': {
        bp: 75,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Seismic Toss': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Selfdestruct': {
        bp: 130,
        type: 'Normal',
        category: 'Physical',
        isSpread: true
    },
    'Sky Attack': {
        bp: 140,
        type: 'Flying',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Slash': {
        bp: 70,
        type: 'Normal',
        alwaysCrit: true
    },
    'Sludge': {
        bp: 65,
        type: 'Poison'
    },
    'Submission': {
        bp: 80,
        type: 'Fighting'
    },
    'Surf': {
        bp: 95,
        type: 'Water',
        category: 'Special',
        isSpread: true
    },
    'Tackle': {
        bp: 35,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Thunder': {
        bp: 120,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'ThunderPunch': {
        bp: 75,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Thunderbolt': {
        bp: 95,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Twineedle': {
        bp: 25,
        type: 'Bug',
        isTwoHit: true
    },
    'Wrap': {
        bp: 15,
        type: 'Normal'
    }
};

var MOVES_GSC = $.extend(true, {}, MOVES_RBY, {
    'Struggle': {
        type: 'Typeless'
    },
    'Aeroblast': {
        bp: 100,
        type: 'Flying',
        category: 'Special'
    },
    'AncientPower': {
        bp: 60,
        type: 'Rock',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Bite': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Crabhammer': { alwaysCrit: false },
    'Cross Chop': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Crunch': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Double-Edge': { bp: 120 },
    'DynamicPunch': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Explosion': { bp: 250 },
    'ExtremeSpeed': {
        bp: 80,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Faint Attack': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Flail': {
        bp: 1,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Flame Wheel': {
        bp: 60,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Frustration': {
        bp: 102,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Giga Drain': {
        bp: 60,
        type: 'Grass',
        category: 'Special'
    },
    'Headbutt': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Hidden Power Bug': {
        bp: 70,
        type: 'Bug',
        category: 'Special'
    },
    'Hidden Power Dark': {
        bp: 70,
        type: 'Dark',
        category: 'Special'
    },
    'Hidden Power Dragon': {
        bp: 70,
        type: 'Dragon',
        category: 'Special'
    },
    'Hidden Power Electric': {
        bp: 70,
        type: 'Electric',
        category: 'Special'
    },
    'Hidden Power Fighting': {
        bp: 70,
        type: 'Fighting',
        category: 'Special'
    },
    'Hidden Power Fire': {
        bp: 70,
        type: 'Fire',
        category: 'Special'
    },
    'Hidden Power Flying': {
        bp: 70,
        type: 'Flying',
        category: 'Special'
    },
    'Hidden Power Ghost': {
        bp: 70,
        type: 'Ghost',
        category: 'Special'
    },
    'Hidden Power Grass': {
        bp: 70,
        type: 'Grass',
        category: 'Special'
    },
    'Hidden Power Ground': {
        bp: 70,
        type: 'Ground',
        category: 'Special'
    },
    'Hidden Power Ice': {
        bp: 70,
        type: 'Ice',
        category: 'Special'
    },
    'Hidden Power Poison': {
        bp: 70,
        type: 'Poison',
        category: 'Special'
    },
    'Hidden Power Psychic': {
        bp: 70,
        type: 'Psychic',
        category: 'Special'
    },
    'Hidden Power Rock': {
        bp: 70,
        type: 'Rock',
        category: 'Special'
    },
    'Hidden Power Steel': {
        bp: 70,
        type: 'Steel',
        category: 'Special'
    },
    'Hidden Power Water': {
        bp: 70,
        type: 'Water',
        category: 'Special'
    },
    'Icy Wind': {
        bp: 55,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Iron Tail': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Mach Punch': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Megahorn': {
        bp: 120,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Pursuit': {
        bp: 40,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Rapid Spin': {
        bp: 20,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Razor Leaf': { alwaysCrit: false },
    'Return': {
        bp: 102,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Reversal': {
        bp: 1,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Sacred Fire': {
        bp: 100,
        type: 'Fire',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Selfdestruct': { bp: 200 },
    'Shadow Ball': {
        bp: 80,
        type: 'Ghost',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Sludge Bomb': {
        bp: 90,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'SolarBeam': {
        bp: 120,
        type: 'Grass',
        category: 'Special'
    },
    'Steel Wing': {
        bp: 70,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Thief': {
        bp: 40,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Zap Cannon': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    }
});

delete MOVES_GSC['Acid'];
delete MOVES_GSC['Bind'];
delete MOVES_GSC['Clamp'];
delete MOVES_GSC['Dig'];
delete MOVES_GSC['Fire Spin'];
delete MOVES_GSC['Mega Drain'];
delete MOVES_GSC['Slash'];
delete MOVES_GSC['Sludge'];
delete MOVES_GSC['Wrap'];

var MOVES_ADV = $.extend(true, {}, MOVES_GSC, {
    'Aerial Ace': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Air Cutter': {
        bp: 55,
        type: 'Flying',
        category: 'Special',
        isSpread: true
    },
    'Blaze Kick': {
        bp: 85,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Bonemerang': {
        bp: 50,
        type: 'Ground',
        category: 'Physical',
        isTwoHit: true
    },
    'Bounce': {
        bp: 85,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Brick Break': {
        bp: 75,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Doom Desire': {
        bp: 120,
        type: 'Steel',
        category: 'Special'
    },
    'Dragon Claw': {
        bp: 80,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true
    },
    'Eruption': {
        bp: 150,
        type: 'Fire',
        category: 'Special',
        isSpread: true
    },
    'Extrasensory': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Facade': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Fake Out': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Focus Punch': {
        bp: 150,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Heat Wave': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Knock Off': {
        bp: 20,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Leaf Blade': {
        bp: 70,
        type: 'Grass',
        category: 'Physical',
        makesContact: true
    },
    'Low Kick': {
        bp: 1,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Luster Purge': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Meteor Mash': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Muddy Water': {
        bp: 95,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Mud Shot': {
        bp: 55,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Overheat': {
        bp: 140,
        type: 'Fire',
        category: 'Special'
    },
    'Poison Fang': {
        bp: 50,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Psycho Boost': {
        bp: 140,
        type: 'Psychic',
        category: 'Special'
    },
    'Revenge': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Rock Blast': {
        bp: 25,
        type: 'Rock',
        category: 'Physical',
        isMultiHit: true
    },
    'Rock Tomb': {
        bp: 50,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Shadow Punch': {
        bp: 60,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Shock Wave': {
        bp: 60,
        type: 'Electric',
        category: 'Special'
    },
    'Signal Beam': {
        bp: 75,
        type: 'Bug',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Sky Uppercut': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Spark': {
        bp: 65,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Superpower': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Volt Tackle': {
        bp: 120,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true
    },
    'Water Pulse': {
        bp: 60,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true
    },
    'Water Spout': {
        bp: 150,
        type: 'Water',
        category: 'Special',
        isSpread: true
    },
    'Weather Ball': {
        bp: 50,
        type: 'Normal',
        category: 'Special',
        isBullet: true
    }
});

delete MOVES_ADV['BubbleBeam'];
delete MOVES_ADV['Submission'];

var MOVES_DPP = $.extend(true, {}, MOVES_ADV, {
    'Air Slash': {
        bp: 75,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Aqua Jet': {
        bp: 40,
        type: 'Water',
        category: 'Physical',
        makesContact: true
    },
    'Aqua Tail': {
        bp: 90,
        type: 'Water',
        category: 'Physical',
        makesContact: true
    },
    'Assurance': {
        bp: 50,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Aura Sphere': {
        bp: 90,
        type: 'Fighting',
        category: 'Special',
        isBullet: true,
        isPulse: true
    },
    'Avalanche': {
        bp: 120,
        type: 'Ice',
        category: 'Physical',
        makesContact: true
    },
    'Brave Bird': {
        bp: 120,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Brine': {
        bp: 65,
        zp: 120,
        type: 'Water',
        category: 'Special',
    },
    'Bug Bite': {
        bp: 60,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Bug Buzz': {
        bp: 90,
        type: 'Bug',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true
    },
    'Bullet Punch': {
        bp: 40,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Charge Beam': {
        bp: 50,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Chatter': {
        bp: 60,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true
    },
    'Close Combat': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Cross Poison': {
        bp: 70,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Dark Pulse': {
        bp: 80,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true
    },
    'Discharge': {
        bp: 80,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Double Hit': {
        bp: 35,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true
    },
    'Draco Meteor': {
        bp: 140,
        type: 'Dragon',
        category: 'Special'
    },
    'Dragon Pulse': {
        bp: 90,
        type: 'Dragon',
        category: 'Special',
        isPulse: true
    },
    'Dragon Rush': {
        bp: 100,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Drain Punch': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Earth Power': {
        bp: 90,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Energy Ball': {
        bp: 80,
        type: 'Grass',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Fire Fang': {
        bp: 65,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Flare Blitz': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true
    },
    'Flash Cannon': {
        bp: 80,
        type: 'Steel',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Fling': {
        bp: 1,
        type: 'Dark',
        category: 'Physical'
    },
    'Fly':{
        bp: 90,
        type: 'Flying',
        category: 'Physical'
    },
    'Focus Blast': {
        bp: 120,
        type: 'Fighting',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Force Palm': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Giga Impact': {
        bp: 150,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Grass Knot': {
        bp: 1,
        type: 'Grass',
        category: 'Special',
        makesContact: true
    },
    'Gunk Shot': {
        bp: 120,
        type: 'Poison',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Gyro Ball': {
        bp: 1,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        isBullet: true
    },
    'Hammer Arm': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Head Smash': {
        bp: 150,
        type: 'Rock',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Hi Jump Kick': { bp: 100 },
    'Hyper Voice': {
        bp: 90,
        type: 'Normal',
        category: 'Special',
        isSound: true,
        isSpread: true
    },
    'Ice Fang': {
        bp: 65,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Ice Shard': {
        bp: 40,
        type: 'Ice',
        category: 'Physical'
    },
    'Iron Head': {
        bp: 80,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Judgment': {
        bp: 100,
        type: 'Normal',
        category: 'Special'
    },
    'Jump Kick': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Last Resort': {
        bp: 130,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Lava Plume': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Leaf Blade': { bp: 90 },
    'Leaf Storm': {
        bp: 140,
        type: 'Grass',
        category: 'Special'
    },
    'Magma Storm': {
        bp: 120,
        type: 'Fire',
        category: 'Special'
    },
    'Mud Bomb': {
        bp: 65,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Natural Gift': {
        bp: 1,
        type: 'Normal',
        category: 'Physical'
    },
    'Nature Power': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Night Slash': {
        bp: 70,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Outrage': {
        bp: 120,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true
    },
    'Payback': {
        bp: 50,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Pluck': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Poison Jab': {
        bp: 80,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Power Gem': {
        bp: 70,
        type: 'Rock',
        category: 'Special'
    },
    'Power Whip': {
        bp: 120,
        type: 'Grass',
        category: 'Physical',
        makesContact: true
    },
    'Psycho Cut': {
        bp: 70,
        type: 'Psychic',
        category: 'Physical'
    },
    'Punishment': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Rock Climb': {
        bp: 90,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Rock Smash': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Seed Bomb': {
        bp: 80,
        type: 'Grass',
        category: 'Physical',
        isBullet: true
    },
    'Seed Flare': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Shadow Claw': {
        bp: 70,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Shadow Force': {
        bp: 120,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Shadow Sneak': {
        bp: 40,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Spacial Rend': {
        bp: 100,
        type: 'Dragon',
        category: 'Special'
    },
    'Stone Edge': {
        bp: 100,
        type: 'Rock',
        category: 'Physical'
    },
    'Sucker Punch': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Swift': {
        bp: 60,
        type: 'Normal',
        category: 'Special',
        isSpread: true
    },
    'Thunder Fang': {
        bp: 65,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Tri Attack': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'U-turn': {
        bp: 70,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Vacuum Wave': {
        bp: 40,
        type: 'Fighting',
        category: 'Special'
    },
    'Wake-Up Slap': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Waterfall': {
        bp: 80,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Wood Hammer': {
        bp: 120,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'X-Scissor': {
        bp: 80,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Zen Headbutt': {
        bp: 80,
        type: 'Psychic',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    }
});

delete MOVES_DPP['Razor Leaf'];
delete MOVES_DPP['Twineedle'];
delete MOVES_DPP['Zap Cannon'];

var MOVES_BW = $.extend(true, {}, MOVES_DPP, {
    'Electroweb': {
        bp: 55,
        type: "Electric",
        category: "Special",
        isSpread: "True",
        hasSecondaryEffect: "True"
    },
    'Acid Spray': {
        bp: 40,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Acrobatics': {
        bp: 55,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Attack Order': {
        bp: 90,
        type: 'Bug',
        category: 'Physical'
    },
    'Blue Flare': {
        bp: 130,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Bolt Strike': {
        bp: 130,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Bulldoze': {
        bp: 60,
        type: 'Ground',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Bullet Seed': {
        bp: 25,
        type: 'Grass',
        category: 'Physical',
        isMultiHit: true,
        isBullet: true
    },
    'Circle Throw': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Clear Smog': {
        bp: 50,
        type: 'Poison',
        category: 'Special'
    },
    'Doom Desire': { bp: 140 },
    'Dragon Tail': {
        bp: 60,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true
    },
    'Drain Punch': { bp: 75 },
    'Drill Run': {
        bp: 80,
        type: 'Ground',
        category: 'Physical',
        makesContact: true
    },
    'Dual Chop': {
        bp: 40,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true
    },
    'Electro Ball': {
        bp: 1,
        type: 'Electric',
        category: 'Special',
        isBullet: true
    },
    'Feint': {
        bp: 30,
        type: 'Normal',
        category: 'Physical'
    },
    'Fiery Dance': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Flame Charge': {
        bp: 50,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Foul Play': {
        bp: 95,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Freeze Shock': {
        bp: 140,
        type: 'Ice',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Frost Breath': {
        bp: 40,
        type: 'Ice',
        category: 'Special',
        alwaysCrit: true
    },
    'Fusion Bolt': {
        bp: 100,
        type: 'Electric',
        category: 'Physical'
    },
    'Fusion Flare': {
        bp: 100,
        type: 'Fire',
        category: 'Special'
    },
    'Gear Grind': {
        bp: 50,
        type: 'Steel',
        category: 'Physical',
        isTwoHit: true
    },
    'Giga Drain': { bp: 75 },
    'Glaciate': {
        bp: 65,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Head Charge': {
        bp: 120,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Heavy Slam': {
        bp: 1,
        type: 'Steel',
        category: 'Physical',
        makesContact: true
    },
    'Hex': {
        bp: 50,
        type: 'Ghost',
        category: 'Special'
    },
    'Hi Jump Kick': { bp: 130 },
    'Horn Leech': {
        bp: 75,
        type: 'Grass',
        category: 'Physical',
        makesContact: true
    },
    'Hurricane': {
        bp: 120,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Icicle Crash': {
        bp: 85,
        type: 'Ice',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Icicle Spear': {
        bp: 25,
        type: 'Ice',
        category: 'Physical',
        isMultiHit: true
    },
    'Incinerate': {
        bp: 30,
        type: 'Fire',
        category: 'Special',
        isSpread: true
    },
    'Inferno': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Jump Kick': { bp: 100 },
    'Last Resort': { bp: 140 },
    'Low Sweep': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Nature Power': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        hasSecondaryEffect: false,
        isSpread: true
    },
    'Night Daze': {
        bp: 85,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Petal Dance': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        makesContact: true
    },
    'Psyshock': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        dealsPhysicalDamage: true
    },
    'Psystrike': {
        bp: 100,
        type: 'Psychic',
        category: 'Special',
        dealsPhysicalDamage: true
    },
    'Razor Leaf': {
        bp: 55,
        type: 'Grass',
        category: 'Physical',
        isSpread: true
    },
    'Razor Shell': {
        bp: 75,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Relic Song': {
        bp: 75,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true
    },
    'Retaliate': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Sacred Sword': {
        bp: 90,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        ignoresDefenseBoosts: true
    },
    'Scald': {
        bp: 80,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Searing Shot': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Secret Sword': {
        bp: 85,
        type: 'Fighting',
        category: 'Special',
        dealsPhysicalDamage: true
    },
    'Sky Drop': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Sludge Wave': {
        bp: 95,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Smack Down': {
        bp: 50,
        type: 'Rock',
        category: 'Physical'
    },
    'Snarl': {
        bp: 55,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true
    },
    'Stored Power': {
        bp: 20,
        type: 'Psychic',
        category: 'Special'
    },
    'Storm Throw': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: true
    },
    'Synchronoise': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        isSpread: true
    },
    'Tackle': { bp: 50 },
    'Tail Slap': {
        bp: 25,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true
    },
    'Thrash': {
        bp: 120,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'V-create': {
        bp: 180,
        type: 'Fire',
        category: 'Physical',
        makesContact: true
    },
    'Volt Switch': {
        bp: 70,
        type: 'Electric',
        category: 'Special'
    },
    'Wild Charge': {
        bp: 90,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    }
});

var MOVES_XY = $.extend(true, {}, MOVES_BW, {
    'Air Cutter': { bp: 60 },
    'Arm Thrust': {
        bp: 15,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true
    },
    'Assurance': { bp: 60 },
    'Aura Sphere': { bp: 80 },
    'Blizzard': { bp: 110 },
    'Boomburst': {
        bp: 140,
        type: 'Normal',
        category: 'Special',
        isSound: true,
        isSpread: true
    },
    'Chatter': { bp: 65 },
    'Crabhammer': { bp: 100 },
    'Dazzling Gleam': {
        bp: 80,
        type: 'Fairy',
        category: 'Special',
        isSpread: true
    },
    'Diamond Storm': {
        bp: 100,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Draco Meteor': { bp: 130 },
    'Dragon Ascent': {
        bp: 120,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Dragon Pulse': { bp: 85 },
    'Draining Kiss': {
        bp: 50,
        type: 'Fairy',
        category: 'Special',
        makesContact: true
    },
    'Energy Ball': { bp: 90 },
    'Facade': { ignoresBurn: true },
    'Fire Blast': { bp: 110 },
    'Flamethrower': { bp: 90 },
    'Flying Press': {
        bp: 80,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Freeze-Dry': {
        bp: 70,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Frost Breath': { bp: 60 },
    'Future Sight': {
        bp: 120,
        type: 'Psychic',
        category: 'Special'
    },
    'Heat Wave': { bp: 95 },
    'Hex': { bp: 65 },
    'Hidden Power Bug': { bp: 60 },
    'Hidden Power Dark': { bp: 60 },
    'Hidden Power Dragon': { bp: 60 },
    'Hidden Power Electric': { bp: 60 },
    'Hidden Power Fighting': { bp: 60 },
    'Hidden Power Fire': { bp: 60 },
    'Hidden Power Flying': { bp: 60 },
    'Hidden Power Ghost': { bp: 60 },
    'Hidden Power Grass': { bp: 60 },
    'Hidden Power Ground': { bp: 60 },
    'Hidden Power Ice': { bp: 60 },
    'Hidden Power Poison': { bp: 60 },
    'Hidden Power Psychic': { bp: 60 },
    'Hidden Power Rock': { bp: 60 },
    'Hidden Power Steel': { bp: 60 },
    'Hidden Power Water': { bp: 60 },
    'Hurricane': { bp: 110 },
    'Hydro Pump': { bp: 110 },
    'Ice Beam': { bp: 90 },
    'Incinerate': { bp: 60 },
    'Knock Off': { bp: 65 },
    'Land\'s Wrath': {
        bp: 90,
        type: 'Ground',
        category: 'Physical',
        isSpread: true
    },
    'Leaf Storm': { bp: 130 },
    'Light of Ruin': {
        bp: 140,
        type: 'Fairy',
        category: 'Special',
        hasRecoil: true
    },
    'Low Sweep': { bp: 65 },
    'Magma Storm': { bp: 100 },
    'Meteor Mash': { bp: 90 },
    'Moonblast': {
        bp: 95,
        type: 'Fairy',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Muddy Water': { bp: 90 },
    'Nature Power': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: false
    },
    'Oblivion Wing': {
        bp: 80,
        type: 'Flying',
        category: 'Special'
    },
    'Origin Pulse': {
        bp: 110,
        type: 'Water',
        category: 'Special',
        isSpread: true
    },
    'Overheat': { bp: 130 },
    'Phantom Force': {
        bp: 90,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Pin Missile': { bp: 25 },
    'Play Rough': {
        bp: 90,
        type: 'Fairy',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Power Gem': { bp: 80 },
    'Power-Up Punch': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Precipice Blades': {
        bp: 120,
        type: 'Ground',
        category: 'Physical',
        isSpread: 'true'
    },
    'Rock Tomb': { bp: 60 },
    'Sheer Cold': {
        bp: 0,
        type: 'Ice',
        category: 'Special',
        isSpread: 'false',
        isMLG: 'true'
    },
    'Storm Throw': { bp: 60 },
    'Surf': { bp: 90 },
    'Synchronoise': { bp: 120 },
    'Thief': { bp: 60 },
    'Thunder': { bp: 110 },
    'Thunderbolt': { bp: 90 },
    'Wake-Up Slap': { bp: 70 },
    'Water Shuriken': {
        bp: 15,
        type: 'Water',
        category: 'Physical',
        isMultiHit: true
    },
    'Aurora Beam': {
        bp: 65,
        type: 'Ice',
        category: 'Special'
    }
});

MOVES_XY['Ancient Power'] = MOVES_XY['AncientPower'];
MOVES_XY['Dynamic Punch'] = MOVES_XY['DynamicPunch'];
MOVES_XY['Extreme Speed'] = MOVES_XY['ExtremeSpeed'];
MOVES_XY['Feint Attack'] = MOVES_XY['Faint Attack'];
MOVES_XY['High Jump Kick'] = MOVES_XY['Hi Jump Kick'];
MOVES_XY['Self-Destruct'] = MOVES_XY['Selfdestruct'];
MOVES_XY['Solar Beam'] = MOVES_XY['SolarBeam'];
MOVES_XY['Thunder Punch'] = MOVES_XY['ThunderPunch'];
delete MOVES_XY['AncientPower'];
delete MOVES_XY['DynamicPunch'];
delete MOVES_XY['ExtremeSpeed'];
delete MOVES_XY['Faint Attack'];
delete MOVES_XY['Hi Jump Kick'];
delete MOVES_XY['Selfdestruct'];
delete MOVES_XY['SolarBeam'];
delete MOVES_XY['ThunderPunch'];

var ZMOVES_LOOKUP = {
    'Normal':'Breakneck Blitz','Fire':'Inferno Overdrive','Water':'Hydro Vortex',
    'Electric':'Gigavolt Havoc','Grass':'Bloom Doom','Ghost':'Never-Ending Nightmare',
    'Dark':'Black Hole Eclipse','Psychic':'Shattered Psyche','Fighting':'All-Out Pummeling',
    'Steel':'Corkscrew Crash','Ice':'Subzero Slammer','Ground':'Tectonic Rage',
    'Rock':'Continental Crush','Bug':'Savage Spin-Out','Fairy':'Twinkle Tackle',
    'Flying':'Supersonic Skystrike','Dragon':'Devastating Drake','Poison':'Acid Downpour'};

var MOVES_SM = $.extend(true, {}, MOVES_XY, {
    'Bolt Strike': {zp: 195 },
    'Future Sight': { zp: 190 },
    'Mud Shot': {
        zp: 100
    },
    'Last Resort': { zp: 200 },
    'Water Shuriken': {
        category: 'Special',
        zp: 100
    },
    'Leech Life': {
        category: 'Physical',
        type: 'Bug',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Zing Zap': {
        category: 'Physical',
        type: 'Electric',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Moongeist Beam': {
        category: 'Special',
        type: 'Ghost',
        bp: 100,
        zp: 180
    },
    'Sunsteel Strike': {
        category: 'Physical',
        type: 'Steel',
        makesContact: true,
        bp: 100,
        zp: 180
    },
    'Spectral Thief': {
        category: 'Physical',
        type: 'Ghost',
        makesContact: true,
        bp: 90,
        zp: 175
    },
    'Prismatic Laser': {
        category: 'Special',
        type: 'Psychic',
        bp: 160,
        zp: 200
    },
    'Liquidation': {
        category: 'Physical',
        type: 'Water',
        makesContact: true,
        hasSecondaryEffect: true,
        bp: 85,
        zp: 160
    },
    'Accelerock': {
        category: 'Physical',
        type: 'Rock',
        makesContact: true,
        bp: 40,
        zp: 100
    },
    'Shadow Bone': {
        category: 'Physical',
        type: 'Ghost',
        bp: 85,
        zp: 160
    },
    'Stomping Tantrum': {
        category: 'Physical',
        type: 'Ground',
        makesContact: true,
        bp: 75,
        zp: 140
    },
    'Psychic Fangs': {
        category: 'Physical',
        type: 'Psychic',
        makesContact: true,
        bp: 85,
        zp: 160,
        isBite: true
    },
    'Fleur Cannon': {
        category: 'Special',
        type: 'Fairy',
        bp: 130,
        zp: 195
    },
    'Shell Trap': {
        category: 'Special',
        type: 'Fire',
        isSpread: true,
        bp: 150,
        zp: 200
    },
    'Genesis Supernova': {
        category: 'Special',
        type: 'Psychic',
        bp: 185,
        isSignatureZ: true,
    },
    'Pulverizing Pancake': {
        category: 'Physical',
        type: 'Normal',
        makesContact: true,
        bp: 210,
        isSignatureZ: true,
    },
    'Stoked Sparksurfer': {
        category: 'Special',
        type: 'Electric',
        bp: 175,
        isSignatureZ: true,
    },
    'Soul-Stealing 7-Star Strike': {
        category: 'Physical',
        type: 'Ghost',
        makesContact: true,
        bp: 195,
        isSignatureZ: true,
    },
    'Oceanic Operetta': {
        category: 'Special',
        type: 'Water',
        bp: 195,
        isSignatureZ: true,
    },
    'Malicious Moonsault': {
        category: 'Physical',
        type: 'Dark',
        bp: 180,
        isSignatureZ: true,
    },
    'Sinister Arrow Raid': {
        category: 'Physical',
        type: 'Ghost',
        bp: 180,
        isSignatureZ: true,
    },
    'Brutal Swing': {
        category: 'Physical',
        type: 'Dark',
        makesContact: true,
        bp: 60,
        isSpread: true,
        zp: 120
    },
    'Dragon Hammer': {
        category: 'Physical',
        type: 'Dragon',
        makesContact: true,
        bp: 90,
        zp: 175
    },
    'Clanging Scales': {
        category: 'Special',
        type: 'Dragon',
        bp: 110,
        isSound: true,
        isSpread: true,
        zp: 185
    },
    'Beak Blast': {
        category: 'Physical',
        type: 'Flying',
        bp: 100,
        zp: 180
    },
    'Trop Kick': {
        category: 'Physical',
        type: 'Grass',
        makesContact: true,
        bp: 70,
        zp: 140
    },
    'Core Enforcer': {
        category: 'Special',
        type: 'Dragon',
        bp: 100,
        isSpread: true,
        zp: 140
    },
    'Revelation Dance':{
        category: 'Special',
        type: 'Normal',
        bp: 90,
        zp: 175
    },
    'Smart Strike':{
        category: 'Physical',
        type: 'Steel',
        makesContact: true,
        bp: 70,
        zp: 140
    },
    'Multi-Attack': {
        category: 'Physical',
        type: 'Normal',
        makesContact: true,
        bp: 90,
        zp: 185
    },
    'Burn Up': {
        category: 'Special',
        type: 'Fire',
        bp: 130,
        zp: 195
    },
    'Power Trip': {
        category: 'Physical',
        type: 'Dark',
        makesContact: true,
        bp: 20,
        zp: 160
    },
    'Fire Lash': {
        category: 'Physical',
        type: 'Fire',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Lunge': {
        category: 'Physical',
        type: 'Bug',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Anchor Shot': {
        category: 'Physical',
        type: 'Steel',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Pollen Puff': {
        category: 'Special',
        type: 'Bug',
        bp: 90,
        zp: 175
    },
    'Throat Chop': {
        category: 'Physical',
        type: 'Dark',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Solar Blade': {
        category: 'Physical',
        type: 'Grass',
        makesContact: true,
        bp: 125,
        zp: 190
    },
    'High Horsepower': {
        category: 'Physical',
        type: 'Ground',
        makesContact: true,
        bp: 95,
        zp: 175
    },
    'Ice Hammer': {
        category: 'Physical',
        type: 'Ice',
        makesContact: true,
        bp: 100,
        zp: 180
    },
    'First Impression': {
        category: 'Physical',
        type: 'Bug',
        makesContact: true,
        bp: '90',
        zp: '175'
    },
    'Sparkling Aria': {
         category: 'Special',
         type: 'Water',
         bp: 90,
         isSpread: true,
         zp: 175
    },
    'Darkest Lariat': {
        category: 'Physical',
        type: 'Dark',
        makesContact: true,
        bp: 85,
        zp:160,
        ignoresDefenseBoosts: true
    },
    'Spirit Shackle': {
        category: 'Physical',
        type: 'Ghost',
        bp: 80,
        zp: 160
    },
    'Catastropika': {
        category: 'Physical',
        type: 'Electric',
        makesContact: true,
        bp: 210,
        isSignatureZ: true,
    },
    'Breakneck Blitz': {
        type: 'Normal'
    },
    'Inferno Overdrive': {
        type: 'Fire'
    },
    'Subzero Slammer': {
        type: 'Ice'
    },
    'Hydro Vortex': {
        type: 'Water'
    },
    'Gigavolt Havoc': {
        type: 'Electric'
    },
    'All-Out Pummeling': {
        type: 'Fighting'
    },
    'Bloom Doom': {
        type: 'Grass'
    },
    'Shattered Psyche': {
        type: 'Psychic'
    },
    'Savage Spin-Out': {
        type: 'Bug'
    },
    'Acid Downpour': {
        type: 'Poison'
    },
    'Supersonic Skystrike': {
        type: 'Flying'
    },
    'Devastating Drake': {
        type: 'Dragon'
    },
    'Continental Crush': {
        type: 'Rock'
    },
    'Tectonic Rage': {
        type: 'Ground'
    },
    'Corkscrew Crash': {
        type: 'Steel'
    },
    'Twinkle Tackle': {
        type: 'Fairy'
    },
    'Never-Ending Nightmare': {
        type: 'Ghost'
    },
    'Black Hole Eclipse': {
        type: 'Dark'
    },
    'Razor Leaf':{
        zp: 100
    },
    'Fly':{
        zp: 175
    },
    'Fire Punch':{
        zp: 140
    },
    'Ice Punch':{
        zp: 140
    },
    'Thunder Punch':{
        zp: 140
    },
    'Double Kick':{
        zp: 100
    },
    'Jump Kick':{
        zp: 180
    },
    'Headbutt':{
        zp: 140
    },
    'Tackle':{
        bp: 40,
        zp: 100
    },
    'Body Slam':{
        zp: 160
    },
    'Thrash':{
        zp: 190
    },
    'Double-Edge':{
        zp: 190
    },
    'Pin Missile':{
        zp: 140
    },
    'Bite':{
        zp: 120
    },
    'Flamethrower':{
        zp: 175
    },
    'Hydro Pump':{
        zp: 185
    },
    'Surf':{
        zp: 175
    },
    'Ice Beam':{
        zp: 175
    },
    'Blizzard':{
        zp: 185
    },
    'Aurora Beam':{
        zp: 120
    },
    'Hyper Beam':{
        zp: 200
    },
    'Drill Peck':{
        zp: 160
    },
    'Low Kick':{
        zp: 160
    },
    'Seismic Toss':{
        zp: 100
    },
    'Solar Beam':{
        zp: 190
    },
    'Petal Dance':{
        zp: 190
    },
    'Thunderbolt':{
        zp: 175
    },
    'Thunder':{
        zp: 185
    },
    'Earthquake':{
        zp: 180
    },
    'Psychic':{
        zp: 175
    },
    'Quick Attack':{
        zp: 100
    },
    'Night Shade':{
        zp: 100
    },
    'Self-Destruct':{
        zp: 200
    },
    'Fire Blast':{
        zp: 185
    },
    'Waterfall':{
        zp: 160
    },
    'Swift':{
        zp: 120
    },
    'High Jump Kick':{
        zp: 195
    },
    'Sky Attack':{
        zp: 200
    },
    'Crabhammer':{
        zp: 180
    },
    'Explosion':{
        zp: 200
    },
    'Bonemerang':{
        zp: 100
    },
    'Rock Slide':{
        zp: 140
    },
    'Tri Attack':{
        zp: 160
    },
    'Super Fang':{
        type: "Normal",
        category: "Physical",
        zp: 100
    },
    'Thief':{
        zp: 120
    },
    'Flame Wheel':{
        zp: 120
    },
    'Flail':{
        zp: 160
    },
    'Aeroblast':{
        zp: 180
    },
    'Reversal':{
        zp: 160
    },
    'Mach Punch':{
        zp: 100
    },
    'Feint Attack':{
        zp: 120
    },
    'Sludge Bomb':{
        zp: 175
    },
    'Icy Wind':{
        zp: 100
    },
    'Outrage':{
        zp: 190
    },
    'Giga Drain':{
        zp: 140
    },
    'Spark':{
        zp: 120
    },
    'Steel Wing':{
        zp: 140
    },
    'Return':{
        zp: 160
    },
    'Frustration':{
        zp: 160
    },
    'Sacred Fire':{
        zp: 180
    },
    'Dynamic Punch':{
        zp: 180
    },
    'Megahorn':{
        zp: 190
    },
    'Pursuit':{
        zp: 100
    },
    'Rapid Spin':{
        zp: 100
    },
    'Iron Tail':{
        zp: 180
    },
    // Hidden Power needs to have type set to normal for the Z-move lookup to work.
    // Conversion of regular move to correct type is done in getMoveEffectiveness in damage.js
    'Hidden Power Bug': { zp: 120 },
    'Hidden Power Dark': { zp: 120 },
    'Hidden Power Dragon': { zp: 120 },
    'Hidden Power Electric': { zp: 120 },
    'Hidden Power Fighting': { zp: 120 },
    'Hidden Power Fire': { zp: 120 },
    'Hidden Power Flying': { zp: 120 },
    'Hidden Power Ghost': { zp: 120 },
    'Hidden Power Grass': { zp: 120 },
    'Hidden Power Ground': { zp: 120 },
    'Hidden Power Ice': { zp: 120 },
    'Hidden Power Poison': { zp: 120 },
    'Hidden Power Psychic': { zp: 120 },
    'Hidden Power Rock': { zp: 120 },
    'Hidden Power Steel': { zp: 120 },
    'Hidden Power Water': { zp: 120 },
    'Cross Chop':{
        zp: 180
    },
    'Crunch':{
        zp: 160
    },
    'Extreme Speed':{
        zp: 160
    },
    'Ancient Power':{
        zp: 120
    },
    'Shadow Ball':{
        zp: 160
    },
    'Rock Smash':{
        zp: 100
    },
    'Fake Out':{
        zp: 100
    },
    'Heat Wave':{
        zp: 175
    },
    'Facade':{
        zp: 140
    },
    'Focus Punch':{
        zp: 200
    },
    'Superpower':{
        zp: 190
    },
    'Revenge':{
        zp: 120
    },
    'Brick Break':{
        zp: 140
    },
    'Knock Off':{
        zp: 120
    },
    'Endeavor':{
        type: 'Normal',
        category: 'Physical',
        zp: 160
    },
    'Eruption':{
        zp: 200
    },
    'Arm Thrust':{
        zp: 100
    },
    'Luster Purge':{
        zp: 140
    },
    'Blaze Kick':{
        zp: 160
    },
    'Hyper Voice':{
        zp: 175
    },
    'Poison Fang':{
        zp: 100
    },
    'Meteor Mash':{
        zp: 175
    },
    'Weather Ball':{
        zp: 160
    },
    'Air Cutter':{
        zp: 120
    },
    'Overheat':{
        zp: 195
    },
    'Rock Tomb':{
        zp: 120
    },
    'Water Spout':{
        zp: 200
    },
    'Signal Beam':{
        zp: 140
    },
    'Shadow Punch':{
        zp: 120
    },
    'Extrasensory':{
        zp: 160
    },
    'Sky Uppercut':{
        zp: 160
    },
    'Sheer Cold':{
        zp: 180
    },
    'Muddy Water':{
        zp: 175
    },
    'Bullet Seed':{
        zp: 140
    },
    'Aerial Ace':{
        zp: 120
    },
    'Icicle Spear':{
        zp: 140
    },
    'Dragon Claw':{
        zp: 160
    },
    'Bounce':{
        zp: 160
    },
    'Volt Tackle':{
        zp: 190
    },
    'Leaf Blade':{
        zp: 175
    },
    'Rock Blast':{
        zp: 140
    },
    'Shock Wave':{
        zp: 120
    },
    'Water Pulse':{
        zp: 120
    },
    'Doom Desire':{
        zp: 200
    },
    'Psycho Boost':{
        zp: 200
    },
    'Wake-Up Slap':{
        zp: 140
    },
    'Hammer Arm':{
        zp: 180
    },
    'Gyro Ball':{
        zp: 160
    },
    'Natural Gift':{
        zp: 160
    },
    'Feint':{
        zp: 100
    },
    'Pluck':{
        zp: 120
    },
    'U-turn':{
        zp: 140
    },
    'Close Combat':{
        zp: 190
    },
    'Payback':{
        zp: 100
    },
    'Assurance':{
        zp: 120
    },
    'Fling':{
        zp: 100
    },
    'Punishment':{
        zp: 160
    },
    'Sucker Punch':{
        bp: 70,
        zp: 140
    },
    'Flare Blitz':{
        zp: 190
    },
    'Force Palm':{
        zp: 120
    },
    'Aura Sphere':{
        zp: 160
    },
    'Poison Jab':{
        zp: 160
    },
    'Dark Pulse':{
        zp: 160
    },
    'Night Slash':{
        zp: 140
    },
    'Aqua Tail':{
        zp: 175
    },
    'Seed Bomb':{
        zp: 160
    },
    'Air Slash':{
        zp: 140
    },
    'X-Scissor':{
        zp: 160
    },
    'Bug Buzz':{
        zp: 175
    },
    'Dragon Pulse':{
        zp: 160
    },
    'Dragon Rush':{
        zp: 180
    },
    'Power Gem':{
        zp: 160
    },
    'Drain Punch':{
        zp: 140
    },
    'Vacuum Wave':{
        zp: 100
    },
    'Focus Blast':{
        zp: 190
    },
    'Energy Ball':{
        zp: 175
    },
    'Brave Bird':{
        zp: 190
    },
    'Earth Power':{
        zp: 175
    },
    'Giga Impact':{
        zp: 200
    },
    'Bullet Punch':{
        zp: 100
    },
    'Avalanche':{
        zp: 120
    },
    'Ice Shard':{
        zp: 100
    },
    'Shadow Claw':{
        zp: 140
    },
    'Thunder Fang':{
        zp: 120
    },
    'Ice Fang':{
        zp: 120
    },
    'Fire Fang':{
        zp: 120
    },
    'Shadow Sneak':{
        zp: 100
    },
    'Mud Bomb':{
        zp: 120
    },
    'Psycho Cut':{
        zp: 140
    },
    'Zen Headbutt':{
        zp: 160
    },
    'Flash Cannon':{
        zp: 160
    },
    'Rock Climb':{
        zp: 175
    },
    'Draco Meteor':{
        zp: 195
    },
    'Discharge':{
        zp: 160
    },
    'Lava Plume':{
        zp: 160
    },
    'Leaf Storm':{
        zp: 195
    },
    'Power Whip':{
        zp: 190
    },
    'Cross Poison':{
        zp: 140
    },
    'Gunk Shot':{
        zp: 190
    },
    'Iron Head':{
        zp: 160
    },
    'Stone Edge':{
        zp: 180
    },
    'Grass Knot':{
        zp: 160
    },
    'Chatter':{
        zp: 120
    },
    'Judgment':{
        zp: 180
    },
    'Bug Bite':{
        zp: 120
    },
    'Charge Beam':{
        zp: 100
    },
    'Wood Hammer':{
        zp: 190
    },
    'Aqua Jet':{
        zp: 100
    },
    'Attack Order':{
        zp: 175
    },
    'Head Smash':{
        zp: 200
    },
    'Double Hit':{
        zp: 140
    },
    'Spacial Rend':{
        zp: 180
    },
    'Magma Storm':{
        zp: 180
    },
    'Seed Flare':{
        zp: 190
    },
    'Shadow Force':{
        zp: 190
    },
    'Psyshock':{
        zp: 160
    },
    'Smack Down':{
        zp: 100
    },
    'Sludge Wave':{
        zp: 175
    },
    'Heavy Slam':{
        zp: 160
    },
    'Synchronoise':{
        zp: 190
    },
    'Electro Ball':{
        zp: 160
    },
    'Flame Charge':{
        zp: 100
    },
    'Low Sweep':{
        zp: 120
    },
    'Acid Spray':{
        zp: 100
    },
    'Foul Play':{
        zp: 175
    },
    'Clear Smog':{
        zp: 100
    },
    'Stored Power':{
        zp: 160
    },
    'Scald':{
        zp: 160
    },
    'Hex':{
        zp: 160
    },
    'Sky Drop':{
        zp: 120
    },
    'Circle Throw':{
        zp: 120
    },
    'Incinerate':{
        zp: 120
    },
    'Acrobatics':{
        zp: 100
    },
    'Retaliate':{
        zp: 140
    },
    'Inferno':{
        zp: 180
    },
    'Water Pledge':{
        zp: 160
    },
    'Fire Pledge':{
        zp: 160
    },
    'Grass Pledge':{
        zp: 160
    },
    'Volt Switch':{
        zp: 140
    },
    'Bulldoze':{
        zp: 120
    },
    'Frost Breath':{
        zp: 120
    },
    'Dragon Tail':{
        zp: 120
    },
    'Wild Charge':{
        zp: 175
    },
    'Drill Run':{
        zp: 160
    },
    'Dual Chop':{
        zp: 100
    },
    'Horn Leech':{
        zp: 140
    },
    'Sacred Sword':{
        zp: 175
    },
    'Razor Shell':{
        zp: 140
    },
    'Night Daze':{
        zp: 160
    },
    'Psystrike':{
        zp: 180
    },
    'Tail Slap':{
        zp: 140
    },
    'Hurricane':{
        zp: 185
    },
    'Head Charge':{
        zp: 190
    },
    'Gear Grind':{
        zp: 180
    },
    'Searing Shot':{
        zp: 180
    },
    'Relic Song':{
        zp: 140
    },
    'Secret Sword':{
        zp: 160
    },
    'Glaciate':{
        zp: 120
    },
    'Fiery Dance':{
        zp: 160
    },
    'Blue Flare':{
        zp: 195
    },
    'Fiery Dance':{
        zp: 160
    },
    'Freeze Shock':{
        zp: 200
    },
    'Snarl':{
        zp: 100
    },
    'Icicle Crash':{
        zp: 160
    },
    'V-create':{
        zp: 220
    },
    'Fusion Flare':{
        zp: 180
    },
    'Fusion Bolt':{
        zp: 180
    },
    'Flying Press':{
        bp: 100,
        zp: 170
    },
    'Phantom Force':{
        zp: 175
    },
    'Freeze-Dry':{
        zp: 140
    },
    'Draining Kiss':{
        zp: 100
    },
    'Play Rough':{
        zp: 175
    },
    'Moonblast':{
        zp: 175
    },
    'Boomburst':{
        zp: 200
    },
    'Diamond Storm':{
        zp: 180
    },
    'Dazzling Gleam':{
        zp: 160
    },
    'Nuzzle':{
        category: 'Physical',
        type: 'Electric',
        bp: 20,
        zp: 100
    },
    'Power-Up Punch':{
        zp: 100
    },
    'Oblivion Wing':{
        zp: 160
    },
    'Land\'s Wrath':{
        zp: 185
    },
    'Thousand Arrows':{
        category: 'Physical',
        type: 'Ground',
        bp: 90,
        zp: 180,
        isSpread: true
    },
    'Thousand Waves':{
        category: 'Physical',
        type: 'Ground',
        bp: 90,
        zp: 175,
        isSpread: true
    },
    'Light Of Ruin':{
        zp: 200
    },
    'Origin Pulse':{
        zp: 185
    },
    'Precipice Blades':{
        zp: 190
    },
    'Dragon Ascent':{
        zp: 190
    },
    'Electroweb':{
        zp: 100
    },
    'Mind Blown': {
        bp: 150,
        zp: 200,
        type: 'Fire',
        category: 'Special',
        isSpread: true
    },
    'Plasma Fists': {
        bp: 100,
        zp: 180,
        type: 'Electric',
        category: 'Physical',
    },
    'Photon Geyser': {
        bp: 100,
        zp: 180,
        type: 'Psychic',
        category: 'Special',
    },
    'Light That Burns the Sky': {
        bp: 200,
        type: 'Psychic',
        category: 'Special',
        isSignatureZ: true,
    },
    'Searing Sunraze Smash': {
        bp: 200,
        type: 'Steel',
        category: 'Physical',
        isSignatureZ: true,
    },
    'Menacing Moonraze Maelstrom': {
        bp: 200,
        type: 'Ghost',
        category: 'Special',
        isSignatureZ: true,
    },
    'Let\'s Snuggle Forever': {
        bp: 190,
        type: 'Fairy',
        category: 'Physical',
        isSignatureZ: true,
    },
    'Splintered Stormshards': {
        bp: 190,
        type: 'Rock',
        category: 'Physical',
        isSignatureZ: true,
    },
    'Clangorous Soulblaze': {
        bp: 185,
        type: 'Dragon',
        category: 'Special',
        isSound: true,
        isSpread: true,
        isSignatureZ: true,
    },
});
