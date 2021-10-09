const Discord = require('discord.js');

module.exports = {
    name: "clear",
    permissions: "MANAGE_MESSAGES",
    description: "Cleans messages from a channel",
    options: [
        {
            name: "number_of_messages",
            description: "number of messages to clean",
            type: 3,
            required: true
        }
    ],
    timeout: 5000,
    run: async(interaction, client) => {
        let deleteAmount = interaction.options.getString('number_of_messages');
        if (isNaN(deleteAmount)) {
            return interaction.reply({ content: "Delete amount must be a number" })
        }
        if (deleteAmount > 100) {
            deleteAmount = 100
        }
        await interaction.channel.bulkDelete(+deleteAmount, true);
        interaction.reply({ content: `✅ Successfully deleted ${deleteAmount} messages` })
    }
}