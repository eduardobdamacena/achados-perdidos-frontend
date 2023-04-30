export const TextService = {
    getNumbersFromText(text = ''): string {
        return text.replace(/\D/g, '');
    },
};
