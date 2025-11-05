import { helper } from '@ember/component/helper';

export default function formatDateTime(dateTime /*, named*/) {
  return (
    dateTime &&
    dateTime.toLocaleString(undefined, {
      dateStyle: 'short',
      timeStyle: 'short',
    })
  );
}
