import React from 'react';
import './Problems.css';

const Problems = () => {
  const problems = [
  // Arrays
  { title: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', topic: 'Arrays' },
  { title: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', topic: 'Arrays' },
  { title: 'Contains Duplicate', link: 'https://leetcode.com/problems/contains-duplicate/', topic: 'Arrays' },
  { title: 'Product of Array Except Self', link: 'https://leetcode.com/problems/product-of-array-except-self/', topic: 'Arrays' },
  { title: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/', topic: 'Arrays' },
  { title: 'Maximum Product Subarray', link: 'https://leetcode.com/problems/maximum-product-subarray/', topic: 'Arrays' },
  { title: 'Find Minimum in Rotated Sorted Array', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', topic: 'Arrays' },
  { title: 'Search in Rotated Sorted Array', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', topic: 'Arrays' },
  { title: '3Sum', link: 'https://leetcode.com/problems/3sum/', topic: 'Arrays' },
  { title: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/', topic: 'Arrays' },

  // Strings
  { title: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', topic: 'Strings' },
  { title: 'Longest Palindromic Substring', link: 'https://leetcode.com/problems/longest-palindromic-substring/', topic: 'Strings' },
  { title: 'Valid Anagram', link: 'https://leetcode.com/problems/valid-anagram/', topic: 'Strings' },
  { title: 'Group Anagrams', link: 'https://leetcode.com/problems/group-anagrams/', topic: 'Strings' },
  { title: 'Valid Parentheses', link: 'https://leetcode.com/problems/valid-parentheses/', topic: 'Strings' },
  { title: 'Longest Common Prefix', link: 'https://leetcode.com/problems/longest-common-prefix/', topic: 'Strings' },
  { title: 'Implement strStr()', link: 'https://leetcode.com/problems/implement-strstr/', topic: 'Strings' },
  { title: 'Multiply Strings', link: 'https://leetcode.com/problems/multiply-strings/', topic: 'Strings' },
  { title: 'Decode String', link: 'https://leetcode.com/problems/decode-string/', topic: 'Strings' },
  { title: 'Minimum Window Substring', link: 'https://leetcode.com/problems/minimum-window-substring/', topic: 'Strings' },

  // Linked Lists
  { title: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', topic: 'Linked Lists' },
  { title: 'Reverse Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/', topic: 'Linked Lists' },
  { title: 'Merge k Sorted Lists', link: 'https://leetcode.com/problems/merge-k-sorted-lists/', topic: 'Linked Lists' },
  { title: 'Remove Nth Node From End of List', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', topic: 'Linked Lists' },
  { title: 'Reorder List', link: 'https://leetcode.com/problems/reorder-list/', topic: 'Linked Lists' },
  { title: 'Linked List Cycle', link: 'https://leetcode.com/problems/linked-list-cycle/', topic: 'Linked Lists' },
  { title: 'Add Two Numbers', link: 'https://leetcode.com/problems/add-two-numbers/', topic: 'Linked Lists' },
  { title: 'Palindrome Linked List', link: 'https://leetcode.com/problems/palindrome-linked-list/', topic: 'Linked Lists' },
  { title: 'Copy List with Random Pointer', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/', topic: 'Linked Lists' },
  { title: 'Intersection of Two Linked Lists', link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', topic: 'Linked Lists' },

  // Trees
  { title: 'Maximum Depth of Binary Tree', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', topic: 'Trees' },
  { title: 'Same Tree', link: 'https://leetcode.com/problems/same-tree/', topic: 'Trees' },
  { title: 'Invert Binary Tree', link: 'https://leetcode.com/problems/invert-binary-tree/', topic: 'Trees' },
  { title: 'Binary Tree Level Order Traversal', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', topic: 'Trees' },
  { title: 'Serialize and Deserialize Binary Tree', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', topic: 'Trees' },
  { title: 'Subtree of Another Tree', link: 'https://leetcode.com/problems/subtree-of-another-tree/', topic: 'Trees' },
  { title: 'Construct Binary Tree from Preorder and Inorder Traversal', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', topic: 'Trees' },
  { title: 'Binary Search Tree Iterator', link: 'https://leetcode.com/problems/binary-search-tree-iterator/', topic: 'Trees' },
  { title: 'Lowest Common Ancestor of a Binary Search Tree', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', topic: 'Trees' },
  { title: 'Kth Smallest Element in a BST', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', topic: 'Trees' },

  // Dynamic Programming
  { title: 'Climbing Stairs', link: 'https://leetcode.com/problems/climbing-stairs/', topic: 'Dynamic Programming' },
  { title: 'House Robber', link: 'https://leetcode.com/problems/house-robber/', topic: 'Dynamic Programming' },
  { title: 'Coin Change', link: 'https://leetcode.com/problems/coin-change/', topic: 'Dynamic Programming' },
  { title: 'Longest Increasing Subsequence', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', topic: 'Dynamic Programming' },
  { title: 'Word Break', link: 'https://leetcode.com/problems/word-break/', topic: 'Dynamic Programming' },
  { title: 'Maximum Product Subarray', link: 'https://leetcode.com/problems/maximum-product-subarray/', topic: 'Dynamic Programming' },
  { title: 'Palindromic Substrings', link: 'https://leetcode.com/problems/palindromic-substrings/', topic: 'Dynamic Programming' },
  { title: 'Edit Distance', link: 'https://leetcode.com/problems/edit-distance/', topic: 'Dynamic Programming' },
  { title: 'Jump Game', link: 'https://leetcode.com/problems/jump-game/', topic: 'Dynamic Programming' },
  { title: 'Interleaving String', link: 'https://leetcode.com/problems/interleaving-string/', topic: 'Dynamic Programming' },

  // Graphs
  { title: 'Number of Islands', link: 'https://leetcode.com/problems/number-of-islands/', topic: 'Graphs' },
  { title: 'Clone Graph', link: 'https://leetcode.com/problems/clone-graph/', topic: 'Graphs' },
  { title: 'Course Schedule', link: 'https://leetcode.com/problems/course-schedule/', topic: 'Graphs' },
  { title: 'Pacific Atlantic Water Flow', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', topic: 'Graphs' },
  { title: 'Longest Increasing Path in a Matrix', link: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/', topic: 'Graphs' },
  { title: 'Word Ladder', link: 'https://leetcode.com/problems/word-ladder/', topic: 'Graphs' },
  { title: 'Minimum Height Trees', link: 'https://leetcode.com/problems/minimum-height-trees/', topic: 'Graphs' },
  { title: 'Network Delay Time', link: 'https://leetcode.com/problems/network-delay-time/', topic: 'Graphs' },
  { title: 'Alien Dictionary', link: 'https://leetcode.com/problems/alien-dictionary/', topic: 'Graphs' },
  { title: 'Reconstruct Itinerary', link: 'https://leetcode.com/problems/reconstruct-itinerary/', topic: 'Graphs' },

  // Backtracking
  { title: 'Permutations', link: 'https://leetcode.com/problems/permutations/', topic: 'Backtracking' },
  { title: 'Combination Sum', link: 'https://leetcode.com/problems/combination-sum/', topic: 'Backtracking' },
  { title: 'Word Search', link: 'https://leetcode.com/problems/word-search/', topic: 'Backtracking' },
  { title: 'N-Queens', link: 'https://leetcode.com/problems/n-queens/', topic: 'Backtracking' },
  { title: 'Sudoku Solver', link: 'https://leetcode.com/problems/sudoku-solver/', topic: 'Backtracking'},

  ];

  const groupedProblems = problems.reduce((acc, problem) => {
    if (!acc[problem.topic]) {
      acc[problem.topic] = [];
    }
    acc[problem.topic].push(problem);
    return acc;
  }, {});

  return (
    <div className="problems-container">
      <h1>Practice Sheet</h1>

      {Object.keys(groupedProblems).map((topic) => (
        <div className="problem-group" key={topic}>
          <h2>{topic}</h2>
          <ul>
            {groupedProblems[topic].map((problem) => (
              <li key={problem.title}>
                <a href={problem.link} target="_blank" rel="noopener noreferrer">{problem.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Problems;