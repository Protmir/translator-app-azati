export const getId = () => {
    let counter = 0;

    return () => {
        counter += 1;
        return counter;
    };
};
