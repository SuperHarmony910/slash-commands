module.exports = {
    name: "locale",
    description: "Get your locale language",
    run: async(interaction) => {
        console.log(interaction);
        interaction.reply({ content: `Your language is: ${interaction.locale}\nYour Guild Locale: ${interaction.guildLocale}` })
    }
}