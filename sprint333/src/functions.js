export function generateNewsItems(){
    const newsItems = []

    for(let novelty  = 0; novelty < 100; novelty++) {
        newsItems.push({ novelty })
    }
    return newsItems;
}