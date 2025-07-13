const map = new Map()

map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("CA", "Canada")
map.set("AU", "Australia")

console.log(map);

console.log(map.get("IN"));

for(const [key, value] of map){
    console.log(`${key}: ${value}`);
}