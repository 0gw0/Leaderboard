const app = Vue.createApp({
    data() {
        return {
            pointsInput: 1,
            nameInput: "",
            isInputValid: true,
            statusMsg: "",
            counter: 0,
            people: [
                { name: "Chi", points: 15 },
                { name: "Sophie", points: 14 },
                { name: "Vicky", points: 12 },
                { name: "Hyin Ki", points: 9 },
                { name: "Jess Myn", points: 7 },
                { name: "Ivyn", points: 5 },
                { name: "Rachel", points: 3 },
                { name: "Jun Ning", points: 1 },
            ],
        };
    },
    computed: {
        statusClass() {
            return {
                valid: this.isInputValid,
                invalid: !this.isInputValid,
            };
        },
    },

    watch: {
        counter() {
            if (this.isInputValid) {
                this.statusMsg = "Score has been updated!";
            } else {
                this.statusMsg = "Please provide a valid input!";
            }
            setTimeout(() => {
                this.statusMsg = "";
            }, 3000);
        },
    },
    methods: {
        addPoints() {
            // input validation
            if (this.pointsInput > 0 && this.nameInput !== "") {
                // Looping through and updating points in data base
                for (person of this.people) {
                    if (person.name == this.nameInput) {
                        person.points += this.pointsInput;
                    }
                }

                // reset input fields
                this.pointsInput = 1;
                this.nameInput = "";

                // Reorder rankings in dsc order based on updated score
                this.people.sort((a, b) => {
                    return b.points - a.points;
                });
                this.counter++;
                this.isInputValid = true;
            } else {
                this.counter--;
                this.isInputValid = false;
            } 

        },
    },
});

const rotated = document.getElementById('rotated');
rotated.style.transform = 'rotate(-135deg)';

app.mount("#leaderboard");
