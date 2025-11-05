export default class DatetimeTransform {
  deserialize(serialized) {
    try {
      return Temporal.ZonedDateTime.from(serialized);
    } catch (e) {
      if (e instanceof RangeError) {
        return null;
      } else {
        throw e;
      }
    }
  }

  serialize(deserialized) {
    return deserialized && deserialized.toString();
  }

  static create() {
    return new this();
  }
}
