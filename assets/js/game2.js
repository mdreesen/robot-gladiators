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

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask user if they'd liked to fight or run
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};

// For Loop
for (var i = 0; i < enemyNames.length; i++) {
    // Call fight function with enemy robot
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}