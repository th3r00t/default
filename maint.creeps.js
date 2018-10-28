var maintcreeps = {
    run: function(creep){
        var c_count =  Game.creeps.length;
        var creep_count = 0;
        var harvesters = [];
        var upgrader_test = RegExp(/Upgrader/)
        var harvester_test = RegExp(/Harvester/)
        var builder_test = RegExp(/Builder/)
        for (var name in Game.creeps){
            creep_count++;
            var number_of_harvesters
            var number_of_upgraders
            var number_of_builders
            
        }
        
        if (creep_count < 6){
            var creep_num = creep_count + 1;
            if(creep_count < 2){
                Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester'+creep_num );
            }
            if (creep_count >= 2 && creep_count < 4){
                Game.spawns['Spawn1'].spawnCreep( [WORK,CARRY,MOVE], 'Upgrader'+creep_num);
            }
            if (creep_count >= 4){
                Game.spawns['Spawn1'].spawnCreep( [WORK,CARRY,MOVE,MOVE], 'Builder'+creep_num);
            }
        }
        else{
            console.log('Found Creeps!');
        }
    },
    check: function(){
        console.log('running check function');
    },
    setMemory: function(){
        var upgrader_test = RegExp(/Upgrader/)
        var harvester_test = RegExp(/Harvester/)
        var builder_test = RegExp(/Builder/)
        
        for (name in Game.creeps){
            if(upgrader_test.test(name)){
                Game.creeps[name].memory.role = 'upgrader';
            }
            else if(harvester_test.test(name)){
                Game.creeps[name].memory.role = 'harvester';
            }
            else if(builder_test.test(name)){
                Game.creeps[name].memory.role = 'builder';
            }

        }
    },
    wipeMemory: function(unit_type){
        console.log('Wiping Memory')
        var condition = '/'+unit_type+'/'
        console.log(condition)
        var testcondition = RegExp(condition)
        for (name in Game.creeps){
            if(testcondition.test(name)){
                Game.creeps[name].memory.role = 'none';
            }
        }
    }
}
module.exports = maintcreeps;