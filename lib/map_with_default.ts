export const DEFAULT = Symbol();
export class MapWithDefault<K, V> extends Map<K | typeof DEFAULT, V> {
  get(key: K): V | undefined {
    return super.has(key) ? super.get(key) : super.get(DEFAULT);
  }
}

export default MapWithDefault;
