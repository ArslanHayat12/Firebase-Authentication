export const isPathExists=(routesList:any,path:string)=>{
   return routesList
    .map((x: any) => x.path)
    .includes(path);
}
