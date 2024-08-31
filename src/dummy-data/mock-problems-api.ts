import { ApiResponse, DBProblem, DBSolvedProblem, ProblemDescription } from "@/utils/types/types";
import { problemsDescriptionMap } from "./problems";

const problems: DBProblem[] = [
	{
	  id: "two-sum",
	  title: "Two Sum",
	  category: "Array",
	  difficulty: "Easy",
	  likes: 1200,
	  dislikes: 30,
	  order: 1,
	  videoId: "8-k1C6ehKuw",
	  link: "/problems/two-sum",
	},
	{
	  id: "reverse-linked-list",
	  title: "Reverse Linked List",
	  category: "Linked List",
	  difficulty: "Hard",
	  likes: 800,
	  dislikes: 40,
	  order: 2,
	  videoId: "",
	  link: "/problems/reverse-linked-list",
	},
	{
	  id: "jump-game",
	  title: "Jump Game",
	  category: "Dynamic Programming",
	  difficulty: "Medium",
	  likes: 950,
	  dislikes: 20,
	  order: 3,
	  videoId: "",
	  link: "/problems/jump-game",
	},
	{
	  id: "valid-parentheses",
	  title: "Valid Parentheses",
	  category: "Stack",
	  difficulty: "Easy",
	  likes: 1100,
	  dislikes: 25,
	  order: 4,
	  videoId: "xty7fr-k0TU",
	  link: "/problems/valid-parentheses",
	},
	{
	  id: "search-a-2d-matrix",
	  title: "Search a 2D Matrix",
	  category: "Binary Search",
	  difficulty: "Medium",
	  likes: 870,
	  dislikes: 15,
	  order: 5,
	  videoId: "ZfFl4torNg4",
	  link: "/problems/search-a-2d-matrix",
	},
	{
	  id: "longest-substring-without-repeating-characters",
	  title: "Longest Substring Without Repeating Characters",
	  category: "String",
	  difficulty: "Medium",
	  likes: 1340,
	  dislikes: 35,
	  order: 6,
	  videoId: "P7_D5BwyiNQ",
	  link: "/problems/longest-substring-without-repeating-characters",
	},
	{
	  id: "merge-intervals",
	  title: "Merge Intervals",
	  category: "Array",
	  difficulty: "Medium",
	  likes: 980,
	  dislikes: 10,
	  order: 7,
	  videoId: "c6wRHjtTOYw",
	  link: "/problems/merge-intervals",
	},
	{
	  id: "maximum-subarray",
	  title: "Maximum Subarray",
	  category: "Array",
	  difficulty: "Easy",
	  likes: 1290,
	  dislikes: 28,
	  order: 8,
	  videoId: "H4EdHOB10OQ",
	  link: "/problems/maximum-subarray",
	},
	{
	  id: "median-of-two-sorted-arrays",
	  title: "Median of Two Sorted Arrays",
	  category: "Array",
	  difficulty: "Hard",
	  likes: 1150,
	  dislikes: 50,
	  order: 9,
	  videoId: "hBVMo_i61wI",
	  link: "/problems/median-of-two-sorted-arrays",
	},
	{
	  id: "climbing-stairs",
	  title: "Climbing Stairs",
	  category: "Dynamic Programming",
	  difficulty: "Easy",
	  likes: 950,
	  dislikes: 5,
	  order: 10,
	  videoId: "RlmtR1TLF6A",
	  link: "/problems/climbing-stairs",
	},
	{
	  id: "intersection-of-two-linked-lists",
	  title: "Intersection of Two Linked Lists",
	  category: "Linked List",
	  difficulty: "Easy",
	  likes: 870,
	  dislikes: 12,
	  order: 11,
	  videoId: "bK4fFVt9FqA",
	  link: "/problems/intersection-of-two-linked-lists",
	},
	{
	  id: "subarray-sum-equals-k",
	  title: "Subarray Sum Equals K",
	  category: "Array",
	  difficulty: "Medium",
	  likes: 860,
	  dislikes: 8,
	  order: 12,
	  videoId: "0iV4F4hRdvk",
	  link: "/problems/subarray-sum-equals-k",
	},
	{
	  id: "trapping-rain-water",
	  title: "Trapping Rain Water",
	  category: "Array",
	  difficulty: "Hard",
	  likes: 720,
	  dislikes: 25,
	  order: 13,
	  videoId: "LNlc3m1SE_o",
	  link: "/problems/trapping-rain-water",
	},
	{
	  id: "maximum-product-subarray",
	  title: "Maximum Product Subarray",
	  category: "Array",
	  difficulty: "Medium",
	  likes: 850,
	  dislikes: 18,
	  order: 14,
	  videoId: "jS0mP1f2M2Y",
	  link: "/problems/maximum-product-subarray",
	},
	{
	  id: "word-break",
	  title: "Word Break",
	  category: "Dynamic Programming",
	  difficulty: "Medium",
	  likes: 930,
	  dislikes: 22,
	  order: 15,
	  videoId: "iEYvR-E4W7A",
	  link: "/problems/word-break",
	},
	{
	  id: "regular-expression-matching",
	  title: "Regular Expression Matching",
	  category: "Dynamic Programming",
	  difficulty: "Hard",
	  likes: 700,
	  dislikes: 40,
	  order: 16,
	  videoId: "FCE68f5gt0Y",
	  link: "/problems/regular-expression-matching",
	},
	{
	  id: "find-minimum-in-rotated-sorted-array",
	  title: "Find Minimum in Rotated Sorted Array",
	  category: "Binary Search",
	  difficulty: "Medium",
	  likes: 800,
	  dislikes: 10,
	  order: 17,
	  videoId: "XjxjU-sJdzI",
	  link: "/problems/find-minimum-in-rotated-sorted-array",
	},
	{
	  id: "longest-common-prefix",
	  title: "Longest Common Prefix",
	  category: "String",
	  difficulty: "Easy",
	  likes: 920,
	  dislikes: 8,
	  order: 18,
	  videoId: "RQcnjRWr1sU",
	  link: "/problems/longest-common-prefix",
	},
	{
	  id: "decode-ways",
	  title: "Decode Ways",
	  category: "Dynamic Programming",
	  difficulty: "Medium",
	  likes: 780,
	  dislikes: 20,
	  order: 19,
	  videoId: "WBRw1kSx_mo",
	  link: "/problems/decode-ways",
	},
	{
	  id: "add-two-numbers",
	  title: "Add Two Numbers",
	  category: "Linked List",
	  difficulty: "Medium",
	  likes: 1100,
	  dislikes: 30,
	  order: 20,
	  videoId: "NfwI5bcyg9Y",
	  link: "/problems/add-two-numbers",
	},
	{
	  id: "insertion-sort-list",
	  title: "Insertion Sort List",
	  category: "Linked List",
	  difficulty: "Medium",
	  likes: 670,
	  dislikes: 15,
	  order: 21,
	  videoId: "OtS5rJ1gK7g",
	  link: "/problems/insertion-sort-list",
	},
	{
	  id: "best-time-to-buy-and-sell-stock",
	  title: "Best Time to Buy and Sell Stock",
	  category: "Array",
	  difficulty: "Easy",
	  likes: 1250,
	  dislikes: 12,
	  order: 22,
	  videoId: "yN_YWKn_rIg",
	  link: "/problems/best-time-to-buy-and-sell-stock",
	},
	{
	  id: "edit-distance",
	  title: "Edit Distance",
	  category: "Dynamic Programming",
	  difficulty: "Hard",
	  likes: 560,
	  dislikes: 45,
	  order: 23,
	  videoId: "UpQ4td5zQ0E",
	  link: "/problems/edit-distance",
	},
	{
	  id: "minimum-window-substring",
	  title: "Minimum Window Substring",
	  category: "String",
	  difficulty: "Hard",
	  likes: 620,
	  dislikes: 28,
	  order: 24,
	  videoId: "Ds-PFzzP8s8",
	  link: "/problems/minimum-window-substring",
	},
	{
	  id: "spiral-matrix",
	  title: "Spiral Matrix",
	  category: "Array",
	  difficulty: "Medium",
	  likes: 700,
	  dislikes: 20,
	  order: 25,
	  videoId: "VskYFttkGRo",
	  link: "/problems/spiral-matrix",
	},
	{
	  id: "count-of-smaller-numbers-after-self",
	  title: "Count of Smaller Numbers After Self",
	  category: "Binary Search",
	  difficulty: "Hard",
	  likes: 590,
	  dislikes: 35,
	  order: 26,
	  videoId: "1xgz9H7I2i0",
	  link: "/problems/count-of-smaller-numbers-after-self",
	},
	{
	  id: "rotate-image",
	  title: "Rotate Image",
	  category: "Array",
	  difficulty: "Medium",
	  likes: 800,
	  dislikes: 18,
	  order: 27,
	  videoId: "m1H4O_62e6A",
	  link: "/problems/rotate-image",
	},
	{
	  id: "construct-binary-tree-from-preorder-and-inorder-traversal",
	  title: "Construct Binary Tree from Preorder and Inorder Traversal",
	  category: "Tree",
	  difficulty: "Medium",
	  likes: 650,
	  dislikes: 25,
	  order: 28,
	  videoId: "8_rft9jKP6U",
	  link: "/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
	},
	{
	  id: "largest-rectangle-in-histogram",
	  title: "Largest Rectangle in Histogram",
	  category: "Stack",
	  difficulty: "Hard",
	  likes: 720,
	  dislikes: 32,
	  order: 29,
	  videoId: "p5fFPs4uM60",
	  link: "/problems/largest-rectangle-in-histogram",
	},
	{
	  id: "merge-sorted-array",
	  title: "Merge Sorted Array",
	  category: "Array",
	  difficulty: "Easy",
	  likes: 990,
	  dislikes: 10,
	  order: 30,
	  videoId: "7RkR1JouZXA",
	  link: "/problems/merge-sorted-array",
	}
  ];
  
const SolvedProblems :DBSolvedProblem[]= [
    {
      id: "two-sum",
      status: "Active",
      time: "15 minutes",
    },
    {
      id: "reverse-linked-list",
      status: "Solved",
      time: "30 minutes",
    },
    {
      id: "jump-game",
      status: "error",
      time: "20 minutes",
    },
    {
      id: "valid-parentheses",
      status: "Active",
      time: "10 minutes",
    },
    {
      id: "search-a-2d-matrix",
      status: "Solved",
      time: "25 minutes",
    },
  ];
  
export const mockProblemsApi = {
  // Get All Problems
  getAllProblems: async (): Promise<ApiResponse<DBProblem[]>> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    // Scenario 1: Successful Retrieval
    return {
      status: 200, // OK
      data: problems,
    };

    // Uncomment for different scenarios
    // Scenario 1: Partial Data Returned
    // return {
    //   status: 200, // OK
    //   data: problems.slice(0, 3), // Return only partial data
    // };

    // Scenario 2: Empty Response
    // return {
    //   status: 200, // OK
    //   data: [],
    // };

    // Scenario 3: Server Error
    // return {
    //   status: 500, // Internal Server Error
    //   data: {
    //     message: "Internal server error.",
    //     error: "serverError",
    //   },
    // };

    // Scenario 3: Client Error
    // return {
    //   status: 400, // Bad Request
    //   data: {
    //     message: "Bad request.",
    //     error: "badRequest",
    //   },
    // };

    // Scenario 3: Unauthorized Access
    // return {
    //   status: 401, // Unauthorized
    //   data: {
    //     message: "Unauthorized access.",
    //     error: "unauthorized",
    //   },
    // };

    // Scenario 4: Network Timeout
    // throw new Error("Network timeout.");

    // Scenario 4: Network Error
    // throw new Error("Network error.");

    // Scenario 5: Malformed Data
    // return {
    //   status: 200, // OK
    //   data: [{ id: "invalid", title: "", difficulty: "", category: "", likes: 0, dislikes: 0, order: 0 }], // Malformed data
    // };

    // Scenario 6: Session Expired
    // return {
    //   status: 401, // Unauthorized
    //   data: {
    //     message: "Session expired. Please log in again.",
    //     error: "sessionExpired",
    //   },
    // };

    // Scenario 7: Rate Limiting
    // return {
    //   status: 429, // Too Many Requests
    //   data: {
    //     message: "Too many requests. Please try again later.",
    //     error: "rateLimited",
    //   },
    // };
  },

  // Get Problems by Page
  getProblemsByPage: async (page: number, pageSize: number): Promise<ApiResponse<DBProblem[]>> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProblems = problems.slice(startIndex, endIndex);

    // Scenario 1: Successful Retrieval
    return {
      status: 200, // OK
      data: paginatedProblems,
    };

    // Uncomment for different scenarios
    // Scenario 1: Partial Data Returned
    // return {
    //   status: 200, // OK
    //   data: paginatedProblems.slice(0, 2), // Return only partial data
    // };

    // Scenario 2: Empty Response
    // return {
    //   status: 200, // OK
    //   data: [],
    // };

    // Scenario 3: Page Not Found
    // return {
    //   status: 404, // Not Found
    //   data: {
    //     message: "Page not found.",
    //     error: "pageNotFound",
    //   },
    // };

    // Scenario 4: Network Timeout
    // throw new Error("Network timeout.");

    // Scenario 4: Network Error
    // throw new Error("Network error.");

    // Scenario 5: Malformed Data
    // return {
    //   status: 200, // OK
    //   data: [{ id: "invalid", title: "", difficulty: "", category: "", likes: 0, dislikes: 0, order: 0 }], // Malformed data
    // };

    // Scenario 6: Session Expired
    // return {
    //   status: 401, // Unauthorized
    //   data: {
    //     message: "Session expired. Please log in again.",
    //     error: "sessionExpired",
    //   },
    // };

    // Scenario 7: Rate Limiting
    // return {
    //   status: 429, // Too Many Requests
    //   data: {
    //     message: "Too many requests. Please try again later.",
    //     error: "rateLimited",
    //   },
    // };
  },

  getAllSolvedProblems : async () : Promise<ApiResponse<DBSolvedProblem[]>> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    return {
        status : 200,
        data : SolvedProblems,
    };
  },

  getProblemDescription : async (problemId : string) : Promise<ApiResponse<ProblemDescription>> => {
	await new Promise ((resolve, rejects) => setTimeout(resolve, 1000))
	return {
		status : 200,
		data : problemsDescriptionMap[problemId],
	}
  }
};
