import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "/",
  TOKEN: "MTEzMzM2OTIyNjczMjc3MzM5Ng.Goft_w.JIbZpb-4CgXUBVyNEA0cwwvpRrRFW4b1MlbtuU",
  ACTIVITY: { NAME: "", TYPE: "PLAYING" },
  GUILD_ID: "1133128287879704667",
  TICKET: {
    CHANNEL: "1133128290891215019",
    CATEGORY: "1133128290417266710",
    ARCHIVE_CATEGORY: "1133154466263220447",
    MESSAGE: "Destek Oluşturmak İçin Tıkla!",
    STAFF_ROLES: [1133137977292370060],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Confirm Ticket",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Archive Ticket",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Delete Ticket",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "What is your name?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "You can write your name.",
        REQUIRED: true,
      },
      {
        ID: "age",
        LABEL: "How old are you?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "You can write your age.",
        REQUIRED: true,
      },
    ],
  },
};
