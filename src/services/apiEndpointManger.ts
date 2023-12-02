import { baseQueryGenerator, createApiEndpoint } from "./httpManager"

const baseQueryEntertainment = baseQueryGenerator("https://entertainment",async (headers)=>{
    headers.set("Accept","text/plain");
    if(!headers.has("Content-Type")){
        headers.set("Content-Type","application-json")
    }
    headers.set("ApplicationName","Entertainment")
    return headers
});
const baseQuerySports = baseQueryGenerator("https://sports",async (headers)=>{
    headers.set("Accept","text/plain");
    if(!headers.has("Content-Type")){
        headers.set("Content-Type","application-json")
    }
    headers.set("ApplicationName","Sports")
    return headers
});


const entertnmntApiEndpointMiddlewareSkeleton =  createApiEndpoint(baseQueryEntertainment,["Imdb","Lyrics"],"entertainment");
const sportsApiEndpointMiddlewareSkeleton = createApiEndpoint(baseQuerySports,["cricket"],"sports");

export default {
    sports:sportsApiEndpointMiddlewareSkeleton,
    entertainment:entertnmntApiEndpointMiddlewareSkeleton,
}