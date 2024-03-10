
export const formatData = (data = [], numColumns = 0) => {
    if (!Array.isArray(data)) return []
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data?.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};