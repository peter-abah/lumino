class MapWithDefault<K, V> extends Map<K, V> {
  private default: V;

  get(key: K) {
    if (!this.has(key)) {
      return this.default;
    }
    return super.get(key);
  }

  constructor(defaultValue: V, entries?: [K, V][] | null) {
    super(entries);
    this.default = defaultValue;
  }
}

export default MapWithDefault;