const tg = window.Telegram.WebApp;


export function useTelegram() {
    return {
        tg,
        user: tg.initDataUnsafe.receiver.user || {},
    }
}