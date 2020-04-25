// input field validation
var bounds = {
    "level":[0,100],
    "base":[1,255],
    "evs":[0,252],
    "ivs":[0,31],
    "dvs":[0,15],
    "move-bp":[0,999]
};
for (var bounded in bounds) {
    if (bounds.hasOwnProperty(bounded)) {
        attachValidation(bounded, bounds[bounded][0], bounds[bounded][1]);
    }
}
function attachValidation(clazz, min, max) {
    $("." + clazz).keyup(function() {
        validate($(this), min, max);
    });
}
function validate(obj, min, max) {
    obj.val(Math.max(min, Math.min(max, ~~obj.val())));
}

// auto-calc stats and current HP on change
$(".level").keyup(function() {
    var poke = $(this).closest(".poke-info");
    calcHP(poke);
    calcStats(poke);
});

$(".max").bind("keyup change", function() {
    var poke = $(this).closest(".poke-info");
    calcHP(poke);
    calcStats(poke);
});
$(".nature").bind("keyup change", function() {
    calcStats($(this).closest(".poke-info"));
});
$(".hp .base, .hp .evs, .hp .ivs").bind("keyup change", function() {
    calcHP($(this).closest(".poke-info"));
});
$(".at .base, .at .evs, .at .ivs").bind("keyup change", function() {
    calcStat($(this).closest(".poke-info"), 'at');
});
$(".df .base, .df .evs, .df .ivs").bind("keyup change", function() {
    calcStat($(this).closest(".poke-info"), 'df');
});
$(".sa .base, .sa .evs, .sa .ivs").bind("keyup change", function() {
    calcStat($(this).closest(".poke-info"), 'sa');
});
$(".sd .base, .sd .evs, .sd .ivs").bind("keyup change", function() {
    calcStat($(this).closest(".poke-info"), 'sd');
});
$(".sp .base, .sp .evs, .sp .ivs").bind("keyup change", function() {
    calcStat($(this).closest(".poke-info"), 'sp');
});
$(".evs").bind("keyup change", function() {
    calcEvTotal($(this).closest(".poke-info"));
});
$(".sl .base").keyup(function() {
    calcStat($(this).closest(".poke-info"), 'sl');
});
$(".at .dvs").keyup(function() {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'at');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});
$(".df .dvs").keyup(function() {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'df');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});
$(".sa .dvs").keyup(function() {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'sa');
    poke.find(".sd .dvs").val($(this).val());
    calcStat(poke, 'sd');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});
$(".sp .dvs").keyup(function() {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'sp');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});
$(".sl .dvs").keyup(function() {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'sl');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});

function getHPDVs(poke) {
    return (~~poke.find(".at .dvs").val() % 2) * 8 +
            (~~poke.find(".df .dvs").val() % 2) * 4 +
            (~~poke.find(gen === 1 ? ".sl .dvs" : ".sa .dvs").val() % 2) * 2 +
            (~~poke.find(".sp .dvs").val() % 2);
}

function calcStats(poke) {
    for (var i = 0; i < STATS.length; i++) {
        calcStat(poke, STATS[i]);
    }
}

function calcEvTotal(poke) {
    var total = 0;
    poke.find('.evs').each(function (idx, elt) { total += 1*$(elt).val(); });

    var newClass = total > 510 ? 'overLimit' : 'underLimit';

    var left = 510-total;

    var newClassLeft = left < 0 ? 'overLimit' : 'underLimit';

    var evTotal = poke.find('.ev-total');
    evTotal.removeClass('underLimit overLimit').text(total).addClass(newClass);

    var evLeft = poke.find('.ev-left');
    evLeft.removeClass('underLimit overLimit').text(left).addClass(newClassLeft);
}

function calcCurrentHP(poke, max, percent) {
    var current = Math.ceil(percent * max / 100);
    poke.find(".current-hp").val(current);
}
function calcPercentHP(poke, max, current) {
    var percent = Math.floor(100 * current / max);
    poke.find(".percent-hp").val(percent);
}
$(".current-hp").keyup(function() {
    var max = $(this).parent().children(".max-hp").text();
    validate($(this), 0, max);
    var current = $(this).val();
    calcPercentHP($(this).parent(), max, current);
});
$(".percent-hp").keyup(function() {
    var max = $(this).parent().children(".max-hp").text();
    validate($(this), 0, 100);
    var percent = $(this).val();
    calcCurrentHP($(this).parent(), max, percent);
});

var lastAura = [false, false, false]
$(".ability").bind("keyup change", function() {
    $(this).closest(".poke-info").find(".move-hits").val($(this).val() === 'Skill Link' ? 5 : 3);
    autoSetAura()
    autoSetTerrain()
});

$("#p1 .ability").bind("keyup change", function() {
    autosetWeather($(this).val(), 0);
});
$("#p2 .ability").bind("keyup change", function() {
    autosetWeather($(this).val(), 1);
});

var lastTerrain = "noterrain";
var lastManualWeather = "";
var lastAutoWeather = ["", ""];
function autoSetAura()
{
    var ability1 = $("#p1 .ability").val()
    var ability2 = $("#p2 .ability").val()
    if(ability1 == "Fairy Aura" || ability2 == "Fairy Aura" )
        $("input:checkbox[id='fairy-aura']").prop("checked", true)
    else
        $("input:checkbox[id='fairy-aura']").prop("checked", lastAura[0])
    if(ability1 == "Dark Aura" || ability2 == "Dark Aura")
        $("input:checkbox[id='dark-aura']").prop("checked", true)
    else
        $("input:checkbox[id='dark-aura']").prop("checked", lastAura[1])
    if(ability1 == "Aura Break" || ability2 == "Aura Break" )
        $("input:checkbox[id='aura-break']").prop("checked", true)
    else
        $("input:checkbox[id='aura-break']").prop("checked", lastAura[2])
}
function autoSetTerrain()
{
    var ability1 = $("#p1 .ability").val()
    var ability2 = $("#p2 .ability").val()
    if((ability1 == "Electric Surge" || ability2 == "Electric Surge")){
        $("input:radio[id='electric']").prop("checked", true)
        lastTerrain = 'electric';
    }
    else if((ability1 == "Grassy Surge" || ability2 == "Grassy Surge")){
        $("input:radio[id='grassy']").prop("checked", true)
        lastTerrain = 'grassy';
    }
    else if((ability1 == "Misty Surge" || ability2 == "Misty Surge")){
        $("input:radio[id='misty']").prop("checked", true)
        lastTerrain = 'misty';
    }
    else if((ability1 == "Psychic Surge" || ability2 == "Psychic Surge")){
        $("input:radio[id='psychic']").prop("checked", true)
        lastTerrain = 'psychic';
    }
    else
        $("input:radio[id='noterrain']").prop("checked", true)
}

function autosetWeather(ability, i) {
    var currentWeather = $("input:radio[name='weather']:checked").val();
    if (lastAutoWeather.indexOf(currentWeather) === -1 || currentWeather === "") {
        lastManualWeather = currentWeather;
        lastAutoWeather[1-i] = "";
    }

    var primalWeather = ["Harsh Sun", "Heavy Rain"];
    var autoWeatherAbilities = {
            "Drought": "Sun",
            "Drizzle": "Rain",
            "Sand Stream": "Sand",
            "Snow Warning": "Hail",
            "Desolate Land": "Harsh Sun",
            "Primordial Sea": "Heavy Rain",
            "Delta Stream": "Strong Winds"
        };
    var newWeather;

    if (ability in autoWeatherAbilities) {
        lastAutoWeather[i] = autoWeatherAbilities[ability];
        if (currentWeather === "Strong Winds") {
            if (lastAutoWeather.indexOf("Strong Winds") === -1) {
                newWeather = lastAutoWeather[i];
            }
        } else if (primalWeather.indexOf(currentWeather) > -1) {
            if (lastAutoWeather[i] === "Strong Winds" || primalWeather.indexOf(lastAutoWeather[i]) > -1) {
                newWeather = lastAutoWeather[i];
            } else if (primalWeather.indexOf(lastAutoWeather[1-i]) > -1) {
                newWeather = lastAutoWeather[1-i];
            } else {
                newWeather = lastAutoWeather[i];
            }
        } else {
            newWeather = lastAutoWeather[i];
        }
    } else {
        lastAutoWeather[i] = "";
        newWeather = lastAutoWeather[1-i] !== "" ? lastAutoWeather[1-i] : lastManualWeather;
    }

    if (newWeather === "Strong Winds" || primalWeather.indexOf(newWeather) > -1) {
        //$("input:radio[name='weather']").prop("disabled", true);
        //edited out by squirrelboy1225 for doubles!
        $("input:radio[name='weather'][value='" + newWeather + "']").prop("disabled", false);
    } else if (typeof newWeather != "undefined") {
        for (var k = 0; k < $("input:radio[name='weather']").length; k++) {
            var val = $("input:radio[name='weather']")[k].value;
            if (primalWeather.indexOf(val) === -1 && val !== "Strong Winds") {
                $("input:radio[name='weather']")[k].disabled = false;
            } else {
                //$("input:radio[name='weather']")[k].disabled = true;
                //edited out by squirrelboy1225 for doubles!
            }
        }
    }
    $("input:radio[name='weather'][value='" + newWeather + "']").prop("checked", true);
}

$("#p1 .item").bind("keyup change", function() {
    autosetStatus("#p1", $(this).val());
});
$("#p2 .item").bind("keyup change", function() {
    autosetStatus("#p2", $(this).val());
});

var lastManualStatus = {"#p1":"Healthy", "#p2":"Healthy"};
var lastAutoStatus = {"#p1":"Healthy", "#p2":"Healthy"};
function autosetStatus(p, item) {
    var currentStatus = $(p + " .status").val();
    if (currentStatus !== lastAutoStatus[p]) {
        lastManualStatus[p] = currentStatus;
    }
    if (item === "Flame Orb") {
        lastAutoStatus[p] = "Burned";
        $(p + " .status").val("Burned");
        $(p + " .status").change();
    } else if (item === "Toxic Orb") {
        lastAutoStatus[p] = "Badly Poisoned";
        $(p + " .status").val("Badly Poisoned");
        $(p + " .status").change();
    } else {
        lastAutoStatus[p] = "Healthy";
        if (currentStatus !== lastManualStatus[p]) {
            $(p + " .status").val(lastManualStatus[p]);
            $(p + " .status").change();
        }
    }
}

$(".status").bind("keyup change", function() {
    if ($(this).val() === 'Badly Poisoned') {
        $(this).parent().children(".toxic-counter").show();
    } else {
        $(this).parent().children(".toxic-counter").hide();
    }
});

// auto-update move details on select
$(".move-selector").change(function() {
    var moveName = $(this).val();
    var move = moves[moveName] || moves['(No Move)'];
    var moveGroupObj = $(this).parent();
    moveGroupObj.children(".move-bp").val(move.bp);
    moveGroupObj.children(".move-type").val(move.type);
    moveGroupObj.children(".move-cat").val(move.category);
    moveGroupObj.children(".move-crit").prop("checked", move.alwaysCrit === true);
    if (move.isMultiHit) {
        moveGroupObj.children(".move-hits").show();
        moveGroupObj.children(".move-hits").val($(this).closest(".poke-info").find(".ability").val() === 'Skill Link' ? 5 : 3);
    } else {
        moveGroupObj.children(".move-hits").hide();
    }
    moveGroupObj.children(".move-z").prop("checked", false);
});

// auto-update set details on select
$(".set-selector").change(function() {
    var fullSetName = $(this).val();
    var pokemonName, setName;
    var DOU = !$('#douswitch').is(":checked");
    pokemonName = fullSetName.substring(0, fullSetName.indexOf(" ("));
    setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));
    var pokemon = pokedex[pokemonName];
    if (pokemon) {
        var pokeObj = $(this).closest(".poke-info");

        // If the sticky move was on this side, reset it
        if (stickyMoves.getSelectedSide() === pokeObj.prop("id")) {
            stickyMoves.clearStickyMove();
        }

        // Reset selections for Dynamax and Max Moves
        pokeObj.find(".max").prop("checked", false);
        pokeObj.find(".move-max").prop("checked", false);
        pokeObj.find(".move-crit").prop("checked", false);

        pokeObj.find(".type1").val(pokemon.t1);
        pokeObj.find(".type2").val(pokemon.t2);
        pokeObj.find(".hp .base").val(pokemon.bs.hp);
        var i;
        for (i = 0; i < STATS.length; i++) {
            pokeObj.find("." + STATS[i] + " .base").val(pokemon.bs[STATS[i]]);
        }
        pokeObj.find(".weight").val(pokemon.w);
        pokeObj.find(".boost").val(0);
        pokeObj.find(".percent-hp").val(100);
        pokeObj.find(".status").val("Healthy");
        $(".status").change();
        var moveObj;
        var abilityObj = pokeObj.find(".ability");
        var itemObj = pokeObj.find(".item");
        if (pokemonName in setdex && setName in setdex[pokemonName]) {
            var set = setdex[pokemonName][setName];
            if(DOU) pokeObj.find(".level").val(100);
            else pokeObj.find(".level").val(set.level);
            pokeObj.find(".hp .evs").val((set.evs && typeof set.evs.hp !== "undefined") ? set.evs.hp : 0);
            pokeObj.find(".hp .ivs").val((set.ivs && typeof set.ivs.hp !== "undefined") ? set.ivs.hp : 31);
            pokeObj.find(".hp .dvs").val((set.dvs && typeof set.dvs.hp !== "undefined") ? set.dvs.hp : 15);
            for (i = 0; i < STATS.length; i++) {
                pokeObj.find("." + STATS[i] + " .evs").val((set.evs && typeof set.evs[STATS[i]] !== "undefined") ? set.evs[STATS[i]] : 0);
                pokeObj.find("." + STATS[i] + " .ivs").val((set.ivs && typeof set.ivs[STATS[i]] !== "undefined") ? set.ivs[STATS[i]] : 31);
                pokeObj.find("." + STATS[i] + " .dvs").val((set.dvs && typeof set.dvs[STATS[i]] !== "undefined") ? set.dvs[STATS[i]] : 15);
            }
            setSelectValueIfValid(pokeObj.find(".nature"), set.nature, "Hardy");
            setSelectValueIfValid(abilityObj, pokemon.ab ? pokemon.ab : set.ability, "");
            setSelectValueIfValid(itemObj, set.item, "");
            for (i = 0; i < 4; i++) {
                moveObj = pokeObj.find(".move" + (i+1) + " select.move-selector");
                setSelectValueIfValid(moveObj, set.moves[i], "(No Move)");
                moveObj.change();
            }
        } else {
            if(DOU) pokeObj.find(".level").val(100);
            else pokeObj.find(".level").val(50);
            pokeObj.find(".hp .evs").val(0);
            pokeObj.find(".hp .ivs").val(31);
            pokeObj.find(".hp .dvs").val(15);
            for (i = 0; i < STATS.length; i++) {
                pokeObj.find("." + STATS[i] + " .evs").val(0);
                pokeObj.find("." + STATS[i] + " .ivs").val(31);
                pokeObj.find("." + STATS[i] + " .dvs").val(15);
            }
            pokeObj.find(".nature").val("Hardy");
            setSelectValueIfValid(abilityObj, pokemon.ab, "");
            itemObj.val("");
            for (i = 0; i < 4; i++) {
                moveObj = pokeObj.find(".move" + (i+1) + " select.move-selector");
                moveObj.val("(No Move)");
                moveObj.change();
            }
        }
        var formeObj = $(this).siblings().find(".forme").parent();
        itemObj.prop("disabled", false);
        if (pokemon.formes) {
            showFormes(formeObj, setName, pokemonName, pokemon);
        } else {
            formeObj.hide();
        }
        calcHP(pokeObj);
        calcStats(pokeObj);
        calcEvTotal(pokeObj);
        abilityObj.change();
        itemObj.change();
    }
});

function showFormes(formeObj, setName, pokemonName, pokemon) {
    var defaultForme = 0;

    if (setName !== 'Blank Set') {
        var set = setdex[pokemonName][setName];

        // Repurpose the previous filtering code to provide the "different default" logic
        if ((set.item.indexOf('ite') !== -1 && set.item.indexOf('ite Y') === -1) ||
            (pokemonName === "Groudon" && set.item.indexOf("Red Orb") !== -1) ||
            (pokemonName === "Kyogre" && set.item.indexOf("Blue Orb") !== -1) ||
            (pokemonName === "Meloetta" && set.moves.indexOf("Relic Song") !== -1) ||
            (pokemonName === "Rayquaza" && set.moves.indexOf("Dragon Ascent") !== -1)) {
            defaultForme = 1;
        } else if (set.item.indexOf('ite Y') !== -1) {
            defaultForme = 2;
        }
    }

    var formeOptions = getSelectOptions(pokemon.formes, false, defaultForme);
    formeObj.children("select").find("option").remove().end().append(formeOptions).change();
    formeObj.show();
}

function setSelectValueIfValid(select, value, fallback) {
    select.val(select.children('option[value="' + value + '"]').length !== 0 ? value : fallback);
}

$(".forme").change(function() {
    var altForme = pokedex[$(this).val()],
        container = $(this).closest(".info-group").siblings(),
        fullSetName = container.find(".select2-chosen").first().text(),
        pokemonName = fullSetName.substring(0, fullSetName.indexOf(" (")),
        setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));

    $(this).parent().siblings().find(".type1").val(altForme.t1);
    $(this).parent().siblings().find(".type2").val(typeof altForme.t2 != "undefined" ? altForme.t2 : "");
    $(this).parent().siblings().find(".weight").val(altForme.w);
    var STATS_WITH_HP = ["hp", "at", "df","sa","sd","sp"];
    for (var i = 0; i <STATS_WITH_HP.length; i++) {
        var baseStat = container.find("." + STATS_WITH_HP[i]).find(".base");
        baseStat.val(altForme.bs[STATS_WITH_HP[i]]);
        baseStat.keyup();
    }

    if (abilities.indexOf(altForme.ab) > -1) {
        container.find(".ability").val(altForme.ab);
    } else if (setName !== "Blank Set" && abilities.indexOf(setdex[pokemonName][setName].ability) > -1) {
        container.find(".ability").val(setdex[pokemonName][setName].ability);
    } else {
        container.find(".ability").val("");
    }
    container.find(".ability").keyup();

    if ($(this).val().indexOf("Mega") === 0 && $(this).val() !== "Mega Rayquaza") {
        container.find(".item").val("").keyup();
        //container.find(".item").prop("disabled", true);
        //edited out by squirrelboy1225 for doubles!
    } else {
        container.find(".item").prop("disabled", false);
    }

    if (pokemonName === "Darmanitan") {
        container.find(".percent-hp").val($(this).val() === "Darmanitan-Z" ? "50" : "100").keyup();
    }
});

function getTerrainEffects() {
    var className = $(this).prop("className");
    className = className.substring(0, className.indexOf(" "));
    switch (className) {
        case "type1":
        case "type2":
        case "ability":
        case "item":
            var id = $(this).closest(".poke-info").prop("id");
            var terrainValue = $("input:checkbox[name='terrain']:checked").val();
            if (terrainValue === "Electric") {
                $("#" + id).find("[value='Asleep']").prop("disabled", isGrounded($("#" + id)));
            } else if (terrainValue === "Misty") {
                $("#" + id).find(".status").prop("disabled", isGrounded($("#" + id)));
            }
            break;
        default:
            $("input:checkbox[name='terrain']").not(this).prop("checked", false);
            if ($(this).prop("checked") && $(this).val() === "Electric") {
                $("#p1").find("[value='Asleep']").prop("disabled", isGrounded($("#p1")));
                $("#p2").find("[value='Asleep']").prop("disabled", isGrounded($("#p2")));
            } else if ($(this).prop("checked") && $(this).val() === "Misty") {
                $("#p1").find(".status").prop("disabled", isGrounded($("#p1")));
                $("#p2").find(".status").prop("disabled", isGrounded($("#p2")));
            } else {
                $("#p1").find("[value='Asleep']").prop("disabled", false);
                $("#p1").find(".status").prop("disabled", false);
                $("#p2").find("[value='Asleep']").prop("disabled", false);
                $("#p2").find(".status").prop("disabled", false);
            }
            break;
    }
}

function isGrounded(pokeInfo) {
    return $("#gravity").prop("checked") || (pokeInfo.find(".type1").val() !== "Flying" && pokeInfo.find(".type2").val() !== "Flying" &&
            pokeInfo.find(".ability").val() !== "Levitate" && pokeInfo.find(".item").val() !== "Air Balloon");
}

var resultLocations = [[],[]];
for (var i = 0; i < 4; i++) {
    resultLocations[0].push({
        "move":"#resultMoveL" + (i+1),
        "damage":"#resultDamageL" + (i+1)
    });
    resultLocations[1].push({
        "move":"#resultMoveR" + (i+1),
        "damage":"#resultDamageR" + (i+1)
    });
}

var damageResults;
function calculate() {
    var p1 = new Pokemon($("#p1"));
    var p2 = new Pokemon($("#p2"));
    var field = new Field();
    damageResults = calculateAllMoves(p1, p2, field);
    var result, minDamage, maxDamage, minPercent, maxPercent, percentText;
    var highestMaxPercent = -1;
    var bestResult;
    for (var i = 0; i < 4; i++) {
        result = damageResults[0][i];
        minDamage = result.damage[0] * p1.moves[i].hits;
        maxDamage = result.damage[result.damage.length-1] * p1.moves[i].hits;
        minPercent = Math.floor(minDamage * 1000 / p2.maxHP) / 10;
        maxPercent = Math.floor(maxDamage * 1000 / p2.maxHP) / 10;
        result.damageText = minDamage + "-" + maxDamage + " (" + minPercent + " - " + maxPercent + "%)";
          result.koChanceText = p1.moves[i].bp === 0 ? '<a href="https://www.youtube.com/watch?v=7u6kMjWt1Rk&feature=youtu.be">you wanna dance with me?!</a>'
                  : getKOChanceText(result.damage, p1.moves[i], p2, field.getSide(1), p1.ability === 'Bad Dreams');
        if(p1.moves[i].isMLG){
            result.koChanceText = "<a href = 'https://www.youtube.com/watch?v=iD92h-M474g'>it's a one-hit KO!</a>"; //dank memes
        }
        $(resultLocations[0][i].move + " + label").text(p1.moves[i].name.replace("Hidden Power", "HP"));
        $(resultLocations[0][i].damage).text(minPercent + " - " + maxPercent + "%");
        if (maxPercent > highestMaxPercent) {
            highestMaxPercent = maxPercent;
            bestResult = $(resultLocations[0][i].move);
        }

        result = damageResults[1][i];
        minDamage = result.damage[0] * p2.moves[i].hits;
        maxDamage = result.damage[result.damage.length-1] * p2.moves[i].hits;
        minPercent = Math.floor(minDamage * 1000 / p1.maxHP) / 10;
        maxPercent = Math.floor(maxDamage * 1000 / p1.maxHP) / 10;
        result.damageText = minDamage + "-" + maxDamage + " (" + minPercent + " - " + maxPercent + "%)";
          result.koChanceText = p2.moves[i].bp === 0 ? '<a href="https://www.youtube.com/watch?v=7u6kMjWt1Rk&feature=youtu.be">you wanna dance with me?!</a>'
                : getKOChanceText(result.damage, p2.moves[i], p1, field.getSide(0), p2.ability === 'Bad Dreams');
        if(p2.moves[i].isMLG){
            result.koChanceText = "<a href = 'https://www.youtube.com/watch?v=iD92h-M474g'>it's a one-hit KO!</a>";
        }
        $(resultLocations[1][i].move + " + label").text(p2.moves[i].name.replace("Hidden Power", "HP"));
        $(resultLocations[1][i].damage).text(minPercent + " - " + maxPercent + "%");
        if (maxPercent > highestMaxPercent) {
            highestMaxPercent = maxPercent;
            bestResult = $(resultLocations[1][i].move);
        }
    }
    if ($('.locked-move').length) {
        bestResult = $('.locked-move');
    } else {
        stickyMoves.setSelectedMove(bestResult.prop("id"));
    }
    bestResult.prop("checked", true);
    bestResult.change();
    $("#resultHeaderL").text(p1.name + "'s Moves (select one to show detailed results)");
    $("#resultHeaderR").text(p2.name + "'s Moves (select one to show detailed results)");
}

$(".result-move").change(function() {
    if (damageResults) {
        var result = findDamageResult($(this));
        if (result) {
            $("#mainResult").html(result.description + ": " + result.damageText + " -- " + result.koChanceText);
            if (result.parentDamage) {
                $("#damageValues").text("(First hit: " + result.parentDamage.join(", ") +
                    "; Second hit: " + result.childDamage.join(", ") + ")");
            } else {
                $("#damageValues").text("(" + result.damage.join(", ") + ")");
            }
        }
    }
});

// Need to close over "lastClicked", so we'll do it the old-fashioned way to avoid
// needlessly polluting the global namespace.
var stickyMoves = (function () {
    var lastClicked = 'resultMoveL1';
    $(".result-move").click(function () {
        if (this.id === lastClicked) {
            $(this).toggleClass("locked-move");
        } else {
            $('.locked-move').removeClass('locked-move');
        }
        lastClicked = this.id;
    });

    return {
        clearStickyMove: function () {
            lastClicked = null;
            $('.locked-move').removeClass('locked-move');
        },
        setSelectedMove: function (slot) {
            lastClicked = slot;
        },
        getSelectedSide: function () {
            if (lastClicked) {
                if (lastClicked.indexOf('resultMoveL') !== -1) {
                    return 'p1';
                } else if (lastClicked.indexOf('resultMoveR') !== -1) {
                    return 'p2';
                }
            }
            return null;
        }
    };
})();

function findDamageResult(resultMoveObj) {
    var selector = "#" + resultMoveObj.attr("id");
    for (var i = 0; i < resultLocations.length; i++) {
        for (var j = 0; j < resultLocations[i].length; j++) {
            if (resultLocations[i][j].move === selector) {
                return damageResults[i][j];
            }
        }
    }
}

function Pokemon(pokeInfo) {
    var setName = pokeInfo.find("input.set-selector").val();
    if (setName.indexOf("(") === -1) {
        this.name = setName;
    } else {
        var pokemonName = setName.substring(0, setName.indexOf(" ("));
        this.name = (pokedex[pokemonName].formes) ? pokeInfo.find(".forme").val() : pokemonName;
    }
    this.type1 = pokeInfo.find(".type1").val();
    this.type2 = pokeInfo.find(".type2").val();
    this.level = ~~pokeInfo.find(".level").val();
    this.maxHP = ~~pokeInfo.find(".hp .total").text();
    this.curHP = ~~pokeInfo.find(".current-hp").val();
    this.HPEVs = ~~pokeInfo.find(".hp .evs").val();
    this.isDynamax = pokeInfo.find(".max").prop("checked");
    this.rawStats = {};
    this.boosts = {};
    this.stats = {};
    this.evs = {};
    for (var i = 0; i < STATS.length; i++) {
        this.rawStats[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .total").text();
        this.boosts[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .boost").val();
        this.evs[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .evs").val();
    }
    this.nature = pokeInfo.find(".nature").val();
    this.ability = pokeInfo.find(".ability").val();
    this.item = pokeInfo.find(".item").val();
    this.status = pokeInfo.find(".status").val();
    this.toxicCounter = this.status === 'Badly Poisoned' ? ~~pokeInfo.find(".toxic-counter").val() : 0;
    this.moves = [
        getMoveDetails(pokeInfo.find(".move1")),
        getMoveDetails(pokeInfo.find(".move2")),
        getMoveDetails(pokeInfo.find(".move3")),
        getMoveDetails(pokeInfo.find(".move4"))
    ];
    this.weight = +pokeInfo.find(".weight").val();
}

function getMoveDetails(moveInfo) {
    var moveName = moveInfo.find("select.move-selector").val();
    var defaultDetails = moves[moveName];
    return $.extend({}, defaultDetails, {
        name: moveName,
        bp: ~~moveInfo.find(".move-bp").val(),
        type: moveInfo.find(".move-type").val(),
        category: moveInfo.find(".move-cat").val(),
        isCrit: moveInfo.find(".move-crit").prop("checked"),
        isZ: moveInfo.find(".move-z").prop("checked"),
        isMax: moveInfo.find(".move-max").prop("checked"),
        hits: (defaultDetails.isMultiHit && !moveInfo.find(".move-z").prop("checked")) ? ~~moveInfo.find(".move-hits").val() : (defaultDetails.isTwoHit && !moveInfo.find(".move-z").prop("checked")) ? 2 : 1
    });
}

function Field() {
    var format = $("input:radio[name='format']:checked").val();
    var isGravity = $("#gravity").prop("checked");
    var isSR = [$("#srL").prop("checked"), $("#srR").prop("checked")];
    var isProtect = [$("#protectL").prop("checked"), $("#protectR").prop("checked")];
    var weather;
    var spikes;
    if (gen === 2) {
        spikes = [$("#gscSpikesL").prop("checked") ? 1 : 0, $("#gscSpikesR").prop("checked") ? 1 : 0];
        weather = $("input:radio[name='gscWeather']:checked").val();
    } else {
        weather = $("input:radio[name='weather']:checked").val();
        spikes = [~~$("input:radio[name='spikesL']:checked").val(), ~~$("input:radio[name='spikesR']:checked").val()];
    }
    var terrain = ($("input:radio[name='terrain']:checked").val()) ? $("input:radio[name='terrain']:checked").val() : "";
    var isReflect = [$("#reflectL").prop("checked"), $("#reflectR").prop("checked")];
    var isLightScreen = [$("#lightScreenL").prop("checked"), $("#lightScreenR").prop("checked")];
    var isForesight = [$("#foresightL").prop("checked"), $("#foresightR").prop("checked")];
    var isHelpingHand = [$("#helpingHandR").prop("checked"), $("#helpingHandL").prop("checked")]; // affects attacks against opposite side
    var isFriendGuard = [$("#friendGuardL").prop("checked"), $("#friendGuardR").prop("checked")];
    var isBattery = [$("#batteryR").prop("checked"), $("#batteryL").prop("checked")];
    var isPowerSpot = [$("#powerSpotR").prop("checked"), $("#powerSpotL").prop("checked")]; // affects attacks against opposite side

    this.getWeather = function() {
        return weather;
    };
    this.getTerrain = function() {
        return terrain;
    };
    this.clearWeather = function() {
        weather = "";
    };
    this.getSide = function(i) {
        return new Side(format, terrain, weather, isGravity, isSR[i], spikes[i], isReflect[i], isLightScreen[i], isForesight[i], isHelpingHand[i], isFriendGuard[i], isBattery[i], isProtect[i], isPowerSpot[i]);
    };
}

function Side(format, terrain, weather, isGravity, isSR, spikes, isReflect, isLightScreen, isForesight, isHelpingHand, isFriendGuard, isBattery, isProtect, isPowerSpot) {
    this.format = format;
    this.terrain = terrain;
    this.weather = weather;
    this.isGravity = isGravity;
    this.isSR = isSR;
    this.spikes = spikes;
    this.isReflect = isReflect;
    this.isLightScreen = isLightScreen;
    this.isForesight = isForesight;
    this.isHelpingHand = isHelpingHand;
    this.isFriendGuard = isFriendGuard;
    this.isBattery = isBattery;
    this.isProtect = isProtect;
    this.isPowerSpot = isPowerSpot;
}

var gen, pokedex, setdex, typeChart, moves, abilities, items, STATS, calculateAllMoves, calcHP, calcStat;

$(".gen").change(function () {
    gen = ~~$(this).val();
    switch (gen) {
        case 1:
            pokedex = POKEDEX_RBY;
            setdex = SETDEX_RBY;
            typeChart = TYPE_CHART_RBY;
            moves = MOVES_RBY;
            items = [];
            abilities = [];
            STATS = STATS_RBY;
            calculateAllMoves = CALCULATE_ALL_MOVES_RBY;
            calcHP = CALC_HP_RBY;
            calcStat = CALC_STAT_RBY;
            break;
        case 2:
            pokedex = POKEDEX_GSC;
            setdex = SETDEX_GSC;
            typeChart = TYPE_CHART_GSC;
            moves = MOVES_GSC;
            items = ITEMS_GSC;
            abilities = [];
            STATS = STATS_GSC;
            calculateAllMoves = CALCULATE_ALL_MOVES_GSC;
            calcHP = CALC_HP_RBY;
            calcStat = CALC_STAT_RBY;
            break;
        case 3:
            pokedex = POKEDEX_ADV;
            setdex = SETDEX_ADV;
            typeChart = TYPE_CHART_GSC;
            moves = MOVES_ADV;
            items = ITEMS_ADV;
            abilities = ABILITIES_ADV;
            STATS = STATS_GSC;
            calculateAllMoves = CALCULATE_ALL_MOVES_ADV;
            calcHP = CALC_HP_ADV;
            calcStat = CALC_STAT_ADV;
            break;
        case 4:
            pokedex = POKEDEX_DPP;
            setdex = SETDEX_DPP;
            typeChart = TYPE_CHART_GSC;
            moves = MOVES_DPP;
            items = ITEMS_DPP;
            abilities = ABILITIES_DPP;
            STATS = STATS_GSC;
            calculateAllMoves = CALCULATE_ALL_MOVES_DPP;
            calcHP = CALC_HP_ADV;
            calcStat = CALC_STAT_ADV;
            break;
        case 5:
            pokedex = POKEDEX_BW;
            setdex = SETDEX_BW;
            typeChart = TYPE_CHART_GSC;
            moves = MOVES_BW;
            items = ITEMS_BW;
            abilities = ABILITIES_BW;
            STATS = STATS_GSC;
            calculateAllMoves = CALCULATE_ALL_MOVES_BW;
            calcHP = CALC_HP_ADV;
            calcStat = CALC_STAT_ADV;
            break;
        case 6:
            pokedex = POKEDEX_XY;
            setdex = SETDEX_XY;
            typeChart = TYPE_CHART_XY;
            moves = MOVES_XY;
            items = ITEMS_XY;
            abilities = ABILITIES_XY;
            STATS = STATS_GSC;
            calculateAllMoves = CALCULATE_ALL_MOVES_XY;
            calcHP = CALC_HP_ADV;
            calcStat = CALC_STAT_ADV;
            break;
        case 7:
            pokedex = POKEDEX_SM;
            setdex = SETDEX_SM;
            typeChart = TYPE_CHART_XY;
            moves = MOVES_SM;
            items = ITEMS_SM;
            abilities = ABILITIES_SM;
            STATS = STATS_GSC;
            calculateAllMoves = CALCULATE_ALL_MOVES_SM;
            calcHP = CALC_HP_ADV;
            calcStat = CALC_STAT_ADV;
            break;
        case 8:
            pokedex = POKEDEX_SS;
            setdex = SETDEX_SS;
            typeChart = TYPE_CHART_XY;
            moves = MOVES_SS;
            items = ITEMS_SS;
            abilities = ABILITIES_SS;
            STATS = STATS_GSC;
            calculateAllMoves = CALCULATE_ALL_MOVES_SM;
            calcHP = CALC_HP_ADV;
            calcStat = CALC_STAT_ADV;
            break;
    }
    clearField();
    $(".gen-specific.g" + gen).show();
    $(".gen-specific").not(".g" + gen).hide();
    var typeOptions = getSelectOptions(Object.keys(typeChart));
    $("select.type1, select.move-type").find("option").remove().end().append(typeOptions);
    $("select.type2").find("option").remove().end().append("<option value=\"\">(none)</option>" + typeOptions);
    var moveOptions = getSelectOptions(Object.keys(moves), true);
    $("select.move-selector").find("option").remove().end().append(moveOptions);
    var abilityOptions = getSelectOptions(abilities, true);
    $("select.ability").find("option").remove().end().append("<option value=\"\">(other)</option>" + abilityOptions);
    var itemOptions = getSelectOptions(items, true);
    $("select.item").find("option").remove().end().append("<option value=\"\">(none)</option>" + itemOptions);

    $(".set-selector").val(getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3].id);
    $(".set-selector").change();
});

function clearField() {
    $("#doubles").prop("checked", true);
    $("#clear").prop("checked", true);
    $("#gscClear").prop("checked", true);
    $("#gravity").prop("checked", false);
    $("#srL").prop("checked", false);
    $("#srR").prop("checked", false);
    $("#spikesL0").prop("checked", true);
    $("#spikesR0").prop("checked", true);
    $("#gscSpikesL").prop("checked", false);
    $("#gscSpikesR").prop("checked", false);
    $("#reflectL").prop("checked", false);
    $("#reflectR").prop("checked", false);
    $("#lightScreenL").prop("checked", false);
    $("#lightScreenR").prop("checked", false);
    $("#foresightL").prop("checked", false);
    $("#foresightR").prop("checked", false);
    $("#helpingHandL").prop("checked", false);
    $("#helpingHandR").prop("checked", false);
    $("#friendGuardL").prop("checked", false);
    $("#friendGuardR").prop("checked", false);
}

function getSetOptions() {
    var pokeNames, index;
    pokeNames = Object.keys(pokedex);
    index = pokeNames.length;
    while (index--) {
        if (pokedex[pokeNames[index]].isAlternateForme) {
            pokeNames.splice(index, 1);
        }
    }
    pokeNames.sort();
    index = pokeNames.length;
    while(index--){ //forcing alolan forms to show first
        if(pokeNames[index].includes("-Alola")){
            var temp = pokeNames[index];
            pokeNames.splice(index, 1); //deleting alolan entry
            var regularForm = temp.substring(0, temp.indexOf("-Alola"));
            var regularIndex = pokeNames.indexOf(regularForm);
            pokeNames.splice(regularIndex, 0, temp); //re-inserting it right before non-alolan entry
        }
    }
    var setOptions = [];
    var idNum = 0;
    for (var i = 0; i < pokeNames.length; i++) {
        var pokeName = pokeNames[i];
        setOptions.push({
            pokemon: pokeName,
            text: pokeName
        });
        if (pokeName in setdex) {
            var setNames = Object.keys(setdex[pokeName]);
            for (var j = 0; j < setNames.length; j++) {
                var setName = setNames[j];
                setOptions.push({
                    pokemon: pokeName,
                    set: setName,
                    text: pokeName + " (" + setName + ")",
                    id: pokeName + " (" + setName + ")"
                });
            }
        }
        setOptions.push({
            pokemon: pokeName,
            set: "Blank Set",
            text: pokeName + " (Blank Set)",
            id: pokeName + " (Blank Set)"
        });
    }
    return setOptions;
}

function getSelectOptions(arr, sort, defaultIdx) {
    if (sort) {
        arr.sort();
    }
    var r = '';
    // Zero is of course falsy too, but this is mostly to coerce undefined.
    if (!defaultIdx) {
        defaultIdx = 0;
    }
    for (var i = 0; i < arr.length; i++) {
        if (i === defaultIdx) {
            r += '<option value="' + arr[i] + '" selected="selected">' + arr[i] + '</option>';
        } else {
            r += '<option value="' + arr[i] + '">' + arr[i] + '</option>';
        }
    }
    return r;
}

$(document).ready(function() {
    $("#gen8").prop("checked", true);
    $("#gen8").change();
    $(".terrain-trigger").bind("change keyup", getTerrainEffects);
    $(".calc-trigger").bind("change keyup", calculate);
    $(".set-selector").select2({
        formatResult: function(object) {
            return object.set ? ("&nbsp;&nbsp;&nbsp;" + object.set) : ("<b>" + object.text + "</b>");
        },
        query: function(query) {
            var setOptions = getSetOptions();
            var pageSize = 30;
            var results = [];
            for (var i = 0; i < setOptions.length; i++) {
                var pokeName = setOptions[i].pokemon.toUpperCase();
                if (!query.term || pokeName.indexOf(query.term.toUpperCase()) === 0) {
                    results.push(setOptions[i]);
                }
            }
            query.callback({
                results: results.slice((query.page - 1) * pageSize, query.page * pageSize),
                more: results.length >= query.page * pageSize
            });
        },
        initSelection: function(element, callback) {
            var data = getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3];
            callback(data);
        }
    });
    $(".move-selector").select2({
        dropdownAutoWidth:true,
        matcher: function(term, text) {
            // 2nd condition is for Hidden Power
            return text.toUpperCase().indexOf(term.toUpperCase()) === 0 || text.toUpperCase().indexOf(" " + term.toUpperCase()) >= 0;
        }
    });
    $(".set-selector").val(getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3].id);
    $(".set-selector").change();
});
