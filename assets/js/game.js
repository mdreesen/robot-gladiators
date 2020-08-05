// window.alert("This is an alert! JavaScript is running!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// You can also log multiple values at once like this
// Console.log(playerName, playerAttack, playerHealth);
// enemyName array
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Alert users that they are starting the round
window.alert("Welcome to Robot Gladiators!");

// this creates a function named "fight"
var fight = function (enemyNames) {

    // repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        // Place fight function code block here
        // Prompts the user to see if they want to fight or skip the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
            );
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");
                break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!")
                // Subtract money from payerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            // If no (false), ask questions again by running fight() again
            else {
                fight();
            }
        } 
        else {
           window.alert("You need to pick a valid option. Try again!");
        }
    }
}

// For Loop
for (var i = 0; i < enemyNames.length; i++) {
    // Call fight function with enemy robot
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}