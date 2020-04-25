/* Damage calculation for the Generation VII games, Sun, Moon, Ultra Sun, and Ultra Moon*/

function CALCULATE_ALL_MOVES_SM(p1, p2, field) {
    checkAirLock(p1, field);
    checkAirLock(p2, field);
    checkForecast(p1, field.getWeather());
    checkForecast(p2, field.getWeather());
    checkKlutz(p1);
    checkKlutz(p2);
    checkEvo(p1, p2);
    checkSeeds(p1, field);
    checkSeeds(p2, field);
    p1.stats[DF] = getModifiedStat(p1.rawStats[DF], p1.boosts[DF]);
    p1.stats[SD] = getModifiedStat(p1.rawStats[SD], p1.boosts[SD]);
    p1.stats[SP] = getFinalSpeedSM(p1, field.getWeather(), field.getTerrain());
    $(".p1-modified-speed").text(p1.stats[SP]);
    p2.stats[DF] = getModifiedStat(p2.rawStats[DF], p2.boosts[DF]);
    p2.stats[SD] = getModifiedStat(p2.rawStats[SD], p2.boosts[SD]);
    p2.stats[SP] = getFinalSpeedSM(p2, field.getWeather(), field.getTerrain());
    $(".p2-modified-speed").text(p2.stats[SP]);
    checkIntimidate(p1, p2);
    checkIntimidate(p2, p1);
    checkDownload(p1, p2);
    checkDownload(p2, p1);
    p1.stats[AT] = getModifiedStat(p1.rawStats[AT], p1.boosts[AT]);
    p1.stats[SA] = getModifiedStat(p1.rawStats[SA], p1.boosts[SA]);
    p2.stats[AT] = getModifiedStat(p2.rawStats[AT], p2.boosts[AT]);
    p2.stats[SA] = getModifiedStat(p2.rawStats[SA], p2.boosts[SA]);
    var side1 = field.getSide(1);
    var side2 = field.getSide(0);
    checkInfiltrator(p1, side1);
    checkInfiltrator(p2, side2);
    var results = [[],[]];
    for (var i = 0; i < 4; i++) {
        results[0][i] = GET_DAMAGE_SM(p1, p2, p1.moves[i], side1);
        results[1][i] = GET_DAMAGE_SM(p2, p1, p2.moves[i], side2);
    }
    return results;
}

function GET_DAMAGE_SM(attacker, defender, move, field) {
    var moveDescName = move.name;
    var isQuarteredByProtect = false;
    if(move.isSignatureZ){
      move.isZ = true;
      if(field.isProtect){
          isQuarteredByProtect = true;
      }
    }
    if(move.isZ && !move.isSignatureZ){
        if (move.name === "Nature Power") {
            move.zp = (field.terrain === "Electric" || field.terrain === "Grassy" || field.terrain === "Psychic" || field.terrain === "Misty") ? 175 : 160;
            move.type = field.terrain === "Electric" ? "Electric" : field.terrain === "Grassy" ? "Grass" : field.terrain === "Misty" ? "Fairy" : move.type = field.terrain === "Psychic" ? "Psychic" : "Normal";
        }
        var tempMove = move;
        //turning it into a generic single-target Z-move
        move = moves[ZMOVES_LOOKUP[tempMove.type]];
        move.bp = tempMove.zp;
        move.name = "Z-"+tempMove.name;
        move.isZ = true;
        move.category = tempMove.category;
        if (move.name.includes("Hidden Power")){
            move.type = "Normal";
        }
        else move.type = tempMove.type;
        move.isCrit = tempMove.isCrit;
        move.hits = 1;
        moveDescName = ZMOVES_LOOKUP[move.type] + " (" + move.bp + " BP)";
        if(field.isProtect){
            isQuarteredByProtect = true;
        }
    }
    var exceptions_100_fight = ["Low Kick", "Reversal", "Final Gambit"];
    var exceptions_80_fight = ["Double Kick", "Triple Kick"];
    var exceptions_75_fight = ["Counter", "Seismic Toss"];
    var exceptions_140 = ["Crush Grip", "Wring Out", "Magnitude", "Double Iron Bash"];
    var exceptions_130 = ["Pin Missile", "Power Trip", "Punishment", "Dragon Darts", "Dual Chop", "Electro Ball", "Heat Crash", 
    "Bullet Seed", "Grass Knot", "Bonemerang", "Bone Rush", "Fissure", "Icicle Spear", "Sheer Cold", "Weather Ball", "Tail Slap", "Guillotine", "Horn Drill",
    "Flail", "Return", "Frustration", "Endeavor", "Natural Gift", "Trump Card", "Stored Power", "Rock Blast", "Gear Grind", "Gyro Ball", "Heavy Slam"];
    var exceptions_120 = ["Double Hit", "Spike Cannon"];
    var exceptions_100 = ["Twineedle", "Beat Up", "Fling", "Dragon Rage", "Nature's Madness", "Night Shade", "Comet Punch", "Fury Swipes", "Sonic Boom", "Bide",
    "Super Fang", "Present", "Spit Up", "Psywave", "Mirror Coat", "Metal Burst"];
    if(move.isMax) {
        var tempMove = move;
        move = moves[MAXMOVES_LOOKUP[tempMove.type]];
        if(move.type == "Fighting" || move.type == "Poison") {
            if(tempMove.bp >= 150 || exceptions_100_fight.includes(move.name)) move.bp = 100;
            else if(tempMove.bp >= 110) move.bp = 95;
            else if(tempMove.bp >= 75) move.bp = 90;
            else if(tempMove.bp >= 65) move.bp = 85;
            else if(tempMove.bp >= 55 || exceptions_80_fight.includes(move.name)) move.bp = 80;
            else if(tempMove.bp >= 45 || exceptions_75_fight.includes(move.name)) move.bp = 75;
            else move.bp = 70;
        }
        else {
            if(tempMove.bp >= 150) move.bp = 150;
            else if(tempMove.bp >= 110 || exceptions_140.includes(move.name)) move.bp = 140;
            else if(tempMove.bp >= 75 || exceptions_130.includes(move.name)) move.bp = 130;
            else if(tempMove.bp >= 65 || exceptions_120.includes(move.name)) move.bp = 120;
            else if(tempMove.bp >= 55 || exceptions_100.includes(move.name)) move.bp = 110;
            else if(tempMove.bp >= 45) move.bp = 100;
            else move.bp = 90;
        }
        moveDescName = MAXMOVES_LOOKUP[move.type] + " (" + move.bp + " BP)";
        move.category = tempMove.category;
        move.isMax = true;
        move.isCrit = tempMove.isCrit;
        if(attacker.item == "Choice Band" || attacker.item == "Choice Specs" || attacker.item == "Choice Scarf") {
            attacker.item = "";
        }
    }
    var description = {
        "attackerName": attacker.name,
        "moveName": moveDescName,
        "defenderName": defender.name,
        "isDefenderDynamax": defender.isDynamax
    };
    if (move.bp === 0) {
        return {"damage":[0], "description":buildDescription(description)};
    }

    var defAbility = defender.ability;
    if(defAbility != "Shadow Shield" && defAbility != "Full Metal Body" && defAbility != "Prism Armor") {
        if (["Mold Breaker", "Teravolt", "Turboblaze"].indexOf(attacker.ability) !== -1) {
            defAbility = "";
            description.attackerAbility = attacker.ability;
        }
        else if(["Moongeist Beam", "Sunsteel Strike", "Photon Geyser", "Searing Sunraze Smash", "Menacing Moonraze Maelstrom", "Light That Burns the Sky"].indexOf(move.name) !== -1)
            defAbility = ""; //works as a mold breaker
    }

    var isCritical = move.isCrit && ["Battle Armor", "Shell Armor"].indexOf(defAbility) === -1;

    if (move.name === "Weather Ball") {
        move.type = field.weather.indexOf("Sun") > -1 ? "Fire"
                : field.weather.indexOf("Rain") > -1 ? "Water"
                : field.weather === "Sand" ? "Rock"
                : field.weather === "Hail" ? "Ice"
                : "Normal";
        description.weather = field.weather;
        description.moveType = move.type;
    } else if (move.name === "Judgment" && attacker.item.indexOf("Plate") !== -1) {
        move.type = getItemBoostType(attacker.item);
    } else if (move.name === "Natural Gift" && attacker.item.indexOf("Berry") !== -1) {
        var gift = getNaturalGift(attacker.item);
        move.type = gift.t;
        move.bp = gift.p;
        description.attackerItem = attacker.item;
        description.moveBP = move.bp;
        description.moveType = move.type;
    } else if (move.name === "Nature Power") {
        move.type = field.terrain === "Electric" ? "Electric" : field.terrain === "Grassy" ? "Grass" : field.terrain === "Misty" ? "Fairy" : move.type = field.terrain === "Psychic" ? "Psychic" : "Normal";
    }

    if(move.name == "Aura Wheel") {
        if(attacker.name == "Morpeko-Hangry") {
            move.type = "Dark";
        }
    }

    var isAerilate = attacker.ability === "Aerilate" && move.type === "Normal";
    var isPixilate = attacker.ability === "Pixilate" && move.type === "Normal";
    var isRefrigerate = attacker.ability === "Refrigerate" && move.type === "Normal";
    var isGalvanize = attacker.ability === "Galvanize" && move.type === "Normal";
    var isNormalize = attacker.ability === "Normalize"; //Boosts on any type
    if(!move.isZ){ //Z-Moves don't receive -ate type changes
        if (isAerilate) {
            move.type = "Flying";
        } else if (isPixilate) {
            move.type = "Fairy";
        } else if (isRefrigerate) {
            move.type = "Ice";
        } else if(isGalvanize) {
            move.type = "Electric";
        } else if (isNormalize) {
            move.type = "Normal";
            description.attackerAbility = attacker.ability;
        } else if(attacker.ability === "Liquid Voice" && move.isSound){
            move.type = "Water"
            description.attackerAbility = attacker.ability;
        }
    }

    var typeEffect1 = getMoveEffectiveness(move, defender.type1, defender.type2, attacker.ability === "Scrappy" || field.isForesight, field.isGravity);
    var typeEffect2 = defender.type2 ? getMoveEffectiveness(move, defender.type2, defender.type1, attacker.ability === "Scrappy" || field.isForesight, field.isGravity) : 1;
    var typeEffectiveness = typeEffect1 * typeEffect2;

    if (typeEffectiveness === 0) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    if ((defAbility === "Wonder Guard" && typeEffectiveness <= 1) ||
            (move.type === "Grass" && defAbility === "Sap Sipper") ||
            (move.type === "Fire" && defAbility.indexOf("Flash Fire") !== -1) ||
            (move.type === "Water" && ["Dry Skin", "Storm Drain", "Water Absorb"].indexOf(defAbility) !== -1) ||
            (move.type === "Electric" && ["Lightning Rod", "Motor Drive", "Volt Absorb"].indexOf(defAbility) !== -1) ||
            (move.type === "Ground" && !field.isGravity && defAbility === "Levitate") ||
            (move.isBullet && defAbility === "Bulletproof") ||
            (move.isSound && defAbility === "Soundproof")) {
        description.defenderAbility = defAbility;
        return {"damage":[0], "description":buildDescription(description)};
    }
    if (move.type === "Ground" && !field.isGravity && defender.item === "Air Balloon" && attacker.move != "Thousand Arrows") {
        description.defenderItem = defender.item;
        return {"damage":[0], "description":buildDescription(description)};
    }
    if ((field.weather === "Harsh Sun" && move.type === "Water") || (field.weather === "Heavy Rain" && move.type === "Fire")) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    if (move.name === "Sky Drop" &&
        ([defender.type1, defender.type2].indexOf("Flying") !== -1 ||
            defender.weight >= 200.0 || field.isGravity)) {
        return {"damage":[0], "description":buildDescription(description)};
    }
    if (move.name === "Synchronoise" &&
            [defender.type1, defender.type2].indexOf(attacker.type1) === -1 && [defender.type1, defender.type2].indexOf(attacker.type2) === -1) {
        return {"damage": [0], "description": buildDescription(description)};
    }

    description.HPEVs = defender.HPEVs + " HP";

    if (move.name === "Seismic Toss" || move.name === "Night Shade") {
        var lv = attacker.level;
        if (attacker.ability === "Parental Bond") {
            lv *= 2;
        }
        return {"damage":[lv], "description":buildDescription(description)};
    }

    if (move.hits > 1) {
        description.hits = move.hits;
    }
    var turnOrder = attacker.stats[SP] > defender.stats[SP] ? "FIRST" : "LAST";

    ////////////////////////////////
    ////////// BASE POWER //////////
    ////////////////////////////////
    var basePower;
    switch (move.name) {
        case "Payback":
            basePower = turnOrder === "LAST" ? 100 : 50;
            description.moveBP = basePower;
            break;
        case "Electro Ball":
            var r = Math.floor(attacker.stats[SP] / defender.stats[SP]);
            basePower = r >= 4 ? 150 : r >= 3 ? 120 : r >= 2 ? 80 : 60;
            description.moveBP = basePower;
            break;
        case "Gyro Ball":
            basePower = Math.min(150, Math.floor(25 * defender.stats[SP] / attacker.stats[SP]));
            description.moveBP = basePower;
            break;
        case "Punishment":
            basePower = Math.min(200, 60 + 20 * countBoosts(defender.boosts));
            description.moveBP = basePower;
            break;
        case "Low Kick":
        case "Grass Knot":
            var w = defender.weight;
            basePower = w >= 200 ? 120 : w >= 100 ? 100 : w >= 50 ? 80 : w >= 25 ? 60 : w >= 10 ? 40 : 20;
            description.moveBP = basePower;
            break;
        case "Hex":
            basePower = move.bp * (defender.status !== "Healthy" ? 2 : 1);
            description.moveBP = basePower;
            break;
        case "Brine":
            basePower = move.bp * (defender.hp/defender.maxHP <= 0.5 ? 2: 1);
            description.moveBP = basePower;
            break;
        case "Heavy Slam":
        case "Heat Crash":
            var wr = attacker.weight / defender.weight;
            basePower = wr >= 5 ? 120 : wr >= 4 ? 100 : wr >= 3 ? 80 : wr >= 2 ? 60 : 40;
            description.moveBP = basePower;
            break;
        case "Stored Power":
        case "Power Trip":
            basePower = 20 + 20 * countBoosts(attacker.boosts);
            description.moveBP = basePower;
            break;
        case "Acrobatics":
            basePower = attacker.item === "Flying Gem" || attacker.item === "" ? 110 : 55;
            description.moveBP = basePower;
            break;
        case "Wake-Up Slap":
            basePower = move.bp * (defender.status === "Asleep" ? 2 : 1);
            description.moveBP = basePower;
            break;
        case "Weather Ball":
            basePower = field.weather !== "" ? 100 : 50;
            description.moveBP = basePower;
            break;
        case "Fling":
            basePower = getFlingPower(attacker.item);
            description.moveBP = basePower;
            description.attackerItem = attacker.item;
            break;
        case "Eruption":
        case "Water Spout":
            basePower = Math.max(1, Math.floor(150 * attacker.curHP / attacker.maxHP));
            description.moveBP = basePower;
            break;
        case "Flail":
        case "Reversal":
            var p = Math.floor(48 * attacker.curHP / attacker.maxHP);
            basePower = p <= 1 ? 200 : p <= 4 ? 150 : p <= 9 ? 100 : p <= 16 ? 80 : p <= 32 ? 40 : 20;
            description.moveBP = basePower;
            break;
        case "Nature Power":
            basePower = (field.terrain === "Electric" || field.terrain === "Grassy" || field.terrain === "Psychic") ? 90 : (field.terrain === "Misty") ? 95 : 80;
            break;
        case "Water Shuriken":
            basePower = (attacker.name === "Ash-Greninja" && attacker.ability === "Battle Bond") ? 20 : 15;
            description.moveBP = basePower; 
        default:
            basePower = move.bp;
    }

    var bpMods = [];
   
    var isAttackerAura = (attacker.ability === (move.type + " Aura"));
    var isDefenderAura = defAbility === (move.type + " Aura");
    var auraActive = ($("input:checkbox[id='" + move.type.toLowerCase() + "-aura']:checked").val() != undefined);
    var auraBreak = ($("input:checkbox[id='aura-break']:checked").val() != undefined);
    
    if (auraActive && auraBreak) {
            bpMods.push(0x0C00);
            description.attackerAbility = attacker.ability;
            description.defenderAbility = defAbility;
    }

    if (!move.isZ && (isAerilate || isPixilate || isRefrigerate || isGalvanize || isNormalize)) {
        bpMods.push(0x1333);
        description.attackerAbility = attacker.ability;
    } else if ((attacker.ability === "Reckless" && move.hasRecoil) || (attacker.ability === "Iron Fist" && move.isPunch)) {
        bpMods.push(0x1333);
        description.attackerAbility = attacker.ability;
    }

    if (field.isBattery && move.category === "Special") {
        bpMods.push(0x14CD);
        description.isBattery = true;
    }

    if (field.isPowerSpot) {
        bpMods.push(0x14CD)
        description.isPowerSpot = true;
    }

    if (attacker.ability === "Sheer Force" && move.hasSecondaryEffect) {
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
    } else if (attacker.ability === "Sand Force" && field.weather === "Sand" && ["Rock","Ground","Steel"].indexOf(move.type) !== -1) {
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
        description.weather = field.weather;
    } else if (attacker.ability === "Analytic" && turnOrder !== "FIRST") {
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
    } else if (attacker.ability === "Tough Claws" && move.makesContact) {
        bpMods.push(0x14CD);
        description.attackerAbility = attacker.ability;
    }

    if (auraActive && !auraBreak) {
        bpMods.push(0x1548);
        if (isAttackerAura) {
            description.attackerAbility = attacker.ability;
        }
        if (isDefenderAura) {
            description.defenderAbility = defAbility;
        }
    }

    //If the BP before this point would trigger Technician, don't apply it
    var tempBP = pokeRound(basePower * chainMods(bpMods) / 0x1000);

    if ((attacker.ability === "Technician" && tempBP <= 60) ||
            (attacker.ability === "Flare Boost" && attacker.status === "Burned" && move.category === "Special") ||
            (attacker.ability === "Toxic Boost" && (attacker.status === "Poisoned" || attacker.status === "Badly Poisoned") && move.category === "Physical") ||
            (attacker.ability === "Mega Launcher" && move.isPulse) ||
            (attacker.ability === "Strong Jaw" && move.isBite)) {
        bpMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    }

    if (defAbility === "Heatproof" && move.type === "Fire") {
        bpMods.push(0x800);
        description.defenderAbility = defAbility;
    } else if (defAbility === "Dry Skin" && move.type === "Fire") {
        bpMods.push(0x1400);
        description.defenderAbility = defAbility;
    }

    if (getItemBoostType(attacker.item) === move.type) {
        bpMods.push(0x1333);
        description.attackerItem = attacker.item;
    } else if ((attacker.item === "Muscle Band" && move.category === "Physical") ||
            (attacker.item === "Wise Glasses" && move.category === "Special")) {
        bpMods.push(0x1199);
        description.attackerItem = attacker.item;
    } else if (((attacker.item === "Adamant Orb" && attacker.name === "Dialga") ||
            (attacker.item === "Lustrous Orb" && attacker.name === "Palkia") ||
            (attacker.item === "Griseous Orb" && attacker.name === "Giratina-O")) ||
            (attacker.item === "Soul Dew" && (attacker.name === "Latios" || attacker.name === "Latias")) &&
            (move.type === attacker.type1 || move.type === attacker.type2)) {
        bpMods.push(0x1333);
        description.attackerItem = attacker.item;
    } else if (attacker.item === move.type + " Gem") {
        bpMods.push(0x14CD);
        description.attackerItem = attacker.item;
    }

    if ((move.name === "Solar Beam" || move.name === "SolarBeam" || move.name === "Solar Blade") && ["None", "Sun", "Harsh Sun"].indexOf(field.weather) === -1) {
        bpMods.push(0x800);
        description.moveBP = move.bp / 2;
        description.weather = field.weather;
    } //technicially Me First would sandwich between these
    else if (move.name === "Knock Off" && !(defender.item === "" ||
            (defender.name === "Giratina-O" && defender.item === "Griseous Orb") ||
            (defender.name.indexOf("Arceus") !== -1 && defender.item.indexOf("Plate") !== -1))) {
        bpMods.push(0x1800);
        description.moveBP = move.bp * 1.5;
    }

    if (field.isHelpingHand) {
        bpMods.push(0x1800);
        description.isHelpingHand = true;
    }

    if ((move.name === "Facade" && ["Burned","Paralyzed","Poisoned","Badly Poisoned"].indexOf(attacker.status) !== -1) ||
            (move.name === "Brine" && defender.curHP <= defender.maxHP / 2) ||
            (move.name === "Venoshock" && (defender.status === "Poisoned" || defender.status === "Badly Poisoned"))) {
        bpMods.push(0x2000);
        description.moveBP = move.bp * 2;
    }

    //Technically Retaliate and Fusion Flare/Fusion Bolt conditions
    if (field.isGravity || (attacker.type1 !== "Flying" && attacker.type2 !== "Flying" &&
                attacker.item !== "Air Balloon" && attacker.ability !== "Levitate")) {
        var terrainMultiplier = gen > 7 ? 0x14CD : 0x1800;
        if (field.terrain === "Electric" && move.type === "Electric") {
            bpMods.push(terrainMultiplier);
            description.terrain = field.terrain;
        } else if (field.terrain === "Grassy" && move.type == "Grass") {
            bpMods.push(terrainMultiplier);
            description.terrain = field.terrain;
        } else if (field.terrain === "Psychic" && move.type == "Psychic") {
            bpMods.push(terrainMultiplier);
            description.terrain = field.terrain;
        }
    }
    if (field.isGravity || (defender.type1 !== "Flying" && defender.type2 !== "Flying" &&
            defender.item !== "Air Balloon" && defAbility !== "Levitate")) {
        if ((field.terrain === "Misty" && move.type === "Dragon") ||
           (field.terrain === "Grassy" && (move.name === "Earthquake" || move.name === "Bulldoze"))) {
            bpMods.push(0x800);
            description.terrain = field.terrain;
        }
    }

    //Technically Mud Sport/Water Sport here next

    basePower = Math.max(1, pokeRound(basePower * chainMods(bpMods) / 0x1000));
    basePower = attacker.isChild ? basePower / 4 : basePower;

    ////////////////////////////////
    ////////// (SP)ATTACK //////////
    ////////////////////////////////

    var necrozmaMove = move.name == "Photon Geyser" || move.name == "Light That Burns the Sky";
    var attack;
    var attackSource = move.name === "Foul Play" ? defender : attacker;
    var usesPhysicalAttackStat = move.category === "Physical" || (necrozmaMove && attacker.stats[AT] >= attacker.stats[SA]);
    var usesDefenseStat = move.name === "Body Press";
    var attackStat = usesDefenseStat ? DF : usesPhysicalAttackStat ? AT : SA;
    description.attackEVs = attacker.evs[attackStat] +
            (NATURES[attacker.nature][0] === attackStat ? "+" : NATURES[attacker.nature][1] === attackStat ? "-" : "") + " " +
            toSmogonStat(attackStat);
    if (attackSource.boosts[attackStat] === 0 || (isCritical && attackSource.boosts[attackStat] < 0)) {
        attack = attackSource.rawStats[attackStat];
    } else if (defAbility === "Unaware") {
        attack = attackSource.rawStats[attackStat];
        description.defenderAbility = defAbility;
    } else {
        attack = attackSource.stats[attackStat];
        description.attackBoost = attackSource.boosts[attackStat];
    }

    // unlike all other attack modifiers, Hustle gets applied directly
    if (attacker.ability === "Hustle" && move.category === "Physical") {
        attack = pokeRound(attack * 3/2);
        description.attackerAbility = attacker.ability;
    }

    var atMods = [];

    //Slow Start also halves damage with special Z-moves
    if ((attacker.ability === "Slow Start" && (move.category === "Physical" || (move.category === "Special" && move.isZ))) ||
        (attacker.ability === "Defeatist" && attacker.curHP <= attacker.maxHP / 2)) {
        atMods.push(0x800);
        description.attackerAbility = attacker.ability;
    }
    if (attacker.ability === "Flower Gift" && field.weather.indexOf("Sun") > -1 && move.category === "Physical") {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
        description.weather = field.weather;
    }
    if ((attacker.ability === "Guts" && attacker.status !== "Healthy" && move.category === "Physical") ||
            (attacker.ability === "Overgrow" && attacker.curHP <= attacker.maxHP / 3 && move.type === "Grass") ||
            (attacker.ability === "Blaze" && attacker.curHP <= attacker.maxHP / 3 && move.type === "Fire") ||
            (attacker.ability === "Torrent" && attacker.curHP <= attacker.maxHP / 3 && move.type === "Water") ||
            (attacker.ability === "Swarm" && attacker.curHP <= attacker.maxHP / 3 && move.type === "Bug")) {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    } else if (attacker.ability === "Flash Fire (activated)" && move.type === "Fire") {
        atMods.push(0x1800);
        description.attackerAbility = "Flash Fire";
    } else if (attacker.ability === "Steelworker" && move.type === "Steel") {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    } else if (attacker.ability === "Solar Power" && field.weather.indexOf("Sun") > -1 && move.category === "Special") {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
        description.weather = field.weather;
    }
    //Technically Plus/Minus occur ^ as well

    //Technically Stakeout goes here as well
    if ((attacker.ability === "Water Bubble" && move.type === "Water") ||
       ((attacker.ability === "Huge Power" || attacker.ability === "Pure Power") && move.category === "Physical")) {
        atMods.push(0x2000);
        description.attackerAbility = attacker.ability;
    }
    if ((defAbility === "Thick Fat" && (move.type === "Fire" || move.type === "Ice")) || (defAbility === "Water Bubble" && move.type === "Fire")) {
        atMods.push(0x800);
        description.defenderAbility = defAbility;
    }

    if ((attacker.item === "Thick Club" && (attacker.name === "Cubone" || attacker.name === "Marowak" || attacker.name === "Marowak-Alola") && move.category === "Physical") ||
            (attacker.item === "Deep Sea Tooth" && attacker.name === "Clamperl" && move.category === "Special") ||
            (attacker.item === "Light Ball" && attacker.name === "Pikachu")) {
        atMods.push(0x2000);
        description.attackerItem = attacker.item;
    } else if ((attacker.item === "Choice Band" && move.category === "Physical") ||
            (attacker.item === "Choice Specs" && move.category === "Special")) {
        atMods.push(0x1800);
        description.attackerItem = attacker.item;
    }
    if(attacker.ability === "Gorilla Tactics" && move.category === "Physical") {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    }

    attack = Math.max(1, pokeRound(attack * chainMods(atMods) / 0x1000));

    ////////////////////////////////
    ///////// (SP)DEFENSE //////////
    ////////////////////////////////
    var defense;
    var hitsPhysical = move.category === "Physical" || move.dealsPhysicalDamage || (necrozmaMove && attacker.stats[AT] >= attacker.stats[SA]);
    var defenseStat = hitsPhysical ? DF : SD;
    description.defenseEVs = defender.evs[defenseStat] +
            (NATURES[defender.nature][0] === defenseStat ? "+" : NATURES[defender.nature][1] === defenseStat ? "-" : "") + " " +
            toSmogonStat(defenseStat);
    if (defender.boosts[defenseStat] === 0 || (isCritical && defender.boosts[defenseStat] > 0) || move.ignoresDefenseBoosts) {
        defense = defender.rawStats[defenseStat];
    } else if (attacker.ability === "Unaware") {
        defense = defender.rawStats[defenseStat];
        description.attackerAbility = attacker.ability;
    } else {
        defense = defender.stats[defenseStat];
        description.defenseBoost = defender.boosts[defenseStat];
    }

    // unlike all other defense modifiers, Sandstorm SpD boost gets applied directly
    if (field.weather === "Sand" && (defender.type1 === "Rock" || defender.type2 === "Rock") && !hitsPhysical) {
        defense = pokeRound(defense * 3/2);
        description.weather = field.weather;
    }

    var dfMods = [];
    if (defAbility === "Flower Gift" && field.weather.indexOf("Sun") > -1 && !hitsPhysical) {
        dfMods.push(0x1800);
        description.defenderAbility = defAbility;
        description.weather = field.weather;
    }
    if ((defAbility === "Marvel Scale" && defender.status !== "Healthy" && hitsPhysical) ||
        (defAbility === "Grass Pelt" && terrain === "Grassy" && hitsPhysical)) {
        dfMods.push(0x1800);
        description.defenderAbility = defAbility;
    } else if (defAbility === "Fur Coat" && hitsPhysical) {
        dfMods.push(0x2000);
        description.defenderAbility = defAbility;
    }

    if ((defender.item === "Assault Vest" && !hitsPhysical) ||
        defender.item === "Eviolite") {
        dfMods.push(0x1800);
        description.defenderItem = defender.item;
    } else if ((defender.item === "Deep Sea Scale" && defender.name === "Clamperl" && !hitsPhysical) ||
               (defender.item === "Metal Powder" && defender.name === "Ditto")) {
        dfMods.push(0x2000);
        description.defenderItem = defender.item;
    }

    defense = Math.max(1, pokeRound(defense * chainMods(dfMods) / 0x1000));

    ////////////////////////////////
    //////////// DAMAGE ////////////
    ////////////////////////////////
    var baseDamage = Math.floor(Math.floor((Math.floor((2 * attacker.level) / 5 + 2) * basePower * attack) / defense) / 50 + 2);
    if (field.format !== "Singles" && move.isSpread) {
        baseDamage = pokeRound(baseDamage * 0xC00 / 0x1000);
    }
    //Parental Bond modifier should apply here

    if ((field.weather.indexOf("Sun") > -1 && move.type === "Fire") || (field.weather.indexOf("Rain") > -1 && move.type === "Water")) {
        baseDamage = pokeRound(baseDamage * 0x1800 / 0x1000);
        description.weather = field.weather;
    //Need to move Strong Winds check out; I strongly suspect it's a hard modifier to type effectiveness
    } else if ((field.weather === "Sun" && move.type === "Water") || (field.weather === "Rain" && move.type === "Fire") ||
               (field.weather === "Strong Winds" && (defender.type1 === "Flying" || defender.type2 === "Flying") &&
               typeChart[move.type]["Flying"] > 1)) {
        baseDamage = pokeRound(baseDamage * 0x800 / 0x1000);
        description.weather = field.weather;
    }
    if (isCritical) {
        baseDamage = Math.floor(baseDamage * 1.5);
        description.isCritical = isCritical;
    }
    // the random factor is applied between the crit mod and the stab mod, so don't apply anything below this until we're inside the loop
    var stabMod = 0x1000;
    if (move.type === attacker.type1 || move.type === attacker.type2) {
        if (attacker.ability === "Adaptability") {
            stabMod = 0x2000;
            description.attackerAbility = attacker.ability;
        } else {
            stabMod = 0x1800;
        }
    } else if (attacker.ability === "Protean" || attacker.ability == "Libero") {
        stabMod = 0x1800;
        description.attackerAbility = attacker.ability;
    }
    var applyBurn = (attacker.status === "Burned" && move.category === "Physical" && attacker.ability !== "Guts" && !move.ignoresBurn);
    description.isBurned = applyBurn;
    var finalMods = [];
    if (field.isReflect && move.category === "Physical" && !isCritical) {
        finalMods.push(field.format !== "Singles" ? 0xAAC : 0x800);
        description.isReflect = true;
    } else if (field.isLightScreen && move.category === "Special" && !isCritical) {
        finalMods.push(field.format !== "Singles" ? 0xAAC : 0x800);
        description.isLightScreen = true;
    }
    if (attacker.ability === "Neuroforce" && typeEffectiveness > 1) {
        finalMods.push(0x1400);
        description.attackerAbility = attacker.ability;
    }
    if (attacker.ability === "Sniper" && isCritical) {
        finalMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    }
    if (attacker.ability === "Tinted Lens" && typeEffectiveness < 1) {
        finalMods.push(0x2000);
        description.attackerAbility = attacker.ability;
    }
    if ((move.name === "Dynamax Cannon" || move.name === "Behemoth Blade" || move.name === "Behemoth Bash") && defender.isDynamax) {
        finalMods.push(0x2000);
    }
    if ((defAbility === "Multiscale" || defAbility == "Shadow Shield") && defender.curHP === defender.maxHP) {
        finalMods.push(0x800);
        description.defenderAbility = defAbility;
    }
    if (defAbility === "Fluffy" && move.makesContact) {
        finalMods.push(0x800);
        description.defenderAbility = defAbility;
    }
    if (defAbility === "Punk Rock" && move.isSound) {
        finalMods.push(0x800);
        description.defenderAbility = defAbility;
    }
    if(attacker.ability == "Punk Rock" && move.isSound) {
        finalMods.push(0x14CC);
        description.attackerAbility = attacker.ability;
    }
    if (field.isFriendGuard) {
        finalMods.push(0xC00);
        description.isFriendGuard = true;
    }
    if ((defAbility === "Solid Rock" || defAbility === "Filter" || defAbility === "Prism Armor") && typeEffectiveness > 1) {
        finalMods.push(0xC00);
        description.defenderAbility = defAbility;
    }
    if (defAbility === "Fluffy" && move.type === "Fire") {
        finalMods.push(0x2000);
        description.defenderAbility = defAbility;
    }
    if (attacker.item === "Expert Belt" && typeEffectiveness > 1) {
        finalMods.push(0x1333);
        description.attackerItem = attacker.item;
    } else if (attacker.item === "Life Orb") {
        finalMods.push(0x14CC);
        description.attackerItem = attacker.item;
    }
    if (getBerryResistType(defender.item) === move.type && (typeEffectiveness > 1 || move.type === "Normal") &&
            attacker.ability !== "Unnerve") {
        finalMods.push(0x800);
        description.defenderItem = defender.item;
    }
    var finalMod = chainMods(finalMods);

    var damage = [], pbDamage = [];
    var child, childDamage, j;
    if (attacker.ability === "Parental Bond" && move.hits === 1 && (field.format === "Singles" || !move.isSpread)) {
        child = JSON.parse(JSON.stringify(attacker));
        child.ability = '';
        child.isChild = true;
        if (move.name === 'Power-Up Punch') {
            child.boosts[AT]++;
            child.stats[AT] = getModifiedStat(child.rawStats[AT], child.boosts[AT]);
        }
        childDamage = GET_DAMAGE_SM(child, defender, move, field).damage;
        description.attackerAbility = attacker.ability;
    }

    for (var i = 0; i < 16; i++) {
        damage[i] = Math.floor(baseDamage * (85 + i) / 100);
        damage[i] = pokeRound(damage[i] * stabMod / 0x1000);
        damage[i] = Math.floor(damage[i] * typeEffectiveness);
        if (applyBurn) {
            damage[i] = Math.floor(damage[i] / 2);
        }
        damage[i] = pokeRound(damage[i] * finalMod / 0x1000);
        if(isQuarteredByProtect) {
            damage[i] = pokeRound(damage[i] * 0x400 / 0x1000);
            description.isQuarteredByProtect = true;
        }
        damage[i] = Math.max(1, damage[i]);
        if (attacker.ability === "Parental Bond" && move.hits === 1 && (field.format === "Singles" || !move.isSpread)) {
            for (j = 0; j < 16; j++) {
                pbDamage[(16 * i) + j] = damage[i] + childDamage[j];
            }
        }
    }
    // Return a bit more info if this is a Parental Bond usage.
    if (pbDamage.length) {
        return {
            "damage": pbDamage.sort(numericSort),
            "parentDamage": damage,
            "childDamage": childDamage,
            "description": buildDescription(description)
        };
    }

    return {"damage": pbDamage.length ? pbDamage.sort(numericSort) : damage, "description": buildDescription(description)};
}

function numericSort(a, b) {
    return a - b;
}

function buildDescription(description) {
    var output = "";
    if (description.attackBoost) {
        if (description.attackBoost > 0) {
            output += "+";
        }
        output += description.attackBoost + " ";
    }
    output = appendIfSet(output, description.attackEVs);
    output = appendIfSet(output, description.attackerItem);
    output = appendIfSet(output, description.attackerAbility);

    if (description.isBurned) {
        output += "burned ";
    }
    output += description.attackerName + " ";
    if (description.isHelpingHand) {
        output += "Helping Hand ";
    }
    if (description.isPowerSpot) {
        output += "Power Spot ";
    }
    if (description.isBattery) {
        output += "Battery ";
    }
    output += description.moveName + " ";
    if (description.moveBP && description.moveType) {
        output += "(" + description.moveBP + " BP " + description.moveType + ") ";
    } else if (description.moveBP) {
        output += "(" + description.moveBP + " BP) ";
    } else if (description.moveType) {
        output += "(" + description.moveType + ") ";
    }
    if (description.hits) {
        output += "(" + description.hits + " hits) ";
    }
    output += "vs. ";
    if (description.defenseBoost) {
        if (description.defenseBoost > 0) {
            output += "+";
        }
        output += description.defenseBoost + " ";
    }
    output = appendIfSet(output, description.HPEVs);
    if (description.defenseEVs) {
        output += " / " + description.defenseEVs + " ";
    }
    output = appendIfSet(output, description.defenderItem);
    output = appendIfSet(output, description.defenderAbility);
    if (description.isDefenderDynamax) {
        output += "Dynamaxed ";
    }
    output += description.defenderName;
    if (description.weather) {
        output += " in " + description.weather;
    } else if (description.terrain) {
        output += " in " + description.terrain + " Terrain";
    }
    if (description.isReflect) {
        output += " through Reflect";
    } else if (description.isLightScreen) {
        output += " through Light Screen";
    }
    if (description.isCritical) {
        output += " on a critical hit";
    }
    if (description.isFriendGuard) {
        output += " with Friend Guard";
    }
    if(description.isQuarteredByProtect) {
        output += " through Protect";
    }

    return output;
}

function appendIfSet(str, toAppend) {
    if (toAppend) {
        return str + toAppend + " ";
    }
    return str;
}

function toSmogonStat(stat) {
    return stat === AT ? "Atk"
            : stat === DF ? "Def"
            : stat === SA ? "SpA"
            : stat === SD ? "SpD"
            : stat === SP ? "Spe"
            : "wtf";
}

function chainMods(mods) {
    var M = 0x1000;
    for(var i = 0; i < mods.length; i++) {
        if(mods[i] !== 0x1000) {
            M = Math.round((M * mods[i]) / 0x1000);
        }
    }
    return M;
}

function getMoveEffectiveness(move, type, otherType, isGhostRevealed, isGravity) {
    if (isGhostRevealed && type === "Ghost" && (move.type === "Normal" || move.type === "Fighting")) {
        return 1;
    } else if (isGravity && type === "Flying" && move.type === "Ground") {
        return 1;
    } else if(!isGravity && type== "Flying" && move.type === "Ground" && move.name == "Thousand Arrows") {
        return 1;
    } else if(!isGravity && otherType == "Flying" && move.type === "Ground" && move.name == "Thousand Arrows") {
        return 1;
    } else if (move.name === "Freeze-Dry" && type === "Water") {
        return 2;
    } else if (move.name === "Flying Press") {
        return typeChart["Fighting"][type] * typeChart["Flying"][type];
    } else {
        return typeChart[move.type][type];
    }
}

function getModifiedStat(stat, mod) {
    return mod > 0 ? Math.floor(stat * (2 + mod) / 2)
            : mod < 0 ? Math.floor(stat * 2 / (2 - mod))
            : stat;
}

function getFinalSpeedSM(pokemon, weather, terrain) {
    var speed = getModifiedStat(pokemon.rawStats[SP], pokemon.boosts[SP]);
    var otherSpeedMods = 1;
    if (pokemon.item === "Choice Scarf") {
        otherSpeedMods *= 1.5;
    } else if (pokemon.item === "Macho Brace" || pokemon.item === "Iron Ball") {
        otherSpeedMods *= 0.5;
    }
    if (pokemon.ability === "Quick Feet" && pokemon.status !== "Healthy")
    {
        otherSpeedMods *= 1.5;
    }
    if (pokemon.ability === "Slow Start")
    {
        otherSpeedMods *= 0.5;
    }
    if ((pokemon.ability === "Chlorophyll" && weather.indexOf("Sun") > -1) ||
            (pokemon.ability === "Sand Rush" && weather === "Sand") ||
            (pokemon.ability === "Swift Swim" && weather.indexOf("Rain") > -1) ||
            (pokemon.ability === "Slush Rush" && weather.indexOf("Hail") > -1) ||
            (pokemon.ability === "Surge Surfer" && terrain === "Electric") ||
            (pokemon.ability === "Unburden" && pokemon.item === "") ||
            (pokemon.name === "Ditto" && pokemon.item === "Quick Powder")) {
        otherSpeedMods *= 2;
    }
    speed = pokeRound(speed * otherSpeedMods);
    if (pokemon.status === "Paralyzed" && pokemon.ability !== "Quick Feet") {
        speed = Math.floor(speed / 2);
    }
    if (speed > 10000) { speed = 10000; }

    return speed;
}

function checkAirLock(pokemon, field) {
    if (pokemon.ability === "Air Lock" || pokemon.ability === "Cloud Nine") {
        field.clearWeather();
    }
}
function checkForecast(pokemon, weather) {
    if (pokemon.ability === "Forecast" && pokemon.name === "Castform") {
        if (weather.indexOf("Sun") > -1) {
            pokemon.type1 = "Fire";
        } else if (weather.indexOf("Rain") > -1) {
            pokemon.type1 = "Water";
        } else if (weather === "Hail") {
            pokemon.type1 = "Ice";
        } else {
            pokemon.type1 = "Normal";
        }
        pokemon.type2 = "";
    }
}
function checkKlutz(pokemon) {
    if (pokemon.ability === "Klutz") {
        pokemon.item = "";
    }
}

function checkSeeds(pokemon, field){
    if(pokemon.item ==="Psychic Seed" || pokemon.item === "Misty Seed"){
        pokemon.boosts[SD] = Math.min(6, pokemon.boosts[SD] + 1);
    }
    else if(pokemon.item ==="Electric Seed" || pokemon.item === "Grassy Seed"){
        pokemon.boosts[DF] = Math.min(6, pokemon.boosts[DF] + 1);
    }
}
function checkIntimidate(source, target) {
    if (source.ability === "Intimidate") {
        if (target.ability === "Contrary" || target.ability === "Defiant") {
            target.boosts[AT] = Math.min(6, target.boosts[AT] + 1);
        } else if (["Clear Body", "White Smoke", "Hyper Cutter", "Full Metal Body"].indexOf(target.ability) !== -1) {
            // no effect
        } else if (target.ability === "Simple") {
            target.boosts[AT] = Math.max(-6, target.boosts[AT] - 2);
        } else {
            target.boosts[AT] = Math.max(-6, target.boosts[AT] - 1);
        }
    }
}
function checkEvo(p1, p2){
    if($('#evoL').prop("checked")){
        p1.boosts[AT] = Math.min(6, p1.boosts[AT] + 2);
        p1.boosts[DF] = Math.min(6, p1.boosts[DF] + 2);
        p1.boosts[SA] = Math.min(6, p1.boosts[SA] + 2);
        p1.boosts[SD] = Math.min(6, p1.boosts[SD] + 2);
        p1.boosts[SP] = Math.min(6, p1.boosts[SP] + 2);
    }
    if($('#evoR').prop("checked")){
        p2.boosts[AT] = Math.min(6, p2.boosts[AT] + 2);
        p2.boosts[DF] = Math.min(6, p2.boosts[DF] + 2);
        p2.boosts[SA] = Math.min(6, p2.boosts[SA] + 2);
        p2.boosts[SD] = Math.min(6, p2.boosts[SD] + 2);
        p2.boosts[SP] = Math.min(6, p2.boosts[SP] + 2);
    }

    if($('#clangL').prop("checked")){
        p1.boosts[SA] = Math.min(6, p1.boosts[SA] + 2);
        p1.boosts[SD] = Math.min(6, p1.boosts[SD] + 2);
        p1.boosts[SP] = Math.min(6, p1.boosts[SP] + 2);
    }
    if($('#clangR').prop("checked")){
        p2.boosts[SA] = Math.min(6, p2.boosts[SA] + 2);
        p2.boosts[SD] = Math.min(6, p2.boosts[SD] + 2);
        p2.boosts[SP] = Math.min(6, p2.boosts[SP] + 2);
    }

}

function checkDownload(source, target) {
    if (source.ability === "Download") {
        if (target.stats[SD] <= target.stats[DF]) {
            source.boosts[SA] = Math.min(6, source.boosts[SA] + 1);
        } else {
            source.boosts[AT] = Math.min(6, source.boosts[AT] + 1);
        }
    }
}
function checkInfiltrator(attacker, affectedSide) {
    if (attacker.ability === "Infiltrator") {
        affectedSide.isReflect = false;
        affectedSide.isLightScreen = false;
    }
}

function countBoosts(boosts) {
    var sum = 0;
    for (var i = 0; i < STATS.length; i++) {
        if (boosts[STATS[i]] > 0) {
            sum += boosts[STATS[i]];
        }
    }
    return sum;
}

// GameFreak rounds DOWN on .5
function pokeRound(num) {
    return (num % 1 > 0.5) ? Math.ceil(num) : Math.floor(num);
}
