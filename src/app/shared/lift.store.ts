export class Workout {
    name: string;
    timestamp: Date;
    lifts: Lift[];
}

class Lift {
    name: string;
    sets: Set[];
}

class Set {
    reps: number;
    weight: number;
    weightType: string
}

export class WorkoutStore {
    workout: Workout;
    weightTypes = [
        "Pounds"
    ]
    liftTypes = [
        "Dumbbell Shoulder Press",
        "Dumbbell Bench Press",
        "Curls",
        "Push Ups",
        "Pull Ups",
        "Squats",
        "Deadlifts",
        "Kettlebell Upright Row",
        "Kettlebell Deadlifts",
        "Dumbbell One Arm Row"
    ]

    constructor() {
        this.workout = {
            name: "New Workout",
            timestamp: new Date(),
            lifts: [{
                name: this.liftTypes[0],
                sets: [{
                    reps: 0,
                    weight: 0,
                    weightType: this.weightTypes[0]
                }]
            }]
        }
        
        console.log('before')
        console.log(this.workout)
    }

    plusSet(key) {
        this.workout.lifts[key].sets.push({
            reps: 0,
            weight: 0,
            weightType: this.weightTypes[0]
        });
    }

    minusSet(key) {
        this.workout.lifts[key].sets.pop()
    }

    plusLift() {        
        this.workout.lifts.push({
            name: this.liftTypes[0],
            sets: [{
                reps: 0,
                weight: 0,
                weightType: this.weightTypes[0]
            }]
        })
        
        console.log('after')
        console.log(this.workout)
    }

    minusLift() {
        this.workout.lifts.pop()
    }

    reset() {
        this.workout = {
            name: "New Workout",
            timestamp: new Date(),
            lifts: [{
                name: this.liftTypes[0],
                sets: [{
                    reps: 0,
                    weight: 0,
                    weightType: this.weightTypes[0]
                }]
            }]
        }
    }
}