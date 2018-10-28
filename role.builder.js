var gather = require('gather');
var rolebuild = {
    run: function(creep){
        if (creep.carry.energy < creep.carryCapacity && creep.memory.working !== true){
            gather.run(creep);
        }
        if (creep.carry.energy === creep.carryCapacity && creep.memory.working !== true){
            creep.memory.working = true;
        }
        if (creep.memory.working === true){
            const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (target) {if(creep.build(target) == ERR_NOT_IN_RANGE) {creep.moveTo(target);}}
        }
        if (creep.carry.energy === 0 && creep.memory.working === true){
            creep.memory.working = false;
        }
    }
}
module.exports = rolebuild;