import HomeView from '../views/HomeView';

import TwoSumView from '../views/challenges/TwoSum/TwoSumView';
import FindIndexNumberSortedListView from '../views/challenges/FindIndexNumberSortedList/FindIndexNumberSortedListView';
import LongestNonRepeatingSubstringView from '../views/challenges/LongestNonRepeatingSubstring/LongestNonRepeatingSubstringView';

export const routes = [
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/challenge/two-sum",
    element: <TwoSumView />,
  },
  {
    path: "/challenge/find-index-number-sorted-list",
    element: <FindIndexNumberSortedListView />,
  },
  {
    path: "/challenge/longest-non-repeating-substring",
    element: <LongestNonRepeatingSubstringView />,
  },
];
