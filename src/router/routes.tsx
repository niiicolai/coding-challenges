import HomeView from '../views/HomeView';
import TwoSumView from '../views/challenges/TwoSum/TwoSumView';
import BinarySearchView from '../views/challenges/BinarySearch/BinarySearchView';

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
    path: "/challenge/binary-search",
    element: <BinarySearchView />,
  },
];