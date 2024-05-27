var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mockUser = {
    id: "us34132",
    ratings: [
        { title: "Lord of the Rings", score: 0.3 },
        { title: "Harry Potter and the Prisoner of Azkaban.", score: 0.8 },
    ],
    friends: [
        {
            id: "us20132",
            ratings: [
                { title: "Lord of the Rings", score: 0.3 },
                { title: "Harry Potter and the Prisoner of Azkaban.", score: 0.3 },
                { title: "To Kill a Mockingbird", score: 0.8 },
                { title: "The Great Gatsby", score: 0.6 },
                { title: "Pride and Prejudice", score: 0.7 },
                { title: "The Hunger Games", score: 0.5 },
            ],
        },
        {
            id: "us52132",
            ratings: [],
        },
        {
            id: "us62132",
            ratings: [
                { title: "The Catcher in the Rye", score: 0.4 },
                { title: "1984", score: 0.7 },
            ],
        },
        {
            id: "us73598",
            ratings: [
                { title: "Pride and Prejudice", score: 0.8 },
                { title: "The Hunger Games", score: 1.5 },
                { title: "The Lord of the Rings", score: 0.3 },
            ],
        },
    ],
};
function getRecommendations(user) {
    var userRatings = user.ratings;
    console.log(userRatings);
    var friendsRatings = user.friends.reduce(function (acc, curr) {
        return __spreadArray(__spreadArray([], acc, true), curr.ratings, true);
    }, []);
    var userTitles = userRatings.reduce(function (acc, curr) {
        return __spreadArray(__spreadArray([], acc, true), [curr.title], false);
    }, []);
    // Remove books already rated by the user:
    var filterOutUserRatings = friendsRatings.filter(function (item) {
        return !userTitles.includes(item.title);
    });
    console.log(filterOutUserRatings);
    // if same title occurs multiple times, get average score
    // group by title
    var initialValue = {};
    var groupedByTitle = filterOutUserRatings.reduce(function (acc, curr) {
        var title = curr.title;
        acc[title] = acc[title] ? __spreadArray(__spreadArray([], acc[title], true), [curr.score], false) : [curr.score];
        return acc;
    }, initialValue);
    console.log("groupedByTitle");
    console.log(groupedByTitle);
    var keys = Object.keys(groupedByTitle);
    var values = Object.values(groupedByTitle);
    var withAvgScore = keys.map(function (key, i) {
        return {
            title: key,
            averageScore: values[i].reduce(function (a, b) { return a + b; }) / values[i].length,
        };
    });
    console.log(withAvgScore);
    // filter out score above 0.5
    var filteredAboveAvgScore = withAvgScore.filter(function (item) { return item.averageScore > 0.5; });
    console.log("filteredAboveAvgScore");
    console.log(filteredAboveAvgScore);
    // sort on average score descending
    var sorted = filteredAboveAvgScore.sort(
    // use toSorted instead as it creates new array instead of mutating the existing one
    function (a, b) { return b.averageScore - a.averageScore; });
    console.log("sorted on average score descending");
    console.log(sorted);
}
getRecommendations(mockUser);
