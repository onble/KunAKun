export default class Clone {
    public static PureNumberArray(pureArray: number[]): number[] {
        return JSON.parse(JSON.stringify(pureArray));
    }
    public static deepClone(target: any) {
        const map = new WeakMap();

        function isObject(target: any) {
            return (typeof target === 'object' && target) || typeof target === 'function';
        }

        function clone(data: any): any {
            if (Array.isArray(data)) {
                // 如果是数组
                const result = [];
                for (let i = 0; i < data.length; i++) {
                    result.push(clone(data[i]));
                }
                return result;
            }
            if (!isObject(data)) {
                return data;
            }
            if ([Date, RegExp].includes(data.constructor)) {
                return new data.constructor(data);
            }
            if (typeof data === 'function') {
                return new Function('return ' + data.toString())();
            }
            const exist = map.get(data);
            if (exist) {
                return exist;
            }
            if (data instanceof Map) {
                const result = new Map();
                map.set(data, result);
                data.forEach((val, key) => {
                    if (isObject(val)) {
                        result.set(key, clone(val));
                    } else {
                        result.set(key, val);
                    }
                });
                return result;
            }
            if (data instanceof Set) {
                const result = new Set();
                map.set(data, result);
                data.forEach((val) => {
                    if (isObject(val)) {
                        result.add(clone(val));
                    } else {
                        result.add(val);
                    }
                });
                return result;
            }
            const keys = Reflect.ownKeys(data);
            const allDesc = Object.getOwnPropertyDescriptors(data);
            const result = Object.create(Object.getPrototypeOf(data), allDesc);
            map.set(data, result);
            keys.forEach((key) => {
                const val = data[key];
                if (isObject(val)) {
                    result[key] = clone(val);
                } else {
                    result[key] = val;
                }
            });
            return result;
        }

        return clone(target);
    }
}
