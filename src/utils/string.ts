import { camelCase, snakeCase } from 'lodash';

export function toCamelCase<T extends any>(obj: any): T {
  if (typeof obj !== 'object' || typeof obj === 'undefined' || obj === null || obj === '') {
    return obj;
  }
  if (Array.isArray(obj)) {
    const arr = obj as Array<any>;
    return arr.map((item: any) => toCamelCase(item)) as any;
  }
  const newObj: any = {};
  Object.keys(obj).forEach((key) => {
    const newKey = camelCase(key);
    const newVal = toCamelCase(obj[key]);
    newObj[newKey] = newVal;
  });
  return newObj;
}

export function toSnakeCase<T extends any>(obj: any): T {
  if (typeof obj !== 'object' || typeof obj === 'undefined' || obj === null || obj === '') {
    return obj;
  }
  if (Array.isArray(obj)) {
    const arr = obj as Array<any>;
    return arr.map((item: any) => toSnakeCase(item)) as any;
  }
  const newObj: any = {};
  Object.keys(obj).forEach((key) => {
    const newKey = snakeCase(key);
    const newVal = obj[key] ? toSnakeCase(obj[key]) : obj[key];
    newObj[newKey] = newVal;
  });
  return newObj;
}
