export function newsTime(unixTime) {
    let currentTime = Math.floor(Date.now() / 1000); // Текущее время в UNIX формате
    let timeDiff = currentTime - unixTime; // Разница времени в секундах

    if (timeDiff < 60) {
        return `${timeDiff} seconds`;
    } else if (timeDiff < 3600) {
        let minutes = Math.floor(timeDiff / 60);
        return `${minutes} minutes`;
    } else if (timeDiff < 86400) {
        let hours = Math.floor(timeDiff / 3600);
        return `${hours} hours`;
    } else {
        let days = Math.floor(timeDiff / 86400);
        return `${days} days`;
    }
}
export function shortLink(link){
    return link ? link.split('/')[2] : 'no url';
}

export function intervalId(func){
    return setInterval(() => {
        func();
    },60000)
}

// export function updateList(func) {
//     intervalId(() => func())
//
//     onMounted(() => {
//         func();
//     })
//     onUnmounted(() => {
//         clearInterval(intervalId(() => func()));
//     });
// }
