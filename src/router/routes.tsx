import HomeView from '../views/HomeView';
import TwoSumView from '../views/challenges/TwoSum/TwoSumView';

export const routes = [
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/challenge/two-sum",
    element: <TwoSumView />,
  },
];