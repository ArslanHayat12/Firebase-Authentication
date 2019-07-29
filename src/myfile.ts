import imageData from "./myjsonfile2.json";
import locationData from "./myjsonfile3.json";
import photoData from "./myjsonfile4.json";
import wikiData from "./myjsonfile.json";
import _ from "lodash";
console.log(imageData.length,wikiData.length,locationData.length,photoData.length)

// // ES6 arrow functions
// function merge(a:any, b:any, prop:any){
//    var reduced =  a.filter( (aitem:any) => ! b.find ( (bitem:any) => aitem&&aitem[prop] === bitem&&bitem[prop]) )
//  return reduced.concat(b);
// }
var mergedList = _.map(imageData, function(item:any){
   return _.extend(item, _.find(locationData, { id: item&&item.id }));
});



export const jsonData=wikiData.map((x,i)=>({
   "title": x.title,
   "description": x.description,
   "image": imageData[i]!=null&&imageData[i]!.url_l|| x.image || "",
   ...mergedList[0],
   photos:photoData[i]
}));