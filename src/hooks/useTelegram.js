const tg = window.Telegram.WebApp;
const tgBgColor = window.Telegram.WebApp.themeParams.bg_color
const tgSecondaryBgColor = window.Telegram.WebApp.themeParams.secondary_bg_color

export function useTelegram() {
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        tgBgColor,
        tgSecondaryBgColor
    }
}