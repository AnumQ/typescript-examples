// Types
type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  id: number;
  userId: number;
  title: string;
  content: string;
};

type Profile = {
  userId: number;
  bio: string;
  profession: string;
};

type UserDetails = {
  user: User;
  posts: Post[];
  profile: Profile | undefined;
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

function promiseWithDelay<T>(data: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
}

// Functions
function fetchUserData(): Promise<User> {
  return promiseWithDelay<User>(user);
}

function fetchUserPosts(userId: number): Promise<Post[]> {
  return promiseWithDelay<Post[]>(posts.filter((p) => p.userId === userId));
}

function fetchUserProfile(userId: number): Promise<Profile | undefined> {
  return promiseWithDelay<Profile | undefined>(
    userProfiles.filter((p) => p.userId === userId).shift()
  );
}

async function getUserDetails(): Promise<UserDetails> {
  const userData = await fetchUserData();

  /* Promise.all:
    Creates a Promise that is resolved with an array of results when all of the provided Promises
    resolve, or rejected when any Promise is rejected.
    @param values An array of Promises.
    @returns A new Promise. */
  const results = await Promise.all([
    fetchUserPosts(userData.id),
    fetchUserProfile(userData.id),
  ]);

  // Desctructure the result: 
  const [posts, profile] = results;
  
  return {
    user: userData,
    posts: posts,
    profile: profile,
  };
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
