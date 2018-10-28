var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity && Game.creeps['Upgrader1'].memory.active_job !=='upgrading') {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
        else {
            Game.creeps['Upgrader1'].memory.active_job = "upgrading";
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
                if(creep.carry.energy === 0){
                    Game.creeps['Upgrader1'].memory.active_job = "none";
                }
        }
	}
};

module.exports = roleUpgrader;