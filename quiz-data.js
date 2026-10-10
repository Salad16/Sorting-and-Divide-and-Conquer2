// Chapter 5: Sorting and Divide-and-Conquer Quiz Data
// 30 Comprehensive Multiple-Choice Questions with 1-Minute Timer
// Detailed Explanations and Classroom Talking Points included

const QUIZ_QUESTIONS = [
  // --- TOPIC 1: Selection Sort Algorithm ---
  {
    id: 1,
    topic: "Selection Sort Algorithm",
    question: "What is the core working principle of the Selection Sort algorithm?",
    options: [
      "It compares adjacent elements and swaps them if they are in the wrong order.",
      "It repeatedly scans the unsorted subarray to find the minimum element and swaps it to the front.",
      "It takes an element and shifts all larger preceding elements to the right to insert it.",
      "It divides the array into two halves, recursively sorts them, and merges them together."
    ],
    answer: 1,
    explanation: "Selection Sort divides the array conceptually into sorted (left) and unsorted (right) subarrays. In each pass, it finds the smallest element in the unsorted portion and swaps it with the first unsorted position.",
    talkingPoint: "Classroom Tip: Remember the phrase 'Select the smallest, swap to the front!'"
  },
  {
    id: 2,
    topic: "Selection Sort Algorithm",
    question: "In an array of n elements, how many passes (outer loop iterations) are required for Selection Sort to completely sort the array?",
    options: [
      "n passes",
      "n - 1 passes",
      "log2(n) passes",
      "n / 2 passes"
    ],
    answer: 1,
    explanation: "Selection Sort requires exactly (n - 1) passes. Once (n - 1) elements are placed into their correct positions, the last remaining element is guaranteed to be in its correct final spot.",
    talkingPoint: "If you have 5 elements, sorting the first 4 automatically places the 5th element in its correct place."
  },
  {
    id: 3,
    topic: "Selection Sort Algorithm",
    question: "Why is the standard in-place array implementation of Selection Sort classified as UNSTABLE?",
    options: [
      "Because its time complexity changes drastically depending on the input arrangement.",
      "Because long-range swaps can jump an element over an identical element, altering their original relative order.",
      "Because it requires dynamic auxiliary memory allocation that might fail at runtime.",
      "Because it uses recursion, which can cause stack overflow errors."
    ],
    answer: 1,
    explanation: "Selection Sort swaps elements across long distances. For example, in [4a, 4b, 2], finding the minimum (2) swaps it with 4a, producing [2, 4b, 4a]. The original relative order of 4a and 4b is reversed, making it unstable.",
    talkingPoint: "Explain to the class: 'Long-range swapping can jump an element over its twin!'"
  },

  // --- TOPIC 2: Selection Sort Time Complexity ---
  {
    id: 4,
    topic: "Selection Sort Time Complexity",
    question: "What is the Best-Case time complexity of Selection Sort when the input array is ALREADY sorted?",
    options: [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(n²)"
    ],
    answer: 3,
    explanation: "Even if the array is already sorted, Selection Sort has no early-exit mechanism. In each pass, it must still scan through all remaining unsorted elements to verify whether a smaller element exists, resulting in O(n²) comparisons.",
    talkingPoint: "Selection Sort is 'blind' to pre-existing sortedness. It always checks every single remaining item."
  },
  {
    id: 5,
    topic: "Selection Sort Time Complexity",
    question: "What is the exact total number of element comparisons performed by Selection Sort for ANY array of size n?",
    options: [
      "n - 1 comparisons",
      "n(n - 1) / 2 comparisons",
      "n log2(n) comparisons",
      "n² comparisons"
    ],
    answer: 1,
    explanation: "Selection Sort always performs (n-1) + (n-2) + ... + 2 + 1 comparisons. Using the arithmetic series formula, this equals n(n - 1) / 2 comparisons, regardless of whether the array is sorted, reversed, or random.",
    talkingPoint: "Show the arithmetic series sum on the board: (n-1) down to 1 always sums to n(n-1)/2."
  },
  {
    id: 6,
    topic: "Selection Sort Time Complexity",
    question: "What is the maximum number of SWAP operations that Selection Sort performs on an array of size n?",
    options: [
      "O(n²) swaps",
      "O(n log n) swaps",
      "At most n - 1 swaps (O(n))",
      "Zero swaps in the worst case"
    ],
    answer: 2,
    explanation: "Selection Sort performs at most one swap per outer loop pass. Since there are n - 1 passes, the maximum number of swaps is n - 1, which is O(n). This is its main advantage when write operations are extremely costly.",
    talkingPoint: "Key advantage: Selection Sort minimizes memory writes. Useful for write-sensitive hardware like EEPROM!"
  },
  {
    id: 7,
    topic: "Selection Sort Time Complexity",
    question: "What is the auxiliary space complexity of Selection Sort?",
    options: [
      "O(1) auxiliary space (In-Place)",
      "O(log n) auxiliary space",
      "O(n) auxiliary space",
      "O(n²) auxiliary space"
    ],
    answer: 0,
    explanation: "Selection Sort operates directly on the input array in-place. It only uses a few temporary scalar variables (such as min_idx, i, j, and temp for swapping), requiring O(1) constant auxiliary space.",
    talkingPoint: "In-place means it sorts the data inside the original container without allocating a second array."
  },

  // --- TOPIC 3: Insertion Sort Algorithm ---
  {
    id: 8,
    topic: "Insertion Sort Algorithm",
    question: "Which everyday real-world activity is most frequently used to explain how Insertion Sort works?",
    options: [
      "Dividing a deck of cards into two equal halves on a table.",
      "Picking the lowest number from a bingo cage.",
      "Sorting playing cards in your hand as you are dealt one card at a time.",
      "Looking up a word by flipping to the exact middle of a dictionary."
    ],
    answer: 2,
    explanation: "Insertion Sort mirrors how people arrange playing cards in their hands. As you pick up each new card (the 'key'), you slide larger cards to the right until you find the correct slot to insert it.",
    talkingPoint: "Start your presentation with: 'Imagine holding a hand of cards and inserting the newly drawn card into place!'"
  },
  {
    id: 9,
    topic: "Insertion Sort Algorithm",
    question: "In the standard implementation of Insertion Sort, from which index does the outer loop typically begin?",
    options: [
      "Index 0, because the first element must be inserted into an empty list.",
      "Index 1, because a single-element subarray arr[0] is already trivially sorted.",
      "Index n - 1, because Insertion Sort must always scan backward.",
      "Index n / 2, because it divides the array into two halves."
    ],
    answer: 1,
    explanation: "The subarray containing just arr[0] is already sorted by definition (an array of 1 element is always sorted). Therefore, the algorithm begins picking the 'key' element at index 1 and inserts it into arr[0..0].",
    talkingPoint: "Highlight to students: A single card in your hand is already sorted; you start sorting when you get the second card."
  },
  {
    id: 10,
    topic: "Insertion Sort Algorithm",
    question: "What key mechanism distinguishes Insertion Sort from Selection Sort during element movement?",
    options: [
      "Insertion Sort swaps elements across long distances, whereas Selection Sort shifts elements.",
      "Insertion Sort slides (shifts) larger elements one position to the right to make room for the key, rather than performing distant swaps.",
      "Insertion Sort splits the array recursively, whereas Selection Sort is iterative.",
      "Insertion Sort requires an extra helper array of size n."
    ],
    answer: 1,
    explanation: "Selection Sort finds the minimum and makes a single swap across potentially long distances. Insertion Sort takes the 'key' element and repeatedly shifts elements that are greater than the key one position to the right.",
    talkingPoint: "Key difference: Selection Sort = 'find minimum and swap'; Insertion Sort = 'pick key, slide bigger items right, insert'."
  },
  {
    id: 11,
    topic: "Insertion Sort Algorithm",
    question: "Why is Insertion Sort classified as an 'online' and 'adaptive' sorting algorithm?",
    options: [
      "It requires an active internet connection to download sorting keys.",
      "It can sort a list as it receives pieces in real time, and runs faster (adapts) when the input is already partially sorted.",
      "It changes its time complexity from O(n²) to O(1) for reverse sorted data.",
      "It automatically adapts by switching to Merge Sort for large arrays."
    ],
    answer: 1,
    explanation: "An algorithm is 'online' if it can process elements sequentially as they arrive. It is 'adaptive' because its inner loop terminates early when an element is already in place, making it run in O(n) time on nearly-sorted data.",
    talkingPoint: "Explain: 'Online' means great for streaming data; 'Adaptive' means it speeds up if data is already close to sorted."
  },

  // --- TOPIC 4: Insertion Sort Time Complexity (Based on GeeksforGeeks) ---
  {
    id: 12,
    topic: "Insertion Sort Time Complexity (GFG)",
    question: "According to GeeksforGeeks, when does the Best-Case time complexity of Insertion Sort occur, and what is its performance?",
    options: [
      "When the array is sorted in reverse order; Time is O(n²).",
      "When the array is already sorted; Time is O(n) with n - 1 comparisons and 0 shifts.",
      "When all elements are negative; Time is O(n log n).",
      "When the array length is odd; Time is O(1)."
    ],
    answer: 1,
    explanation: "Per GeeksforGeeks: Best case occurs when the array is already sorted (e.g. [1, 2, 3, 4, 5]). Each element is compared only once with the element immediately before it, requiring n - 1 comparisons and 0 shifts, giving O(n) time.",
    talkingPoint: "GFG benchmark: Best case is already-sorted arrays like [1, 2, 3, 4, 5]. Exactly n - 1 comparisons and zero shifts!"
  },
  {
    id: 13,
    topic: "Insertion Sort Time Complexity (GFG)",
    question: "According to GeeksforGeeks analysis, what is the approximate number of shifts performed in the AVERAGE CASE?",
    options: [
      "Exactly n - 1 shifts",
      "Approximately n(n - 1) / 4 shifts (proportional to n² / 4)",
      "Exactly n(n - 1) / 2 shifts",
      "log2(n) shifts"
    ],
    answer: 1,
    explanation: "Per GeeksforGeeks: In the average case (random order), an element moves through about half of the elements in the sorted portion. Therefore, total shifts are approximately n(n - 1) / 4 ≈ n² / 4, which grows proportionally to n², yielding O(n²).",
    talkingPoint: "GFG derivation: On average each item travels halfway through the sorted section, so shifts ≈ n²/4."
  },
  {
    id: 14,
    topic: "Insertion Sort Time Complexity (GFG)",
    question: "Under what input condition does the WORST-CASE of Insertion Sort occur, and what is the exact work formula according to GeeksforGeeks?",
    options: [
      "When all elements are identical; Work is O(n).",
      "When the array is sorted in reverse order; Work is 1 + 2 + ... + (n - 1) = n(n - 1) / 2 comparisons/shifts.",
      "When the array has negative numbers; Work is n² + n.",
      "When the middle element is the largest; Work is n log n."
    ],
    answer: 1,
    explanation: "Per GeeksforGeeks: The worst case occurs when the array is in reverse order (e.g. [5, 4, 3, 2, 1]). Each new element must be compared and shifted past all elements before it. Total work = 1 + 2 + ... + (n-1) = n(n-1)/2, dominant term is n², giving O(n²).",
    talkingPoint: "GFG reverse example: [5, 4, 3, 2, 1] causes every element to shift all the way to index 0, summing to n(n-1)/2."
  },
  {
    id: 15,
    topic: "Insertion Sort Time Complexity (GFG)",
    question: "What is the auxiliary space complexity of Insertion Sort as detailed by GeeksforGeeks, and why?",
    options: [
      "O(n) because it stores a copy of the unsorted elements.",
      "O(1) because it sorts in place and only uses a few scalar variables like 'key' and 'j'.",
      "O(log n) because of recursive call stack memory.",
      "O(n²) because of the nested comparison matrix."
    ],
    answer: 1,
    explanation: "Per GeeksforGeeks: Insertion Sort sorts the array in place, so it does not require an extra array. It uses only a few extra variables, such as 'key' and 'j'. The amount of extra memory remains constant, giving O(1) auxiliary space.",
    talkingPoint: "GFG space note: Only 'key' and index 'j' take memory—constant auxiliary space O(1) regardless of array size."
  },

  // --- TOPIC 5: Recursion and Divide-and-Conquer ---
  {
    id: 16,
    topic: "Recursion and Divide-and-Conquer",
    question: "What are the three canonical steps of the Divide-and-Conquer algorithmic paradigm?",
    options: [
      "Select, Swap, Repeat",
      "Divide, Conquer, Combine",
      "Allocate, Iterate, Deallocate",
      "Branch, Bound, Backtrack"
    ],
    answer: 1,
    explanation: "The Divide-and-Conquer paradigm consists of: 1) Divide the problem into smaller subproblems, 2) Conquer the subproblems recursively (or solve directly if base cases), 3) Combine the subproblem solutions into the overall solution.",
    talkingPoint: "Remember the 3 D-and-C words: Divide (split), Conquer (recurse/solve base), Combine (merge back together)."
  },
  {
    id: 17,
    topic: "Recursion and Divide-and-Conquer",
    question: "What happens if a recursive algorithm fails to define or reach a valid 'base case'?",
    options: [
      "It automatically converts into an iterative while loop.",
      "It causes infinite recursion, leading to a Call Stack Overflow error.",
      "It runs in O(1) constant time.",
      "The compiler automatically adds a base case at compile time."
    ],
    answer: 1,
    explanation: "Every recursive call allocates a new stack frame on the call stack. Without a valid base case that terminates the recursion, function calls continue indefinitely until the stack space is exhausted, crashing with a stack overflow.",
    talkingPoint: "Classroom analogy: A basecase is the brake pedal of recursion. Without brakes, you crash through the memory wall!"
  },
  {
    id: 18,
    topic: "Recursion and Divide-and-Conquer",
    question: "In algorithm analysis, how do we express the running time of a Divide-and-Conquer algorithm mathematically?",
    options: [
      "Using a quadratic matrix equation.",
      "Using a recurrence relation (e.g., T(n) = aT(n/b) + f(n)).",
      "Using a truth table with boolean operators.",
      "Using an arithmetic geometric progression series."
    ],
    answer: 1,
    explanation: "A recurrence relation describes the running time T(n) of a recursive function in terms of T(k) for smaller input sizes k, plus the overhead cost f(n) of dividing the problem and combining the sub-solutions.",
    talkingPoint: "T(n) represents total time, aT(n/b) represents recursive work on subproblems, and f(n) is the split/combine cost."
  },
  {
    id: 19,
    topic: "Recursion and Divide-and-Conquer",
    question: "How does Divide-and-Conquer differ fundamentally from Dynamic Programming?",
    options: [
      "Divide-and-Conquer solves overlapping subproblems, whereas Dynamic Programming does not.",
      "Divide-and-Conquer solves independent/disjoint subproblems, whereas Dynamic Programming caches solutions to overlapping subproblems.",
      "Divide-and-Conquer only works on sorted arrays, whereas Dynamic Programming works on graphs.",
      "Dynamic Programming is always recursive, while Divide-and-Conquer is never recursive."
    ],
    answer: 1,
    explanation: "Divide-and-Conquer is ideal when subproblems are disjoint/independent (like sorting left and right halves). Dynamic Programming is used when subproblems overlap and repeatedly recur, requiring memoization/tabulation.",
    talkingPoint: "Divide & Conquer = disjoint subproblems (no reuse needed). Dynamic Programming = overlapping subproblems (memoize!)."
  },

  // --- TOPIC 6: Merge Sort Algorithm ---
  {
    id: 20,
    topic: "Merge Sort Algorithm",
    question: "At what specific step does the actual sorting and reordering take place in Merge Sort?",
    options: [
      "During the Divide step when calculating mid = (left + right) / 2.",
      "During the Combine (Merge) step when comparing elements from two sorted subarrays into a merged sequence.",
      "During the initial array allocation.",
      "During the base case check when left >= right."
    ],
    answer: 1,
    explanation: "The division phase simply splits indices until single elements remain. The real work of sorting happens during the Combine (Merge) phase, where two already-sorted subarrays are zipped together in sorted order.",
    talkingPoint: "Emphasize this in class: 'The split does no sorting! All the magic and comparisons happen in the MERGE function.'"
  },
  {
    id: 21,
    topic: "Merge Sort Algorithm",
    question: "What is the time complexity of the merge(arr, left, mid, right) procedure that merges two sorted subarrays totaling n elements?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    answer: 2,
    explanation: "The two-pointer merge algorithm scans through each of the n elements from the two subarrays at most once, performing a constant number of comparisons and assignments per element. Hence, merging takes linear O(n) time.",
    talkingPoint: "Two pointers move forward without ever backtracking. Each step places one item, taking linear O(n) time."
  },
  {
    id: 22,
    topic: "Merge Sort Algorithm",
    question: "Why is the standard Merge Sort algorithm considered STABLE?",
    options: [
      "Because it never crashes on empty arrays.",
      "Because when comparing equal elements (L[i] <= R[j]), it prioritizes taking from the left subarray first, preserving original order.",
      "Because its worst-case time complexity is bounded by O(n log n).",
      "Because it does not use pointer manipulation."
    ],
    answer: 1,
    explanation: "Merge Sort is stable because tie-breaking rules preserve order. When L[i] == R[j], taking L[i] first ensures that an element appearing earlier in the original array remains before an identical element from the right subarray.",
    talkingPoint: "Remember the condition: 'if L[i] <= R[j], pick L[i]'. The '<=' guarantees stability by favoring the left side on ties!"
  },

  // --- TOPIC 7: Merge Sort Recursion Tree and Time Complexity ---
  {
    id: 23,
    topic: "Merge Sort Recursion Tree & Complexity",
    question: "What is the total height (number of levels) of the recursion tree for Merge Sort on an array of size n?",
    options: [
      "n levels",
      "n - 1 levels",
      "log2(n) + 1 levels (O(log n))",
      "n / 2 levels"
    ],
    answer: 2,
    explanation: "At each level of recursion, the problem size is halved: n, n/2, n/4, ..., down to 1. The number of times you can divide n by 2 until reaching 1 is log2(n). Including the root level, the height is log2(n) + 1, which is O(log n).",
    talkingPoint: "Every time you cut something in half repeatedly until size 1, the number of cuts is logarithmic: log2(n)."
  },
  {
    id: 24,
    topic: "Merge Sort Recursion Tree & Complexity",
    question: "In the Merge Sort recursion tree, how much total work (merging cost) is performed across all nodes at ANY single level?",
    options: [
      "O(1) work",
      "O(log n) work",
      "O(n) work (or c · n)",
      "O(n²) work"
    ],
    answer: 2,
    explanation: "At level 0, 1 problem of size n takes c·n work. At level 1, 2 problems of size n/2 take 2·(c·n/2) = c·n work. At level k, 2^k problems of size n/2^k take 2^k · c·(n/2^k) = c·n work. Every single level contributes exactly O(n) total work!",
    talkingPoint: "Crucial classroom concept: 'Every level of the recursion tree sums up to exactly n elements, so every level costs O(n).'"
  },
  {
    id: 25,
    topic: "Merge Sort Recursion Tree & Complexity",
    question: "Multiplying the work per level by the number of levels in the recursion tree yields what overall time complexity for Merge Sort?",
    options: [
      "O(n + log n)",
      "O(n log n) in Best, Average, and Worst cases",
      "O(n²) in the worst case",
      "O(log n) in the best case"
    ],
    answer: 1,
    explanation: "Total Work = (Work per level) × (Number of levels) = O(n) × O(log n) = O(n log n). Because the array is always divided in half and merged regardless of element values, this O(n log n) bound holds in all cases.",
    talkingPoint: "Formula: Total Time = O(n) per level × O(log n) levels = O(n log n) guaranteed!"
  },
  {
    id: 26,
    topic: "Merge Sort Recursion Tree & Complexity",
    question: "What is the primary drawback of standard Merge Sort compared to Selection Sort and Insertion Sort?",
    options: [
      "It has an unpredictable worst-case time complexity of O(n³).",
      "It requires O(n) auxiliary memory space to hold subarrays during the merging process.",
      "It cannot sort arrays containing duplicate elements.",
      "It cannot be implemented recursively."
    ],
    answer: 1,
    explanation: "Unlike Selection Sort and Insertion Sort which are in-place O(1) auxiliary space algorithms, standard Merge Sort requires O(n) auxiliary buffer space to hold elements while merging the two halves back together.",
    talkingPoint: "Trade-off to discuss in class: Merge Sort gives you speed (n log n) at the cost of RAM (O(n) auxiliary space)."
  },

  // --- TOPIC 8: Comparing and Choosing Sorting Algorithms ---
  {
    id: 27,
    topic: "Comparing and Choosing Sorting Algorithms",
    question: "Under which specific scenario is INSERTION SORT the superior choice over Merge Sort?",
    options: [
      "When sorting 10,000,000 completely random numbers on a supercomputer.",
      "When the dataset is small (e.g., n < 50) or is ALREADY NEARLY SORTED, due to low constant overhead and O(n) adaptive behavior.",
      "When we strictly require O(n log n) worst-case time guarantee.",
      "When external disk space is required."
    ],
    answer: 1,
    explanation: "Insertion Sort has very low constant factor overhead and requires zero extra memory. On small lists (n < 50) or nearly-sorted lists, its adaptive nature runs in O(n) time, easily outperforming Merge Sort's recursion and memory allocation overhead.",
    talkingPoint: "Practical rule: When data is nearly sorted or very small, Insertion Sort is faster in real-world benchmarks!"
  },
  {
    id: 28,
    topic: "Comparing and Choosing Sorting Algorithms",
    question: "In what hardware or memory constraint scenario might SELECTION SORT be specifically preferred over Insertion Sort?",
    options: [
      "When CPU cache is extremely large.",
      "When write operations to storage (e.g., Flash/EEPROM memory) are extremely expensive or physically degrade the drive.",
      "When the array is already sorted in reverse order.",
      "When multi-threaded parallel processing is required."
    ],
    answer: 1,
    explanation: "Selection Sort performs at most n - 1 swaps (O(n) writes), whereas Insertion Sort can perform up to O(n²) memory shifts/writes. In hardware environments where writes wear out physical memory (like flash EEPROMs), Selection Sort minimizes write cycles.",
    talkingPoint: "Remember: Selection Sort minimizes writes (at most n-1 swaps). Great for flash memory write-wear limits."
  },
  {
    id: 29,
    topic: "Comparing and Choosing Sorting Algorithms",
    question: "Which of the following summaries correctly captures the stability, space, and time complexity profile of all three algorithms?",
    options: [
      "Selection: O(n²) / O(1) / Stable; Insertion: O(n²) / O(n) / Unstable; Merge: O(n log n) / O(1) / Stable",
      "Selection: O(n²) / O(1) / Unstable; Insertion: O(n²) [O(n) best] / O(1) / Stable; Merge: O(n log n) / O(n) / Stable",
      "Selection: O(n) / O(1) / Stable; Insertion: O(n log n) / O(1) / Stable; Merge: O(n²) / O(n) / Unstable",
      "Selection: O(n log n) / O(n) / Unstable; Insertion: O(n²) / O(1) / Unstable; Merge: O(n) / O(1) / Stable"
    ],
    answer: 1,
    explanation: "Selection Sort is O(n²) all cases, O(1) auxiliary space, and inherently unstable. Insertion Sort is O(n²) worst/average, O(n) best, O(1) space, and stable. Merge Sort is O(n log n) all cases, O(n) space, and stable.",
    talkingPoint: "Memorize this matrix row: Selection = Unstable O(1); Insertion = Stable O(1) Adaptive; Merge = Stable O(n) Fast."
  },
  {
    id: 30,
    topic: "Comparing and Choosing Sorting Algorithms",
    question: "How do modern production sorting libraries (like Python's Timsort and Java's Arrays.sort()) combine these algorithms?",
    options: [
      "They run Selection Sort first, and if it fails, they restart with Merge Sort.",
      "They use a hybrid approach (Timsort): they divide data into chunks, use Insertion Sort on small chunks (exploiting existing runs), and merge them with Merge Sort.",
      "They randomly choose between Bubble Sort and Selection Sort.",
      "They only use Merge Sort and never use Insertion Sort."
    ],
    answer: 1,
    explanation: "Real-world sorting algorithms like Timsort (used in Python and Java) are hybrid algorithms. They detect pre-existing sorted 'runs', sort small subarrays using Insertion Sort (which is blazingly fast for small sizes), and combine them using Merge Sort.",
    talkingPoint: "Capstone lesson: Why learn both? Because the world's most popular sorting engine, Timsort, combines Merge Sort + Insertion Sort!"
  }
];

// Export for module or browser window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
}
