export function uniqArray<P>(array: P[], propertyId: string, values: string[]): P[] {
    const result: P[] = [];
    const map = new Map();
    for (const item of array) {
        if (!map.has((item as any)[propertyId])) {
            map.set((item as any)[propertyId], true);    // set any value to Map
            const obj: any = {};
            values
                .map(value => (obj)[value.toString()] = (item as any)[value])
            result.push(obj);
        }
    }
    return result;
}