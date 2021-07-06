export default function converterUnix(unix , mode) {
    const d = new Date(unix * 1000);
    if(mode == 'getTime')  return d.getHours() + ':' + d.getMinutes();
    if(mode == 'hours') return d.getHours();
    const fullDate = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
    return fullDate;
}