
const imageUrl = (photo, width, height, sat = 0) =>
  "https://images.unsplash.com/" + photo + "?w=" + width + "&h=" + height + "&fit=crop&auto=format&sat=" + sat

console.log(imageUrl("photo-1685086785054-d047cdc0e525", 500, 500, 0))
console.log(imageUrl("photo-1643272148406-d09ca2d79dee", 500, 500, 0))
console.log(imageUrl("photo-1530209925954-8aecf4eb1e43", 500,500, 0))

export default imageUrl