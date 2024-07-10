export function createUniqueID(longitud = 5) {
    const characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let identificator = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        identificator += characterSet[randomIndex];
    }
    return identificator;
};
