export const timeout = 1500;

export function getUTCTime(utc) {
    const date = new Date(0);
    date.setUTCSeconds(utc);
    const utcDate = date.toString().slice(0, 15);
    const utcTime = date.toString().slice(16, 24);
    // tslint:disable-next-line:radix
    let hour = parseInt(utcTime.slice(0, 2));
    let civTime;
    if (hour === 0) {
        hour = 12;
        civTime = `${hour.toString()}${utcTime.slice(2, utcTime.length)} AM`;
    } else if (hour === 12) {
        civTime = `${hour.toString()}${utcTime.slice(2, utcTime.length)} PM`;
    } else if (hour > 12) {
        hour -= 12;
        civTime = `${hour.toString()}${utcTime.slice(2, utcTime.length)} PM`;
    } else {
        civTime = `${hour.toString()}${utcTime.slice(2, utcTime.length)} AM`;
    }
    const correctedDate = `${utcDate} ${civTime}`;
    return correctedDate;
}
