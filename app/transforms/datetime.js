export default class DatetimeTransform {
  deserialize(serialized) {
    try {
      return serialized &&
        Temporal.Instant.from(serialized)
          .toZonedDateTimeISO(Temporal.Now.timeZoneId());
    } catch (e) {
      if (e instanceof RangeError) {
        return null;
      } else {
        throw e;
      }
    }
  }

  serialize(deserialized) {
    return deserialized && deserialized.toString({
      calendarName: 'never',
      timeZoneName: 'never'
    });
  }

  static create() {
    return new this();
  }
}
