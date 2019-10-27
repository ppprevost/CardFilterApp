export function uniqArray<P extends { [key: string]: any }, K extends keyof P>(array: P[], propertyId: string, values: K[]): P[] {
    const result: P[] = [];
    const map = new Map();
    for (const item of array) {
        if (!map.has((item)[propertyId])) {
            map.set((item)[propertyId], true);    // set any value to Map
            const temp: any= {};
            values
                .map(value => (temp)[value.toString()] = (item)[value])
            result.push(temp);
        }
    }
    return result;
}