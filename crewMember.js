class CrewMember {
  constructor(pos, spaceship) {
    this.position = pos
    if (spaceship) {
      this.currentShip = spaceship
    } else {
      this.currentShip = 'Looking for a Rig'
    }
  }

  chargePhasers() {
    if(this.currentShip !== 'Looking for a Rig' && this.position === 'Gunner') {
      if (this.currentShip.phasersCharge === 'uncharged') {
        this.currentShip.phasersCharge = 'charged!'
      } else {
        this.currentShip.phasersCharge = 'uncharged'
      }
    } else {
      return 'had no effect'
    }
  }

  engageWarpDrive() {
    if(this.currentShip !== 'Looking for a Rig' && this.position === 'Pilot') {
      if (this.currentShip.warpDrive === 'disengaged') {
        this.currentShip.warpDrive = 'engaged!'
      } else {
        this.currentShip.warpDrive = 'disengaged'
      }
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if(this.currentShip !== 'Looking for a Rig' && this.position === 'Defender') {
      if (this.currentShip.cloaked) {
        this.currentShip.cloaked = false
      } else {
        this.currentShip.cloaked = true
      }
    } else {
      return 'had no effect'
    }
  }
}
