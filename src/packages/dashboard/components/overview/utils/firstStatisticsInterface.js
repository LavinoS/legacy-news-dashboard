import { FaUsers, FaEye, FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineToday } from 'react-icons/md';

export default (information) => {
  const { totalViews, totalUsers, totalNews, todayViews } = information;

  return [
    {
      label: 'Total views',
      value: totalViews,
      additionalText: "Track your content's impact with the total views",
      icon: FaEye,
    },
    {
      label: 'Total users',
      value: totalUsers,
      additionalText: 'Connect with a growing community of users.',
      icon: FaUsers,
    },
    {
      label: 'Total news',
      value: totalNews,
      additionalText: 'Stay informed with a wide range of news articles.',
      icon: FaRegNewspaper,
    },
    {
      label: `Today's views`,
      value: todayViews,
      additionalText: "Stay in the loop with today's views!",
      icon: MdOutlineToday,
    },
  ];
};
