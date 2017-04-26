class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    if(crew.length) {
      this.docked = false
      this.crew = crew.map((member) => {
        member.currentShip = this
        return member
      })
    } else {
      this.docked = true
    }
    this.phasersCharge = 'uncharged'
  }
}
