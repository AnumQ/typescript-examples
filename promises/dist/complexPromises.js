"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// data
const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
};
const posts = [
    {
        id: 101,
        userId: 1,
        title: "Post 1",
        content: "Content of post 1",
    },
    {
        id: 102,
        userId: 1,
        title: "Post 2",
        content: "Content of post 2",
    },
];
const userProfiles = [
    {
        userId: 1,
        bio: "Bio of John Doe",
        profession: "Software Developer",
    },
];
function promiseTimeout(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 100);
    });
}
// Functions
function fetchUserData() {
    return promiseTimeout(user);
}
function fetchUserPosts(userId) {
    return promiseTimeout(posts.filter((p) => p.userId === userId));
}
function fetchUserProfile(userId) {
    return promiseTimeout(userProfiles.filter((p) => p.userId === userId).shift());
}
function getUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield fetchUserData();
        const [posts, profile] = yield Promise.all([
            fetchUserPosts(userData.id),
            fetchUserProfile(userData.id),
        ]);
        return {
            user: userData,
            posts: posts,
            profile: profile,
        };
    });
}
// Usage of the function
getUserDetails()
    .then((details) => {
    console.log("User Details:", details);
})
    .catch((error) => {
    console.error("Error in processing user details:", error);
});
//
