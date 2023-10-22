const tg = window.Telegram.WebApp;
const tgUser = window.Telegram.WebAppUser

export function useTelegram() {
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        photo_url: tgUser.photo_url,
    }
}