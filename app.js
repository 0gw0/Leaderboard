const app = Vue.createApp({
    data() {
        return {
            pointsInput: 1,
            nameInput: "",
            isInputValid: true,
            statusMsg: "",
            counter: 0,
            people: [],
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
                const rotated = document.getElementById('rotated');
                rotated.style.transform = 'rotate(-135deg)';
                
            } else {
                this.statusMsg = "Please provide a valid input!";
            }
            setTimeout(() => {
                this.statusMsg = "";
            }, 3000);
        },
    },
    methods: {
        async addPoints() {
          // Input validation
          if (this.nameInput !== "") {
            try {
              // Send a POST request to add points to the person in the database
              const response = await fetch("api/add.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: this.nameInput,
                  points: this.pointsInput,
                }),
              });
    
              if (response.ok) {
                // Reset input fields
                this.pointsInput = 1;
                this.nameInput = "";
    
                // Reorder rankings in descending order based on updated score
                this.fetchAllPeople(); // Fetch updated data from the API
                this.counter++;
                this.isInputValid = true;
              } else {
                this.counter--;
                this.isInputValid = false;
              }
            } catch (error) {
              console.error("Error adding points:", error);
            }
          } else {
            this.counter--;
            this.isInputValid = false;
          }
        console.log("addPoints")
        },
        fetchAllPeople() {
            console.log("fetchAllPeople - start");
            let api_endpoint_url = "api/read.php";
            axios.get(api_endpoint_url).then(response => {
                // Parse the JSON response
                console.log("fetchAllPeople - response");
                console.log(response.data);
                const data = response.data;
                this.people = data;

            })
            .catch(error => {

                // ERROR
                // Something went wrong
                console.log(error.message)
            })
            console.log("fetchAllPeople - end");
        }
    },
    created() {
        console.log("created");
        this.fetchAllPeople();
    },
});

app.mount("#leaderboard");
