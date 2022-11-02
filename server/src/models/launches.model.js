const launches=new Map()
let lastestFlightNumber=100
const launch={
    flightNumber:100,
    mission:'Kepler Exploration X',
    rocket:'Explorer IS1',
    launchDate:new Date('December 27, 2030'),
    destination:'Kepler-442 b',
    customer:['ZTM','NASA'],
    upcoming:true,
    success:true,
}

launches.set(launch.flightNumber,launch)

function getAllLaunches(){
    return Array.from(launches.values())
}
function addNewLaunch(launch){
    lastestFlightNumber++
    launches.set(
        lastestFlightNumber,
        Object.assign(launch,{
            success:true,
            upcoming:true,
            customers:['Zero to mastery','NASA'],
            flightNumber:lastestFlightNumber,
        })
    )
}
function existWithLaunchId(launchId){
    return launches.has(launchId)
}
function abortLaunchById(launchId){
    const aborted=launches.get(launchId)
    aborted.upcoming=false
    aborted.success=false
    return aborted
}
module.exports={
    getAllLaunches,
    addNewLaunch,
    existWithLaunchId,
    abortLaunchById,
    launches
}