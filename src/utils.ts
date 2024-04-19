export const getRandomElements = <T>(list: T[], count: number): T[] => {
    const shuffled = list.sort(() => .5 - Math.random());
    return shuffled.slice(0, count);
}

export const getRandomRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const getAvatarThumb = (): string => {
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${getRandomRange(1, 1e2)}`;
}

export const getAvatarByName = (name: string): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name ? name : "NN")}&color=fff&background=000`;
}

export const goHome = (): void => {
    window.open("/", "_self");
}

export const goBack = (): void => {
    history.back();
}

export const handleImageError = (event: Event): void => {
    const target = event.target as HTMLImageElement;
    if (target) target.src = getAvatarThumb();
}
