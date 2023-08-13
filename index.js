var currentValue = 0;
        function createGoal() {
            var deadline = document.getElementById("deadline").value;
            var targetAmount = document.getElementById("targetAmount").value;
            document.getElementById("createGoalForm").style.display = "none";
            document.getElementById("goalDeadline").innerHTML = deadline;
            document.getElementById("goalTarget").innerHTML = targetAmount;
            document.getElementById("goal").style.display = "block";
            document.getElementById("currentValue").innerHTML = currentValue;
        }

        function contribute() {
            var contribution = Number(
                document.getElementById("contribution").value
            ); //Number() used for converting string to number.
            currentValue = currentValue + contribution;
            document.getElementById("currentValue").innerHTML = currentValue;
            if (currentValue >= document.getElementById("goalTarget").innerHTML) {
                document.getElementById("goalAchieved").style.display = "block";
                document.getElementById("goal").style.display = "none";
            }
        }