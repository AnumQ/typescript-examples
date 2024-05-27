type Rating = {
  title: string;
  score: number;
};

type Friend = {
  id: string;
  ratings: Rating[];
};

type User = {
  id: string;
  ratings: Rating[];
  friends: Friend[];
};
const mockUser: User = {
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

type GroupedTitles = {
  [key: string]: number[];
};

// Get recommendations based on ratings by user's friends
function getRecommendations(user: User) {
  const userRatings = user.ratings;

  console.log(userRatings);
  const friendsRatings = user.friends.reduce((acc: Rating[], curr: Friend) => {
    return [...acc, ...curr.ratings];
  }, []);

  const userTitles = userRatings.reduce((acc: string[], curr: Rating) => {
    return [...acc, curr.title];
  }, []);

  // Remove books already rated by the user:
  const filterOutUserRatings = friendsRatings.filter((item) => {
    return !userTitles.includes(item.title);
  });

  console.log(filterOutUserRatings);

  // if same title occurs multiple times, get average score

  // group by title
  let initialValue: GroupedTitles = {};
  const groupedByTitle = filterOutUserRatings.reduce(
    (acc: GroupedTitles, curr: Rating) => {
      const title = curr.title;
      acc[title] = acc[title] ? [...acc[title], curr.score] : [curr.score];
      return acc;
    },
    initialValue
  );

  console.log("");
  console.log(groupedByTitle);

  const keys = Object.keys(groupedByTitle);
  const values = Object.values(groupedByTitle);

  const withAvgScore = keys.map((key, i) => {
    return {
      title: key,
      averageScore: values[i].reduce((a, b) => a + b) / values[i].length,
    };
  });

  console.log(withAvgScore);

  // filter out score above 0.5
  const filteredAboveAvgScore = withAvgScore.filter(
    (item) => item.averageScore > 0.5
  );
  console.log("filteredAboveAvgScore");
  console.log(filteredAboveAvgScore);

  // sort on average score descending
  const sorted = filteredAboveAvgScore.sort(
    // use toSorted instead as it creates new array instead of mutating the existing one
    (a, b) => b.averageScore - a.averageScore
  );

  console.log("sorted on average score descending");
  console.log(sorted);
}

getRecommendations(mockUser);
