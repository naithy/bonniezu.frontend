const tg = window.Telegram.WebApp;

export function useTelegram() {
    return {
        tg,
        photo_url: tg.initDataUnsafe.user.photo_url,
        user: tg.initDataUnsafe?.user,
    }
}